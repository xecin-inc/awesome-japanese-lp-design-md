---
version: alpha
name: Elegant Japanese Fashion Accessory LP Pattern
description: 生成りがかったオフホワイトの地に、グレージュ〜くすみモーヴの低彩度色を少しだけ重ねる、雑誌のようなLPの型。見出しは細い明朝体と細い欧文セリフ体、飾りに筆記体の英字を添える。太字や影は使わず、広い余白、細い罫線、写真の重なりだけで高級感と奥行きを出す。色の強さは商品写真にまかせ、UIの色は濃淡の差で階層をつける。
colors:
  background: '#FAF8F6'
  background-alt: '#F2F0EE'
  surface: '#F9F8F8'
  primary: '#C2AAA2'
  secondary: '#BBA39A'
  tint-1: '#F2E7E3'
  accent-1: '#CBA166'
  accent-2: '#B69CA0'
  dark-section: '#4A4949'
  on-dark: '#F9F6F4'
  text: '#3F3A38'
  text-body: '#5A5451'
  text-muted: '#908985'
  line: '#C9BDB4'
  primary-accessible: '#8D695D'
  text-muted-accessible: '#78716D'
  accent-2-accessible: '#8C676D'
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Shippori Mincho
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.08em
  headline-md:
    fontFamily: Noto Serif JP
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.08em
  headline-sm:
    fontFamily: Cormorant Garamond
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0.06em
  accent:
    fontFamily: Great Vibes
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.02em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0.06em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.06em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.03em
rounded:
  sm: 0px
  md: 8px
  lg: 36px
  full: 999px
spacing:
  unit: 8px
  card: 20px
  section: 72px
components:
  page:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
  heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
  button-primary:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.label-button}'
    height: 48px
  button-outline:
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    height: 32px
  heading-bilingual:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 80px
  point-number:
    textColor: '{colors.accent-1}'
    typography: '{typography.accent}'
    height: 64px
  circle-badge:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 84px
  pill-label:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 27px
  product-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 290px
  color-swatch:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text-muted}'
    typography: '{typography.note}'
    height: 120px
  before-after:
    backgroundColor: '{colors.accent-2}'
    textColor: '{colors.on-dark}'
    typography: '{typography.label-button}'
    height: 200px
  note-text:
    textColor: '{colors.text-muted}'
    typography: '{typography.note}'
    height: 16px
---

# DESIGN.md — ファッション小物の上品・高級なLPの型（Elegant Japanese Fashion Accessory LP Pattern）

designmark が、ファッション・アクセサリー・主な雰囲気「上品・高級」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: ファッション・アクセサリー ／ **雰囲気**: 上品・高級、やさしい・柔らかい、シンプル・ミニマル
- **キーワード**: 余白多め・エディトリアル・くすみモーヴ・グレージュ・細い欧文セリフ・ルックブック
- **地の質感**: 白〜生成りのマットな単色面が基本。グラデーションは白へ溶けるごく淡いものに限り、質感は自然光で撮った柔らかい写真と布地のアップで出す。光沢や影はつけない。
- **形**: 角のない長方形が基本。写真の一部だけを上部アーチ、縦長の楕円、片側の角だけ大きく丸めた形にして変化をつける。1px の細線の枠や細い縦線で区切る。
- **温度感**: やや暖かいニュートラル。グレージュとくすみピンクで、甘すぎない大人の落ち着きを出す。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FAF8F6` | ページの基本地（生成りがかったオフホワイト） | 30% | 集計の代表色 |
| `background-alt` | `#F2F0EE` | セクションを交互に切り替える淡いグレー地 | 12% | 集計の代表色 |
| `surface` | `#F9F8F8` | 白カード・テキスト帯・商品カード | 6% | 集計の代表色 |
| `primary` | `#C2AAA2` | ブランド色のグレージュモーヴ（ラベル・罫線・円バッジ） | 6% | 合成 |
| `secondary` | `#BBA39A` | 特集帯・セット紹介のくすみローズ面 | 4% | 集計の代表色 |
| `tint-1` | `#F2E7E3` | 写真背景・楕円写真内のピンクベージュ | 5% | 集計の代表色 |
| `accent-1` | `#CBA166` | 価格・番号・装飾線に使うくすんだ金 | 1% | 集計の代表色 |
| `accent-2` | `#B69CA0` | 強調語や比較ラベルのくすみモーヴ | 1% | 集計の代表色 |
| `dark-section` | `#4A4949` | 最終CTA帯・比較ラベル・主ボタンのチャコール | 4% | 集計の代表色 |
| `on-dark` | `#F9F6F4` | チャコール地や写真の上の白抜き文字 | 1% | 集計の代表色 |
| `text` | `#3F3A38` | 見出しの濃いブラウングレー（純黒は使わない） | 2% | 集計の代表色 |
| `text-body` | `#5A5451` | 本文の濃いグレー | 2% | 集計の代表色 |
| `text-muted` | `#908985` | 欧文サブコピー・注釈の薄いグレー | 0% | 集計の代表色 |
| `line` | `#C9BDB4` | アウトラインボタン・見出し枠・区切りの細線 | 0% | 集計の代表色 |
| `primary-accessible` | `#8D695D` | AA を満たす補正値（計算） |  | 計算 |
| `text-muted-accessible` | `#78716D` | AA を満たす補正値（計算） |  | 計算 |
| `accent-2-accessible` | `#8C676D` | AA を満たす補正値（計算） |  | 計算 |

- 地はオフホワイト（background）と淡いグレー（background-alt）をセクションごとに交互に敷き、境界線は引かずに色の切り替えで区切る
- 色の強さは商品写真にまかせる。UIの面は彩度の低いグレージュ・くすみモーヴの範囲に収める
- primary のモーヴはラベル・円バッジ・細い罫線など小さな面に限って使い、広い面には secondary か tint-1 を使う
- 価格の数字や番号の装飾には accent-1 の金を使う。1画面に1〜2か所までにする
- 文字は純黒にせず、text・text-body・text-muted の3段階の濃淡で階層をつける
- 主ボタンと最終CTA帯だけを dark-section のチャコールにして、ページの締まりを作る
- 原色・蛍光色・高彩度の赤は使わない。強調は色相ではなく濃淡で表す
- `circle-badge` は文字 `#F9F6F4` × 背景 `#C2AAA2` のコントラスト比が 2.04:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#8D695D`、4.53:1）を使う。
- `color-swatch` は文字 `#908985` × 背景 `#FAF8F6` のコントラスト比が 3.25:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `text-muted-accessible`（`#78716D`、4.52:1）を使う。
- `before-after` は文字 `#F9F6F4` × 背景 `#B69CA0` のコントラスト比が 2.37:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-2-accessible`（`#8C676D`、4.56:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューのキャッチ（縦書きも可） | 明朝 | Shippori Mincho | 400 | 44px | 1.12 | 0.02em |
| `headline-lg` | セクションの大見出し（和文明朝または欧文セリフ） | 明朝 | Shippori Mincho | 500 | 30px | 1.3 | 0.08em |
| `headline-md` | 特長・カード・ポイントの小見出し | 明朝 | Noto Serif JP | 500 | 22px | 1.5 | 0.08em |
| `headline-sm` | 見出し上の欧文ラベル・特長ラベル | 欧文セリフ | Cormorant Garamond | 500 | 17px | 1.45 | 0.06em |
| `accent` | 筆記体の飾り英字・大きな価格や番号 | 欧文スクリプト | Great Vibes | 400 | 26px | 1.2 | 0.02em |
| `body-md` | 本文・説明文・お客様の声 | ゴシック | Noto Sans JP | 400 | 13px | 1.9 | 0.06em |
| `label-button` | ボタン・ピルラベル・帯ラベル | ゴシック | Noto Sans JP | 500 | 13px | 1.2 | 0.06em |
| `note` | 注釈・時点表記・クレジット | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.03em |

- 見出しは細い明朝体、本文は細めのゴシック体にする
- 和文見出しの上か下に、細い欧文セリフ体か筆記体の英字を必ず添えて2段で組む
- 太字は使わない。階層は文字の大きさと字間で作る
- 見出しは字間を0.08em前後まで広げ、短い行で改行して静かに見せる
- 価格は欧文セリフ体の大きな細い数字にし、通貨記号と税込表記は小さく添える
- 番号は01〜04の細い欧文セリフ体にし、小さな英字を添える
- 注釈は小さなゴシック体で必ず添え、色は text-muted にする
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。カラー見本やBefore/After比較だけ 2〜3 列
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 72px、基本単位 8px、カード内 20px（375px 幅換算）
- 余白は広くとり、1画面の情報は写真1点＋見出し＋短い本文程度にとどめる
- 写真は全幅か左右どちらかの端に寄せ、反対側に余白とテキストを置く
- 本文は中央揃えか左揃えの短いブロックにし、1行を短く改行する
- 特長は「番号→写真→欧文ラベル→和文見出し→2〜3行の説明」の同じ形でくり返す
- 写真同士の間は24〜48pxあけ、要素の間隔は8pxの倍数でそろえる

## Elevation & Depth

- 影は基本的に使わず、フラットに仕上げる
- 奥行きは、写真・色面・欧文の透かし文字を少しずらして重ねることで出す
- 白カードを浮かせたいときは、影の代わりに1pxの細枠か、ずらして敷いた淡い色面を使う

## Shapes

- **角丸**: 小 0px ／ 中 8px ／ 大 36px。ボタンは角丸の長方形。
- **写真の切り抜き**: 長方形の角なしが基本。アクセントとして上部アーチ、縦長の楕円、片側の角だけ大きく丸めた形、素材アップの円形を混ぜる
- **セクション境界**: 直線で地の色を切り替え、細い縦線と余白で区切る。必要なら白へ溶けるごく淡いグラデーションを使う
- ボタン・カード・ラベル帯は角丸0の長方形にする
- ピル型は小さな分類ラベルだけに使い、濃い色で塗らない
- 番号や特長は細線の正円で囲む
- 写真には1pxの細い枠を重ねて額縁のように見せてもよい
- 大きな角丸（36px）は写真の一角かアーチだけに使い、UI部品には使わない

## Components

- **主CTAボタン**（`button-primary`）: 幅約80%の角なしの長方形。チャコールの面に白文字を中央に置き、右端に細い矢印を添える。字間を広げる
- **アウトラインのサブボタン**（`button-outline`）: 透明な面に1pxのグレージュ枠と濃いグレーの文字。商品カードの「CHECK」や一覧への誘導に使う小さな長方形
- **和欧2段見出し**（`heading-bilingual`）: 上に細い欧文セリフか筆記体の英字を薄い色で、下に明朝の和文見出しを置く。間に短い細線を入れて中央揃えにする
- **特長の番号**（`point-number`）: 細い欧文セリフの大きな01〜04を写真の左上に一部重ね、横に小さな英字ラベルを添える
- **特長の円バッジ**（`circle-badge`）: くすみモーヴの正円に白い明朝で短いキーワードを2行入れる。FVや特長のまとめで2〜3個並べる
- **細枠のピルラベル**（`pill-label`）: 白い面に細いグレー枠のピル型。セクション名やタイプ名などの分類に使う
- **商品カード**（`product-card`）: 白い面に商品写真、商品名、欧文セリフの価格、色の丸い見本、アウトラインボタンを中央揃えで縦に並べる
- **カラー見本**（`color-swatch`）: 色違いの商品写真か楕円に切り抜いた生地を3列に並べ、下に英字の色名を小さく添える
- **着用比較パネル**（`before-after`）: 2枚の写真をすき間なく横に並べ、下に細い帯の英字ラベルを付ける。Before はグレージュ、After はモーヴ
- **注釈**（`note-text`）: 数値や効果の表記のそばに、小さな薄いグレーのゴシックで条件や時点を添える

## Do's and Don'ts

**Do**
- 和文の明朝見出しには、細い欧文セリフか筆記体の英字を必ず組み合わせる
- 写真は大きく使い、まわりに十分な余白をとる
- 地はオフホワイトと淡いグレーを交互に敷き、色数は絞る
- 価格と番号は欧文セリフの大きな細い数字にし、金色で上品に強調する
- 特長やシリーズ紹介は同じ構成をくり返し、雑誌のようなリズムを作る
- 数値や効果の表記には注釈を小さく必ず添える

**Don't**
- 太いゴシックの見出しや、煽る装飾を入れない
- 原色・蛍光色・ビビッドな赤のCTAを使わない
- 角丸のポップなボタンや強いドロップシャドウを使わない
- 派手な値引きバナーや情報を詰め込んだ表を置かない
- 写真の上に文字や装飾を詰め込みすぎない
- 背景に柄やテクスチャを敷き詰めない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（コレクションの世界観と商品の価値を一目で伝える）: 全幅の柔らかい自然光の人物写真に、細い明朝のキャッチ（縦書きも可）と細い欧文を重ねる。写真の端に小さな円バッジを置く
2. **コンセプト**（ブランドや商品の考え方を静かに語る）: オフホワイト地に和欧2段見出しと中央揃えの短い本文。上部アーチに切り抜いた写真を1点添え、余白を大きくとる
3. **悩みの提起**（従来品への不満や読み手の悩みに共感する）: 淡いグレー地に細線のチェックボックスと明朝の短文を3行並べる。強調は下線か濃淡だけにする
4. **実績**（販売数や評価で信頼を示す）: 欧文セリフの大きな金色の数字を中央に置き、和文の補足と注釈を小さく添える
5. **特長**（素材・機能・つくりのこだわりを説明する）: 01〜04の番号付きで、写真→欧文ラベル→明朝見出し→2〜3行の説明を縦にくり返す。写真は左右交互に寄せる
6. **カラーバリエーション**（色の選択肢を一覧で見せる）: 白地に3列のカラー見本を並べ、英字の色名を小さく添える。上に筆記体の飾り見出しを置く
7. **お客様の声**（実感の声で購入を後押しする）: 一段濃いピンクベージュ地に白い角なしカードを縦に重ね、明朝の一言見出しとゴシックの本文を入れる
8. **着用比較**（着用の効果を写真で示す）: 2枚の写真をすき間なく並べ、下に Before/After の細い帯ラベルを付ける。注釈を必ず添える
9. **ラインナップ**（関連商品や他のタイプへ回遊させる）: 商品カードを縦に並べるか横スクロールにする。各カードにアウトラインボタンを置く
10. **クロージング・CTA**（余韻を残し、商品一覧や購入へ送る）: チャコール地に白い欧文と明朝の短い一文、その下に主CTAボタンを置く。前後の余白を広くとる

## Imagery

- 人物は穏やかな表情の大人の女性モデル。白〜グレージュの室内で、自然光のハイキーに撮る
- ニットやシアー素材など柔らかい服を合わせ、肌の見え方をやわらげる
- 商品は淡いピンクベージュやアイボリーの背景で物撮りし、背景色をページ全体でそろえる
- 素材・縫い目・裏地のアップを円形か楕円に切り抜き、手ざわりを伝える
- 装飾は薄く大きな欧文の透かし文字と細線の枠程度にとどめ、イラストは使わない
- 写真の色は彩度をやや抑え、ふんわりした仕上がりにする
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC画像がない前提。PCでは中央に幅480〜600pxのSPレイアウトを置き、左右は淡いグレージュ地にする方法を推奨する
- PCに広げる場合、特長は写真と本文の左右2カラムに、商品カードは横2〜3枚に並べる
- 見出しはPCで約1.3倍に拡大し、本文サイズはほぼ変えずに余白を広げる
- カラー見本やラインナップはPCで横一列に並べ、すき間を広くとる
- 欧文の透かし文字や細い縦線の装飾はPCでもセクションの左右端に残す

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

- **ID**: `pk-fashion-elegant`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「ファッション・アクセサリー」・主な雰囲気「上品・高級」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-fashion-elegant/
