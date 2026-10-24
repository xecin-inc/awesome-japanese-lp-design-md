---
version: alpha
name: Pop Energetic School Education LP Pattern
description: 生成りに近い白の地に、明るい青のブランド色と黄色・オレンジ・ピンクの差し色を重ねた、にぎやかで明るい教育系LPの型。極太のディスプレイ書体で見出しを大きく組み、内容はすべて角丸の白カードに入れて色地の上に積み重ねる。主CTAはオレンジのピル型ボタンで、FV直下・中盤・終盤で繰り返し出す。子どもや受講生の笑顔を切り抜いた写真、線画イラスト、紙吹雪やドットの装飾で動きを出しつつ、影はほとんど付けずフラットにまとめる。
colors:
  background: '#FBFBFA'
  background-alt: '#F5F7F5'
  surface: '#F9FAF9'
  primary: '#278FDA'
  on-primary: '#FEFCFC'
  secondary: '#FCEC36'
  cta: '#F5910A'
  on-cta: '#FEFDFC'
  text: '#282828'
  accent-1: '#F16C5F'
  accent-2: '#5ABFB8'
  tint-1: '#E5F3F9'
  marker: '#FDE263'
  dark-section: '#303233'
  line: '#DBDCDB'
  text-muted: '#8F9093'
  cta-accessible: '#A96407'
  primary-accessible: '#2078B9'
typography:
  display:
    fontFamily: Dela Gothic One
    fontSize: 42px
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Zen Kaku Gothic New
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0.04em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.025em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.03em
  note:
    fontFamily: Noto Sans JP
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.02em
  accent:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.02em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.05em
rounded:
  sm: 4px
  md: 12px
  lg: 20px
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
  button-outline:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 40px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 80px
  label-bar:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 28px
  feature-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.lg}'
    height: 320px
  course-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.lg}'
    height: 275px
  voice-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 220px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 60px
  badge-circle:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.text}'
    typography: '{typography.accent}'
    rounded: '{rounded.full}'
    height: 88px
  faq-item:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 72px
---

# DESIGN.md — スクール・習い事のポップで元気なLPの型（Pop Energetic School Education LP Pattern）

designmark が、教育・スクール・資格・主な雰囲気「ポップ・元気」の LP の設計書 58 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 教育・スクール・資格 ／ **雰囲気**: ポップ・元気、情報量多め・訴求型、親しみ・手作り感、清潔・爽やか
- **キーワード**: 白カード・線画イラスト・切り抜き人物写真・ピル型CTA・極太見出し・紙吹雪装飾
- **地の質感**: フラットな単色面が基本。ところどころに薄いドット・波線・三角の紙吹雪を散らし、FVやCTA帯だけ淡いグラデーションや細かいノイズを足す
- **形**: 角丸12〜20pxの白カード、完全なピル型ボタン、円形・不定形の写真切り抜き。セクションの境目は直線を基本に、ところどころ波形や斜めカットを混ぜる
- **温度感**: 明るく暖かい。青で清潔感と信頼を出し、黄・オレンジ・ピンクで元気さとお得感を足す高彩度の暖寒ミックス

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FBFBFA` | ページの地（生成りに近い白） | 30% | 集計の代表色 |
| `background-alt` | `#F5F7F5` | 交互に置くセクションの淡灰の地 | 10% | 集計の代表色 |
| `surface` | `#F9FAF9` | カード・FAQ項目の白面 | 6% | 集計の代表色 |
| `primary` | `#278FDA` | ブランドの青（見出し帯・ラベル・番号・ナビ） | 8% | 集計の代表色 |
| `on-primary` | `#FEFCFC` | 青い面に乗せる白文字 | 1% | 集計の代表色 |
| `secondary` | `#FCEC36` | レモンイエローの帯・CTA区間の地 | 4% | 集計の代表色 |
| `cta` | `#F5910A` | 申込・資料請求の主ボタン（オレンジ） | 2% | 集計の代表色 |
| `on-cta` | `#FEFDFC` | CTAボタン上の白文字 | 0% | 集計の代表色 |
| `text` | `#282828` | 見出し・本文の濃い墨色 | 3% | 集計の代表色 |
| `accent-1` | `#F16C5F` | キャンペーン帯・強調バッジのコーラルピンク | 2% | 集計の代表色 |
| `accent-2` | `#5ABFB8` | 番号バッジ・矢印のターコイズ | 2% | 集計の代表色 |
| `tint-1` | `#E5F3F9` | カードや区間の淡い水色地 | 6% | 集計の代表色 |
| `marker` | `#FDE263` | 強調語の下に引く黄色マーカー | 1% | 集計の代表色 |
| `dark-section` | `#303233` | フッター・最下部の黒帯 | 4% | 集計の代表色 |
| `line` | `#DBDCDB` | カード枠線・区切り線 | 1% | 集計の代表色 |
| `text-muted` | `#8F9093` | 日付・注釈の補足グレー | 0% | 集計の代表色 |
| `cta-accessible` | `#A96407` | AA を満たす補正値（計算） |  | 計算 |
| `primary-accessible` | `#2078B9` | AA を満たす補正値（計算） |  | 計算 |

- 地は白（生成り）・淡灰・淡い水色を交互に使い、数セクションおきに黄色やブランド青の全面帯を挟んでリズムを作る
- ブランドの青は見出しラベル・番号・アコーディオンなど構造部分に使い、面積は全体の1割弱に抑える
- 主CTAはオレンジのピル型に統一し、ほかの部品にはこのオレンジの塗りを使わない
- 黄色は帯・マーカー・バッジに使い、黄色の上に長い本文を置かない
- 特長・コースなど並列の項目には青・黄・ピンク・ターコイズを順に割り当て、枠線・番号・強調語の色をそろえる
- 色地の上の文字は白、白カードの中の文字は濃い墨色にする
- 最下部のフッターだけ暗い面にして、ページの終わりを締める
- `button-primary` は文字 `#FEFDFC` × 背景 `#F5910A` のコントラスト比が 2.31:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#A96407`、4.58:1）を使う。
- `button-outline` は文字 `#278FDA` × 背景 `#F9FAF9` のコントラスト比が 3.33:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#2078B9`、4.51:1）を使う。
- `label-bar` は文字 `#FEFCFC` × 背景 `#278FDA` のコントラスト比が 3.41:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#2078B9`、4.5:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FVのキャッチ・ロゴ風の特大文字 | 装飾・ディスプレイ | Dela Gothic One | 900 | 42px | 1.2 | 0.02em |
| `headline-lg` | セクション見出し | ゴシック | Zen Kaku Gothic New | 700 | 26px | 1.35 | 0.04em |
| `headline-md` | カード見出し・リード文 | ゴシック | Noto Sans JP | 700 | 20px | 1.4 | 0.03em |
| `headline-sm` | コース名・FAQの質問・小見出し | ゴシック | Noto Sans JP | 700 | 16px | 1.5 | 0.025em |
| `body-md` | 本文・回答・声の文章 | ゴシック | Noto Sans JP | 400 | 13px | 1.8 | 0.03em |
| `note` | 注釈・キャプション・コピーライト | ゴシック | Noto Sans JP | 400 | 11px | 1.6 | 0.02em |
| `accent` | 見出し上の英字ラベル・POINT番号・実績の数字 | 欧文サンセリフ | Montserrat | 700 | 24px | 1.1 | 0.02em |
| `label-button` | CTAボタン・ラベルの文字 | ゴシック | Noto Sans JP | 700 | 15px | 1.3 | 0.05em |

- 見出しは英字ラベル（小さめ・ブランド色）を上に、太い和文見出しを下に重ねる2段構成にする
- FVのキャッチだけ極太のディスプレイ書体を使い、白フチや色ずらしの影でシール風に見せる
- 本文は13px前後と小さめにして、行間を1.8前後と広くとる
- 実績や価格の数字だけを大きな太字にして、単位は小さく添える
- 強調したい語には黄色のマーカーを引くか、ブランド色の文字にする
- 明朝体や細い書体は見出し・キャッチに使わない
- 見出しはセクション内で中央揃え、本文は左揃えにする
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。PC ではカードを 2〜3 列に並べる
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- 本文ブロックは左右に約20pxの余白をとり、中央に置く
- カード同士の間隔は16〜24pxにする
- 特長やトピックは「番号バッジ＋写真かイラスト＋見出し＋本文」の4点で組む
- CTA帯はページ内で3回ほど（FV直下・中盤・終盤）繰り返す
- 色の付いた全面帯は画面幅いっぱいに敷き、その上に白カードを載せる
- 余白は8pxの倍数でそろえる

## Elevation & Depth

- 基本はフラットにして、白カードは地との色の差だけで浮かせる
- 主CTAだけ下方向に濃いめの影を4pxほど付け、押せそうな立体感を出す
- 切り抜き写真にはごく薄いドロップシャドウを付けてもよい
- 強いぼかし影や重なった影は使わない

## Shapes

- **角丸**: 小 4px ／ 中 12px ／ 大 20px。ボタンはピル型。
- **写真の切り抜き**: 人物は背景を切り抜くか正円にする。教室や施設の写真は角丸の四角か白フチを付けた四角にし、少し傾けてもよい。イラストは枠に入れず切り抜きで置く
- **セクション境界**: 直線で色を切り替えるのが基本。FVの下やCTA帯の上下など要所だけ、波形・山形・斜めのカットにする
- CTAやサブボタンは完全なピル型にする
- カードの角丸は12〜20pxにする
- 番号は円形か楕円のバッジに入れ、カードの上辺に重ねる
- ラベル帯はピル型の色帯に白文字を入れる
- 余白にはドット・波線・三角の紙吹雪・キラキラをテーマ色で散らす

## Components

- **申込CTAボタン**（`button-primary`）: 画面幅の85%前後のオレンジのピル型。白い太字で、右端に丸い矢印アイコン。上に「無料」などの小さな吹き出しを載せてもよい
- **詳しく見るボタン**（`button-outline`）: 白地に青い枠と青い文字のピル型。一覧や詳細ページへの補助リンクに使う
- **英字ラベル付きのセクション見出し**（`section-heading`）: 上にブランド色の英字ラベル、下に太い和文見出しを中央揃えで重ねる。背後に大きく淡い英字を敷くこともある
- **小見出しのラベル帯**（`label-bar`）: 青のピル型の帯に白文字の小見出し。カテゴリやコース名の頭に付ける
- **番号付きの特長カード**（`feature-card`）: 白い角丸カードの上辺に色付きの円形番号バッジを重ね、写真、強調語にマーカーを引いた見出し、本文の順に並べる。項目ごとに色を変える
- **コースカード**（`course-card`）: 上に写真、下にコース名と対象・説明を2〜3行で置く白い角丸カード。淡い水色の地に並べる
- **お客様の声カード**（`voice-card`）: 白い角丸カードの横に円形の顔写真かイラストを置き、太字の短い見出しと本文を入れる。細い枠線で囲む
- **吹き出し**（`speech-bubble`）: 白い角丸の吹き出しにしっぽを付け、悩みや短い声を入れる。強調語はコーラルの文字にする
- **実績・特典の円形バッジ**（`badge-circle`）: 黄色の円に大きな数字と小さな単位を入れ、FVや特典の近くに少し傾けて置く
- **FAQアコーディオン**（`faq-item`）: 白いカードの左に青い丸で Q、右端に開閉のプラスか矢印。項目の間は細い線か8pxの隙間で区切る

## Do's and Don'ts

**Do**
- 子どもや受講生の笑顔の写真を切り抜くか円形にして、動きのある場面を選ぶ
- 内容は白カードに入れて、色地の上に積み重ねる
- 数字は極太で大きくし、単位は小さく添えて円形バッジや帯で目立たせる
- ドット・波線・紙吹雪などの小さな装飾を各セクションの隅に散らして動きを出す
- 主CTAはオレンジのピル型に統一し、FV直下・中盤・終盤に置く
- 期限・対象学年・無料特典はバッジや帯ではっきり示す

**Don't**
- 明朝体や細い書体を見出し・キャッチに使わない
- 暗い地色や落ち着いたモノトーンをページの中心にしない（暗い面はフッターだけ）
- カードに強いぼかし影や重い立体の影を付けない
- 黄色を広い面に敷いて、その上に長い本文を置かない
- 角張ったボタンや枠線だけのボタンを主CTAにしない
- 余白を詰めて本文を詰め込まない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（スクールの魅力とキャンペーン・無料体験を一目で伝え、申込へ誘導する）: 明るい色面かパステルのグラデーションの上に、切り抜いた笑顔の人物と極太のキャッチを重ねる。円形の実績バッジと紙吹雪を散らし、下端は波形でカットする
2. **CTA**（FV直後に無料体験・資料請求の入口を出す）: 白地の中央にオレンジのピル型ボタンを置き、上に「無料」の吹き出しを載せる
3. **悩みの提起**（保護者や受講希望者の不安に共感する）: 淡い水色の地に白い吹き出しを左右交互に並べ、考え込む人物の線画イラストを添える。下に矢印で解決へつなぐ
4. **特長**（スクールの強みを3〜5つ示す）: 英字ラベル付きの見出しの下に、番号付きの白い特長カードを縦に並べる。項目ごとに青・黄・ピンク・ターコイズを割り当てる
5. **コース紹介**（年齢・目的別のコースを比べやすく見せる）: 淡灰の地に写真付きのコースカードを並べ、各カードの頭に青のラベル帯でコース名を入れる
6. **選ばれる理由**（実績の数字で信頼を補う）: 青の全面帯に大きな数字の円形バッジを並べ、白文字で短い説明を添える
7. **お客様の声**（保護者や生徒の実感で後押しする）: 白地に円形の顔写真付きの声カードを縦に並べ、見出しの強調語に黄色のマーカーを引く
8. **CTA**（中盤以降でもう一度申込を促す）: レモンイエローの全面帯に白いパネルを置き、特典の内容と主CTAボタンを中央揃えで入れる
9. **よくある質問**（申込前の不安を解消する）: 淡灰の地にFAQアコーディオンを縦に並べ、Qは青い丸、開閉はプラスアイコンにする
10. **フッター**（運営元・教室の情報と連絡先を示す）: 濃い墨色の面に白文字でリンクと連絡先を置き、上端を大きなアーチか直線で区切る

## Imagery

- 自然光の明るい教室で、子どもや受講生が笑う・手を挙げるなど動きのある場面を撮り、彩度はやや高めにする
- 人物は背景を切り抜き、雲形・円・斜めの四角などの色面の上に重ねる
- アイコンや説明イラストは黒の細い線画にして、カラフルな色面と対比させる
- 動物や人物のフラットなマスコットイラストを、セクションの角や見出しの横に置く
- 赤・黄・青・緑の三角や長方形の紙吹雪、星やキラキラ、ドットや波線を余白に散らす
- 授業の様子は手元や教材のアップを明るく撮り、正円か角丸で切り抜く
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- SPは1カラムにして、カードの中は写真を上・本文を下に積む
- PCは本文を中央の約900px幅に収め、色帯と装飾は画面幅いっぱいに広げる
- PCでは特長・コースカードを3列、声カードを2列にする
- PCのFVはキャッチを左、切り抜き人物を右に分けて置く
- PCの写真と本文の組は左右交互に置き、単調にしない
- SPでは画面下に主CTAを固定してもよい

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

- **ID**: `pk-education-pop`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「教育・スクール・資格」・主な雰囲気「ポップ・元気」の設計書 58 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-education-pop/
