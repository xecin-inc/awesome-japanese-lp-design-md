---
version: alpha
name: Cute Pastel Campaign & Giveaway LP Pattern
description: 淡いピンクと生成りの白を地にして、濃いピンクを主役、水色・レモン黄・オレンジを差し色に使うパステル系のキャンペーンLPの型。見出しは極太の丸ゴシックで、リボン帯の見出し、ピル型のCTA、白い角丸カードで賞品と応募手順を見せる。ハート・キラキラ・キャラクターのイラストを散らし、文字は黒ではなく濃い茶色にして甘く温かい雰囲気を保つ。細かい条件は小さな注釈とスクロールする規約ボックスにまとめ、本文の邪魔をしない。
colors:
  primary: '#E8568B'
  background: '#FFFEFC'
  background-alt: '#FBE2E6'
  surface: '#FDFDFC'
  cta: '#E55683'
  on-cta: '#FEFDFD'
  secondary: '#6EC0C8'
  accent-1: '#FEE57E'
  accent-2: '#F18A21'
  accent-3: '#9FC861'
  tint-1: '#F8DDEB'
  tint-2: '#F6D6E0'
  text: '#55423A'
  line: '#B0ABAD'
  dark-section: '#5A201C'
  marker: '#F9F08F'
  cta-accessible: '#DE2861'
  secondary-accessible: '#337F86'
  primary-accessible: '#E01E65'
  accent-2-accessible: '#B3600B'
typography:
  display:
    fontFamily: M PLUS Rounded 1c
    fontSize: 40px
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: M PLUS Rounded 1c
    fontSize: 26px
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0.05em
  headline-md:
    fontFamily: M PLUS Rounded 1c
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Zen Maru Gothic
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.03em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: 0.03em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
  accent:
    fontFamily: Fredoka
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-button:
    fontFamily: M PLUS Rounded 1c
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.05em
rounded:
  sm: 6px
  md: 12px
  lg: 24px
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
    height: 56px
  button-secondary:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 48px
  ribbon-heading:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-md}'
    height: 56px
  prize-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.lg}'
    height: 320px
  count-badge:
    backgroundColor: '{colors.accent-2}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 84px
  step-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 270px
  period-box:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.primary}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 96px
  terms-box:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.note}'
    rounded: '{rounded.md}'
    height: 400px
  anchor-nav:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.sm}'
    height: 50px
---

# DESIGN.md — プレゼントキャンペーンのかわいいLPの型（Cute Pastel Campaign & Giveaway LP Pattern）

designmark が、キャンペーン・プレゼント・主な雰囲気「かわいい」の LP の設計書 37 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: キャンペーン・プレゼント ／ **雰囲気**: かわいい、ポップ・元気、やさしい・柔らかい、情報量多め・訴求型
- **キーワード**: パステル・ハート・リボン見出し・キャラクター・キラキラ・白カード
- **地の質感**: ほぼフラットなパステルの単色面に、白い水玉・ハート・キラキラの地紋を薄く敷く。FVだけは淡いグラデーションや写真のコラージュで華やかにしてよい。影は控えめで、ボタンにだけ下方向のベタ影を付けてぷっくりさせる
- **形**: ピル型ボタン、大きな角丸の白カード、両端をV字に切り込んだリボン帯、正円やハートのバッジ。セクションの境目は波形・スカラップ・雲形にする
- **温度感**: 暖色寄りで甘く明るい。ピンクを主に使い、水色と黄色を少しだけ差して爽やかさを足す

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#E8568B` | ブランドの濃ピンク（リボン帯・ラベル・強調の面） | 6% | 集計の代表色 |
| `background` | `#FFFEFC` | ページの基本地色（生成りの白） | 25% | 集計の代表色 |
| `background-alt` | `#FBE2E6` | 中盤セクションの淡ピンク地 | 12% | 集計の代表色 |
| `surface` | `#FDFDFC` | 賞品カード・手順カード・規約ボックスの白い面 | 14% | 集計の代表色 |
| `cta` | `#E55683` | 応募ボタンのピンク | 1% | 集計の代表色 |
| `on-cta` | `#FEFDFD` | CTA・ピンク帯の上の白文字 | 0% | 集計の代表色 |
| `secondary` | `#6EC0C8` | 水色のサブボタン・期間ボックスの枠 | 3% | 集計の代表色 |
| `accent-1` | `#FEE57E` | レモン黄のキラキラ・装飾 | 2% | 集計の代表色 |
| `accent-2` | `#F18A21` | オレンジの当選数バッジ・山場の差し色 | 1% | 集計の代表色 |
| `accent-3` | `#9FC861` | 黄緑の差し色（ステップ背景・アイコン） | 0% | 集計の代表色 |
| `tint-1` | `#F8DDEB` | 期間リボン・ステップ背景の淡いピンク | 4% | 集計の代表色 |
| `tint-2` | `#F6D6E0` | 内側パネル・吹き出しの淡いピンク | 3% | 集計の代表色 |
| `text` | `#55423A` | 見出し・本文のこげ茶 | 2% | 集計の代表色 |
| `line` | `#B0ABAD` | カード枠・区切り線のグレージュ | 0% | 集計の代表色 |
| `dark-section` | `#5A201C` | フッター・コピーライト帯のチョコ茶 | 4% | 集計の代表色 |
| `marker` | `#F9F08F` | 強調語に引く黄色マーカー | 0% | 集計の代表色 |
| `cta-accessible` | `#DE2861` | AA を満たす補正値（計算） |  | 計算 |
| `secondary-accessible` | `#337F86` | AA を満たす補正値（計算） |  | 計算 |
| `primary-accessible` | `#E01E65` | AA を満たす補正値（計算） |  | 計算 |
| `accent-2-accessible` | `#B3600B` | AA を満たす補正値（計算） |  | 計算 |

- 地の色は生成りの白と淡ピンクの2色を、セクション単位で交互に敷く。単色だけで通さない
- 濃ピンクはリボン見出し・ラベル・CTAに使い、広い面には使わない
- 白はカード・規約ボックスなど情報を載せる面に使い、地との差で浮かせる
- 水色・黄・オレンジ・黄緑は差し色として小さく使う。水色をピンクより多くしない
- 文字は純黒ではなくこげ茶にして、甘く温かい雰囲気を保つ
- 賞品のセクションだけ、オレンジや濃いピンクで色を強めて山場にしてよい
- フッターはチョコ茶で締め、上に載せる文字は白にする
- 注意書きの赤は強調語だけに使い、本文には広げない
- `button-primary` は文字 `#FEFDFD` × 背景 `#E55683` のコントラスト比が 3.45:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#DE2861`、4.51:1）を使う。
- `button-secondary` は文字 `#FEFDFD` × 背景 `#6EC0C8` のコントラスト比が 2.06:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `secondary-accessible`（`#337F86`、4.58:1）を使う。
- `ribbon-heading` は文字 `#FEFDFD` × 背景 `#E8568B` のコントラスト比が 3.37:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#E01E65`、4.55:1）を使う。
- `count-badge` は文字 `#FEFDFD` × 背景 `#F18A21` のコントラスト比が 2.46:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-2-accessible`（`#B3600B`、4.5:1）を使う。
- `period-box` は文字 `#E8568B` × 背景 `#FDFDFC` のコントラスト比が 3.36:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#E01E65`、4.54:1）を使う。
- `anchor-nav` は文字 `#FEFDFD` × 背景 `#E8568B` のコントラスト比が 3.37:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#E01E65`、4.55:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FVのキャンペーンタイトル・ロゴ風の大見出し | 丸ゴシック | M PLUS Rounded 1c | 900 | 40px | 1.2 | 0.02em |
| `headline-lg` | セクションの大見出し（白文字＋こげ茶の縁取りも可） | 丸ゴシック | M PLUS Rounded 1c | 900 | 26px | 1.3 | 0.05em |
| `headline-md` | リボン帯の見出し・賞品名 | 丸ゴシック | M PLUS Rounded 1c | 700 | 20px | 1.4 | 0.03em |
| `headline-sm` | カード内の小見出し・期間ラベル・強調のリード | 丸ゴシック | Zen Maru Gothic | 700 | 16px | 1.5 | 0.03em |
| `body-md` | 説明の本文・賞品の説明 | ゴシック | Noto Sans JP | 500 | 14px | 1.8 | 0.03em |
| `note` | ※の注釈・応募規約 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.0em |
| `accent` | STEP番号・英字ラベル・見出しに添える英字 | 欧文サンセリフ | Fredoka | 700 | 20px | 1.2 | 0.02em |
| `label-button` | ボタン・タブの文字 | 丸ゴシック | M PLUS Rounded 1c | 700 | 16px | 1.3 | 0.05em |

- 見出しは極太の丸ゴシックにする。明朝や細い角ゴシックは見出しに使わない
- セクション見出しは中央揃えにし、上に小さな英字ラベルを添えてセットにする
- STEP番号は丸みのある大きな欧文の太字にし、カードの上辺に半分重ねる
- 本文は中央揃えにして短い行で改行する。行間は1.8前後にする
- 注釈は※から始めるぶら下げインデントにし、本文より明らかに小さいグレー寄りの文字にする
- 強調したい語には黄色のマーカーか小さなピンクの点を付ける
- 決まり文句の小見出しは「＼ ／」で挟んで目立たせる
- 規約の文だけは左揃えの細字で詰めて組む
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム、中央揃え
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- 見出しリボンは中央に置き、上に48pxほど、下に24pxほどの余白をとる
- カードは画面幅の約85〜90%で中央に置く
- CTAボタンは画面幅の70〜90%で中央に置き、ページ内で3回以上くり返す
- 応募手順はカードを縦に並べ、間を下向きの▼でつなぐ
- 賞品カードは縦に並べ、左右の余白を広くとる
- 余白は8pxの倍数でそろえる

## Elevation & Depth

- 基本はフラットにし、白カードは地の色との差だけで浮かせる
- 主CTAには下方向へずらした濃い色のベタ影を付けて、ぷっくりした押せる感じを出す
- 吹き出しや白いボタンには、ごく薄いグレーの影だけ付ける
- 奥行きは、キャラクター・ラベル・写真を重ねたり少し傾けたりして出す

## Shapes

- **角丸**: 小 6px ／ 中 12px ／ 大 24px。ボタンはピル型。
- **写真の切り抜き**: 賞品や商品は白背景で切り抜き、角丸の白カードの中央に置く。写真は白フチを付けて数度傾けるとかわいく見える
- **セクション境界**: 直線では区切らず、波形・スカラップ・雲形で地の色を切り替える
- ボタン・期間ラベル・入力欄はピル型にする
- カードは角丸24pxにし、2〜3pxのピンクの枠を付けてもよい
- 当選数や賞の等級は正円かハートのバッジにする
- リボン見出しは両端をV字に切り込んだ横長の帯にする
- 見出しの左右には小さなハートやキラキラを置く
- 規約ボックスは角丸12pxにする

## Components

- **応募ボタン**（`button-primary`）: ピンクのピル型で白い太字を中央に置く。下に濃いピンクのベタ影を付け、右端に矢印を添える
- **サブボタン**（`button-secondary`）: 水色のピル型ボタン。詳細を見る・ページ内移動などの補助に使う
- **リボン見出し**（`ribbon-heading`）: 両端をV字に切り込んだ濃ピンクの帯に白文字を載せる。上に小さな英字ラベルを添え、全セクションで同じ形にそろえる
- **賞品カード**（`prize-card`）: 白い角丸カードの上に賞名ラベルを置き、切り抜いた賞品画像・賞品名・当選数を縦に並べる。画像を枠から少しはみ出させてもよい
- **当選数バッジ**（`count-badge`）: 直径約84pxのオレンジの正円。大きな数字と小さな単位を白で入れ、賞品カードの角に重ねる
- **応募ステップカード**（`step-card`）: 白いカードの上辺にSTEP番号を半分重ね、簡単なアイコンかスマホ画面の図と短い説明を置く。カードの間は▼でつなぐ
- **応募期間ボックス**（`period-box`）: 上に濃ピンクのピル型ラベル、その下の白地に日付を大きな太字で入れる
- **規約スクロールボックス**（`terms-box`）: 白い角丸の枠で、中だけ縦にスクロールする。小さな文字で規約を左揃えにして詰める
- **ページ内ナビ**（`anchor-nav`）: FVの下に置く2×2のピンクのタイル。項目名の下に小さな下向き矢印を付ける

## Do's and Don'ts

**Do**
- 地を生成りの白と淡ピンクで交互にし、ピンク・白・水色の3色を中心に組む
- 見出しはすべて同じリボン帯と英字ラベルの型でそろえる
- ハート・キラキラ・水玉を余白にうっすら散らす
- 丸い線のキャラクターをカードの縁から顔だけのぞかせる
- CTAはFVの直後・賞品の後・応募方法の後など3回以上くり返す
- 細かい条件は※の注釈と規約ボックスにまとめ、本文を圧迫しない

**Don't**
- ボタンを四角にしたり、影のない平らな形にしない
- 見出しに明朝や細い角ゴシックを使わない
- 純黒の文字や、黒・原色の面を使わない
- セクションの境目を硬い直線でぶつけない
- 水色や赤をピンクより多く使わない
- 注釈を本文と同じ大きさにしない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（キャンペーン名と世界観、賞品の目玉をひと目で伝える）: パステルの地に極太の丸ゴシックのタイトルを中央に置き、切り抜いた賞品とキャラクター、キラキラを周りに散らす。下端は波形で区切る
2. **ページ内ナビ**（賞品・応募方法・規約へすぐ移動させる）: 2×2のピンクのタイルに白文字と下向き矢印を付ける
3. **キャンペーン概要**（応募期間と応募条件を短く示す）: リボン見出しの下に期間ボックスを置き、条件は中央揃えの短い文にする
4. **賞品**（賞品と当選数で応募したい気持ちを高める）: 淡ピンク地に白い角丸の賞品カードを縦に並べ、角に当選数のバッジを重ねる。差し色を強めて山場にする
5. **対象商品**（応募の対象になる商品の範囲を示す）: 生成りの地に、切り抜いた商品パッケージを2列で並べ、下に商品名を小さく入れる
6. **応募方法**（応募までの手順をわかりやすく示す）: STEP番号付きの白カードを縦に3〜4枚並べ、間を▼でつなぐ。図はスマホ画面を簡単にしたもの
7. **CTA**（すぐに応募させる）: 影付きのピンクのピル型ボタンを中央に置き、上に「＼ ／」で挟んだ一言を添える
8. **応募規約**（条件と注意事項をもれなく示す）: リボン見出しの下に、内部をスクロールする白い規約ボックスを置く
9. **お問い合わせ**（事務局の窓口を伝える）: 白い角丸の枠に事務局名・受付時間を小さめの文字で中央にまとめる
10. **フッター**（運営会社とコピーライトを示す）: 雲形の境目の上にチョコ茶の帯を敷き、白文字で運営情報を入れる

## Imagery

- 賞品や商品は白背景で正面から撮って切り抜き、少し傾けたり重ねたりして楽しげに並べる
- キャラクターは丸みのある太い茶色の線とフラットな塗りで描き、カードの縁から顔をのぞかせる
- 四芒星のキラキラ・ハート・リボンを見出しの左右や余白に散らす
- 地紋には白い水玉やハートの柄を薄く敷き、紙雑貨のような質感にする
- 手順の説明はスマホの枠の中に、画面を簡単にした図を入れる
- 写真は明るい自然光で撮り、彩度をやや高めにして甘く見せる
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC版の画像はないため、以下はPCに広げるときの推奨
- PCではコンテンツを中央の約480〜720px幅に置き、地紋とパステルの地は左右いっぱいに広げる
- 応募ステップはPCで3〜4列の横並びにし、▼を右向きの矢印に変える
- 賞品カードはPCで2〜3列のグリッドにする
- ページ内ナビはPCで1行4列の横並びにする
- CTAボタンは最大幅を約400pxにして中央に置く

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

- **ID**: `pk-campaign-cute`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「キャンペーン・プレゼント」・主な雰囲気「かわいい」の設計書 37 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-campaign-cute/
