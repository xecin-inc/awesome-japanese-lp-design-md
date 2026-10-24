---
version: alpha
name: Fresh Clean Japanese Hair & Body Care LP Pattern
description: ほぼ白の地に淡い水色の帯を交互に敷き、アクアブルーをブランド色にした涼しげな縦長 LP。水滴・泡・水面の透明感あるビジュアルに白い角丸カードを重ね、影はごく薄くする。見出しは明朝か細めのゴシックで上品にまとめ、本文は青みのあるチャコールのゴシックを行間広めに組む。暖色は CTA の黄色と実績の金色など、ごく一部に限って使う。
colors:
  primary: '#33B0C0'
  background: '#F8FAFA'
  background-alt: '#EEF3F5'
  secondary: '#4CC1EF'
  surface: '#F7F7F7'
  tint-1: '#BDE2E9'
  text: '#282F34'
  text-body: '#565759'
  text-muted: '#828E9E'
  line: '#97CADA'
  cta: '#F7D40D'
  on-cta: '#1A1A1B'
  accent-1: '#539AB8'
  accent-2: '#B99A51'
  dark-section: '#0C2E5D'
  on-dark: '#FCFEFC'
  primary-accessible: '#257E8A'
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Zen Kaku Gothic New
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.08em
  headline-md:
    fontFamily: Zen Kaku Gothic New
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.08em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.045em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.02em
  accent:
    fontFamily: Montserrat
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.08em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.08em
rounded:
  sm: 4px
  md: 10px
  lg: 20px
  full: 999px
spacing:
  unit: 8px
  card: 20px
  section: 56px
components:
  page:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text-body}'
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
    textColor: '{colors.primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 44px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 80px
  point-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.md}'
    height: 340px
  point-number:
    backgroundColor: '{colors.background}'
    textColor: '{colors.primary}'
    typography: '{typography.accent}'
    rounded: '{rounded.full}'
    height: 56px
  worry-checklist:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 215px
  ingredient-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 110px
  bubble-badge:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.primary}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 96px
  product-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 360px
  faq-item:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 120px
---

# DESIGN.md — ヘアケア・ボディケアの清潔・爽やかな LP の型（Fresh Clean Japanese Hair & Body Care LP Pattern）

designmark が、ヘアケア・ボディケア・主な雰囲気「清潔・爽やか」の LP の設計書 22 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: ヘアケア・ボディケア ／ **雰囲気**: 清潔・爽やか、上品・高級、やさしい・柔らかい、情報量多め・訴求型
- **キーワード**: 透明感・水滴・泡・アクアブルー・白カード・水色グラデーション・成分訴求
- **地の質感**: 淡い水色から白へのグラデーション地に、水面・水滴・泡・氷の写真を薄く敷く。その上に白や半透明の白パネルを重ねて、ツヤのあるみずみずしさを出す。影はほとんど付けない。
- **形**: 中くらいの角丸カードとピル型のボタン、正円のバッジを中心にする。鋭い角や太い枠は避け、泡のような円形のモチーフを多めに使う。
- **温度感**: 寒色寄りで涼しい。生成りに近い白地と、黄色の CTA・金の実績表示で少しだけ温度を足し、冷たくなりすぎないようにする。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#33B0C0` | ブランドのアクアブルー（見出し・帯・欧文ラベル） | 6% | 合成 |
| `background` | `#F8FAFA` | ページの基本の白地 | 26% | 集計の代表色 |
| `background-alt` | `#EEF3F5` | セクションを交互に切り替える淡い水色グレーの地 | 12% | 集計の代表色 |
| `secondary` | `#4CC1EF` | FV の空色やグラデーション帯の明るい青 | 2% | 集計の代表色 |
| `surface` | `#F7F7F7` | 色の地に載せる白いカード・パネル | 6% | 集計の代表色 |
| `tint-1` | `#BDE2E9` | ラベル・表の見出し・成分パネルに使う淡い水色 | 6% | 集計の代表色 |
| `text` | `#282F34` | 見出しと本文の青みのあるチャコール | 3% | 集計の代表色 |
| `text-body` | `#565759` | 長い説明文のグレー | 2% | 集計の代表色 |
| `text-muted` | `#828E9E` | 注釈・英字の小見出しに使う青みのあるグレー | 1% | 集計の代表色 |
| `line` | `#97CADA` | 見出し下の細線・Q&A の区切り線 | 0% | 集計の代表色 |
| `cta` | `#F7D40D` | 購入ボタンの黄色 | 1% | 集計の代表色 |
| `on-cta` | `#1A1A1B` | 黄色ボタンの上の濃い文字 | 0% | 集計の代表色 |
| `accent-1` | `#539AB8` | 成分・数値を強調するスモーキーブルー | 2% | 集計の代表色 |
| `accent-2` | `#B99A51` | 受賞・実績を見せる金色 | 1% | 集計の代表色 |
| `dark-section` | `#0C2E5D` | 悩み提起・実績パートの濃紺の地 | 6% | 集計の代表色 |
| `on-dark` | `#FCFEFC` | 濃い地・色帯の上の白文字 | 1% | 集計の代表色 |
| `primary-accessible` | `#257E8A` | AA を満たす補正値（計算） |  | 計算 |

- 地は白（background）を基本にし、セクションごとに淡い水色グレー（background-alt）と交互に切り替える
- ブランドのアクアブルーは見出しの文字・見出し帯・欧文ラベル・番号に使い、広い面にはグラデーションの帯として使う
- 文字は純黒にせず、青みのあるチャコールとグレーの 2〜3 段階で組む
- 主 CTA の黄色はボタンだけに使い、ほかの装飾には使わない
- 金色は受賞・実績のブロック 1 か所だけに使う
- 濃い地（濃紺など）は悩み提起か実績のパートだけに使い、次のセクションで明るいグラデーションへ戻して『解決した』感じを出す
- 強調はキーワード 1 語だけ、アクアの文字色か淡い黄色のマーカーにする
- `button-outline` は文字 `#33B0C0` × 背景 `#F8FAFA` のコントラスト比が 2.47:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#257E8A`、4.53:1）を使う。
- `point-number` は文字 `#33B0C0` × 背景 `#F8FAFA` のコントラスト比が 2.47:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#257E8A`、4.53:1）を使う。
- `bubble-badge` は文字 `#33B0C0` × 背景 `#F7F7F7` のコントラスト比が 2.42:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#257E8A`、4.54:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FV のメインコピー・大きな数字コピー | 明朝 | Shippori Mincho | 500 | 40px | 1.25 | 0.02em |
| `headline-lg` | セクションの大見出し | ゴシック | Zen Kaku Gothic New | 700 | 26px | 1.4 | 0.08em |
| `headline-md` | 商品・特長のキャッチ（2 行程度） | ゴシック | Zen Kaku Gothic New | 700 | 20px | 1.5 | 0.08em |
| `headline-sm` | カード・帯の中の小見出し | ゴシック | Noto Sans JP | 700 | 16px | 1.4 | 0.05em |
| `body-md` | 説明の本文 | ゴシック | Noto Sans JP | 400 | 14px | 1.8 | 0.045em |
| `note` | 注釈・成分の詳細・出典 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.02em |
| `accent` | 欧文のセクションラベル・POINT 番号・％などの数字 | 欧文サンセリフ | Montserrat | 400 | 22px | 1.2 | 0.08em |
| `label-button` | CTA・ラベルの文字 | ゴシック | Noto Sans JP | 700 | 16px | 1.2 | 0.08em |

- 大見出しの上に、字間を広くとった細い欧文ラベル（Montserrat、アクア色）を小さく置いて 2 段にする
- FV や情緒的なコピーは明朝、説明的な見出しはゴシックと使い分ける
- 本文は 13〜14px の細めのゴシックで行間を 1.8 前後と広くとり、太字は要所だけにする
- 数字（％・回数・順位）は欧文サンセリフで大きくし、アクアか金で色を変える
- 注釈は ※ で始めて 10px で書き、カードやパネルの下端にまとめる
- 見出しは中央揃えを基本にし、コピーは短い 2〜3 行に分ける
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。成分・効果ラベルは 2〜3 列、商品は 2 列のグリッド
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 56px、基本単位 8px、カード内 20px（375px 幅換算）
- 左右に約 16〜24px の余白をとり、カードはその幅いっぱいに置く
- セクションは 背景色の切り替え＋上下 56px 前後の余白で区切る
- 特長は番号付きカードを縦に積み、各カードは 見出し帯→図解→本文 の順にする
- 成分カードは丸い素材写真と短い説明文を 2 列×2 段に並べる
- 購入ボックス（商品写真・価格・CTA）はページ内で 2〜3 回、同じ形で繰り返す
- 商品カードは 画像→名前→価格→ボタン の順に縦に積む

## Elevation & Depth

- 基本はフラットにし、奥行きは地の色と写真の差で出す
- 白カードには、薄く広い青灰色のぼかし影（0 4px 16px rgba(0,80,100,.08) 程度）だけを付ける
- 商品の切り抜き写真には、ごく薄い接地影を付けて地から少し浮かせる
- 泡の円形バッジは半透明の白と柔らかいハイライトで、水泡のように浮かせる
- CTA ボタンは下側に薄い影を 1 段だけ付ける

## Shapes

- **角丸**: 小 4px ／ 中 10px ／ 大 20px。ボタンはピル型。
- **写真の切り抜き**: 商品は白背景の切り抜きで置く。イメージ写真は全幅の長方形、成分の素材写真は正円か小さい角丸の四角にする
- **セクション境界**: 基本は直線で背景色を切り替え、写真やグラデーションで境界をぼかす。アクセントとして、ゆるい波線や下向きの三角を使ってもよい
- CTA は完全なピル型にする
- カードは 10〜20px の角丸にし、鋭い直角の枠は使わない
- 番号やバッジは正円にする（細い線の円か、塗りの円）
- タグ・ラベルはピル型か 4px の小さい角丸にする
- 水滴・泡を思わせる正円のモチーフを、背景の装飾として散らす

## Components

- **購入ボタン**（`button-primary`）: 黄色のピル型ボタン。濃い文字で短く書き、右に矢印かカートのアイコンを置く。下側に薄い影を付ける
- **詳細ボタン**（`button-outline`）: 白地に 1px のアクアの枠を付けたピル型。『詳しく見る』などのサブ導線に使う
- **2 段見出し**（`section-heading`）: 上に字間の広い欧文ラベル（アクア）、下に和文の大見出しを中央揃えで置き、その下に短い細線を引く
- **番号付き特長カード**（`point-card`）: 白い角丸カード。上部にアクアのグラデーション帯で POINT 番号と見出しを入れ、その下に図解と本文を置く
- **ポイント番号**（`point-number`）: 細い線の正円の中に、小さな『POINT』と大きな 2 桁の数字を欧文サンセリフで入れる
- **悩みチェックリスト**（`worry-checklist`）: 濃い地か淡い地の上に半透明の白パネルを置き、チェックアイコンと悩みの文を 4〜5 行並べる。悩みの語は色の帯で塗る
- **成分カード**（`ingredient-card`）: 左に丸い素材写真、右に成分名・淡い水色のピルラベル・説明文を置いた白カード
- **泡の円バッジ**（`bubble-badge`）: 半透明の白い正円の中に、特長や数字を 2〜3 行で入れる。3〜4 個を並べる
- **商品カード**（`product-card`）: 白い大きめの角丸カード。切り抜き商品写真・商品名・価格・購入ボタンを縦に積み、淡い水色の地の上に置く
- **Q&A 行**（`faq-item`）: アクアの Q と グレーの A を欧文で付け、質問と回答の下に水色の細い区切り線を引く

## Do's and Don'ts

**Do**
- 水面・水滴・泡・氷のビジュアルを背景に薄く敷き、透明感を保つ
- 白カードを淡い水色の地に浮かべ、区切りは地の色の差でつくる
- 効果の根拠は図解・数値・※の注釈と出典を添えて示す
- 数字の訴求は円形のバッジで大きく見せる
- キーワードは 1 語だけ、アクアの文字色か淡い黄色のマーカーで強調する
- 購入ボックスは同じ形でページ内に繰り返し置く

**Don't**
- 暖色や黒を広い面に使わない（悩みパートの濃い地は例外）
- 彩度の高い原色を背景に使わない
- 強い影・太い枠線・鋭い角を使わない
- 本文を太く大きくして、繊細な印象を崩さない
- 純黒の文字を使わない
- 1 画面に文字を詰め込みすぎない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（商品と、季節や髪・肌の悩みに効くことを一目で伝える）: 空や水面の明るいハイキー写真か水色グラデーションの地に、切り抜きの商品と明朝の大きなコピーを置く。泡の円バッジで特長を 3 つ添え、下に黄色のピル型 CTA を置く
2. **コンセプト**（商品が生まれた背景や使う場面を情緒的に伝える）: 白地に欧文ラベル＋明朝の見出し。短い文を行間広く中央揃えで置き、水滴やイメージ写真を全幅で挟む
3. **悩みの提起**（読み手の悩みに共感する）: 濃紺か暗めのグレージュの地に切り替え、半透明パネルのチェックリストで悩みを 4〜5 個並べる。下向きの三角で次のセクションへつなぐ
4. **原因の解説**（悩みが起きる仕組みを整理して説明する）: 淡い水色の地にアクアと白の平面イラストで断面図などを示し、原因を 2〜3 個に分けて番号を付ける
5. **特長**（商品の解決策を要点ごとに示す）: 番号付きの白い特長カードを縦に積む。各カードの上にアクアの帯見出し、中に図解・数値・注釈を入れる
6. **配合成分**（成分の根拠を示す）: 丸く切り抜いた素材写真の成分カードを 2 列×2 段に並べ、淡い水色のラベルで効果を添える
7. **使い方**（使う手順と量を伝える）: STEP 番号の円を細い縦線でつなぎ、右に短い説明と写真を置く
8. **お客様の声**（使った人の感想で信頼を得る）: 白い角丸カードに人物アイコンと星評価、短い感想を載せて縦に並べる。満足度の数字は円バッジで大きく見せる
9. **ラインナップ・購入**（香りや容量の違いを見せ、購入へ送る）: 淡い水色の地に白い商品カードを 2 列で並べ、価格と黄色のピル型 CTA を付ける
10. **よくある質問**（購入前の不安を解消する）: 白地に Q&A 行を並べ、水色の細線で区切る
11. **フッター**（ブランド情報と SNS への導線を置く）: グレーか濃い地に白文字でロゴ・SNS アイコン・注意書きを小さくまとめる

## Imagery

- 空や水面を背景にした、明るく露出高めのハイキー写真で清涼感を出す
- 水滴・泡・シャボン玉・氷・水しぶきの接写を、背景のテクスチャとして薄く重ねる
- 商品は白背景の切り抜きにし、自然な接地影だけを残す
- 成分は花・柑橘・海藻・水滴などの素材をアップで撮り、正円に切り抜く
- 図解はアクアと白を中心にした平面イラスト。アイコンは細い線の単色にする
- 人物は自然光の下で撮った 20〜30 代の生活のワンシーン。淡い青系の背景で柔らかく写す
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC 画像はないため、PC では中央に 480〜600px 幅のコンテンツ列を置くことを推奨する
- 中央の列の左右は、淡い水色グレーかグラデーションの地で埋める
- 背景の写真やグラデーションは画面幅いっぱいに広げ、本文だけを中央の列に収める
- 成分や効果のグリッドは SP で 2 列、PC で 3〜4 列に増やしてよい
- 図解やグラフは SP で横スクロールさせず、縦に収める

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

- **ID**: `pk-haircare-fresh`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「ヘアケア・ボディケア」・主な雰囲気「清潔・爽やか」の設計書 22 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-haircare-fresh/
