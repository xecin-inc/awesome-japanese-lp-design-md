---
version: alpha
name: Refined Premium Home Appliance LP Pattern
description: ほぼ白の淡いグレー地に、チャコール紺のブランド色と黒の技術セクションを差し込むモノトーン基調の型。見出しは明朝で字間を広めにとり、細い欧文ラベルと金の差し色で高級感を出す。角はほぼ立て、影はほとんど使わない。面の明暗と細い線だけで階層をつくり、製品写真のマットな質感と余白で静かな上質さを見せる。
colors:
  background: '#F7F8F8'
  background-alt: '#F6F5F3'
  surface: '#FAFBFB'
  tint-1: '#F6F3EF'
  primary: '#2A3140'
  secondary: '#3C3D3F'
  dark-section: '#1F1F21'
  on-dark: '#F6F8F8'
  text: '#313132'
  text-body: '#3D3F42'
  text-muted: '#92908F'
  line: '#D7DAD7'
  accent-1: '#B0986A'
  cta: '#BA2825'
  on-cta: '#FEF8F7'
  marker: '#FBF2AE'
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Noto Serif JP
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.08em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.08em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.05em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.05em
  note:
    fontFamily: Noto Sans JP
    fontSize: 9px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.02em
  accent:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.1em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0.05em
rounded:
  sm: 2px
  md: 4px
  lg: 12px
  full: 999px
spacing:
  unit: 8px
  card: 20px
  section: 64px
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
    rounded: '{rounded.sm}'
    height: 48px
  button-outline:
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 40px
  point-number:
    textColor: '{colors.primary}'
    typography: '{typography.accent}'
    height: 60px
  badge-circle:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 80px
  review-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 170px
  step-card:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.body-md}'
    height: 170px
  check-list:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 140px
  faq-item:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 100px
  attention-box:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    height: 90px
  heading-en-label:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 80px
---

# DESIGN.md — 家電・ガジェットの上品・高級な LP の型（Refined Premium Home Appliance LP Pattern）

designmark が、家電・ガジェット・主な雰囲気「上品・高級」の LP の設計書 21 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 家電・ガジェット ／ **雰囲気**: 上品・高級、クール・先進的、シンプル・ミニマル、信頼・誠実
- **キーワード**: 明朝見出し・モノトーン・グレージュ・細い欧文ラベル・金の差し色・マット質感
- **地の質感**: 白から淡いグレーへ流れる、マットでノイズのないフラットな地。技術セクションだけ無地のチャコールにし、製品写真のスポット光と金属の艶で質感を足す。
- **形**: 角を立てた矩形が基本。角丸は 2〜4px まで。円は数値バッジとアイコンだけに使い、区切りは直線と地色の切り替えで行う。
- **温度感**: ややクールなニュートラル。青みのあるグレーを主に使い、金茶とわずかに暖かいグレージュで冷たくなりすぎないようにする。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#F7F8F8` | ページ全体の基本地（青みのあるごく淡いグレー） | 30% | 集計の代表色 |
| `background-alt` | `#F6F5F3` | セクションを切り替えるときの淡いグレージュ地 | 10% | 集計の代表色 |
| `surface` | `#FAFBFB` | レビュー・スペック表・図解を載せる白いパネル | 6% | 集計の代表色 |
| `tint-1` | `#F6F3EF` | 特長ブロックや比較の推奨側に敷く暖かい淡色面 | 4% | 集計の代表色 |
| `primary` | `#2A3140` | ブランドを代表するチャコール紺。見出し帯・番号・バッジの面 | 6% | 集計の代表色 |
| `secondary` | `#3C3D3F` | サブの濃灰。区切りの帯・小さな番号・アイコン | 4% | 集計の代表色 |
| `dark-section` | `#1F1F21` | 技術解説・使い方などの黒いセクション地 | 6% | 集計の代表色 |
| `on-dark` | `#F6F8F8` | 黒地・紺地の上の白文字 | 1% | 集計の代表色 |
| `text` | `#313132` | 見出しと主要な文字の濃いグレー | 3% | 集計の代表色 |
| `text-body` | `#3D3F42` | 本文の墨色 | 2% | 集計の代表色 |
| `text-muted` | `#92908F` | ※注釈・英字ラベルの灰文字 | 1% | 集計の代表色 |
| `line` | `#D7DAD7` | 区切りの細線・アウトラインボタンの枠 | 0% | 集計の代表色 |
| `accent-1` | `#B0986A` | 金茶。実績の月桂樹・大きな数字・STEP 番号・強調語 | 1% | 集計の代表色 |
| `cta` | `#BA2825` | 購入ボタンの深い赤 | 1% | 集計の代表色 |
| `on-cta` | `#FEF8F7` | 購入ボタン上の白文字 | 0% | 集計の代表色 |
| `marker` | `#FBF2AE` | 強調語の下に敷く淡い黄色のマーカー | 0% | 集計の代表色 |

- 地は淡いグレー（background）と淡いグレージュ（background-alt）を交互に使い、純白一色のページにしない
- 黒の dark-section は技術解説か使い方の 1〜2 セクションに絞る。濃色帯は 1 画面に 1 つまでにする
- primary のチャコール紺は見出し帯・番号・丸バッジなど、面積の小さい要素に使う
- 金茶（accent-1）は実績・受賞・数値・STEP 番号など、信頼と権威を示す要素だけに使う
- cta の赤は購入ボタンと注意喚起のラベルだけに使い、ほかの装飾には使わない
- 彩度の高い色を背景に広く敷かない。製品の機能を示す色（光・温熱など）は小さな図解の中だけにする
- 本文の強調は太字ではなく、金茶の色替えか淡い黄色のマーカーで示し、1 段落に 2〜3 か所までにする

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FV のキャッチ、写真に重ねる大見出し | 明朝 | Shippori Mincho | 500 | 40px | 1.3 | 0.05em |
| `headline-lg` | セクション見出し（中央揃え） | 明朝 | Noto Serif JP | 500 | 24px | 1.5 | 0.08em |
| `headline-md` | 帯の中のコピー、下線付きの強調見出し | ゴシック | Noto Sans JP | 700 | 20px | 1.5 | 0.08em |
| `headline-sm` | カード見出し・小見出し | ゴシック | Noto Sans JP | 700 | 16px | 1.5 | 0.05em |
| `body-md` | 本文・レビュー | ゴシック | Noto Sans JP | 400 | 13px | 1.8 | 0.05em |
| `note` | ※注釈 | ゴシック | Noto Sans JP | 400 | 9px | 1.6 | 0.02em |
| `accent` | POINT などの英字ラベル、ポイント番号、大きな数値 | 欧文サンセリフ | Montserrat | 500 | 14px | 1.2 | 0.1em |
| `label-button` | CTA ボタン・リンクボタンの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.35 | 0.05em |

- 大見出しは明朝体で字間を広めにとり、強調する語だけひと回り大きくする
- セクション見出しの上には、字間を広くとった細い欧文大文字のラベル（POINT・FEATURE など）を置き、中央にそろえる
- 本文は細めのゴシックで 13px 前後にし、行間は 1.8 程度まで広くとる
- 数字は欧文書体か明朝体で、単位の 2〜3 倍の大きさにしてジャンプ率を大きくとる
- 数値や効果の表現には、小さな灰色の※注釈を必ず添える
- 丸ゴシック・手書き・極太のポップ書体や、影の付いた立体文字は使わない
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。カードの中や機能一覧では写真と本文の 2 列も使う
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- 写真は全幅で裁ち落とし、テキストは中央揃えにして上下の余白を十分にとる
- 特長は「POINT 番号 → 見出し → 全幅写真 → 説明・図解」の順で繰り返す
- テキストブロックは左右 16〜24px の余白をとって中央に寄せる
- セクションの間隔は 64px を基準にし、8px 刻みで余白をそろえる
- 図解やスペック表は白い surface パネルの中に収める
- CTA は FV の直後・中盤・ページ末尾に置き、末尾では主ボタンとサブボタンを縦に並べる

## Elevation & Depth

- 影はほぼ使わず、面の明暗の差と 1px の細い線で階層を示す
- 白いレビューカードや丸バッジにだけ、ごく薄い影（0 2px 8px rgba(0,0,0,.08) 程度）を付けてよい
- 製品の切り抜き写真には、下に柔らかい落ち影を付けて床に置いたように見せる
- 注意喚起のボックスは影を付けず、細い灰色の枠線で囲む

## Shapes

- **角丸**: 小 2px ／ 中 4px ／ 大 12px。ボタンは角丸の長方形。
- **写真の切り抜き**: 写真は角を立てた横長の矩形で全幅に置き、端は地の色へフェードさせる。製品は切り抜いて淡い地に浮かせ、数値や特長は正円のバッジに入れる。
- **セクション境界**: 直線。地の色の切り替えか、細い横線・縦線で区切り、必要な場所だけグラデーションでなめらかにつなぐ
- カード・帯・写真は角を立てるか、2〜4px のわずかな角丸にとどめる
- 購入ボタンは角丸の小さい長方形にする
- ピル型はサブのアウトラインボタンだけに使ってよい
- 円は数値バッジ・アイコン・FAQ の Q/A 記号だけに使う
- 吹き出しを使うときは角丸 12px 程度にとどめ、小さな三角を付ける

## Components

- **購入ボタン**（`button-primary`）: ほぼ全幅の長方形ボタン。深い赤の面に白い太字を置き、右端に細い矢印かカートアイコンを添える
- **サブボタン**（`button-outline`）: 詳細・取扱説明などに使う、透明地に細いグレー枠のピル型ボタン
- **POINT 番号**（`point-number`）: 小さな英字の POINT、細い欧文の 2 桁数字、短い横線を縦に重ねて見出しの上に置く
- **特長の丸バッジ**（`badge-circle`）: チャコール紺の円に、短い特長語や数値を白抜きで 2〜3 行入れる。3 つ横に並べる
- **レビューカード**（`review-card`）: 白いカードの上部に金の星評価と属性、下に本文を入れ、要所を金茶で色替えする。横スクロールで並べる
- **使い方 STEP カード**（`step-card`）: 左が黒地に金の STEP 番号と白い説明文、右が製品の写真か線画の 2 分割カード
- **悩みチェックリスト**（`check-list`）: 淡い地に、細いチェックアイコン付きの悩みを 4〜5 行並べ、行の間を細い罫線で区切る
- **FAQ 行**（`faq-item`）: Q と A を小さな丸記号で示し、質問文は太字にする。行の間は細線で区切り、右端にプラスの記号を置く
- **注意喚起ボックス**（`attention-box`）: グレージュ地のボックスの左上に深い赤の小さな四角いラベルを付け、明朝の見出しと注釈を入れる
- **欧文ラベル付きセクション見出し**（`heading-en-label`）: 字間の広い細い欧文の大文字ラベル、短い横線、明朝の和文見出しを中央にそろえて縦に並べる

## Do's and Don'ts

**Do**
- 見出しは明朝体にし、字間を広めにとって静かに見せる
- ボタンと UI はモノトーン基調にそろえ、赤は購入ボタンだけにする
- 実績は金の月桂樹と大きな数字で見せ、根拠の※注釈を小さく添える
- 製品はマットな質感が伝わるように、明るい霧のようなグレーの地に浮かせて撮る
- 機能ごとに POINT ラベル・見出し・写真・図解の順をそろえ、同じリズムで繰り返す
- 地の色を淡いグレーとグレージュで交互に切り替え、余白を広めにとる

**Don't**
- 大きな角丸のカードや、ピル型の購入ボタンにしない
- 強い影や、立体的に浮かせたカードを使わない
- 彩度の高い色を背景に広く敷かない。赤を購入ボタンと注意喚起以外に使わない
- 丸ゴシック・手書き・極太のポップ書体を見出しに使わない
- 黒い帯を何度も続けて重くしない
- 本文を太字だらけにしない（強調は色替えかマーカーにする）

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（製品の世界観と主な実績をひと目で伝える）: 全幅の製品写真に明朝の大キャッチを重ね、金の月桂樹付きの実績数字と購入ボタンを下に置く。地は淡いグレーのグラデーション
2. **コンセプト**（ブランドの価値を情緒的に伝える）: 広い余白に欧文ラベルと明朝の見出し、短い詩的な本文を中央揃えで置き、全幅のイメージ写真でつなぐ
3. **悩みの提起**（読み手に悩みを自覚させ、共感する）: グレージュ地にチェックリストを並べ、下に「その悩み、解決できます」と次のセクションへ渡す見出しを置く
4. **特長（POINT）**（製品の主要な機能と、ほかとの違いを示す）: POINT 番号・明朝見出し・全幅写真・説明の順で 3〜4 回繰り返す。数値は丸バッジや大きな欧文数字で見せる
5. **技術解説**（中核の技術と仕組みを図で説明する）: 黒地のセクションに金の見出しと白文字の本文を置き、光の線や断面図で仕組みを描く。図解は白いパネルに収める
6. **注意喚起**（類似品・模倣品への注意を促す）: グレージュのボックスに赤い小ラベル、明朝の注意文と注釈を入れる
7. **お客様の声**（利用者の満足度で信頼を補う）: 淡い地に白いレビューカードを横スクロールで並べ、金の星と金茶の強調語を入れる
8. **使い方**（使う手順を具体的に示す）: 黒地と写真の 2 分割の STEP カードを縦に積み、金の STEP 番号で順番を示す
9. **よくある質問**（購入前の疑問と不安を解消する）: Q/A の丸記号付きの行を細線で区切って並べるアコーディオン
10. **CTA**（購入や詳細ページへ誘導する）: 製品の切り抜き写真と価格の下に、赤い購入ボタンと細い枠のサブボタンを縦に並べる

## Imagery

- 製品はマットブラックやシルバーの質感が伝わるように、白〜銀灰の明るい地でスポット光を当てて撮る
- 人物は自然光の明るい室内で、横顔や手元に寄った、くつろいだ表情のカットにする
- 生活シーンはグレーや木目の落ち着いたインテリアで、物の少ない空間にする
- アイコンや人体図は白・紺・金茶の細い線画で、小さくシンプルに描く
- 技術の仕組みは、暗い地に青白や金色の光線を重ねる表現で見せる
- 実績の装飾には金の月桂樹と星のイラストを使う
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- SP は 1 カラムで、ボタンは画面幅いっぱい近くまで広げる
- PC は本文の幅を最大 960px 前後にして中央に寄せ、左右は淡いグレーの地で埋める
- PC の CTA ボタンは最大幅を 480px 程度に抑える
- PC の見出しは SP の 1.3 倍程度まで大きくし、字間はそのまま保つ
- PC では写真とテキストを左右交互の 2 カラムにし、機能カードは 3〜4 列に広げてよい
- レビューのカルーセルと比較表は、SP では横スクロールで見せる

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

- **ID**: `pk-gadgets-elegant`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「家電・ガジェット」・主な雰囲気「上品・高級」の設計書 21 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-gadgets-elegant/
