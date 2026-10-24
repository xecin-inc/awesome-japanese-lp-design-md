---
version: alpha
name: Elegant Japanese Supplement LP Pattern
description: 白と淡いグレーの地を基本にして、明朝の大見出し、シャンパンゴールドの細い線と数字、深紅のブランド色で格を出す健康食品LPの型です。悩みの提起や実績は黒に近い暗い面で引き締め、成分は円形バッジで、お客様の声は白いカードで見せます。最後はコーラルのピル型CTA、注釈、FAQで締めます。訴求する情報は多くても、余白と細い罫線で落ち着いて見えるようにするのが基本です。
colors:
  primary: '#A70A13'
  secondary: '#851C1A'
  background: '#FDFCFC'
  background-alt: '#F4F3F3'
  surface: '#F7F7F5'
  dark-section: '#181715'
  on-dark: '#F8F8F8'
  accent-1: '#C39744'
  tint-1: '#F3DFDA'
  tint-2: '#F8F1E9'
  text: '#323030'
  text-body: '#3C3C3C'
  text-muted: '#848585'
  line: '#E0DDDA'
  cta: '#EB7877'
  on-cta: '#FDFDF9'
  cta-accessible: '#E02B29'
  text-muted-accessible: '#737474'
  accent-1-accessible: '#7E6028'
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.04em
  headline-lg:
    fontFamily: Noto Serif JP
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.38
    letterSpacing: 0.045em
  headline-md:
    fontFamily: Noto Serif JP
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.045em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.04em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.035em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
  accent:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.2
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.05em
rounded:
  sm: 4px
  md: 8px
  lg: 16px
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
    height: 57px
  button-secondary:
    backgroundColor: '{colors.text-muted}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 50px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 96px
  check-list:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    height: 44px
  ingredient-circle:
    backgroundColor: '{colors.tint-1}'
    textColor: '{colors.accent-1}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.full}'
    height: 104px
  point-label:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-dark}'
    typography: '{typography.accent}'
    rounded: '{rounded.full}'
    height: 40px
  voice-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 235px
  band-heading:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-md}'
    height: 48px
  faq-item:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 59px
  note-text:
    textColor: '{colors.text-muted}'
    typography: '{typography.note}'
    height: 32px
---

# DESIGN.md — 健康食品の上品・高級なLPの型（Elegant Japanese Supplement LP Pattern）

designmark が、健康食品・サプリメント・主な雰囲気「上品・高級」の LP の設計書 32 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 健康食品・サプリメント ／ **雰囲気**: 上品・高級、情報量多め・訴求型、信頼・誠実、やさしい・柔らかい
- **キーワード**: 明朝の大見出し・シャンパンゴールド・深紅・黒×金・余白多め・数値訴求
- **地の質感**: 白〜生成りの地はほぼ無地でフラットにする。金色は細い線とメタリックなグラデーションで足す。暗いセクションには金粉のボケや石目の粒子をうっすら重ね、商品や液体は光沢とハイライトでつややかに見せる。
- **形**: 直線の全幅の帯と正円のバッジを主に使う。カードと写真は角を立てるか小さな角丸にする。ボタンだけはピル型。ファーストビューの下など要所では、ゆるい弧や金線付きの波形で区切る。
- **温度感**: やや暖かいニュートラル。白とグレーの清潔さを土台に、金と深紅で温かみと華やかさを加え、黒い面で全体を引き締める。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#A70A13` | ブランドの深紅（見出しの強調語・帯見出し・オファー枠） | 8% | 集計の代表色 |
| `secondary` | `#851C1A` | ボルドー（POINTの番号・補助の帯・締めのブロック） | 6% | 集計の代表色 |
| `background` | `#FDFCFC` | ページの基本の白地 | 25% | 集計の代表色 |
| `background-alt` | `#F4F3F3` | セクションを交互に切り替える淡いグレーの地 | 9% | 集計の代表色 |
| `surface` | `#F7F7F5` | Q&A・説明カードの面 | 8% | 集計の代表色 |
| `dark-section` | `#181715` | 悩み・実績・リスク訴求の黒い地 | 5% | 集計の代表色 |
| `on-dark` | `#F8F8F8` | 暗い地の上の白文字 | 2% | 集計の代表色 |
| `accent-1` | `#C39744` | シャンパンゴールド（飾り線・数値・欧文見出し） | 2% | 集計の代表色 |
| `tint-1` | `#F3DFDA` | お客様の声・成分カードのくすみピンクの地 | 6% | 集計の代表色 |
| `tint-2` | `#F8F1E9` | 成分説明などに使う生成りの地 | 4% | 集計の代表色 |
| `text` | `#323030` | 見出しの文字 | 3% | 集計の代表色 |
| `text-body` | `#3C3C3C` | 本文の濃いグレー | 2% | 集計の代表色 |
| `text-muted` | `#848585` | 出典・注釈のグレー | 1% | 集計の代表色 |
| `line` | `#E0DDDA` | カードの区切り・薄い罫線 | 0% | 合成 |
| `cta` | `#EB7877` | 主CTAのコーラルのボタン | 1% | 集計の代表色 |
| `on-cta` | `#FDFDF9` | CTA上の白文字 | 0% | 集計の代表色 |
| `cta-accessible` | `#E02B29` | AA を満たす補正値（計算） |  | 計算 |
| `text-muted-accessible` | `#737474` | AA を満たす補正値（計算） |  | 計算 |
| `accent-1-accessible` | `#7E6028` | AA を満たす補正値（計算） |  | 計算 |

- 地の色は白と淡いグレーを交互に使ってセクションを区切る。お客様の声や成分にだけ、くすみピンクか生成りの地を使う。
- 深紅は見出しの強調語、帯見出し、オファー枠に限って使う。広い面には使わない。
- 金は細い罫線、欧文の飾り見出し、配合量などの数値に使う。面にするときはメタリックなグラデーションにする。
- 黒い地は悩みの提起や実績など、引き締めたいセクションにだけ1〜2回使う。上に載せる文字は白か金にする。
- 主CTAだけをコーラルにして、ページの中でいちばん目立たせる。サブのボタンはグレーか細い枠線にする。
- マーカーの黄色は本文の重要語に細く引く程度にとどめ、見出しには使わない。
- `button-primary` は文字 `#FDFDF9` × 背景 `#EB7877` のコントラスト比が 2.75:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#E02B29`、4.53:1）を使う。
- `button-secondary` は文字 `#FDFDF9` × 背景 `#848585` のコントラスト比が 3.63:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `text-muted-accessible`（`#737474`、4.6:1）を使う。
- `ingredient-circle` は文字 `#C39744` × 背景 `#F3DFDA` のコントラスト比が 2.09:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-1-accessible`（`#7E6028`、4.56:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビュー・セクションの大見出し | 明朝 | Shippori Mincho | 700 | 42px | 1.3 | 0.04em |
| `headline-lg` | セクション見出し・価格のオファー見出し | 明朝 | Noto Serif JP | 700 | 30px | 1.38 | 0.045em |
| `headline-md` | 中見出し・金色の明朝見出し | 明朝 | Noto Serif JP | 700 | 22px | 1.4 | 0.045em |
| `headline-sm` | カード内の小見出し・円バッジのラベル・年代の表記 | ゴシック | Noto Sans JP | 700 | 17px | 1.5 | 0.04em |
| `body-md` | 本文・説明文 | ゴシック | Noto Sans JP | 400 | 14px | 1.8 | 0.035em |
| `note` | 出典・定期購入の注意書き・※注釈 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.0em |
| `accent` | 和文見出しの上に置く欧文の飾り見出し・POINT番号・価格の大きな数字 | 欧文セリフ | Playfair Display | 400 | 26px | 1.2 | 0.0em |
| `label-button` | ボタンの文字・帯見出しのラベル | ゴシック | Noto Sans JP | 700 | 16px | 1.3 | 0.05em |

- 情緒に訴える見出しは明朝、価格・条件・使い方の説明はゴシックで書き分ける。
- 大見出しは強調語だけを深紅か金で1.3〜1.5倍に大きくし、助詞は小さく組んで抑揚をつける。
- 和文見出しの上に、金色の細いセリフ体の欧文を小さめに添える。
- 数字（配合量・実績・価格）はセリフ体の欧文で、和文の約1.5〜2倍の大きさにする。単位は数字の半分ほどにする。
- 本文はゴシックで、行間は1.8前後と広めに取る。太字の多用は避ける。
- 注釈は10pxのグレーで、該当するブロックのすぐ下に置く。
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SPは1カラム。特長や成分のバッジだけ2〜3列に並べる
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 56px、基本単位 8px、カード内 20px（375px 幅換算）
- セクションは全幅で地の色を切り替えて区切り、見出しと画像は中央揃えにする。
- 見出しは「欧文の飾り見出し → 和文の明朝見出し → 金の細線」の順に積み、形をそろえる。
- 特長や成分は、正円のバッジを3つ横に並べるか、2×2のグリッドで見せる。
- オファーのブロックは、同じ形で数セクションおきに繰り返す。
- CTAの直下には、定期購入の条件と注釈を必ず置く。
- FAQ・商品情報の表・会社情報は、ページの末尾にまとめる。

## Elevation & Depth

- 影はほとんど使わず、地の色の差と細い罫線で階層をつける。
- 商品パッケージにだけ、柔らかい落ち影を付けて浮かせる。
- 金の円バッジは、内側にハイライトを入れたグラデーションで軽い立体感を出す。
- 暗いセクションでは、金粉のボケ光を散らして奥行きを出す。
- 主CTAには、下に薄い影を付ける程度にとどめる。

## Shapes

- **角丸**: 小 4px ／ 中 8px ／ 大 16px。ボタンはピル型。
- **写真の切り抜き**: 人物は全幅で裁ち落とす。成分・原料の写真は正円に切り抜いて金の細い枠を付け、商品は白地に切り抜いて余白を広く取る。
- **セクション境界**: 基本は直線で、地の色を切り替える。ファーストビューの下や章の変わり目だけ、ゆるい弧や金線付きの波形を使う。
- CTAとラベルはピル型にする。
- 成分・実績・特長は正円のバッジにする。
- カード・写真・帯見出しは、角を立てるか4px程度の小さな角丸にする。
- FAQのバーは白で、8px程度の角丸にする。
- 飾り線は1px前後の細い金線にする。

## Components

- **主CTAボタン**（`button-primary`）: 横幅いっぱいに近いコーラルのピル型ボタン。白い太字のゴシックで、右端に細い矢印を付け、下に薄い影を落とす。
- **サブ購入ボタン**（`button-secondary`）: 単品購入などに使う、グレーのピル型ボタン。主CTAより小さく控えめにする。
- **欧文付きの見出し**（`section-heading`）: 金色のセリフ体の欧文を上に小さく置き、その下に明朝の和文見出しと金の細線を中央揃えで重ねる。
- **悩みのチェックリスト**（`check-list`）: 黒い地に金色のチェックボックスを置き、白い文字で悩みを3〜5個並べる。一部の語だけを金色にする。
- **成分の円バッジ**（`ingredient-circle`）: 淡いピンクの正円に金の細い枠を付け、成分名と金の配合量の数値を入れる。3列に並べる。
- **POINT番号ラベル**（`point-label`）: ボルドーのピル型か細い金線の円に、セリフ体で番号を入れ、特長ブロックの左上に重ねる。
- **お客様の声カード**（`voice-card`）: くすみピンクの地の上に白いカードを置く。年代を書いた丸バッジと人物写真を添え、明朝の小見出し、ゴシックの本文、注釈の順に並べる。
- **深紅の帯見出し**（`band-heading`）: 全幅の深紅の帯に、白い明朝の見出しを中央揃えで置く。オファーや章の導入に使う。
- **FAQバー**（`faq-item`）: グレーの地に白い角丸のバーを置き、金のQ、質問文、下向きの山形を並べる。回答はゴシックの本文で書く。
- **注釈**（`note-text`）: 各ブロックとCTAの直下に置く、10pxのグレーの※注釈。

## Do's and Don'ts

**Do**
- 見出しは明朝でそろえ、強調語だけを深紅か金で大きくする。
- 金は細い線とグラデーションに限って、控えめに使う。
- 白とグレーの地を交互に使い、黒い面は要所だけに入れてリズムをつくる。
- 配合量や実績は大きな数字で見せ、※注釈を必ず添える。
- 商品は白地に切り抜き、周りの余白を広く取る。
- オファーのブロックは同じ形で繰り返し、CTAの下に条件を明記する。

**Don't**
- 丸ゴシックやポップな手書き文字を見出しに使わない。
- 深紅や金の面を、ページの途中で広く多用しない。
- 濃い影や、立体的すぎるカード・ボタンを並べない。
- 見出しをすべて同じサイズで並べない。
- 注釈を省いて、効果を言い切る表現にしない。
- 原色の黄色や青を、装飾として散らさない。

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（ブランドの格と、商品の魅力・価格を一目で伝える）: 光沢のある背景に商品を大きく置き、明朝の大見出し、金の欧文、円バッジ3つと主CTAを重ねる。下端はゆるい弧で区切る。
2. **実績・権威**（販売実績やランキングで信頼を補強する）: 黒い地に、金の月桂冠の飾りとセリフ体の大きな数字を並べ、下に注釈を置く。
3. **悩みの提起**（年齢や生活習慣による悩みに共感する）: 暗いトーンの人物写真に、金のチェックリストと白い明朝のコピーを重ねる。
4. **事実の提示**（成分が不足していく理由を示し、補給の必要性を伝える）: 淡いグレーの地に、シンプルなグラフと強調語にマーカーを引いた本文を置く。
5. **商品紹介・解決策**（商品を解決策として提示する）: 白地に切り抜いた商品を置き、深紅の帯見出しとPOINTラベル付きの特長を縦に並べる。
6. **成分解説**（成分のこだわりと配合量を伝える）: 生成りの地に成分の円バッジを3列で並べ、金の数値と注釈を添える。
7. **お客様の声**（実感の声で購入を後押しする）: くすみピンクの地に白いカードを縦に積み、年代のバッジと注釈を付ける。
8. **ブランドストーリー**（開発の想いや希少性を伝える）: 全幅の写真に明朝のコピーを重ね、余白を広く取って語る。
9. **オファー・CTA**（定期購入の価格を提示し、申し込みを促す）: 深紅の枠に白いパネルを置き、価格を大きな数字で見せる。その下に主CTA、サブボタン、条件の注釈を並べる。
10. **よくある質問**（購入前の不安を解消する）: グレーの地に白いFAQバーを縦に並べ、最後に商品情報の表と主CTAを置く。

## Imagery

- 商品ボトルや箱は白地に切り抜き、光沢と細い光の筋を加えて、薄い落ち影で浮かせる。
- 背景には、シルクや金色の液体、しずく、ボケ光など、光沢のある抽象的な写真を淡く敷く。
- 人物は40〜50代の女性を自然光の生活シーンで撮り、顔は控えめに写す。
- 原料や成分は高い明度で寄って撮り、正円に切り抜く。
- 暗いセクションは、モノクロ寄りの人物写真に金粉のボケを重ねる。
- 装飾として、葉の線画や筆記体の欧文を淡く重ねる。
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PCでは、幅750px前後のSPレイアウトを中央に置き、左右を淡いグレーか生成りの地で埋める。
- ファーストビューだけはPCで全幅にし、左に見出し、右に商品を置く2カラムにする。
- 成分の円バッジやPOINTは、PCで横並びの列数を増やしてよい。
- 本文の幅はPCでも640px前後に抑え、1行を長くしすぎない。
- 主CTAは、PCでは最大幅480px前後にして中央に置く。

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

- **ID**: `pk-supplements-elegant`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「健康食品・サプリメント」・主な雰囲気「上品・高級」の設計書 32 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-supplements-elegant/
