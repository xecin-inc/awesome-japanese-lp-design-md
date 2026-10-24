---
version: alpha
name: Gentle Warm Clinic LP Pattern
description: ほぼ白の生成り地に、淡いベージュ地のセクションを交互に挟みます。見出し・数字・ボタンには温かいオレンジを集め、医療の冷たさを抑えて安心感を出す型です。文字は真っ黒を避けて墨色や焦げ茶で組み、行間を約 1.9 と広く取ります。ボタンは角丸のピル型、カードは 12px の角丸、境界は弧や波線にして全体をやわらかく見せます。人物は手描き風の線画イラストか自然光の明るい写真にし、余白を広く取ります。信頼感を損なわない程度に、地域の医院らしい親しみを添えます。
colors:
  primary: '#EE8430'
  background: '#FCFCFA'
  background-alt: '#F9F6F3'
  surface: '#FBFBFB'
  cta: '#F27535'
  on-cta: '#FEFCF9'
  text: '#353534'
  text-body: '#504B48'
  line: '#D9D9D5'
  secondary: '#88CEB1'
  tint-1: '#FBF6EC'
  tint-2: '#FDF0F0'
  accent-1: '#E4C348'
  accent-2: '#9AC72F'
  dark-section: '#3A3734'
  on-dark: '#FBFCFA'
  cta-accessible: '#C84C0D'
  primary-accessible: '#B85A0F'
typography:
  display:
    fontFamily: Zen Kaku Gothic New
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0.08em
  headline-lg:
    fontFamily: Zen Kaku Gothic New
    fontSize: 23px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.08em
  headline-md:
    fontFamily: Zen Kaku Gothic New
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.06em
  headline-sm:
    fontFamily: Zen Kaku Gothic New
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.05em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0.055em
  note:
    fontFamily: Noto Sans JP
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.03em
  accent:
    fontFamily: Montserrat
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.055em
rounded:
  sm: 6px
  md: 12px
  lg: 24px
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
    backgroundColor: '{colors.cta}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 48px
  button-outline:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 40px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 90px
  feature-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.md}'
    height: 200px
  point-badge:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.accent}'
    rounded: '{rounded.full}'
    height: 72px
  check-list:
    backgroundColor: '{colors.tint-1}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 40px
  voice-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 180px
  faq-item:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    height: 64px
  hours-table:
    textColor: '{colors.text}'
    typography: '{typography.note}'
    height: 120px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.lg}'
    height: 44px
---

# DESIGN.md — クリニック・医療のやさしく柔らかい LP の型（Gentle Warm Clinic LP Pattern）

designmark が、医療・クリニック・ヘルスケア・主な雰囲気「やさしい・柔らかい」の LP の設計書 24 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 医療・クリニック・ヘルスケア ／ **雰囲気**: やさしい・柔らかい、信頼・誠実、ナチュラル、清潔・爽やか
- **キーワード**: 生成り地・温かいオレンジ・手描き線画イラスト・余白多め・角丸カード・有機的な曲線
- **地の質感**: 影をほぼ使わないフラットな単色面が基本です。生成りの白と淡いベージュの明度差でセクションを分け、ところどころに淡いパステルの円や紙のようなやわらかい質感を添えます。
- **形**: ボタンはピル型、カードは中くらいの角丸にします。人物や悩みのイラストは正円に切り抜きます。セクション境界には大きな弧や波線を使い、直線的な硬さを避けます。
- **温度感**: 暖色寄りで明るく穏やかにします。オレンジとベージュでぬくもりを出し、白地とミントの差し色で医療らしい清潔感を残します。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#EE8430` | 見出しの文字・短い下線・番号・バッジに使う主色（温かいオレンジ） | 6% | 合成 |
| `background` | `#FCFCFA` | ページ全体の地色（ほぼ白の生成り） | 41% | 集計の代表色 |
| `background-alt` | `#F9F6F3` | お客様の声・よくある質問などに交互に敷く淡いベージュ地 | 8% | 集計の代表色 |
| `surface` | `#FBFBFB` | 白いカード・パネルの面 | 10% | 集計の代表色 |
| `cta` | `#F27535` | 予約・申込ボタンや丸矢印の塗り | 1% | 集計の代表色 |
| `on-cta` | `#FEFCF9` | ボタン上の白文字 | 0% | 集計の代表色 |
| `text` | `#353534` | 見出し・本文の墨色 | 2% | 合成 |
| `text-body` | `#504B48` | 本文に使う、やわらかい焦げ茶グレー | 2% | 集計の代表色 |
| `line` | `#D9D9D5` | 区切り線・カードの枠・表の罫線 | 0% | 集計の代表色 |
| `secondary` | `#88CEB1` | 診療科アイコンの地・小見出しに使うミントグリーン | 3% | 集計の代表色 |
| `tint-1` | `#FBF6EC` | 解説ボックスやパネルの淡いクリーム地 | 4% | 集計の代表色 |
| `tint-2` | `#FDF0F0` | 見出しの下線マーカーや注意喚起に使う淡いピンク地 | 2% | 集計の代表色 |
| `accent-1` | `#E4C348` | 実績の数字・装飾の丸・イラストの差し色（山吹） | 1% | 集計の代表色 |
| `accent-2` | `#9AC72F` | チャット相談などサブ導線の黄緑 | 0% | 集計の代表色 |
| `dark-section` | `#3A3734` | フッターの暗い茶墨色の地 | 2% | 集計の代表色 |
| `on-dark` | `#FBFCFA` | フッター上の白文字 | 0% | 集計の代表色 |
| `cta-accessible` | `#C84C0D` | AA を満たす補正値（計算） |  | 計算 |
| `primary-accessible` | `#B85A0F` | AA を満たす補正値（計算） |  | 計算 |

- 地は生成りの白を基本にし、淡いベージュやクリームのセクションを交互に挟んで区切る。彩度の高いベタ面の帯は使わない
- オレンジは見出しの強調語・番号・短い下線・ボタンに集める。広い面には塗らない
- 文字は真っ黒を使わない。見出しは墨色、本文は焦げ茶グレーにして柔らかく見せる
- ミントや黄緑は、診療科アイコンやサブ導線の差し色として小さく使う
- 淡いピンクやクリームは、マーカー・解説ボックス・注意喚起の地に限って使う
- 暗い色はフッターだけに使う。その上の文字は白にする
- `button-primary` は文字 `#FEFCF9` × 背景 `#F27535` のコントラスト比が 2.78:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#C84C0D`、4.56:1）を使う。
- `button-outline` は文字 `#EE8430` × 背景 `#FBFBFB` のコントラスト比が 2.54:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#B85A0F`、4.5:1）を使う。
- `point-badge` は文字 `#FEFCF9` × 背景 `#EE8430` のコントラスト比が 2.57:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#B85A0F`、4.55:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューの大きなキャッチコピー | ゴシック | Zen Kaku Gothic New | 700 | 28px | 1.45 | 0.08em |
| `headline-lg` | セクション見出し | ゴシック | Zen Kaku Gothic New | 700 | 23px | 1.5 | 0.08em |
| `headline-md` | 特長の見出し・リード見出し | ゴシック | Zen Kaku Gothic New | 700 | 17px | 1.5 | 0.06em |
| `headline-sm` | カードの小見出し・FAQ の質問・電話番号 | ゴシック | Zen Kaku Gothic New | 700 | 16px | 1.5 | 0.05em |
| `body-md` | 本文・説明文 | ゴシック | Noto Sans JP | 400 | 14px | 1.9 | 0.055em |
| `note` | 注釈・日付・診療時間表の補足 | ゴシック | Noto Sans JP | 400 | 11px | 1.6 | 0.03em |
| `accent` | 英字ラベル・POINT 番号・STEP 表記・料金や実績の数字 | 欧文サンセリフ | Montserrat | 600 | 22px | 1.2 | 0.02em |
| `label-button` | ボタン・リンクの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.3 | 0.055em |

- 字間は 0.05〜0.08em と広めにし、本文の行間は 1.9 前後でゆったり組む
- 太字（700）は見出しとボタンだけに使い、本文は 400 で軽く見せる
- 見出しは、小さな英字ラベル、日本語見出し、短い色付きの下線の 3 段で中央にそろえる
- 強調は、オレンジの文字・淡いマーカー・太字のうち 1〜2 種類に絞る
- 数字や番号は欧文サンセリフで大きくし、和文とは書体を分けてリズムを出す
- 注釈は 11px 前後で、必要な場所に小さく必ず添える
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。カードは縦に積むか 2 列のグリッドにする
- **本文ブロックの幅**: 画面幅の約 89%
- **余白**: セクション間 72px、基本単位 8px、カード内 20px（375px 幅換算）
- 本文ブロックは画面幅の約 89% にし、左右に均等な余白を残す
- セクションの間隔は 72px 前後を基準にし、余白で詰まった印象を避ける
- カードは白の角丸で、イラストまたは写真、見出し、本文の順に縦に並べる
- ボタンはブロックの最後に中央そろえで 1 つ置き、カード内では横幅いっぱいにする
- CTA の前には、行動を促す短い文を 2〜3 行置く
- お知らせは細い横線で区切ったリストにする

## Elevation & Depth

- 影はほぼ使わない。カードは地色との明度差と細い枠で浮かせる
- 主 CTA ボタンにだけ、下方向へごく小さく淡い影を付ける
- ファーストビューの診療時間カードや吹き出しには、ごく薄くぼかした影を付けてよい
- FAQ やお知らせは影なしにして、細い罫線だけで区切る

## Shapes

- **角丸**: 小 6px ／ 中 12px ／ 大 24px。ボタンはピル型。
- **写真の切り抜き**: 人物や悩みのイラスト・手元の写真は正円に切り抜く。説明用の写真は角丸 12px の四角にする。ファーストビューの写真は雲形などの不定形マスクにしてもよい
- **セクション境界**: 大きな弧やゆるい波線で背景色を切り替える。直線で区切る場合は、色の差を淡く抑える
- ボタンはすべてピル型にし、右端に小さな丸矢印か三角を付ける
- 角の尖った写真やカードを使わない
- 番号バッジや診療科アイコンは正円の地に入れる
- 区切りには細い実線か点線を使う
- 写真の背後に淡い色の円やブロブを重ねて、やわらかさを出す

## Components

- **予約ピルボタン**（`button-primary`）: オレンジのピル型ボタンに白文字を置き、右端に白い丸矢印を付ける。下にごく淡い影を落とす
- **サブ導線の枠線ボタン**（`button-outline`）: 白地にオレンジの細い枠とオレンジの文字を置くピル型ボタン。一覧ページやメール問い合わせへの導線に使う
- **3 段のセクション見出し**（`section-heading`）: 小さな英字ラベル、日本語見出し、短いオレンジの下線を中央に縦に重ねる
- **番号付き特長カード**（`feature-card`）: 白い角丸カードの上部に、円で切り抜いたイラストか角丸の写真を置く。続けて大きな欧文の番号、見出し、本文を並べる
- **POINT 番号バッジ**（`point-badge`）: オレンジの正円の中に、小さな POINT の文字と大きな 2 桁の番号を入れる。左右には細い罫線を伸ばす
- **お悩みチェックリスト**（`check-list`）: オレンジのチェックアイコンと点線の下線を付けた項目を縦に並べ、キーワードに淡いマーカーを引く
- **お客様の声カード**（`voice-card`）: 白い角丸カードに、丸い似顔絵アイコン、短い感想、属性ラベルを入れる。淡いベージュ地の上に並べる
- **FAQ アコーディオン**（`faq-item`）: Q と太字の質問を置き、右端にオレンジの＋を付ける。行は細い線で区切り、回答には A を添える
- **診療時間表**（`hours-table`）: 罫線だけで組む表。曜日の列にオレンジの●や▲を、休診の日には－を置く
- **悩みの吹き出し**（`speech-bubble`）: 白い角丸の吹き出しに、太字で短い悩みの言葉を入れる。横に線画の人物を添える

## Do's and Don'ts

**Do**
- 白い地を広く取り、オレンジは見出し・数字・ボタンに集中させる
- 文字は墨色や焦げ茶で組み、行間をゆったり取る
- セクションの切り替えには、淡い地色の交互使いと弧や波線を使う
- 人物は手描き風の線画にパステルを少し塗るか、自然光の明るい写真にする
- 電話番号と受付時間はセットにし、目立つ位置に置く
- アイコンは細い線画で統一し、円形の淡い地に入れる

**Don't**
- 真っ黒の文字や、冷たい青一色の医療らしい配色にしない
- 強い影や光沢のあるグラデーションを付けない
- 角の尖ったボタンや写真を使わない
- オレンジやピンクを背景の広い面に塗らない
- 治療器具のアップなど、怖さを感じさせる写真を大きく扱わない
- 余白を詰めて情報を詰め込まない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（医院の想いと安心感を伝え、予約への入口をつくる）: 生成り地に、不定形マスクの明るい写真か線画イラストを大きく置く。キャッチは中央か左にそろえ、一語だけオレンジにする。下に予約のピルボタンと、簡単な診療時間カードを置く
2. **悩みの提起**（読み手の不安や症状に共感する）: 淡いベージュ地に悩みの吹き出しかチェックリストを縦に積み、線画の人物を添える。下端は弧で次のセクションへつなぐ
3. **お知らせ**（休診日や新しい取り組みなど、最新情報を伝える）: 角丸の大きな白パネルに、日付と見出しを細い線で区切ったリストで並べる。右端には小さな丸矢印を付ける
4. **特長**（医院の専門性と患者への配慮を示す）: 3 段見出しの下に番号付きの特長カードを縦に積む。写真は角丸か円形に切り抜き、番号は欧文で大きくする
5. **診療案内**（対応できる診療科や専門外来を一覧で見せる）: ミントや淡い色の円形アイコンタイルを 2 列のグリッドに並べる。各タイルの下に診療名を添える
6. **CTA**（予約や問い合わせを促す）: 淡いクリーム地に誘導文を 2〜3 行置き、その下に予約のピルボタンを置く。電話やチャットのサブボタンも並べる
7. **選ばれる理由**（3 つの強みを詳しく伝える）: POINT 番号バッジを中央に置き、その下に見出し、本文、写真を続ける。これを 3 ブロック繰り返す
8. **お客様の声**（患者の安心感と共感を伝える）: 淡いベージュ地に白い角丸の声カードを並べ、丸い似顔絵アイコンと属性ラベルを添える
9. **よくある質問**（受診前の疑問や不安を解消する）: Q と A の FAQ アコーディオンを細い線で区切って縦に並べる。＋のアイコンはオレンジにする
10. **アクセス・診療時間**（来院に必要な情報をまとめる）: 地図、住所、罫線だけの診療時間表、電話番号の大きな数字を順に並べる。最後に予約ボタンを置く
11. **フッター**（サイト内のリンクと連絡先をまとめて締める）: 暗い茶墨色の地に、白文字でロゴ・リンク・住所を中央にそろえて置く

## Imagery

- 人物や場面は細い黒や茶の線画で描き、黄・水色・ピンク・ミントのパステルを少しだけ平塗りする
- 写真は自然光を生かした明るい高めの露出で、白っぽくやわらかく撮る。院内やスタッフの笑顔の場面を選ぶ
- 医師・家族・子どもを、フラットで素朴な手描き風に描く
- 写真の背後や余白に、淡い色の円・葉・花のモチーフを散らす
- お客様の声には、丸く簡素な似顔絵アイコンを使う
- 医療の解説は、イラスト付きの段階図や平面的なグラフで見せる
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC では本文の幅を 1000px 前後に収め、両側は地色を見せる
- 特長カードは PC で 3 列、悩みは 3×2 のグリッドに組み替える
- 写真と文章は、PC では左右 2 カラムに並べ、段ごとに左右を入れ替えてリズムを出す
- 診療科のアイコンタイルは、PC では 4〜5 列のグリッドにする
- CTA は PC で横長の白カードにし、左に見出し、右に予約・電話ボタンを並べる
- SP のファーストビューは、写真を上、キャッチとボタンを下に積む

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

- **ID**: `pk-medical-soft`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「医療・クリニック・ヘルスケア」・主な雰囲気「やさしい・柔らかい」の設計書 24 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-medical-soft/
