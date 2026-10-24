// Validate the pattern packs (runs in CI and locally): `node scripts/validate.mjs`
// 1. Lint every packs/*/DESIGN.md with the official CLI (npx @google/design.md@0.4.0 lint --format json).
//    Any finding with severity "error" fails.
// 2. Check catalog.json against packs/: every listed ID needs packs/<ID>/DESIGN.md and preview.png, no duplicate IDs,
//    and "count" must match. Folders that are not in catalog.json are retired packs (kept on purpose) and are only reported.
// 型パックの検査: 全 DESIGN.md を公式 CLI で lint し、error が 1 件でもあれば終了コード 1。catalog.json と packs/ の対応も確かめる。
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const packsDir = path.join(root, "packs");
const errors = [];
const dirs = fs.existsSync(packsDir)
  ? fs.readdirSync(packsDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort()
  : [];

// The package has two bin names: "design.md" and "designmd". Use "designmd": on Windows, "design.md" resolves to the
// extensionless shim and is opened by the .md file association instead of being executed.
const lint = (rel) => {
  let out = "";
  try {
    out = execFileSync("npx", ["--yes", "--package=@google/design.md@0.4.0", "designmd", "lint", "--format", "json", rel], {
      cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], shell: process.platform === "win32",
    });
  } catch (e) {
    out = e.stdout || ""; // the CLI may exit non-zero when it finds errors; read its JSON anyway
  }
  try {
    return JSON.parse(out);
  } catch {
    return null;
  }
};

for (const id of dirs) {
  const rel = `packs/${id}/DESIGN.md`;
  if (!fs.existsSync(path.join(root, rel))) {
    errors.push(`${id}: DESIGN.md is missing`);
    continue;
  }
  const result = lint(rel);
  if (!result) {
    errors.push(`${id}: could not read the lint output`);
    continue;
  }
  const findings = result.findings || [];
  const errs = findings.filter((f) => f.severity === "error");
  for (const f of errs) errors.push(`${id}: ${f.rule} ${f.path || ""} ${f.message}`);
  const warns = findings.filter((f) => f.severity === "warning").length;
  console.log(`${errs.length ? "NG" : "ok"} ${id} (errors ${errs.length}, warnings ${warns})`);
}

const catPath = path.join(root, "catalog.json");
if (fs.existsSync(catPath)) {
  const cat = JSON.parse(fs.readFileSync(catPath, "utf8"));
  const ids = (cat.packs || []).map((p) => p.id);
  if (cat.count !== ids.length) errors.push(`catalog.json: count ${cat.count} does not match ${ids.length} packs`);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) errors.push(`catalog.json: duplicate IDs ${[...new Set(dupes)].join(", ")}`);
  for (const id of ids) {
    if (!/^pk-[a-z0-9-]+$/.test(id)) errors.push(`catalog.json: invalid ID ${id}`);
    if (!dirs.includes(id)) errors.push(`catalog.json: packs/${id}/ is missing`);
    else if (!fs.existsSync(path.join(packsDir, id, "preview.png"))) errors.push(`${id}: preview.png is missing`);
  }
  const retired = dirs.filter((d) => !ids.includes(d));
  if (retired.length) console.log(`not in catalog.json (retired packs): ${retired.join(", ")}`);
} else if (dirs.length) {
  errors.push("catalog.json is missing");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`validate: ${dirs.length} pack folder(s) ok`);
