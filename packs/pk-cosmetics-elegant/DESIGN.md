---
version: alpha
name: Refined Japanese Skincare LP Pattern
description: 白に近い地と淡いグレージュ・生成りの地をセクションごとに切り替え、くすみローズと金茶を少しだけ差し色にする静かな配色。見出しは細めの明朝、本文は小さめのゴシックで行間を広くとり、余白を多めにして透明感と品の良さを出す。強い影や原色は使わず、細い罫線、円形の切り抜き、欧文セリフの飾り文字で高級感を表す。
colors:
  background: '#FBFCFB'
  background-alt: '#F4F3F2'
  tint-1: '#F4F0E5'
  surface: '#F9F9F8'
  primary: '#C69291'
  accent-1: '#AD9278'
  accent-2: '#B39253'
  text: '#373535'
  text-muted: '#787878'
  line: '#CAC5BF'
  cta: '#0A0706'
  on-cta: '#FCFCFB'
  dark-section: '#393838'
  on-dark: '#FAFAF9'
  accent-1-accessible: '#8A6E54'
  primary-accessible: '#AA5D5B'
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Noto Serif JP
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Noto Serif JP
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Noto Serif JP
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0.05em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0.04em
  note:
    fontFamily: Noto Sans JP
    fontSize: 9px
    fontWeight: 400
    lineHeight: 1.6
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.06em
  accent:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.02em
rounded:
  sm: 4px
  md: 8px
  lg: 18px
  full: 999px
spacing:
  unit: 8px
  card: 20px
  section: 64px
components:
  page:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
  heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
  button-primary:
    backgroundColor: '{colors.cta}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 52px
  button-outline:
    backgroundColor: '{colors.background}'
    textColor: '{colors.accent-1}'
    typography: '{typography.label-button}'
    height: 40px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 96px
  label-band:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    height: 32px
  point-number:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-dark}'
    typography: '{typography.accent}'
    rounded: '{rounded.full}'
    height: 56px
  badge-circle:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 100px
  check-list:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 44px
  ingredient-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 280px
  voice-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 260px
  faq-item:
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 56px
---

# DESIGN.md — 化粧品の上品・高級な LP の型（Refined Japanese Skincare LP Pattern）

designmark が、化粧品・スキンケア・主な雰囲気「上品・高級」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 化粧品・スキンケア ／ **雰囲気**: 上品・高級、やさしい・柔らかい、清潔・爽やか、シンプル・ミニマル
- **キーワード**: 明朝見出し・透明感・余白多め・生成り・くすみローズ・シャンパンゴールド
- **地の質感**: マットな白と生成りの面が基本。要所だけ淡い光のグラデーション、水滴や泡のボケ、パールのような淡い光沢を重ねる。ざらつきや強い光沢は付けない。
- **形**: 角丸の小さい矩形と細い罫線が中心。人物や成分の写真は正円や大きな円弧で切り抜き、ボタンだけは細いピル型にする。
- **温度感**: やや暖かいニュートラル。白とグレージュを軸に、ローズと金茶で温かみを足す。悩みのパートだけ寒色グレーにして温度を下げる。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FBFCFB` | ページ全体の基本の白地 | 30% | 集計の代表色 |
| `background-alt` | `#F4F3F2` | 特長・FAQなどセクションを切り替える淡いグレージュの地 | 12% | 集計の代表色 |
| `tint-1` | `#F4F0E5` | ストーリーや価格セクションを包む生成りの地 | 5% | 集計の代表色 |
| `surface` | `#F9F9F8` | カード・白パネルの面 | 7% | 集計の代表色 |
| `primary` | `#C69291` | ブランドを表すくすみローズ（ラベル帯・番号・強調） | 6% | 集計の代表色 |
| `accent-1` | `#AD9278` | 金茶ベージュの英字ラベル・細い罫線・装飾 | 2% | 集計の代表色 |
| `accent-2` | `#B39253` | シャンパンゴールドのバッジ枠・数字の強調 | 1% | 集計の代表色 |
| `text` | `#373535` | 見出し・本文の濃いグレー（純黒は避ける） | 2% | 集計の代表色 |
| `text-muted` | `#787878` | 英字サブ見出し・注釈の薄いグレー | 1% | 集計の代表色 |
| `line` | `#CAC5BF` | 見出し下・カード枠・アコーディオンの細い罫線 | 0% | 集計の代表色 |
| `cta` | `#0A0706` | 購入ボタンの墨色の面 | 1% | 集計の代表色 |
| `on-cta` | `#FCFCFB` | 購入ボタン上の白文字 | 0% | 集計の代表色 |
| `dark-section` | `#393838` | 成分解説・悩みの帯に使う濃いチャコールの地 | 5% | 集計の代表色 |
| `on-dark` | `#FAFAF9` | 濃い地の上の白文字 | 1% | 集計の代表色 |
| `accent-1-accessible` | `#8A6E54` | AA を満たす補正値（計算） |  | 計算 |
| `primary-accessible` | `#AA5D5B` | AA を満たす補正値（計算） |  | 計算 |

- 地は白を基本にし、淡いグレージュと生成りをセクションごとに交互に入れて区切る。原色の面は大きく塗らない。
- くすみローズ（primary）はラベル帯・ポイント番号・見出し中のキーワードなど小さな面に限って使い、面積は全体の 1 割以下にする。
- 金茶・シャンパンゴールドは英字ラベル、細い罫線、バッジの枠、価格の数字にだけ使う。広い面にはごく淡いグラデーションでしか敷かない。
- 見出しや本文の文字は純黒を避け、濃いグレー（#373535）にする。注釈と英字サブは薄いグレーにする。
- 濃いチャコールの地は成分解説や悩みの帯など 1〜2 か所に絞り、続けて置かない。上の文字は白にする。
- 購入ボタンは墨色か濃い色に白文字の控えめな配色にする。赤やビビッドなピンクのボタンにはしない。
- `button-outline` は文字 `#AD9278` × 背景 `#FBFCFB` のコントラスト比が 2.85:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-1-accessible`（`#8A6E54`、4.6:1）を使う。
- `label-band` は文字 `#FAFAF9` × 背景 `#C69291` のコントラスト比が 2.54:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#AA5D5B`、4.54:1）を使う。
- `point-number` は文字 `#FAFAF9` × 背景 `#C69291` のコントラスト比が 2.54:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#AA5D5B`、4.54:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューと締めの大コピー | 明朝 | Shippori Mincho | 500 | 40px | 1.2 | 0.05em |
| `headline-lg` | セクション見出し | 明朝 | Noto Serif JP | 500 | 28px | 1.4 | 0.05em |
| `headline-md` | カード見出し・小見出し・強調数字 | 明朝 | Noto Serif JP | 500 | 20px | 1.5 | 0.05em |
| `headline-sm` | 帯ラベル・成分名・カード内の小見出し | ゴシック | Noto Sans JP | 700 | 16px | 1.5 | 0.05em |
| `body-lg` | コンセプトのリード文・中央揃えのストーリー文 | 明朝 | Noto Serif JP | 400 | 15px | 1.9 | 0.05em |
| `body-md` | 説明本文 | ゴシック | Noto Sans JP | 400 | 13px | 1.9 | 0.04em |
| `note` | ※付きの注釈・カード内の属性 | ゴシック | Noto Sans JP | 400 | 9px | 1.6 | 0.0em |
| `label-button` | 購入ボタン・アコーディオンの文字 | ゴシック | Noto Sans JP | 700 | 15px | 1.3 | 0.06em |
| `accent` | 見出しに添える英字ラベル・Point などの飾り文字・価格数字 | 欧文セリフ | Playfair Display | 400 | 22px | 1.2 | 0.02em |

- 気持ちに訴える見出しは明朝、説明文はゴシックに分ける。見出しを太いゴシックだけで作らない。
- セクション見出しは中央揃えで 2〜3 行に区切り、近くに金茶か薄いグレーの小さな英字ラベルを添える。
- 本文は 13px 前後の小さめにして、行間 1.9〜2.0 でゆったり組む。1 行は短めに改行する。
- 見出しの中で強調する語は、1 段大きくしてローズか金にする。強調は 1 行に 1 か所までにする。
- 注釈は ※ や番号付きの 9〜10px で、該当ブロックの直下か各セクションの末尾に必ず置く。
- 太字はボタン・帯ラベル・小見出しだけに使い、本文では使わない。
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。実績バッジや価格チップだけ 2〜3 列
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- セクションは全幅の背景色で区切り、中身は左右 16〜24px の余白で置く。
- 写真はほぼ全幅に置き、その上か下に見出しを重ねたビジュアルブロックを続ける。
- 特長は「番号 → 見出し → 2〜3 行の説明 → 写真 → 注釈」の順をくり返す。
- 1 画面の情報量を絞り、セクションの間は 64px 前後あける。
- 白カードは左右に少し余白を残して置き、背景の地色や質感が見えるようにする。
- FAQ は細線で区切ったアコーディオンを縦に並べる。

## Elevation & Depth

- 基本はフラットにし、奥行きは地の色の濃淡と細い罫線で表す。
- 商品の切り抜き写真にだけ、床に落ちる柔らかい影を付ける。
- カードに影を付けるときは、ぼかしの大きいごく薄い影にとどめる。
- 成分の円写真には白い縁と淡い光彩を付けて浮かせる。
- 強いドロップシャドウや立体的なボタンは使わない。

## Shapes

- **角丸**: 小 4px ／ 中 8px ／ 大 18px。ボタンはピル型。
- **写真の切り抜き**: 商品は切り抜いて配置する。人物は全幅の矩形か大きな円弧で裁ち落とし、成分・使い方の写真は小さな正円にする。
- **セクション境界**: 基本は直線で地の色を切り替える。要所だけ下向きの小さな V 字や、上の角を大きく丸めた白パネルの重ねで流れをつくる。
- カード・ラベル帯・枠は角丸 0〜8px の矩形にする。
- 主 CTA は高さ 52px 前後の細身のピル型にし、右端に細い矢印を入れる。
- ポイント番号・実績バッジは正円にする。
- 枠線は 1px の細線にし、高級感を足したいときは金茶の二重線にする。
- 口コミカードやスライダーなど大きなパネルだけ 18px 前後の角丸にする。

## Components

- **購入ボタン**（`button-primary`）: 墨色の細身のピル型に白文字を広い字間で置く。右端に細い矢印、上に小さなオファー文言を添える。
- **サブボタン**（`button-outline`）: 白地に金茶の細い枠線と右矢印を付けた角のないボタン。読み物や商品一覧への誘導に使う。
- **英字ラベル付き見出し**（`section-heading`）: 欧文セリフの小さな英字ラベルを上に置き、明朝の見出しを中央揃えで組む。下に短い細線を引く。
- **ラベル帯**（`label-band`）: くすみローズの小さな矩形に白文字でキーワードを入れ、大見出しの上に乗せる。
- **ポイント番号**（`point-number`）: ローズの正円に小さな POINT と大きなセリフ体の数字を縦に重ねる。
- **円形の実績バッジ**（`badge-circle`）: 白地の正円を金の細線で囲み、明朝で短い数値の訴求と ※ 注釈を入れる。2〜3 個を横に並べる。
- **悩みのチェックリスト**（`check-list`）: 白いカードに細い線のチェックアイコンと悩みの短文を 3〜4 行並べ、行のあいだを細線で区切る。
- **成分カード**（`ingredient-card`）: 正円に切り抜いた成分写真、明朝の成分名、説明本文、注釈を縦に積む白いカード。
- **お客様の声カード**（`voice-card`）: 白い角丸カードに年代タグ、明朝の見出し、3 行ほどの本文、小さな注釈を入れる。縦に並べるかスライダーにする。
- **FAQ アコーディオン**（`faq-item`）: 先頭にセリフ体の Q、質問文、右端に細い＋を置き、上下を細線で区切る。

## Do's and Don'ts

**Do**
- 見出しは細めの明朝で大きく組み、字間と前後の余白を広くとる。
- 地の色は白・グレージュ・生成りの 3 段階で切り替え、セクションの区切りを色で見せる。
- 差し色のローズと金は小さな面と線に絞り、1 画面に 1〜2 か所までにする。
- 成分や人物の写真は正円や円弧で切り抜き、柔らかい光の入った写真を使う。
- 数値の実績は円形バッジに入れ、※ 注釈を必ず添える。
- 本文は小さめのゴシックで行間 1.9〜2.0 にし、短い行で改行する。

**Don't**
- 太いゴシックの見出しで押し出さない（価格まわりの数字は例外）。
- 赤や原色のビビッドな CTA・背景を使わない。
- 濃いドロップシャドウや太い枠線で重く見せない。
- 黒ベタや濃い色の面を広く、または続けて使わない。
- 丸ゴシックや大きな角丸のポップなボタン、イラストアイコンを多用しない。
- 成分写真を四角いまま詰めて並べない。

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（商品の世界観と価値を一目で伝える）: 淡い光のグラデーション地に商品の切り抜きかモデルの顔のアップを大きく置く。明朝の大コピーと英字のワードマーク、円形の実績バッジ、ピル型の購入ボタンを重ねる。
2. **コンセプト**（ブランドの考え方と世界観を伝える）: 生成りの地に英字ラベルと明朝の見出しを中央揃えで置き、明朝のリード文を短い行で中央揃えに組む。全幅の雰囲気写真を挟む。
3. **商品紹介**（商品の位置づけと中身を示す）: 白地に商品の切り抜きを柔らかい影付きで置き、ラベル帯・商品名・短い説明を縦に積む。
4. **オファー**（初回の価格を早めに示して購入へ導く）: 生成りのボックスに、打ち消し線の通常価格と大きなセリフ体の価格数字、特典の細い帯、購入ボタンを並べる。
5. **悩みの提起**（肌の悩みに共感し、原因を整理する）: やや寒色のグレーかチャコールの地に切り替え、白カードのチェックリストを置く。最後に下向きの V 字で解決パートへつなぐ。
6. **特長・成分**（商品の強みと成分の根拠を伝える）: グレージュの地でローズの POINT 番号、明朝の見出し、写真、説明、注釈をくり返す。成分は正円写真のカードで並べる。
7. **お客様の声**（使った人の実感で共感と信頼を得る）: 白地に角丸の口コミカードを縦に並べるかスライダーにする。年代タグと明朝の見出し、末尾に個人の感想である旨の注釈を入れる。
8. **使い方**（使う手順を示して使う場面を想像させる）: 番号付きの手順を正円の写真と短い文で縦に並べる。手順のあいだは細い線でつなぐ。
9. **キャンペーン**（特別価格と特典で購入を後押しする）: 生成りの地を金の細い二重線の枠で囲み、価格ブロックと購入ボタンを中央にまとめる。
10. **よくある質問**（購入前の不安を解消する）: グレージュの地に、細線で区切った Q のアコーディオンを縦に並べる。
11. **フッター**（ブランドの締めと企業情報）: 白地か濃いチャコールの地に英字のワードマーク、リンク、コピーライトを小さく中央揃えで置く。

## Imagery

- 商品は白〜淡いグレーのつやのある背景に立てるか斜めに置き、床への映り込みと柔らかい落ち影を付ける。
- 人物は黒髪で素肌感のあるモデルを自然光で撮り、顔や肌のアップでツヤを見せる。露骨な素肌は避け、部分を切り取る。
- 成分は白背景の植物の切り抜き、しずく、金色や透明な球体のマクロ写真で表す。
- 背景には水滴・泡・光のボケ・淡い霧のようなグラデーションを薄く敷き、透明感を出す。
- 飾りは細い金の線画や、薄く透かした欧文の大文字・筆記体にとどめ、イラストは多用しない。
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC 画像がない場合は、SP の縦長構成を中央 480〜600px 幅の 1 カラムで見せ、左右は淡いグレージュの地で埋める。
- 全幅レイアウトにするときは、本文の幅を 720〜960px に収めて中央揃えを保つ。
- PC では特長や使い方を写真と文章の左右 2 カラムにし、左右を交互に入れ替える。
- 円形の実績バッジや成分カードは PC で横に 3〜4 個並べる。
- CTA ボタンは幅 600px 程度を上限にし、横に広げすぎない。
- PC のヘッダーには英字のグローバルナビを横に並べる。

## Agent Prompt Guide

```text
この DESIGN.md に従って、[商品名] の LP を HTML/CSS で作ってください。
- 対象: [ターゲット]、目的: [EC 購入 / 資料請求 など]
- セクション構成は Page Structure の順に、内容は [自社の情報] に置き換える
- 色・書体・角丸・余白は YAML のトークンだけを使う（CSS 変数に展開してよい）
- 写真はプレースホルダーにし、他社の LP のロゴ・写真・コピーは使わない
- まず SP（375px）で組み、Responsive Behavior に沿って PC に広げる
```

Claude Code で使う場合は、プロジェクト直下に置き、CLAUDE.md に `@DESIGN.md` と 1 行書くと起動時に読み込まれる。

## Provenance

- **ID**: `pk-cosmetics-elegant`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「化粧品・スキンケア」・主な雰囲気「上品・高級」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-cosmetics-elegant/
