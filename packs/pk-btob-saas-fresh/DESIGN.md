---
version: alpha
name: Clean Fresh BtoB SaaS LP Pattern
description: 白い地と淡い水色の帯を交互に並べ、ティール系のブランド色をファーストビュー・CTA帯・見出しの強調に絞って使う、明るくクリーンなBtoB向けLPの型。主CTAはオレンジのピル型で、寒色の中で温度差を作って目立たせる。書体は太いゴシック1種類に、数字と英字ラベルの欧文サンセリフを組み合わせる。フラットな面と薄い影、角丸カード、線画・フラットイラストや画面キャプチャで、信頼感と親しみやすさを両立させる。
colors:
  background: '#FDFDFE'
  background-alt: '#F2F7F8'
  primary: '#22B6B4'
  on-primary: '#FDFFFF'
  surface: '#FBFCFC'
  tint-1: '#E0F5F6'
  text: '#222324'
  text-body: '#505254'
  text-muted: '#8D8D8D'
  cta: '#F7812A'
  on-cta: '#FDFEFD'
  secondary: '#3ACEE7'
  line: '#E2E9EB'
  accent-1: '#F9C32E'
  accent-2: '#1B4587'
  dark-section: '#313335'
  cta-accessible: '#C15607'
  secondary-accessible: '#128092'
  primary-accessible: '#188281'
typography:
  display:
    fontFamily: Noto Sans JP
    fontSize: 30px
    fontWeight: 900
    lineHeight: 1.4
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Noto Sans JP
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.04em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.02em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.03em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.02em
  accent:
    fontFamily: Montserrat
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
rounded:
  sm: 4px
  md: 10px
  lg: 16px
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
    rounded: '{rounded.full}'
    height: 52px
  button-secondary:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 48px
  button-outline:
    backgroundColor: '{colors.background}'
    textColor: '{colors.primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 44px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 90px
  cta-band:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.headline-md}'
    height: 250px
  feature-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 220px
  problem-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 160px
  case-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 275px
  step-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 200px
  faq-item:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 56px
---

# DESIGN.md — BtoB SaaSの清潔・爽やかなLPの型（Clean Fresh BtoB SaaS LP Pattern）

designmark が、BtoB・SaaS・ITサービス・主な雰囲気「清潔・爽やか」の LP の設計書 45 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: BtoB・SaaS・ITサービス ／ **雰囲気**: 清潔・爽やか、信頼・誠実、情報量多め・訴求型、シンプル・ミニマル
- **キーワード**: ティール基調・淡い水色の地・白カード・オレンジCTA・フラットイラスト・英字ラベル見出し
- **地の質感**: 光沢のないフラットな単色面が基本。ファーストビューとCTA帯にだけ、淡いドット柄・大きな透かし英字・半透明の円弧などの幾何装飾を薄く重ねる。カードはごく薄い影か1pxの細い枠で地から浮かせる。
- **形**: 角丸8〜16pxのカードと完全なピル型ボタン。番号バッジや英字ラベルもピル型か正円にそろえる。セクションの境目は直線で、背景色を切り替えて区切る。
- **温度感**: やや寒色寄りで明るく涼しげ。オレンジのCTAと黄色の差し色で少しだけ温かみを足し、冷たくなりすぎないようにする。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FDFDFE` | ページの基本の白地 | 37% | 集計の代表色 |
| `background-alt` | `#F2F7F8` | 悩み・料金・FAQなどを交互に区切る淡い水色グレーの帯 | 16% | 集計の代表色 |
| `primary` | `#22B6B4` | ブランドのティール。FV・CTA帯の面、見出しの強調、番号、ラベル | 8% | 合成 |
| `on-primary` | `#FDFFFF` | ティールの面に乗る白文字 | 1% | 集計の代表色 |
| `surface` | `#FBFCFC` | カード・FAQ項目・注記ボックスの面 | 8% | 集計の代表色 |
| `tint-1` | `#E0F5F6` | 表の見出しセル・吹き出し・図解の背景に使う淡いミント水色 | 6% | 集計の代表色 |
| `text` | `#222324` | 見出しの濃いグレー文字 | 2% | 集計の代表色 |
| `text-body` | `#505254` | 本文のグレー文字 | 2% | 集計の代表色 |
| `text-muted` | `#8D8D8D` | 注釈・補足・ラベルの淡いグレー文字 | 0% | 集計の代表色 |
| `cta` | `#F7812A` | 主CTAボタンのオレンジ | 1% | 集計の代表色 |
| `on-cta` | `#FDFEFD` | CTAボタン上の白文字 | 0% | 集計の代表色 |
| `secondary` | `#3ACEE7` | サブCTA（資料請求）・英字見出しに使う明るいシアン | 2% | 集計の代表色 |
| `line` | `#E2E9EB` | カード・表・FAQの細い枠線と区切り線 | 0% | 集計の代表色 |
| `accent-1` | `#F9C32E` | イラストの差し色・人気プランのバッジに使う黄色 | 0% | 集計の代表色 |
| `accent-2` | `#1B4587` | 料金プランの区別・図解の締め色に使う濃紺 | 0% | 集計の代表色 |
| `dark-section` | `#313335` | フッターのダークグレー地 | 4% | 集計の代表色 |
| `cta-accessible` | `#C15607` | AA を満たす補正値（計算） |  | 計算 |
| `secondary-accessible` | `#128092` | AA を満たす補正値（計算） |  | 計算 |
| `primary-accessible` | `#188281` | AA を満たす補正値（計算） |  | 計算 |

- 地は白（background）と淡い水色グレー（background-alt）をセクションごとに交互に使い、色の差だけで区切る
- ティールの全幅の面はファーストビューと中間・最終のCTA帯に絞り、ページのリズムを作る
- ティールは見出しのキーワード・英字ラベル・番号・アイコンにだけ使い、文字や小さな部品で面積を小さく保つ
- オレンジは主CTAボタンだけに使い、大きな面や装飾には使わない
- サブCTAはシアンかティールにして、オレンジの主CTAと役割を色で分ける
- 本文はグレー（text-body）、見出しは濃いグレー（text）。真っ黒は使わない
- 黄色や濃紺はイラスト・バッジ・プランの区別などの小さな差し色にとどめる
- フッターだけダークグレーの地にし、白文字を乗せて締める
- `button-primary` は文字 `#FDFEFD` × 背景 `#F7812A` のコントラスト比が 2.56:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#C15607`、4.51:1）を使う。
- `button-secondary` は文字 `#FDFEFD` × 背景 `#3ACEE7` のコントラスト比が 1.86:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `secondary-accessible`（`#128092`、4.59:1）を使う。
- `button-outline` は文字 `#22B6B4` × 背景 `#FDFDFE` のコントラスト比が 2.45:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#188281`、4.54:1）を使う。
- `cta-band` は文字 `#FDFFFF` × 背景 `#22B6B4` のコントラスト比が 2.49:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#188281`、4.6:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューのメインコピー | ゴシック | Noto Sans JP | 900 | 30px | 1.4 | 0.02em |
| `headline-lg` | セクション見出し（日本語） | ゴシック | Noto Sans JP | 700 | 22px | 1.4 | 0.04em |
| `headline-md` | CTA帯のコピー・ポイントの小見出し | ゴシック | Noto Sans JP | 700 | 18px | 1.5 | 0.02em |
| `headline-sm` | カードのタイトル・FAQの質問・表の見出し | ゴシック | Noto Sans JP | 700 | 15px | 1.5 | 0.02em |
| `body-md` | 本文・FAQの回答 | ゴシック | Noto Sans JP | 400 | 13px | 1.8 | 0.03em |
| `note` | 注釈・日付・フッターの文字 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.02em |
| `accent` | 英字ラベル・STEP番号・価格や実績の大きな数字 | 欧文サンセリフ | Montserrat | 700 | 22px | 1.2 | 0.02em |
| `label-button` | CTAボタン・ピル型ラベルの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.2 | 0.05em |

- 和文は太めのゴシック1種類に統一し、明朝や装飾書体は使わない
- セクション見出しは、小さな英字ラベル（Montserrat・ティール）の下に日本語見出しを置く2段組にする
- 価格・実績・効果の数字は本文の2〜3倍の欧文の太字にし、単位は小さく添える
- 見出しの中のキーワードや数字だけをティールにし、一回り大きくする
- 本文は左揃え・行間1.8で、2〜3行ごとに短く区切る
- 本文の要点は太字にするか、淡い黄色のマーカーで部分的に強調する
- 見出しの下に1〜2行のリード文を中央揃えで添える
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。カードは縦積みにし、ロゴやアイコンは 2〜3 列のグリッドにする
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- 左右の余白は16〜20px程度でそろえ、カードは画面端から少し内側に置く
- 情報は3つ前後の番号付きカードにまとめ、カード同士の縦の間隔は12〜16pxにする
- 3〜4セクションごとに全幅のCTA帯をはさみ、主CTAとサブCTAを並べる
- 強みのブロックは「番号ラベル→見出し→本文→画面キャプチャか図解」の順に縦に積む
- 導入事例はカードを横スクロールのカルーセルにし、料金カードは同じ大きさで並べる
- 手順のカードの間には下向きのシェブロンを置いて流れを示す

## Elevation & Depth

- 基本はフラットにし、地とカードの色の差で面を分ける
- カードとFAQ項目には、ごく薄く広い影（0 4px 16px rgba(0,0,0,.06)程度）か1pxのline色の枠を付ける
- フォームのカードだけ、少し広めの柔らかい影で浮かせる
- ボタンは影なしのフラットか、ごく淡い影にとどめる
- 濃い影・立体的なベベル・光沢は使わない

## Shapes

- **角丸**: 小 4px ／ 中 10px ／ 大 16px。ボタンはピル型。
- **写真の切り抜き**: 人物写真や事例の写真は角丸の長方形にする。画面キャプチャはPC・スマホのデバイス枠に入れるか、角丸の長方形に薄い影を付けて置く。人物のアイコンは正円の中に置く
- **セクション境界**: 基本は直線で、背景色の切り替えだけで区切る。悩み→解決の境目だけ、下向きの三角の切り込みを入れてもよい
- ボタン・英字ラベル・番号バッジはすべてピル型か正円にする
- カードの角丸は8〜12px、大きなパネルは16px
- フォームの入力欄は角丸4px程度の細い枠にする
- アイコンはティール単色の線画で、正円の淡色地に入れる
- 背景の装飾には薄い円やドット、六角形の輪郭線を控えめに置く

## Components

- **オレンジのピル型主CTA**（`button-primary`）: オレンジの塗りに白い太字のピル型ボタン。右端に「>」か円形の矢印アイコンを置く。幅は画面の約85%
- **資料請求のサブCTA**（`button-secondary`）: シアンの塗りに白文字のピル型ボタン。主CTAのすぐ下に並べ、資料請求やダウンロードに使う
- **枠線のサブボタン**（`button-outline`）: 白地にティールの枠線と文字を付けたピル型ボタン。「詳しく見る」などの補助の導線に使う
- **英字ラベル付きのセクション見出し**（`section-heading`）: 上に小さなティールの英大文字ラベル、下に大きな日本語見出しを中央揃えで置く。背景に淡い巨大な英字の透かしを重ねてもよい
- **全幅のCTA帯**（`cta-band`）: ティールの全幅の面に白い短いコピーを置き、主CTAとサブCTAを縦に並べる。背景にうっすらドット柄や円弧を敷く
- **番号付き特長カード**（`feature-card`）: 白い角丸カードの左上にティールの丸番号を置き、2行の見出し・本文・画面キャプチャか線画の図解を縦に並べる
- **悩みカード**（`problem-card`）: 白い小さなカードに線画アイコンと2行の悩みを入れ、淡い水色の地の上に2列で並べる
- **導入事例カード**（`case-card`）: 上に角丸の写真、下に太字のタイトル・業種・企業規模を置き、効果の数字をティールで大きく見せる。横スクロールで並べる
- **導入ステップカード**（`step-card`）: 枠の上辺にティールの丸番号を重ね、タイトル・説明文・淡いミント地の図解を入れる。カードの間に下向きのシェブロンを置く
- **Q&A項目**（`faq-item`）: 白いカードにティールのQとオレンジのAの丸バッジを付ける。質問は太字、回答はグレーの本文。開閉式にしてもよい

## Do's and Don'ts

**Do**
- 地は白と淡い水色グレーを交互に使い、セクションの区切りを色の差で見せる
- ティールは見出しの強調・番号・ラベル・CTA帯など要所にだけ使う
- 主CTAはオレンジのピル型に統一し、各CTA帯でサブCTA（資料請求）と組にする
- セクション見出しには必ず英字ラベルを付け、型をそろえる
- 機能の説明には画面キャプチャやスマホのモックを使い、実際の使い方を見せる
- 数字（導入社数・削減率・価格）は大きな欧文の太字で目立たせる

**Don't**
- オレンジや黄色を背景などの大きな面に使わない
- 濃い影・グラデーションの立体装飾・光沢を使わない
- 角のとがった四角ボタンにしない
- 装飾的な書体や明朝を混ぜない
- 本文を中央揃えの長い段落にしない
- 写真に強いフィルターや彩度の高い色かぶりをかけない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（サービスの価値を一言で伝え、主CTAとサブCTAに誘導する）: ティールか淡いミントの面に太い大見出しと短いリードを置き、画面キャプチャやフラットイラストを添える。下に主CTAとサブCTAを縦に並べ、実績の数字をバッジで添える
2. **悩みの提起**（導入前の業務課題に共感させる）: 淡い水色の地に、線画アイコンと2行の悩みを入れた白い小カードを2列で並べる。下端に下向きの三角を付けて解決へつなぐ
3. **特長**（サービスの主な価値を3つ前後で示す）: 白地に番号付きの特長カードを縦に積み、各カードに見出し・本文・画面キャプチャを入れる
4. **導入実績**（定量的な効果と導入企業の数で信頼を示す）: 大きな欧文の数字をティールで並べ、下に導入企業のロゴを3列のグリッドで置く
5. **選ばれる理由**（使いやすさ・サポート・セキュリティなど競合との差を示す）: 淡い水色の地に、ティールの線画アイコンと短い説明の白カードを縦積みか2列で並べる
6. **導入事例**（同業他社の成功例で信頼を得る）: 写真・タイトル・業種・効果の数字を入れたカードを横スクロールで見せる
7. **CTA**（資料請求・無料相談・試用へ誘導する）: ティールの全幅の帯に白いコピーを置き、オレンジの主CTAとシアンのサブCTAを縦に並べる
8. **料金プラン**（プランと価格を明示して比較させる）: 同じ大きさの白カードを並べ、価格は大きな欧文の数字、人気プランは黄色のバッジと太い枠で区別する。比較表は横スクロール
9. **お客様の声**（利用者の実感で不安を和らげる）: 正円の人物アイコンと吹き出し型のカードに短い感想を入れ、企業の属性を小さく添える
10. **よくある質問**（導入前の疑問と不安を解消する）: 淡い水色の地に、QとAのバッジを付けた白いカードを縦に並べる
11. **フッター**（運営情報・規約・関連サービスへの導線を示す）: ダークグレーの地に白い小さな文字でリンクと会社情報を並べる。直前に最終CTAを置く

## Imagery

- 人物や図解は、ティールと青を主体に黄色を少し差した単色ベタのフラットイラストで描く
- アイコンはティール単色の細い線画にそろえ、正円の淡いミント地に入れる
- 機能は実際の管理画面のキャプチャをPC・スマホのモックに入れ、薄い影を付けて見せる
- 写真を使う場合は明るいオフィスで自然な表情の会社員を撮り、やや寒色寄りの色味に整える
- 背景の装飾は淡いドット格子・半透明の円弧・巨大な透かし英字を薄く敷く程度にとどめる
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PCでは本文の最大幅を約1000〜1100pxにして中央に置く
- PCのファーストビューは左にコピーとCTA、右に画面キャプチャを置く2カラムにする
- 特長・理由・悩みのカードはPCで3〜4列の横並びにする
- 料金比較表はSPで横スクロール、PCでは全列を表示する
- PCではCTAの2つのボタンを横に並べ、幅は240〜280px程度に縮める
- PCではヘッダーにナビゲーションとCTAボタンを常に表示する

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

- **ID**: `pk-btob-saas-fresh`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「BtoB・SaaS・ITサービス」・主な雰囲気「清潔・爽やか」の設計書 45 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-btob-saas-fresh/
