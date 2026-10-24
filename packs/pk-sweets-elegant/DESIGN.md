---
version: alpha
name: Elegant Japanese Confectionery LP Pattern
description: 生成りのクリーム地にチョコレートブラウンと金を合わせた、暖色で落ち着いた高級菓子の LP。見出しは明朝体の中央揃えにし、上に欧文セリフ体を添える。余白を広く取り、つやと照りのあるシズル写真を主役にする。金は細線・バッジ・箔の表現だけに使い、濃茶のセクションを挟んで重みを出す。ボタンはピル型を基本とし、影より額縁のような線で奥行きを出す。
colors:
  primary: '#522919'
  background: '#F7F2E5'
  background-alt: '#F4E5D1'
  dark-section: '#301007'
  secondary: '#A17846'
  surface: '#FCFBF9'
  text: '#3A1409'
  text-muted: '#97817A'
  on-dark: '#FBF9F7'
  cta: '#2F0A01'
  on-cta: '#FBFAF7'
  accent-1: '#C89F5A'
  accent-2: '#D0A63E'
  line: '#C0A166'
  tint-1: '#F0E6CC'
  accent-2-accessible: '#8D6F22'
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.025em
  headline-lg:
    fontFamily: Shippori Mincho
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Shippori Mincho
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Noto Serif JP
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.08em
  accent:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.025em
  body-lg:
    fontFamily: Noto Serif JP
    fontSize: 15px
    fontWeight: 600
    lineHeight: 2.0
    letterSpacing: 0.06em
  body-md:
    fontFamily: Noto Serif JP
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.9
    letterSpacing: 0.05em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.05em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.02em
rounded:
  sm: 4px
  md: 8px
  lg: 35px
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
    height: 50px
  button-secondary:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 38px
  button-outline:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 40px
  heading-bilingual:
    textColor: '{colors.accent-1}'
    typography: '{typography.accent}'
    height: 80px
  badge-limited:
    backgroundColor: '{colors.accent-2}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 60px
  release-band:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    height: 45px
  product-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 300px
  price-tag:
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    height: 40px
  arch-frame:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.body-lg}'
    rounded: '{rounded.lg}'
    height: 560px
  note-box:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.note}'
    height: 60px
---

# DESIGN.md — 菓子・スイーツの上品・高級な LP の型（Elegant Japanese Confectionery LP Pattern）

designmark が、菓子・スイーツ・主な雰囲気「上品・高級」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 菓子・スイーツ ／ **雰囲気**: 上品・高級、やさしい・柔らかい、ラグジュアリー・ダーク、ナチュラル
- **キーワード**: 明朝体・シズル写真・生成り・金の細線・チョコレートブラウン・季節限定
- **地の質感**: 明るい面はマットな生成りの紙のような質感で、同系色の地紋（ダマスク柄や花窓紋）を明度差 5% ほどでごく薄く敷く。濃茶の面は緩いグラデーションと細かい粒子で深みを出す。光沢は金の箔表現と商品写真の照りだけにとどめる。
- **形**: ボタンとバッジはピル型か正円。カードと帯はほぼ直角。写真はアーチ、楕円、円で切り抜き、縁に金の細線を 1〜2 本添える。
- **温度感**: 暖色寄りで彩度は低め。焦げ茶、キャラメル、金、生成りでまとめた、静かで濃厚な温かさ。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#522919` | ブランドの焦げ茶（エンブレム・見出し帯・フッター） | 16% | 集計の代表色 |
| `background` | `#F7F2E5` | ページ全体の生成りクリームの地 | 25% | 合成 |
| `background-alt` | `#F4E5D1` | セクションを切り替える淡いベージュの地 | 8% | 集計の代表色 |
| `dark-section` | `#301007` | メッセージ帯・導入・フッター前の深い濃茶の面 | 8% | 集計の代表色 |
| `secondary` | `#A17846` | プロフィール帯や区切り帯の中間の茶 | 5% | 集計の代表色 |
| `surface` | `#FCFBF9` | カード・サブボタンの白に近い面 | 4% | 集計の代表色 |
| `text` | `#3A1409` | 見出しと本文の焦げ茶の文字 | 2% | 集計の代表色 |
| `text-muted` | `#97817A` | 補足・縦書きラベルのくすんだ茶灰 | 0% | 集計の代表色 |
| `on-dark` | `#FBF9F7` | 濃茶の地や暗い写真の上に置く生成り白の文字 | 2% | 集計の代表色 |
| `cta` | `#2F0A01` | 購入・詳細ボタンのチョコ色の塗り | 1% | 集計の代表色 |
| `on-cta` | `#FBFAF7` | 主ボタン上の文字 | 0% | 集計の代表色 |
| `accent-1` | `#C89F5A` | 金（欧文見出し・細線装飾・エンブレム） | 2% | 集計の代表色 |
| `accent-2` | `#D0A63E` | 限定バッジ・関連バナーの黄金色 | 0% | 集計の代表色 |
| `line` | `#C0A166` | 罫線・図解・額縁の金茶の細線 | 0% | 集計の代表色 |
| `tint-1` | `#F0E6CC` | 特長の円や欧文見出しの下に敷く淡いクリーム | 2% | 集計の代表色 |
| `accent-2-accessible` | `#8D6F22` | AA を満たす補正値（計算） |  | 計算 |

- 地は生成り（background）を基本にし、淡いベージュ（background-alt）と濃茶（dark-section）をセクション単位で切り替えて区切る。
- 文字は純黒を使わず焦げ茶で組む。濃茶の地の上は白一色ではなく生成り白（on-dark）にする。
- 金（accent-1 / line）は細線、欧文見出し、バッジ、エンブレムだけに使い、本文や広い面には使わない。
- 主 CTA はチョコ色の塗りに生成り白の文字。赤やオレンジの目立つ色には頼らない。
- 地紋やテクスチャは地と同系色で明度差 5〜8% に抑え、色数を増やさない。
- 商品そのものの色（果実やパッケージの色）は写真の中だけに出し、UI の色には持ち込まない。
- `badge-limited` は文字 `#FBF9F7` × 背景 `#D0A63E` のコントラスト比が 2.17:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-2-accessible`（`#8D6F22`、4.51:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューの商品名・キャッチ | 明朝 | Shippori Mincho | 700 | 40px | 1.2 | 0.025em |
| `headline-lg` | セクションの和文大見出し | 明朝 | Shippori Mincho | 500 | 28px | 1.4 | 0.05em |
| `headline-md` | リード文・締めの呼びかけ | 明朝 | Shippori Mincho | 700 | 20px | 1.4 | 0.05em |
| `headline-sm` | 商品名・お客様の声などの小見出し | 明朝 | Noto Serif JP | 700 | 17px | 1.4 | 0.08em |
| `accent` | 見出し上の欧文サブ見出し・背景に透かす大きな欧文 | 欧文セリフ | Playfair Display | 400 | 22px | 1.2 | 0.025em |
| `body-lg` | 濃い地に置く中央揃えの語りかけ文 | 明朝 | Noto Serif JP | 600 | 15px | 2.0 | 0.06em |
| `body-md` | 説明の本文 | 明朝 | Noto Serif JP | 500 | 13px | 1.9 | 0.05em |
| `label-button` | ボタンの文字 | ゴシック | Noto Sans JP | 700 | 15px | 1.3 | 0.05em |
| `note` | ※注釈・仕様表のラベル | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.02em |

- 見出しは明朝体にし、字間を 0.05〜0.08em と少し広げて中央揃えにする。
- セクション見出しは欧文セリフ（金色・大）と和文明朝（焦げ茶・小）の 2 段で組む。
- 本文は短い行で改行して中央揃えにし、行間を 1.9〜2.0 と広く取る。1 ブロックは 4〜6 行までにする。
- 本文は明朝の中字（500）を基本にし、細すぎる字にしない。読みやすさを優先する場合は Noto Sans JP でもよい。
- ブランドの欧文は大きく淡い透かし文字として背景に敷いてよい。
- 太いゴシックで大きく煽る見出しは使わない。ゴシックはボタンと注釈だけに使う。
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム、中央揃え
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- セクションごとに地の色を切り替えて区切り、境界には金の細線を入れる。
- メインビジュアルやシズル写真は画面端まで裁ち落とし、文字を重ねる。
- 商品ラインナップは「写真 → 商品名 → 区切り線 → 価格」を同じ型で縦に繰り返す。
- 装飾の円やイラスト（果物・花）は画面端からはみ出させ、奥行きを出す。
- 締めの CTA は大きな商品写真の下に、中央揃えのボタンを縦に 2 段並べる。
- 余白は 8px 単位で取り、見出しの上下は大きめに空けて静けさを保つ。

## Elevation & Depth

- 基本は影を使わず、金の細線を二重に引いた額縁で奥行きを出す。
- 商品パッケージの切り抜き写真の下にだけ、自然光のような柔らかい落ち影を付ける。
- 主 CTA には下向きの柔らかい影（0 4px 12px rgba(48,16,7,.15) 程度）を付けてよい。
- 表やボックスには影を付けず、罫線だけにする。
- 金の面は横方向のグラデーションでつやを出し、箔らしく見せる。

## Shapes

- **角丸**: 小 4px ／ 中 8px ／ 大 35px。ボタンはピル型。
- **写真の切り抜き**: メインビジュアルとシズル写真は角なしの全幅。商品や素材はアーチ・楕円・正円で切り抜き、縁に金の細線を少しずらして重ねる。パッケージは背景を抜いて落ち影を付ける。
- **セクション境界**: 基本は直線で地の色を切り替え、境界に金の細い横ラインを入れる。キャラメル系の帯だけ、とろけるような波形で切り替えてよい。
- ボタンとバッジだけをピル型か正円にし、カードと帯の角はほぼ直角にする。
- アーチや楕円の枠には金の 1px 線を 1〜2 本添える。
- 限定・新作のバッジは正円にし、金の細線で縁取る。
- フッター前のバナーなど一部だけ 8px の角丸にする。

## Components

- **主ボタン（購入・詳細）**（`button-primary`）: チョコ色のピル型ボタン。生成り白の文字の右に細い矢印を添え、下に柔らかい影を付ける。
- **サブボタン（情報リンク）**（`button-secondary`）: 白に近い地の細いピル型。焦げ茶の文字と丸い矢印を付け、主ボタンより小さくする。
- **金枠ピルボタン**（`button-outline`）: 生成りの地に金の細い枠線だけを引く。店舗一覧や一覧ページなどのサブの動線に使う。
- **2 段見出し**（`heading-bilingual`）: 金色の欧文セリフを大きく置き、その下に焦げ茶の明朝で和文を小さく添える。中央揃えにし、下に短い金の細線を引く。
- **限定の丸バッジ**（`badge-limited`）: 黄金色の正円に白文字を 2 行で入れ、金の細線で縁取る。商品写真の右上に重ねる。
- **発売日の帯**（`release-band`）: ファーストビューの直下に置く、横幅いっぱいの濃茶の帯。中央に明朝で日付を入れる。
- **商品カード**（`product-card`）: 淡い円や台座に切り抜いた商品を載せ、下に明朝の商品名、金の区切り線、価格、サブボタンを縦に並べる。
- **価格表示**（`price-tag`）: 税抜価格を大きな数字で書き、税込価格を括弧付きで小さく添える。全商品で同じ表記にそろえる。
- **金線アーチ枠**（`arch-frame`）: 上辺が半円の縦長の枠に金の二重線を引き、内側に写真や中央揃えのメッセージを収める。
- **注記ボックス**（`note-box`）: 淡いベージュの面か細い茶の線で囲んだ長方形に、販売期間や取扱条件の注記を中央揃えで入れる。

## Do's and Don'ts

**Do**
- 見出しは明朝体で字間を広く取り、欧文セリフと組み合わせて中央揃えにする。
- 文は短く区切り、余白をたっぷり取って静けさを保つ。
- 金は細線・バッジ・欧文見出しに絞り、箔のように少しずつ効かせる。
- 商品ごとに同じカードの型を繰り返し、価格の表記もそろえる。
- 濃茶のセクションを 1〜2 か所挟み、生成りの地との明暗で重みを出す。
- シズル写真はつやと照りが見える暖色の光で撮り、写真を主役にする。

**Don't**
- 純黒の文字や、黒一色の面を使わない。
- 赤・オレンジ・原色の黄緑などの派手な色を CTA や広い面に使わない。
- 太いゴシックの大きな見出しで値引きや限定を煽らない。
- 金を本文の文字色や広い面の地に使わない。
- 本文を左揃えの長い段落で詰め込まない。
- 濃い影や角丸の大きいポップなカードを並べない。

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（商品の存在感と季節感・高級感を一目で伝える）: 全幅のシズル写真か暖色のボケ光の背景に、明朝の商品名と欧文ロゴを中央に重ねる。直下に濃茶の発売日帯を置いてもよい。
2. **商品紹介**（味わいと商品の概要を伝える）: 生成りの地に 2 段見出しを置き、アーチ型に切り抜いた商品写真と中央揃えの短い説明文を組み合わせる。
3. **コンセプト**（自分へのごほうびという価値を情緒的に語る）: 濃茶の地に生成り白の明朝で、行間の広い語りかけ文を中央揃えで置く。背景に大きな欧文を薄く透かす。
4. **特長**（素材や製法のこだわりを 3 点で示す）: 円形に切り抜いた素材写真に番号と明朝の小見出し、短い本文を添え、縦に 3 つ繰り返す。写真から金の引き出し線で説明につないでもよい。
5. **商品ラインナップ**（サイズやフレーバーごとに商品を比べられるようにする）: 切り抜いた商品写真、商品名、金の区切り線、価格、サブボタンを同じ型で縦に並べる。
6. **動画**（CM や製造風景で世界観を補う）: 淡いベージュの地に、16:9 のサムネイルとチョコ色の正円の再生ボタンを置く。
7. **開発者のこだわり**（開発の背景と想いで共感を得る）: 金線のアーチ枠の中に、人物写真か手描きのイラストと中央揃えのメッセージを収める。
8. **お客様の声**（共感と信頼を得る）: 白に近いカードを縦に並べ、明朝の小見出しと本文、金の引用符を添える。カードに影は付けない。
9. **CTA**（購入・店舗検索・詳細情報へ誘導する）: 中央に大きな商品写真を置き、その下にチョコ色の主ボタンと金枠のサブボタンを縦 2 段で並べる。注記ボックスを添える。
10. **フッター**（SNS・関連リンク・会社情報を示す）: 焦げ茶の地に生成り白の小さな文字でリンクを並べ、ロゴと金の細線で締める。

## Imagery

- 菓子は暖色の柔らかい光で撮り、チョコやキャラメルのつや、とろける断面、照りを寄りで見せる。
- パッケージは正面やや上から撮って背景を抜き、柔らかい落ち影を付けて生成りの地に置く。
- 写真はベージュ〜茶の低彩度トーンにそろえ、背景は大きくぼかすか淡い無地にする。
- 板チョコ、ナッツ、金のスプーン、金箔などの小道具を周囲に少しだけ散らす。
- 装飾は金の細線、金粉の散らし、季節のモチーフ（花・小鳥・果物の線画）を小さく端に置く程度にする。
- 地紋は同系色のダマスク柄や花窓紋を、ごく薄く敷き詰める。
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC は本文の幅を 720〜760px 程度に固定し、左右の余白は生成りの地紋か濃茶のテクスチャで埋める。
- PC のファーストビューは横長にし、商品写真を片側、明朝のタイトルと価格を反対側に置く。
- 特長は PC で写真と本文の 2 カラムにし、左右を交互に入れ替えてもよい。
- 商品ラインナップと動画は、PC では 2〜3 列に並べてよい。
- 文字サイズ、字間、見出しの 2 段構成は SP と大きく変えない。

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

- **ID**: `pk-sweets-elegant`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「菓子・スイーツ」・主な雰囲気「上品・高級」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-sweets-elegant/
