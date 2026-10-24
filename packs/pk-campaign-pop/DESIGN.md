---
version: alpha
name: Pop Energetic Campaign LP Pattern
description: 赤と濃紺を軸に、黄・青・緑の高彩度色を色面としてリズムよく切り替える、お祭り感のあるプレゼントキャンペーンLPの型。極太のディスプレイ書体に白フチと濃い影を付けた大見出しで、キャンペーン名と当選数を目立たせる。生成りの白カードに賞品・手順・規約を整理して読みやすさも保つ。主CTAは赤いピル型で、下に段差影を付けて押せる感じを出す。紙吹雪やキラキラを散らしてにぎやかにしつつ、応募の流れはSTEPカードで迷わせない。
colors:
  primary: '#D5010F'
  background: '#FDFDFB'
  background-alt: '#FBF5DA'
  surface: '#FCFBF9'
  secondary: '#153A98'
  cta: '#E0171B'
  on-cta: '#FDFBFA'
  accent-1: '#FFDF38'
  accent-2: '#1677C0'
  accent-3: '#0AA434'
  tint-1: '#E9F4FA'
  marker: '#FBF22B'
  dark-section: '#14207F'
  text: '#1F1F1E'
typography:
  display:
    fontFamily: Dela Gothic One
    fontSize: 40px
    fontWeight: 900
    lineHeight: 1.2
  headline-lg:
    fontFamily: M PLUS Rounded 1c
    fontSize: 26px
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0.02em
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
    lineHeight: 1.4
    letterSpacing: 0.02em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: 0.02em
  note:
    fontFamily: Noto Sans JP
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
  accent:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.04em
rounded:
  sm: 6px
  md: 12px
  lg: 20px
  full: 999px
spacing:
  unit: 8px
  card: 20px
  section: 56px
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
    height: 50px
  ribbon-heading:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-lg}'
    height: 56px
  prize-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.md}'
    height: 300px
  step-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 210px
  period-box:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.sm}'
    height: 80px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 64px
  accordion:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.sm}'
    height: 52px
  anchor-nav:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-sm}'
    height: 72px
  marker-text:
    backgroundColor: '{colors.marker}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 20px
---

# DESIGN.md — キャンペーンのポップ・元気なLPの型（Pop Energetic Campaign LP Pattern）

designmark が、キャンペーン・プレゼント・主な雰囲気「ポップ・元気」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: キャンペーン・プレゼント ／ **雰囲気**: ポップ・元気、情報量多め・訴求型、かわいい、親しみ・手作り感
- **キーワード**: 極太縁取り見出し・白カード・紙吹雪・STEPカード・段差影ボタン・色面の切り替え
- **地の質感**: ベタ塗りのフラットな色面が基本。地にドット・星・紙吹雪・集中線を薄く重ね、影はぼかさないベタのずらし影だけを使う
- **形**: ピル型ボタン、角丸12〜20pxのカード、両端を折り返したリボン帯、しっぽ付きの吹き出し、円形の賞バッジ
- **温度感**: 暖色寄りの高彩度で明るくにぎやか。濃紺や水色を差して画面を引き締め、抜けをつくる

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#D5010F` | ブランドレッド。FV・見出し帯・賞名帯の色面 | 9% | 集計の代表色 |
| `background` | `#FDFDFB` | ページの地色（生成りに近い白） | 27% | 集計の代表色 |
| `background-alt` | `#FBF5DA` | 応募方法・対象商品などの淡いクリーム地 | 10% | 集計の代表色 |
| `surface` | `#FCFBF9` | 賞品カード・手順カードの白地 | 11% | 集計の代表色 |
| `secondary` | `#153A98` | 濃紺の見出し帯・ナビ帯・サブボタン | 6% | 集計の代表色 |
| `cta` | `#E0171B` | 主CTA（応募ボタン）の赤 | 2% | 集計の代表色 |
| `on-cta` | `#FDFBFA` | CTA上の白文字 | 0% | 集計の代表色 |
| `accent-1` | `#FFDF38` | 黄色の帯・バッジ・集中線 | 2% | 集計の代表色 |
| `accent-2` | `#1677C0` | 青の見出し枠・コース別カード | 2% | 集計の代表色 |
| `accent-3` | `#0AA434` | 緑のサブ導線・LINE系ボタン・ポイント番号 | 1% | 集計の代表色 |
| `tint-1` | `#E9F4FA` | 淡水色のパネル・表の項目セル | 5% | 集計の代表色 |
| `marker` | `#FBF22B` | 強調文の黄色マーカー・注記ピル | 1% | 集計の代表色 |
| `dark-section` | `#14207F` | ナビ・帯見出し・フッターの濃紺面 | 4% | 集計の代表色 |
| `text` | `#1F1F1E` | 本文の濃いグレー | 2% | 集計の代表色 |

- 地は生成りの白を基本にし、FVや賞品紹介などの山場だけ赤・黄・濃紺の色面に切り替えて、色のブロックが続くリズムをつくる
- どの色面の上でも、情報は白い角丸カードに入れて読みやすくする
- 主CTAは赤一色に統一する。サブの導線は濃紺か緑のボタンにして、強さの差をはっきりさせる
- 黄色は帯・バッジ・マーカー・集中線に使う。白地の本文の文字色には使わない
- コースや賞の段階ごとに色（赤・青・緑など）を決めたら、帯・カード枠・ボタンまで最後まで同じ色で通す
- 当選数や日付の数字は、コースの色か赤で太く大きく書く
- 濃紺の面では、見出しを黄色、本文を白にする
- 本文は真っ黒ではなく濃いグレーにし、注釈もグレーを薄くしすぎない

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FVのキャンペーン名・ロゴ風の大見出し（白フチ＋濃い影） | 装飾・ディスプレイ | Dela Gothic One | 900 | 40px | 1.2 | 0.0em |
| `headline-lg` | セクション見出し（縁取り文字・帯見出し） | 丸ゴシック | M PLUS Rounded 1c | 900 | 26px | 1.3 | 0.02em |
| `headline-md` | 賞品名・カード内の色付き見出し・訴求コピー | ゴシック | Noto Sans JP | 700 | 20px | 1.4 | 0.03em |
| `headline-sm` | STEP見出し・商品名・アコーディオン見出し | ゴシック | Noto Sans JP | 700 | 16px | 1.4 | 0.02em |
| `body-md` | 手順の説明・回答文などの本文 | ゴシック | Noto Sans JP | 500 | 14px | 1.7 | 0.02em |
| `note` | 注釈・注意事項・応募規約 | ゴシック | Noto Sans JP | 400 | 11px | 1.6 | 0.0em |
| `accent` | 当選数の極太数字・英字ラベル（STEP / PRESENT など） | 欧文サンセリフ | Montserrat | 900 | 20px | 1.2 | 0.02em |
| `label-button` | CTA・サブボタンの文字 | ゴシック | Noto Sans JP | 700 | 16px | 1.2 | 0.04em |

- 大見出しは極太のディスプレイ書体にし、白フチと濃い色のベタ影を付けて立体感を出す
- 数字は前後の文字の1.5〜2倍にする。単位や曜日は小さく添える（例: 日付の曜日は括弧で小さくする）
- 見出しとリード文は中央揃えにして短い行で改行する。手順・規約・注釈は左揃えにする
- 注釈と規約は「※」「・」の後をぶら下げインデントにする
- 小見出しの両側に「＼ ／」の斜線を置いて目立たせる
- 英字ラベルは見出しの上に小さく添え、和文見出しと組み合わせる
- 細いウェイトや明朝体は使わず、本文も500以上の太さにする
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム中央揃え。STEPは縦に積み、商品は2列グリッド
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 56px、基本単位 8px、カード内 20px（375px 幅換算）
- CTAボタンは各山場のセクション末尾に置き、幅は画面の約85〜90%にする
- 応募手順は番号バッジ付きのカードを縦に並べ、間を▼でつなぐ
- 対象商品は2列に並べ、余りが出たら中央に寄せる
- セクションは色面か角丸の大きなパネルで区切り、上端中央に帯見出しを載せる
- 規約やFAQのバーは8px間隔で縦に積む
- 賞品は上位の賞を大きく1列、下位の賞を2列にして階層を見せる

## Elevation & Depth

- 基本はフラット。ぼかしたドロップシャドウは使わない
- CTAボタンは下側に濃い同系色のベタ影を4〜6px付けて、押せる立体感を出す
- 大見出しの文字にだけ白フチと濃い落ち影を付ける
- カードは影の代わりに太めの色の縁線か、右下へのずらし面で浮かせる

## Shapes

- **角丸**: 小 6px ／ 中 12px ／ 大 20px。ボタンはピル型。
- **写真の切り抜き**: 商品と賞品は背景のない切り抜きで置く。人物やキャラクターは白フチ付きで切り抜くか、円形フレームに入れる。見本画像は白枠の四角に入れて少し傾けてもよい
- **セクション境界**: 色面を切り替えて区切る。ドット柄や斜めストライプの帯、波形・ギザギザの境界を使ってにぎやかにする
- ボタンとラベルはピル型にする
- 見出しの帯は両端を折り返したリボン形か、角のない長方形の帯にする
- 吹き出しには必ずしっぽを付ける
- 賞や締切のバッジは円形にして少し傾ける
- カードは角丸12〜20pxにし、角のとがった無機質な箱にしない

## Components

- **応募ボタン（立体ピル）**（`button-primary`）: 赤のピル型ボタンに白い太字。下に濃い赤のベタ影を付け、右端に小さな三角か矢印を置く
- **サブボタン**（`button-secondary`）: 主CTAと同じ形の濃紺のピル。規約・LINE・SNSなど2番目の導線に使う。文字は白か黄色
- **リボン見出し**（`ribbon-heading`）: 赤か濃紺の帯の両端を折り返したリボンに、白の極太文字を中央揃えで載せる。上に英字ラベルを小さく添える
- **賞品カード**（`prize-card`）: 白いカードに賞名帯・切り抜きの賞品写真・賞品名を入れ、左上に円形の賞バッジ、下に黄色地の当選数を極太数字で置く
- **STEPカード**（`step-card`）: 白カードの上端に黄色か赤の STEP 番号ラベルを載せ、線画イラストと短い説明を入れる。カードの間を▼でつなぐ
- **応募期間ボックス**（`period-box`）: 赤い見出し帯の下に赤枠の白箱を置き、日付を大きな数字で書く。開始と締切の間に▼を入れる
- **補足吹き出し**（`speech-bubble`）: しっぽ付きの白い楕円の吹き出し。「＼かんたん応募／」のような短い補足を太字で入れる
- **規約アコーディオン**（`accordion`）: 濃紺の帯に白文字の見出しを置き、右端に＋アイコンを付ける。開くと白地の左揃えの注釈が出る
- **ページ内ナビ**（`anchor-nav`）: 濃紺の面を点線で2×2に区切る。各項目は白文字にし、下に黄色の下向き三角を付ける
- **黄色マーカー強調**（`marker-text`）: 強調したい語の下半分に黄色のマーカーを引き、太字にする

## Do's and Don'ts

**Do**
- 応募手順は必ずSTEP番号で区切り、1ステップを1枚のカードに収める
- 当選数・期間・応募方法の3点をFVに入れ、一目で伝える
- コースや応募経路の色分けを決めたら、帯・枠・ボタンまで最後まで変えない
- 余白に紙吹雪・キラキラ・星を散らしてお祭り感を出す
- 規約や注意事項はアコーディオンにまとめてページの長さを抑える
- 色面の上の情報は白カードに入れ、縁線を付けて読みやすくする

**Don't**
- 細い明朝体や縁取りのない細い見出しを使わない
- くすんだ色や落ち着いたグレー系を主役にしない
- ぼかした影やリアルな質感を加えない
- 1段落に長い文章を詰め込まない
- 赤を装飾目的で多用しない。主CTAが埋もれてしまう
- 装飾を賞品写真や文字の上に重ねない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（キャンペーン名・総当選数・応募期間・応募手段を一目で伝える）: 赤か黄の色面に集中線と紙吹雪を敷き、極太の縁取り大見出しと切り抜きの賞品を大きく置く。当選数は特大の数字にし、下に期間の帯と主CTAを置く
2. **ページ内ナビ**（賞品・応募方法・規約などへすぐ移動できるようにする）: 濃紺の面を2×2に区切り、白文字と黄色の下向き三角を並べる
3. **キャンペーン概要**（応募条件と期間を整理して示す）: リボン見出しの下に白カードを置く。条件を3つのバッジで横に並べ、応募期間ボックスで日付を大きく見せる
4. **賞品紹介**（コース別の賞品と当選人数で期待感を高める）: コースの色ごとに賞品カードを積む。上位の賞は大きく、下位の賞は2列で見せ、円形の賞バッジと極太の当選数を付ける
5. **対象商品**（応募に必要な購入対象を示す）: クリーム地に切り抜きの商品を2列で並べ、商品名と注釈を同じ型で繰り返す
6. **応募方法**（レシート・LINE・ハガキなどの手順を迷わず伝える）: STEPカードを縦に積み、▼でつなぐ。線画のスマホや手のイラストを添え、応募経路ごとに色を分ける
7. **CTA**（手順を読んだ直後に応募してもらう）: 補足の吹き出しの下に赤い立体ピルの主CTAを置き、サブ導線は濃紺のボタンにする
8. **応募規約**（規約の全文を載せる）: 濃紺のアコーディオンにまとめ、開くと左揃えの小さな注釈文が出る
9. **よくある質問**（応募前の疑問を解消する）: 白い角丸カードにQとAを並べ、右端に黄色い丸の＋を置く
10. **お問い合わせ**（事務局の連絡先を案内する）: 白地の枠に事務局名・電話番号・受付時間を中央揃えで置く
11. **フッター**（規約類へのリンクとコピーライトを置く）: 濃紺の帯に白の小さな文字でリンクとコピーライトを並べる

## Imagery

- 賞品と商品は白背景から切り抜き、斜めに重ねたり放射光の上に置いたりして目立たせる
- 背景には紙吹雪・星・キラキラ・ドット柄の円を薄く散らす
- FVは放射状の集中線と光の粒で祝祭感を出す
- 手順の図解は、スマホや手・レシートをシンプルな黒の線画で描き、赤い番号で指示する
- キャラクターや人物は白フチ付きで切り抜き、ポーズのある全身を使う
- ギザギザの吹き出しや矢印などマンガ的な記号で動きを出す
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PCは中央に約900px幅のコンテンツ列を取り、両側には地のドット柄や色面を広げる
- PCではSTEPカードを横3列に並べ、矢印でつなぐ
- PCのFVでは賞品の段階を横に並べ、コピーを2行に収める
- ページ内ナビはPCで横1列にする
- SPでは背景の装飾を減らし、列を画面幅の約90%に広げる
- 大見出しはSPでは幅いっぱいまで縮め、改行位置を固定する

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

- **ID**: `pk-campaign-pop`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「キャンペーン・プレゼント」・主な雰囲気「ポップ・元気」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-campaign-pop/
