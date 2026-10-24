---
version: alpha
name: Trustworthy Japanese Finance & Insurance LP Pattern
description: 白地に淡いブルーグレーの帯を交互に敷き、濃紺を見出し・帯・枠に一貫して使う、落ち着いた金融系 LP の型。主 CTA だけオレンジのピル型ボタンにして目立たせる。数字は大きく単位は小さく添え、※注釈は小さいグレー文字で必ず付ける。影はほとんど付けず、白カード・線画イラスト・細い枠線で情報を整理する。誠実さと分かりやすさを両立させる。
colors:
  primary: '#0B4C97'
  on-primary: '#F2F8FE'
  background: '#FDFDFD'
  background-alt: '#EDF3F5'
  surface: '#FBFBFB'
  tint-1: '#E2EFF9'
  tint-2: '#F4EEDA'
  secondary: '#3684C4'
  cta: '#F86714'
  on-cta: '#FDFCFB'
  accent-1: '#D0191B'
  accent-2: '#EEB02D'
  text: '#222222'
  text-muted: '#656666'
  line: '#D3DDE3'
  dark-section: '#112F62'
  cta-accessible: '#C94D06'
typography:
  display:
    fontFamily: Zen Kaku Gothic New
    fontSize: 36px
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Noto Sans JP
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.025em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.02em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
  accent:
    fontFamily: Montserrat
    fontSize: 25px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.01em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.05em
rounded:
  sm: 4px
  md: 10px
  lg: 16px
  full: 999px
spacing:
  unit: 8px
  card: 16px
  section: 60px
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
  button-secondary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 44px
  button-outline:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 44px
  section-heading:
    textColor: '{colors.primary}'
    typography: '{typography.headline-lg}'
    height: 72px
  point-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.lg}'
    height: 420px
  step-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 200px
  number-highlight:
    textColor: '{colors.accent-1}'
    typography: '{typography.accent}'
    height: 80px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 60px
  faq-item:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    height: 60px
  note-text:
    textColor: '{colors.text-muted}'
    typography: '{typography.note}'
    height: 16px
---

# DESIGN.md — 金融・保険の信頼・誠実な LP の型（Trustworthy Japanese Finance & Insurance LP Pattern）

designmark が、金融・保険・主な雰囲気「信頼・誠実」の LP の設計書 29 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 金融・保険 ／ **雰囲気**: 信頼・誠実、情報量多め・訴求型、清潔・爽やか
- **キーワード**: 濃紺の見出し・白カード・線画イラスト・オレンジCTA・注釈多め・数字訴求
- **地の質感**: グラデーションをほぼ使わないフラットな単色面。白と淡いブルーグレーの面を交互に置き、影はごく弱いか付けない。
- **形**: カードは角丸 10px 前後、ボタンはピル型。番号やアイコンは正円の台座に置き、セクション境界は基本は直線で、悩みの直後だけ下向きの V 字にする。
- **温度感**: やや涼しめ。濃紺と淡い水色で落ち着かせ、CTA のオレンジと数字の赤で温かさと高揚感を少し足す。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#0B4C97` | ブランドの濃紺（見出し・帯・番号・サブボタン） | 6% | 集計の代表色 |
| `on-primary` | `#F2F8FE` | 濃紺の面に載せる白文字 | 1% | 集計の代表色 |
| `background` | `#FDFDFD` | ページの地色（ほぼ白） | 36% | 集計の代表色 |
| `background-alt` | `#EDF3F5` | セクションを交互に切り替える淡いブルーグレーの地 | 10% | 集計の代表色 |
| `surface` | `#FBFBFB` | 色付きの地に載せる白カード | 6% | 集計の代表色 |
| `tint-1` | `#E2EFF9` | 図解・イラスト背景の淡い水色の面 | 6% | 集計の代表色 |
| `tint-2` | `#F4EEDA` | 比較・例示パネルの淡いクリーム | 4% | 集計の代表色 |
| `secondary` | `#3684C4` | サブの青（プラン区分・アイコンの塗り） | 3% | 集計の代表色 |
| `cta` | `#F86714` | 主 CTA ボタンのオレンジ | 1% | 集計の代表色 |
| `on-cta` | `#FDFCFB` | CTA ボタン上の白文字 | 0% | 集計の代表色 |
| `accent-1` | `#D0191B` | 金額・還元率など強調数字の赤 | 1% | 集計の代表色 |
| `accent-2` | `#EEB02D` | 特典バッジ・POINT 丸の山吹 | 1% | 集計の代表色 |
| `text` | `#222222` | 見出し・本文の濃いグレー | 2% | 集計の代表色 |
| `text-muted` | `#656666` | ※注釈・補足のグレー文字 | 1% | 集計の代表色 |
| `line` | `#D3DDE3` | カード枠・区切り線の淡いグレー | 0% | 集計の代表色 |
| `dark-section` | `#112F62` | フッター・締めの帯の深い濃紺 | 3% | 集計の代表色 |
| `cta-accessible` | `#C94D06` | AA を満たす補正値（計算） |  | 計算 |

- 地は白を基本にし、セクションごとに淡いブルーグレー（background-alt）と交互に切り替えて章を区切る。
- 濃紺（primary）は見出し・見出し帯・番号バッジ・サブボタン・FAQ の Q に一貫して使い、ブランドの軸にする。
- オレンジ（cta）は主 CTA ボタンだけに使い、ほかの要素には流用しない。
- 赤（accent-1）は金額・還元率・％などの数字と注意書きに絞る。面の塗りには使わない。
- 山吹（accent-2）は特典バッジや POINT 番号などの小さい面に留め、全体の 5% 以下にする。
- 白カードは淡い水色やブルーグレーの地に載せ、影ではなく地との色の差で浮かせる。
- 注釈は text-muted のグレーで小さく、本文と色の差を付ける。
- フッターは濃紺（dark-section）の面に白文字にして、ページを引き締めて終える。
- `button-primary` は文字 `#FDFCFB` × 背景 `#F86714` のコントラスト比が 2.95:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#C94D06`、4.51:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FV のメインコピー | ゴシック | Zen Kaku Gothic New | 900 | 36px | 1.3 | 0.02em |
| `headline-lg` | セクション見出し・実績数字 | ゴシック | Noto Sans JP | 700 | 24px | 1.4 | 0.03em |
| `headline-md` | カード見出し・小見出し | ゴシック | Noto Sans JP | 700 | 19px | 1.4 | 0.03em |
| `headline-sm` | ステップ名・FAQ の質問・ケース名 | ゴシック | Noto Sans JP | 700 | 15px | 1.5 | 0.025em |
| `body-md` | 本文・説明文 | ゴシック | Noto Sans JP | 400 | 13px | 1.75 | 0.02em |
| `note` | ※注釈・期間や条件の補足 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.0em |
| `accent` | 英字ラベル（POINT・STEP・REASON）と金額・％の数字 | 欧文サンセリフ | Montserrat | 700 | 25px | 1.2 | 0.01em |
| `label-button` | CTA・サブボタンの文字 | ゴシック | Noto Sans JP | 700 | 15px | 1.3 | 0.05em |

- 和文は見出しも本文もゴシックで統一し、明朝や手書き書体は使わない。
- セクション見出しは太字で中央揃えにし、2 行以内に収めて、意味の切れ目で改行する。
- 見出しの上には欧文サンセリフの小さい英字ラベル（POINT / STEP / FAQ など）を添える。
- 金額・％は数字を大きく欧文で組み、「円」「%」などの単位は数字の 40〜50% の大きさで添える。
- 注釈は ※1 のように番号を付け、10px のグレー文字で対象の本文のすぐ下に置く。省略しない。
- 本文は左寄せが基本。導入文と CTA まわりの短い説明だけ中央寄せにする。
- CTA の上には、斜線で挟んだ短い誘導文（＼ 〜 ／）を置く。
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム（ステップや比較だけ 2〜3 列の小さいカードにすることがある）
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 60px、基本単位 8px、カード内 16px（375px 幅換算）
- セクションの上下に 56〜72px の余白を取り、全幅の色帯でセクションを区切る。
- 中身は中央寄せの白カードや角丸パネルに収め、色付きの地の上に左右 12〜16px の余白を空けて置く。
- カード同士の間隔は 16〜24px（8 の倍数）にする。
- 主 CTA は本文幅いっぱいの横長にして中央に置き、FV の直後・中盤・FAQ の前で繰り返す。
- ステップや条件は番号付きのカードを縦に積み、カードの間を下向きの三角か矢印でつなぐ。
- よくある質問はアコーディオンにして、ページの末尾近くにまとめる。

## Elevation & Depth

- 基本はフラット。カードには影を付けず、1px の淡いグレー枠か地との色の差で階層を表す。
- 主 CTA だけに弱い影（0 2px 4px rgba(0,0,0,.15)）を付け、押せることを示す。
- アコーディオンや FAQ 行は影なしにして、下線か枠で区切る。
- 強いドロップシャドウや立体的なグラデーションは使わない。

## Shapes

- **角丸**: 小 4px ／ 中 10px ／ 大 16px。ボタンはピル型。
- **写真の切り抜き**: アイコンは淡い色の正円の台座に線画で載せる。図解やアプリ画面は角丸の白パネルに入れ、人物は切り抜いて明るい地に重ねる。
- **セクション境界**: 基本は直線。悩みの提起の下端だけ中央が尖った下向きの V 字にして、解決のセクションへ視線をつなぐ。
- 主 CTA・サブボタンはピル型にし、右端に丸で囲んだ矢印を付ける。
- 番号バッジ・Q マークは濃紺の正円にする。
- 見出しラベルや特典タグは角丸 4px 以下の小さい矩形にする。
- カードは角丸 10px、大きな POINT パネルや吹き出しは角丸 16px にする。
- 吹き出しには小さな尾を付け、人物イラストの方へ向ける。

## Components

- **主 CTA ボタン**（`button-primary`）: オレンジ地に白い太字のピル型ボタン。右端に白丸で囲んだ矢印を付け、上に斜線で挟んだ短い誘導文、下に※補足を小さく添える。
- **サブボタン**（`button-secondary`）: 濃紺地に白文字のピル型。試算・詳細・一覧などの二次導線に使う。
- **枠線ボタン**（`button-outline`）: 白地に濃紺の 1.5px 枠と濃紺文字のピル型。右に濃紺丸の矢印を付け、外部リンクや問い合わせに使う。
- **英字ラベル付き見出し**（`section-heading`）: 上に欧文の小さな英字ラベル（濃紺）、その下に中央揃えの太字見出し。重要な語の下に短い黄色のマーカー線を引くことがある。
- **番号付き POINT カード**（`point-card`）: 淡い水色の地に載せた白い角丸カード。上辺の中央に濃紺の番号丸をかぶせ、見出し・本文・淡いクリームの例示パネルの順に積む。
- **ステップカード**（`step-card`）: 白カードに STEP 番号・見出し・短い説明・線画アイコンを入れる。カードの間は濃紺の下向き三角でつなぐ。
- **数字訴求ブロック**（`number-highlight`）: 実績・金額・還元率を赤の大きな欧文数字で見せ、単位は小さく、右肩に注釈番号を付ける。下に※注釈を添える。
- **悩みの吹き出し**（`speech-bubble`）: 白い角丸の吹き出しに細いグレー枠と尾を付け、話し言葉の悩みを入れる。横に線画の人物イラストを置く。
- **FAQ アコーディオン**（`faq-item`）: 先頭に濃紺の丸い Q、太字の質問、右端に＋。開くと A と回答本文を出し、項目の間は淡いグレーの下線で区切る。
- **注釈**（`note-text`）: ※番号付きの小さいグレー文字。対象の本文やボタンのすぐ下にまとめて置く。

## Do's and Don'ts

**Do**
- 濃紺を見出し・帯・番号・サブボタン・FAQ の Q に一貫して使う。
- 主 CTA はオレンジのピル型にして、FV 直後・中盤・FAQ 前で同じ形を繰り返す。
- 数字は大きな太字で見せ、単位は小さく、注釈番号と※注釈を必ず添える。
- 白と淡いブルーグレーの地を交互に使ってセクションを分ける。
- イラストは一定の太さの線画に、紺・水色・山吹のフラットな塗りで統一する。
- 白カードは色付きの地に載せ、枠線か色の差で区切る。

**Don't**
- オレンジを CTA 以外の帯や本文に使わない。
- 赤や山吹を広い面の塗りに使わない。
- 明朝や手書き書体を見出しに混ぜない。
- 強いドロップシャドウや立体的なボタン装飾を付けない。
- 注釈を省いたり、本文と同じ大きさにしたりしない。
- 紺・オレンジ・赤・山吹以外の強い色を増やさない。

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ヘッダー**（サービス名を明示し、申込・相談への入口を常に見せる）: 白地に左ロゴ、右に小さなオレンジか濃紺のピル型ボタン。高さは 56px 前後で、下に淡いグレーの線を引く。
2. **ファーストビュー**（手軽さと実績を一目で伝え、すぐ申込に進ませる）: 淡い水色の地に濃紺の極太コピーを 2〜3 行で置き、実績数字を赤で大きく見せる。人物の切り抜きか線画イラストを添え、直下に主 CTA と※注釈を置く。
3. **悩みの提起**（お金や将来への不安に共感する）: ブルーグレーの地に、話し言葉の悩みを入れた白い吹き出しを 3〜4 個、悩む人物の線画の周りに並べる。下端を V 字に切って次の章へつなぐ。
4. **特長**（サービスのメリットを具体的に伝える）: 白地に英字ラベル付きの見出し。線画アイコンを円の台座に載せた白カードを縦に並べ、重要な数字だけ赤にする。
5. **選ばれる理由**（強みと専門性を 3 つに絞って示す）: 淡い水色の地に番号付き POINT カードを 3 枚縦に積む。上辺中央に濃紺の番号丸、中に見出し・本文・クリームの例示パネルを入れる。
6. **CTA**（見積り・相談・申込へ誘導する）: 斜線で挟んだ誘導文、本文幅いっぱいのオレンジのピル型ボタン、その下に濃紺枠のサブボタンと※注釈を置く。
7. **お客様の声**（利用者の評価や効果で信頼を得る）: ブルーグレーの地に白カードを並べ、簡略な人物イラスト・属性・本文を入れる。効果の数字は赤の太字にする。
8. **よくある質問**（申込前に残る疑問を解消する）: 白地に Q の丸付きアコーディオンを下線で区切って並べる。最後に主 CTA をもう一度置く。
9. **フッター**（会社情報・法定表示・関連リンクを示す）: 濃紺の面に白文字で、リンク・登録番号などの法定表示・コピーライトを小さく並べる。

## Imagery

- 人物は一定の太さの線画イラストにし、顔は簡略に描く。服は紺・水色を主に、山吹を少し差す。
- アイコンは細い線画で、淡いグレーか淡い水色の正円の台座に載せる。
- 建物・コイン・電卓などはアイソメトリック風のフラットイラストにし、一部だけ青で塗る。
- 写真を使う場合は、明るい白背景の切り抜き人物か、自然光の室内でスマホや書類を扱う手元にする。
- アプリ画面や図表は角丸の白パネルや端末モックに入れて見せる。
- 写真を背景いっぱいに敷かず、装飾はドット柄など控えめなものだけにする。
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC はコンテンツを中央の最大幅 900〜960px に収め、背景の色帯だけ全幅に延ばす。
- PC の FV は左にコピーと CTA、右に人物やイラストを置く 2 カラムにする。
- POINT・ステップ・特長カードは、PC では 3 列の横並びにする。
- お客様の声は PC で 3 列のカードにする。
- FAQ と注釈は PC でも 1 カラムのまま、幅 720px 程度に抑えて読みやすくする。
- CTA ボタンは PC では幅 360〜420px に固定して中央に置く。

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

- **ID**: `pk-finance-trust`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「金融・保険」・主な雰囲気「信頼・誠実」の設計書 29 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-finance-trust/
