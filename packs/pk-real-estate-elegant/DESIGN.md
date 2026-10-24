---
version: alpha
name: Refined Architectural Housing LP Pattern
description: 生成りに近いオフホワイトの地に、墨色・チャコールと少しの金茶を合わせたモノトーン寄りの配色にする。見出しは欧文セリフと明朝の組み合わせ、本文は行間を広く取った明朝または細めのゴシック。角丸と影はほぼ使わず、直線と細い罫線、たっぷりの余白、大判の建築・インテリア写真で、ホテルのような静かな高級感を出す。CTA は墨色の角ばったボタンに絞り、彩度の高い色は使わない。
colors:
  background: '#F8F8F7'
  background-alt: '#EDEDEC'
  surface: '#FAF9F8'
  tint-1: '#F1F4F0'
  primary: '#383633'
  dark-section: '#2D2C2C'
  on-dark: '#EAE9E6'
  text: '#302F2E'
  text-muted: '#8B8784'
  line: '#D7D2C8'
  accent-1: '#BCA16F'
  cta: '#13100C'
  on-cta: '#FCFCFC'
  accent-2: '#9C2A2A'
typography:
  display:
    fontFamily: Cormorant Garamond
    fontSize: 34px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.08em
  headline-lg:
    fontFamily: Shippori Mincho
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.08em
  headline-md:
    fontFamily: Shippori Mincho
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 0.09em
  headline-sm:
    fontFamily: Noto Serif JP
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.05em
  body-md:
    fontFamily: Noto Serif JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0.06em
  accent:
    fontFamily: Cormorant Garamond
    fontSize: 29px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.025em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.08em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.03em
rounded:
  sm: 0px
  md: 4px
  lg: 6px
  full: 999px
spacing:
  unit: 8px
  card: 20px
  section: 72px
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
    height: 48px
  button-outline:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    height: 44px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.display}'
    height: 80px
  case-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    height: 320px
  voice-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 180px
  data-panel:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.accent}'
    height: 200px
  cta-box:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    height: 260px
  badge-new:
    backgroundColor: '{colors.accent-2}'
    textColor: '{colors.on-cta}'
    typography: '{typography.note}'
    rounded: '{rounded.full}'
    height: 32px
  note-text:
    textColor: '{colors.text-muted}'
    typography: '{typography.note}'
    height: 16px
---

# DESIGN.md — 住宅・不動産の上品・高級なLPの型（Refined Architectural Housing LP Pattern）

designmark が、住宅・不動産・リフォーム・主な雰囲気「上品・高級」の LP の設計書 23 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 住宅・不動産・リフォーム ／ **雰囲気**: 上品・高級、信頼・誠実、シンプル・ミニマル、ナチュラル
- **キーワード**: 余白・明朝体・欧文セリフ見出し・グレージュ・大判の建築写真・細い罫線
- **地の質感**: マットで平らな単色面。影とグラデーションはほぼ使わず、写真の木目・光・陰影で質感を出す。濃色の帯は部分的に使い、明暗の切り替えで落ち着いたリズムを作る
- **形**: 角を立てた矩形が基本。写真もカードもボタンも角丸なし（あっても 4px 程度）。区切りは 1px の細い罫線と地色の切り替えで行う
- **温度感**: やや暖かいニュートラル。生成り・グレージュ・墨色に、金茶や木の色で少しぬくもりを足す

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#F8F8F7` | ページ全体の基本の地色（オフホワイト） | 30% | 集計の代表色 |
| `background-alt` | `#EDEDEC` | 中盤セクションに交互に入れる淡いグレー地 | 12% | 集計の代表色 |
| `surface` | `#FAF9F8` | カード・事例・声などを載せる白に近い面 | 6% | 集計の代表色 |
| `tint-1` | `#F1F4F0` | 理由・データボックスなどの淡い色面 | 5% | 集計の代表色 |
| `primary` | `#383633` | ブランドを担うチャコール（見出し帯・ボタン枠・小ボタン） | 8% | 集計の代表色 |
| `dark-section` | `#2D2C2C` | 特長・性能値・クロージングに使う濃い墨色の帯 | 7% | 集計の代表色 |
| `on-dark` | `#EAE9E6` | 濃色帯の上の生成り白の文字 | 1% | 集計の代表色 |
| `text` | `#302F2E` | 見出し・本文の濃いグレー茶 | 3% | 集計の代表色 |
| `text-muted` | `#8B8784` | 注釈・欧文ラベル・キャプションの淡いグレー | 1% | 集計の代表色 |
| `line` | `#D7D2C8` | 区切り線・カードの細い罫線（グレージュ） | 0% | 集計の代表色 |
| `accent-1` | `#BCA16F` | 金茶のアクセント（数字・欧文ラベル・細い装飾線） | 1% | 集計の代表色 |
| `cta` | `#13100C` | 資料請求・来場予約の主ボタンの塗り（墨黒） | 1% | 集計の代表色 |
| `on-cta` | `#FCFCFC` | 主ボタン上の白文字 | 0% | 集計の代表色 |
| `accent-2` | `#9C2A2A` | NEW バッジや小さな強調に限って使う深紅 | 0% | 集計の代表色 |

- 地はオフホワイトと淡いグレーの 2 段階を交互に使い、白に近い surface はカード・声・CTA の箱に限る
- UI はチャコール・墨・生成りのモノトーンで組み、色味は写真の木や照明に任せる
- 金茶（accent-1）は数字・欧文ラベル・細い装飾線だけに使い、広い面や本文には使わない
- 主 CTA は墨黒の塗りに白文字で統一し、金色や鮮やかな色にしない
- 深紅（accent-2）は NEW バッジなど 1 か所の小さな目印に限る
- 濃い墨色の帯は特長・性能値・クロージング・フッターに使い、文字は生成り白にする
- 見出しにも本文にも真っ黒は使わず、濃いグレー茶にする

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューや章の欧文タイトル（大文字） | 欧文セリフ | Cormorant Garamond | 500 | 34px | 1.2 | 0.08em |
| `headline-lg` | セクションの和文大見出し（中央揃え） | 明朝 | Shippori Mincho | 500 | 24px | 1.4 | 0.08em |
| `headline-md` | 日本語のリード見出し・問いかけコピー | 明朝 | Shippori Mincho | 600 | 20px | 1.6 | 0.09em |
| `headline-sm` | 事例タイトル・物件名・声の見出し | 明朝 | Noto Serif JP | 500 | 15px | 1.5 | 0.05em |
| `body-md` | 本文・コンセプト文 | 明朝 | Noto Serif JP | 400 | 13px | 2.0 | 0.06em |
| `accent` | 見出し上の欧文ラベル・大きな数字・透かし文字 | 欧文セリフ | Cormorant Garamond | 400 | 29px | 1.15 | 0.025em |
| `label-button` | ボタン・ラベル帯の文字 | ゴシック | Noto Sans JP | 700 | 13px | 1.4 | 0.08em |
| `note` | 注釈・写真のキャプション | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.03em |

- 見出しは「大きな欧文セリフ＋その下に小さな和文明朝」の 2 段で組む
- 日本語の見出しと本文は明朝でそろえ、注釈とボタンだけゴシックにする
- 太さは 400〜500 を中心にし、太いゴシックで強く訴えない
- 本文は行間 2.0 前後、字間 0.06em ほどにして、ゆったり読ませる
- サイズの差は控えめにし、強さではなく余白と字間で階層を作る
- 数字は大きな欧文セリフで置き、単位は小さく添える
- 注釈は 9〜10px の灰色で、該当するブロックのすぐ下に置く
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。PC は 2 カラムのグリッドと、写真をずらした非対称の配置
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 72px、基本単位 8px、カード内 20px（375px 幅換算）
- 各セクションは「欧文見出し→和文サブ→明朝リード→コンテンツ→罫線ボタン」の順で組む
- 見出しとリードは中央揃え、仕様や説明文は左揃え
- 1 画面に入れる情報を絞り、セクションの間は 72px 前後空ける
- コンセプトでは写真の大きさを変え、左右にずらして配置する
- CTA はファーストビューの後、中盤、最後の 3 か所に中央揃えで置き、幅は 70〜80% にする
- 一覧の最後には、中央に枠線ボタンを 1 つ置く

## Elevation & Depth

- 影は基本的に使わず、地色の差と細い罫線で階層を分ける
- カードは淡いグレー地の上に白に近い面を置いて浮かせる
- 奥行きは写真の陰影と余白、背後にずらして敷いた色面で表す
- どうしても必要な横スライドのカードだけ、0 2px 8px rgba(0,0,0,.08) 程度のごく薄い影にする

## Shapes

- **角丸**: 小 0px ／ 中 4px ／ 大 6px。ボタンは角丸の長方形。
- **写真の切り抜き**: 写真は角丸なしの矩形。横長 16:9〜4:3 を基本にし、コンセプトでは縦長の写真も混ぜる
- **セクション境界**: 水平の直線で地色を切り替える。写真と単色面の境目もまっすぐにする
- 角丸は最小限にして、建築らしい直線を保つ
- ボタン・カード・写真は角を立てる
- 線は 1px の細線を基本にする
- カテゴリラベルは角丸なしの小さな四角にする
- 矢印アイコンなど小さな部品に限り、円形を使ってよい

## Components

- **墨色の主 CTA**（`button-primary`）: 墨黒の矩形に白文字。右端に細い矢印を置く幅広のボタン。資料請求・来場予約に使う
- **細枠のサブボタン**（`button-outline`）: 白に近い面に 1px のチャコール枠。欧文または和文のラベルを中央に置き、右に小さな丸い矢印を付ける
- **欧文＋和文の見出し**（`section-heading`）: 大文字の欧文セリフの大見出しの下に、小さな和文明朝を添え、その下に短い細線を引く
- **施工事例カード**（`case-card`）: 角丸なしの写真の下に、小さなカテゴリラベル・明朝のタイトル・短い説明を置く。下に細い罫線を引く
- **お客様の声カード**（`voice-card`）: 白に近いカードの上に地域や家族構成のラベル、明朝の要約見出し、本文の順に置く。枠は 1px の罫線
- **性能値パネル**（`data-panel`）: 濃い墨色の帯に、大きな欧文セリフの数字と小さな単位、生成り白の説明を並べる
- **CTA ボックス**（`cta-box`）: 淡いグレー地の上に白に近い箱を置き、明朝の問いかけ、カタログ写真、主ボタンとサブボタンを縦に並べる
- **NEW バッジ**（`badge-new`）: カードやカタログの角に重ねる小さな深紅の印。欧文で NEW と白く入れる
- **注釈**（`note-text`）: ブロックの直下に置く 10px の灰色のゴシック。※から始める

## Do's and Don'ts

**Do**
- 余白を大きく取り、1 画面に置く情報を絞る
- 見出しは欧文セリフと明朝の 2 段にし、字間を広めに取る
- オフホワイトと淡いグレーの帯を交互に置いて、区切りを見せる
- 情報は白に近いカードと 1px の罫線で整理する
- インテリアや外観の写真を大きく使い、色味は低めにそろえる
- CTA は墨黒の主ボタンと細枠のサブボタンの 2 種類に固定する

**Don't**
- 濃いドロップシャドウやグラデーションのボタンを使わない
- 彩度の高い原色を広い面に使わない
- 太いゴシックの大見出しで煽らない
- 丸ゴシックやポップな書体を使わない
- 大きな角丸のカードやピル型ボタンにしない
- 金を本文や広い背景に使わない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（ブランドの考え方と空間の質の高さを一目で伝える）: 画面いっぱいの建築・インテリア写真に、大きな欧文セリフのタイトルと明朝の一言を重ねる。下に主 CTA を置く
2. **コンセプト**（家づくりの考え方や企業の想いを伝える）: オフホワイトの地に、中央揃えの明朝リードを行間広く置く。大きさの違う写真を左右にずらして散らす
3. **施工事例**（デザインの実例と実績を見せる）: 欧文＋和文の見出しの下に、角丸なしの写真カードを縦に並べるか横スライドにする。最後に細枠のボタンを置く
4. **間取り・プラン**（建物の構成とプランを比較できるようにする）: 淡いグレー地に、細い線画の間取り図と白に近いカードを並べ、面積などの数字は欧文セリフで置く
5. **特長・選ばれる理由**（性能や強みを数字と一緒に示す）: 濃い墨色の帯に、細い欧文セリフの番号、生成り白の見出し、性能値パネルを並べる
6. **CTA**（資料請求・見学予約へ誘導する）: 白に近い箱に明朝の問いかけとカタログ写真を入れ、墨黒の主ボタンと細枠のサブボタンを中央に縦に並べる
7. **お客様の声**（実際の住み心地を伝えて共感を得る）: 淡いグレー地に白に近いカードを置き、属性ラベル・明朝の要約・本文を罫線で区切る
8. **お知らせ・イベント**（見学会や相談会などの最新情報を伝える）: 日付を欧文セリフで置き、タイトルを細い罫線で区切ったリストにする。末尾に一覧への枠線ボタンを置く
9. **フッター**（会社情報・ナビゲーション・著作権表示）: 濃い墨色の面に生成り白の小さな文字で、ロゴ・リンク・注釈を静かに並べる

## Imagery

- 自然光が入る明るい室内を、低めの位置から広角で撮る。木の床、漆喰の壁、グレーのソファ、観葉植物を基本にする
- 外観は夕暮れ時に撮り、窓から漏れる暖かい明かりを見せる
- 写真は彩度をやや落とし、明るい室内と暗い帯の明暗差でリズムを作る
- 人物はほとんど入れず、空間そのものを主役にする
- アイコンや間取り図は細いグレーの線画にする
- 装飾は、背景に大きく薄く敷いた欧文の透かし文字と、写真の後ろにずらして置いた淡い色面に限る
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC は本文の幅を 960px ほどにして中央に寄せ、左右は地色で埋める
- PC では写真と文章を 2 カラムにし、セクションごとに左右を入れ替える
- 事例やカードは PC で 2〜3 列、SP で 1 列か横スライドにする
- SP では写真を上、文章を下にして縦に積む
- SP のボタンは幅 80% ほどにし、高さは 44〜48px にする
- 電話番号はタップで発信できるようにし、SP では画面下に追従する CTA を置いてもよい

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

- **ID**: `pk-real-estate-elegant`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「住宅・不動産・リフォーム」・主な雰囲気「上品・高級」の設計書 23 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-real-estate-elegant/
