---
version: alpha
name: Cute Pastel Pink Cosmetics LP Pattern
description: ほぼ白に近い暖かい白地と、淡いピンク・ラベンダーの地色を交互に使う縦長の LP です。ブランドの色はピンク、締め色はチャコールです。見出しは細い欧文セリフ体や筆記体と丸ゴシックの組み合わせにします。ピル型のラベル、ハート形のバッジ、吹き出しで甘さを出します。影はほとんど付けず、パステルのグラデーション、キラキラ、リボンやパールの装飾、目元や質感の接写で透明感を出します。商品のカラーごとに同じ型を繰り返し、テーマ色だけを入れ替えます。
colors:
  background: '#FCFBFA'
  primary: '#E8739A'
  secondary: '#D84E89'
  cta: '#E46892'
  on-cta: '#FEFBFA'
  background-alt: '#F8DBE4'
  tint-1: '#F1CED0'
  tint-2: '#E9D0E5'
  surface: '#FCFBFA'
  accent-1: '#DA839D'
  text: '#4B4448'
  text-muted: '#7E7878'
  line: '#E0C5BE'
  dark-section: '#2A2827'
  cta-accessible: '#D92B66'
  primary-accessible: '#DB2663'
  accent-1-accessible: '#C7446B'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: M PLUS Rounded 1c
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Zen Kaku Gothic New
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: 0.04em
  accent:
    fontFamily: Great Vibes
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.2
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.02em
rounded:
  sm: 4px
  md: 12px
  lg: 24px
  full: 999px
spacing:
  unit: 8px
  card: 18px
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
    height: 48px
  section-label:
    textColor: '{colors.primary}'
    typography: '{typography.accent}'
    height: 30px
  heart-badge:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 60px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.accent-1}'
    typography: '{typography.note}'
    rounded: '{rounded.full}'
    height: 44px
  pill-label:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 26px
  spec-pill:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 28px
  feature-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 200px
  lineup-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.accent}'
    rounded: '{rounded.md}'
    height: 190px
  spec-table:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 110px
  new-bubble:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 32px
---

# DESIGN.md — 化粧品のかわいいパステルピンクLPの型（Cute Pastel Pink Cosmetics LP Pattern）

designmark が、化粧品・スキンケア・主な雰囲気「かわいい」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 化粧品・スキンケア ／ **雰囲気**: かわいい、やさしい・柔らかい、上品・高級、ポップ・元気
- **キーワード**: パステル・ハート・リボン・透明感・くすみピンク・ガーリー
- **地の質感**: なめらかなパステルのグラデーション地にします。その上にキラキラのボケ光、パールの粒、細い白線や金線を重ね、光沢のある甘い質感を出します。面はマットに保ち、装飾だけをつややかにします。
- **形**: ピル型のラベルとボタン、ハート形のバッジ、大きめの角丸カードを使います。写真は全幅の角版と切り抜きを組み合わせ、目元や成分は円形に抜きます。
- **温度感**: 暖かく甘い色調です。ピンクを主役にし、ラベンダーで奥行きと涼しさを足して、チャコールで少しだけ引き締めます。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FCFBFA` | 基本の地（暖かみのある白） | 23% | 集計の代表色 |
| `primary` | `#E8739A` | ブランドピンク（見出し文字・ラベル・ハート） | 6% | 合成 |
| `secondary` | `#D84E89` | 濃いピンクのアクセント面・POINT バッジ | 4% | 集計の代表色 |
| `cta` | `#E46892` | 購入ボタンのマゼンタピンク | 1% | 集計の代表色 |
| `on-cta` | `#FEFBFA` | ボタン上の白文字 | 0% | 集計の代表色 |
| `background-alt` | `#F8DBE4` | 淡いピンクのセクション地 | 10% | 集計の代表色 |
| `tint-1` | `#F1CED0` | くすみピンクの大判帯・紹介パートの地 | 6% | 集計の代表色 |
| `tint-2` | `#E9D0E5` | ラベンダーの地（後半の説明パート） | 5% | 集計の代表色 |
| `surface` | `#FCFBFA` | 白いカード・スペック表のセル | 8% | 集計の代表色 |
| `accent-1` | `#DA839D` | くすみローズのタグ・スペックのピル・小見出し | 1% | 集計の代表色 |
| `text` | `#4B4448` | 見出しと本文の文字（紫がかったチャコール） | 2% | 集計の代表色 |
| `text-muted` | `#7E7878` | 注釈・英字キャプション | 1% | 集計の代表色 |
| `line` | `#E0C5BE` | 仕様表の区切り線・カードの枠線 | 1% | 集計の代表色 |
| `dark-section` | `#2A2827` | ナビゲーションの帯・NEW の吹き出し・締め色 | 4% | 集計の代表色 |
| `cta-accessible` | `#D92B66` | AA を満たす補正値（計算） |  | 計算 |
| `primary-accessible` | `#DB2663` | AA を満たす補正値（計算） |  | 計算 |
| `accent-1-accessible` | `#C7446B` | AA を満たす補正値（計算） |  | 計算 |

- 地は白・淡いピンク・ラベンダーの 3 系統に絞り、セクションごとに切り替えます。同じ地色を続けません。
- 見出し、ラベル、ハートはブランドピンクに統一します。購入ボタンだけは一段濃いマゼンタピンクにして見分けられるようにします。
- 文字は純黒にせず、紫がかったチャコール（#4B4448）にします。注釈には温かいグレーを使います。
- ダークは NEW の吹き出し、ナビゲーションの帯、実績バッジなど小さな面だけに使い、全体を引き締めます。
- 商品カラーごとにテーマ色を決めます。各セクションの地、見出し、ピル、線をその色の系統でそろえます。
- 強調したい語句は太字にせず、ピンクに色を替えるか、淡いピンクのマーカー下線を引きます。
- 濃い地の上では、文字を白抜きにして淡いグローを付けます。
- `button-primary` は文字 `#FEFBFA` × 背景 `#E46892` のコントラスト比が 3.05:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#D92B66`、4.54:1）を使う。
- `heart-badge` は文字 `#FEFBFA` × 背景 `#E8739A` のコントラスト比が 2.77:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#DB2663`、4.56:1）を使う。
- `speech-bubble` は文字 `#DA839D` × 背景 `#FCFBFA` のコントラスト比が 2.63:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-1-accessible`（`#C7446B`、4.55:1）を使う。
- `pill-label` は文字 `#FEFBFA` × 背景 `#E8739A` のコントラスト比が 2.77:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#DB2663`、4.56:1）を使う。
- `spec-pill` は文字 `#FEFBFA` × 背景 `#DA839D` のコントラスト比が 2.64:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-1-accessible`（`#C7446B`、4.56:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FV の欧文ロゴ・商品名・英字の大見出し | 欧文セリフ | Playfair Display | 400 | 44px | 1.1 | 0.02em |
| `headline-lg` | セクションの和文大見出し | 丸ゴシック | M PLUS Rounded 1c | 700 | 30px | 1.3 | 0.03em |
| `headline-md` | カラー紹介のコピー・カードの見出し | ゴシック | Zen Kaku Gothic New | 700 | 20px | 1.4 | 0.05em |
| `headline-sm` | 小見出し・リード | ゴシック | Noto Sans JP | 700 | 16px | 1.4 | 0.05em |
| `body-md` | 特長説明などの本文 | ゴシック | Noto Sans JP | 500 | 13px | 1.8 | 0.04em |
| `accent` | 見出しに添える筆記体の欧文・スペックの数値 | 欧文スクリプト | Great Vibes | 400 | 22px | 1.2 | 0.0em |
| `label-button` | ボタンの文字・ピル型ラベル・バッジ | ゴシック | Noto Sans JP | 700 | 13px | 1.2 | 0.05em |
| `note` | ※ 注釈・英字のキャプション | ゴシック | Noto Sans JP | 400 | 10px | 1.5 | 0.02em |

- 英字の見出し（細いセリフ体か筆記体）を上に、和文見出しを下に置き、2 段で組みます。
- 和文の大見出しは丸ゴシックの太字にします。キーワードだけを大きくし、ピンクに色替えします。
- 本文は中央揃えにし、1 行を短くして 2〜3 行ごとに改行します。カードの中だけは左揃えにします。
- 数値は本文の 3〜5 倍の大きさにし、「ラベル（小）・数値（大）・単位（小）」の 3 段で組みます。
- 強調は太字ではなく、色替えかマーカーで示します。
- 欧文の英字ラベルは大文字にして字間を広げ、両脇にキラ星や点を添えます。
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。ラインナップやカラーバリエーションだけ 2 カラムにする
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 60px、基本単位 8px、カード内 18px（375px 幅換算）
- モデル写真や FV のビジュアルは全幅で大きく見せます。小さなカードに刻みません。
- 各セクションは「英字ラベル → 和文見出し → 写真 → 説明文」の順で縦に積みます。
- カラー紹介は「大判の写真 → スペック 3 枠 → 写真グリッド → 説明」の型をカラーの数だけ繰り返します。
- 写真と本文を交互に積み、余白をたっぷり取ってゆったり見せます。
- 成分フリーなどの円形アイコンは 3〜4 列のグリッドにまとめます。

## Elevation & Depth

- 基本はフラットにします。白カードは影なしか、ごく薄い影にとどめます。
- 立体感は影ではなく、白フチと色フチの二重の縁取りで出します。
- 商品の切り抜き画像だけに、ごく淡いドロップシャドウを付けて浮かせます。
- ハートやバッジには光沢のハイライトを入れ、ぷっくりした立体に見せます。
- 濃い地や写真に載せる白文字には、柔らかい外側グローを付けます。

## Shapes

- **角丸**: 小 4px ／ 中 12px ／ 大 24px。ボタンはピル型。
- **写真の切り抜き**: モデルやシーンの写真は全幅の角版にします。商品は背景を抜いた切り抜きにして、少し傾けて置きます。目元や成分の写真は円形に抜きます。
- **セクション境界**: 基本は直線で地の色を切り替えます。要所には大きな円弧やスカラップ（波形）の縁を使い、細い波線やリボンを添えます。
- 購入ボタンとサブボタンは、どちらも完全なピル型にします。
- スペックの帯、ラベル、タグはピル型にそろえます。
- バッジはハート形か、尻尾の付いた吹き出し形にします。
- カードの角は大きめ（12〜24px）に丸めます。
- 使い方のステップは丸い枠のアイコンを矢印でつなぎます。

## Components

- **購入ピルボタン**（`button-primary`）: マゼンタピンクのピル型ボタンです。白文字を中央に置き、右端に細い山形の矢印を付けます。ピンクからラベンダーへの淡い横グラデーションにしてもかまいません。
- **英字セクションラベル**（`section-label`）: 細いセリフ体か筆記体で書いたピンクの英字を中央に置き、両脇に小さな点やキラ星を添えます。すぐ下に和文見出しを置きます。
- **ハート形の数値バッジ**（`heart-badge`）: ピンクのハートの中に、小さなラベル、大きな数値、小さな単位を 3 段で入れます。光沢のハイライトを付けます。
- **ピル型の吹き出し**（`speech-bubble`）: 白地のピル型に細い色枠を付けた吹き出しです。端に小さな三角を付け、使用感を短い言葉で入れます。周りにハートを散らします。
- **ピル型の見出しラベル**（`pill-label`）: 特長名や POINT 番号を白文字で入れた、ピンクのピル型ラベルです。
- **スペックのピル帯**（`spec-pill`）: 直径などの数値を白文字で載せた、くすみローズの横長のピル帯です。3 つを横に並べます。
- **白い特長カード**（`feature-card`）: パステルの地の上に置く角丸の白カードです。円形の図解やアイコンと、短い説明を入れます。
- **ラインナップカード**（`lineup-card`）: 上に目元の接写、下にカラーごとの色帯と欧文のカラー名を載せたカードです。2 列で並べます。
- **仕様表**（`spec-table`）: 細いピンクベージュの罫線で区切った白いセルの表です。項目のセルは淡いピンクで塗ります。
- **NEW の吹き出しバッジ**（`new-bubble`）: 尻尾の付いた濃色の楕円の吹き出しです。白い欧文で NEW や限定を示し、FV の写真の角に重ねます。

## Do's and Don'ts

**Do**
- セクションごとに、白・淡いピンク・ラベンダーの地色を切り替えます。
- 英字の見出しと和文の見出しを 2 段で組み、甘さと上品さを両立させます。
- ハート、リボン、パール、キラ星などの装飾は余白に小さく散らし、主役の写真を邪魔しないようにします。
- 商品カラーごとに同じレイアウトを繰り返し、テーマ色だけを変えます。
- 目元や質感の接写と、商品単体の切り抜きをセットで見せます。
- 注釈は ※ を付け、対象の説明のすぐ下に小さく置きます。

**Don't**
- 純黒の太いゴシック見出しや、黒ベタの大きな面を使わないでください。
- 原色のビビッドな CTA ボタンや、角張ったボタンは使わないでください。
- ぼかしの大きな影や、重いドロップシャドウは付けないでください。
- 本文を画面幅いっぱいの長い行にしないでください。
- 硬い表や罫線を多用して、事務的に見せないでください。
- 寒色を基本の地にしないでください（水色は商品のテーマ色のときだけにします）。

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（モデルのビジュアルで新作・限定の登場を印象づける）: 全幅のモデル写真に、欧文セリフのロゴを白でグロー付きに重ねます。角に NEW の吹き出しとハートバッジを置き、パステルのボケ光で包みます。
2. **コンセプト**（商品に込めた想いや世界観を詩的に伝える）: 淡いピンクの地に、中央揃えの短い行で詩的なコピーを置きます。筆記体の欧文と小花の装飾を添えます。
3. **ラインナップ**（全カラーを一覧で比べさせる）: 白地に、目元の写真と色帯を組み合わせたカードを 2 列のグリッドで並べます。カラー名は欧文で入れます。
4. **悩みの提起**（季節や場面ごとの悩みに共感させる）: ラベンダーの地に、吹き出しで悩みを 3 つ並べます。下向きの矢印で解決のパートへつなぎます。
5. **特長ポイント**（発色・質感・保湿などのこだわりを説明する）: POINT のピルラベル、丸ゴシックの見出し、接写の写真、説明文の順に縦に積みます。地色を交互に替えます。
6. **特長（成分・安全性）**（成分と安心感を伝える）: 白カードの上に、円形アイコンを 3〜4 列のグリッドで並べます。直下に ※ の注釈を置きます。
7. **スペック**（仕様の数値を示して安心させる）: スペックのピル帯を 3 つ並べ、その下にピンクの罫線の仕様表を置きます。
8. **カラーチャート**（発色の強さや系統で各色の位置づけを整理する）: 淡いピンクの地に縦横の軸を引き、円形の色見本を配置したマップを白カードに載せます。
9. **使い方**（手順の簡単さを伝える）: 丸い枠の番号アイコンを矢印でつなぎ、短い説明を添えて縦に並べます。
10. **イメージモデル紹介**（起用モデルで親近感と後押しをつくる）: パステルのボケを背景にしたポートレートを全幅で見せ、筆記体の名前とプロフィールを中央揃えで置きます。
11. **フッター**（購入先・SNS・ブランドサイトへ誘導する）: マゼンタのピル型購入ボタンを中央に置きます。その下の濃色の帯に、白文字のナビと SNS アイコンを並べます。

## Imagery

- 人物は、単色のパステル背景かピンクのボケ背景の前で正面を向いた、柔らかい自然光のポートレートにします。
- 目元・唇・テクスチャーはマクロで撮り、まつげ、発色、ツヤをはっきり見せます。
- 商品は白背景を抜いた切り抜きにして、斜めや交差で配置し、ごく淡い影を付けます。
- 装飾には、光沢のある 3D のハート、リボン、パール、宝石、十字のキラ星を使い、余白に散らします。
- 地には、パステルのグラデーション、グリッターのボケ光、白い小花のイラストを薄く重ねます。
- 使用イメージの目元写真は、円形か左右対称の横長にクロップします。
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC では、中央に 480〜600px 幅の SP と同じカラムを置き、左右は淡いピンクのグラデーションで埋めます。
- 左右の余白には、ハートやキラキラを固定背景として散らし、世界観を保ちます。
- PC 用に広げる場合は、FV を横長にして左にビジュアル、右にコピーを置きます。
- ラインナップは PC では 3〜4 列に増やしてかまいません。
- カラー紹介は PC では、写真とスペックを左右 2 カラムに並べます。

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

- **ID**: `pk-cosmetics-cute`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「化粧品・スキンケア」・主な雰囲気「かわいい」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-cosmetics-cute/
