---
version: alpha
name: Trustworthy Japanese Medical Clinic LP Pattern
description: 白地を基本に、ロイヤルブルーから濃紺の青系をブランド色として見出し・帯・アイコンにまとめる。暖色のオレンジは予約・購入ボタンだけに使い、行動を促す場所をはっきりさせる。見出しは明朝体か太いゴシック体を中央揃えにし、本文は行間を広めにとったゴシック体で読ませる。淡いグレーや水色の帯を交互に置いて区切り、要所に濃紺の CTA 帯をはさむ。全体はフラットで影は弱く、角丸も小さめに抑える。数値や効果の主張には必ず ※ の注釈を添え、誠実で清潔な医療らしさを出す。
colors:
  background: '#FBFCFC'
  primary: '#235BB3'
  background-alt: '#F5F8FA'
  tint-1: '#CAE3F4'
  secondary: '#29509A'
  dark-section: '#102250'
  on-dark: '#FEFFFE'
  cta: '#FB8425'
  on-cta: '#FCFDFD'
  text: '#1F1E1D'
  text-body: '#353535'
  text-muted: '#777777'
  accent-1: '#B69335'
  line: '#D0D9DF'
  cta-accessible: '#BE5603'
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.04em
  headline-lg:
    fontFamily: Noto Sans JP
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.04em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.025em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.03em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.01em
  accent:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
rounded:
  sm: 4px
  md: 6px
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
    rounded: '{rounded.md}'
    height: 56px
  button-outline:
    backgroundColor: '{colors.background}'
    textColor: '{colors.primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.sm}'
    height: 44px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 64px
  point-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.md}'
    height: 300px
  step-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 200px
  cta-band:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-md}'
    height: 300px
  faq-item:
    backgroundColor: '{colors.background}'
    textColor: '{colors.primary}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.sm}'
    height: 64px
  price-table:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 240px
  case-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.primary}'
    typography: '{typography.body-md}'
    height: 300px
  note-text:
    textColor: '{colors.text-muted}'
    typography: '{typography.note}'
    height: 24px
---

# DESIGN.md — 医療・クリニックの信頼・誠実な LP の型（Trustworthy Japanese Medical Clinic LP Pattern）

designmark が、医療・クリニック・ヘルスケア・主な雰囲気「信頼・誠実」の LP の設計書 21 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 医療・クリニック・ヘルスケア ／ **雰囲気**: 信頼・誠実、情報量多め・訴求型、清潔・爽やか、上品・高級
- **キーワード**: 濃紺とロイヤルブルー・明朝体の見出し・白カード・オレンジのCTA・淡い水色の帯・注釈で示す根拠
- **地の質感**: フラットな単色の面が基本。FV と CTA 帯だけに濃紺〜青のごく淡いグラデーションや光のぼかしを入れる。カードは白で影はごく薄い。
- **形**: 角丸 4〜12px の控えめな長方形。セクションは直線で切り替え、FV の下端だけ斜めカットにすることがある。
- **温度感**: 寒色寄りで落ち着いた雰囲気。オレンジの CTA、くすんだ金、黄色マーカーで温かみを少しだけ足す。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FBFCFC` | 基本の白地（本文・カード） | 30% | 集計の代表色 |
| `primary` | `#235BB3` | ブランドの青。見出し文字・帯・Q記号・アイコン | 10% | 集計の代表色 |
| `background-alt` | `#F5F8FA` | 料金・流れ・FAQ に敷く淡いグレーがかった水色の帯 | 12% | 集計の代表色 |
| `tint-1` | `#CAE3F4` | 特長・医師紹介などに敷く淡い水色の面 | 6% | 集計の代表色 |
| `secondary` | `#29509A` | サブボタン・番号ラベル・ステップ枠の落ち着いた青 | 3% | 集計の代表色 |
| `dark-section` | `#102250` | FV・CTA 帯・フッターの濃紺 | 4% | 集計の代表色 |
| `on-dark` | `#FEFFFE` | 濃紺・青の面の上に置く白文字 | 1% | 集計の代表色 |
| `cta` | `#FB8425` | 予約・購入ボタンのオレンジ（CTA専用） | 2% | 集計の代表色 |
| `on-cta` | `#FCFDFD` | CTA ボタン上の白文字 | 0% | 集計の代表色 |
| `text` | `#1F1E1D` | 見出し・本文の墨色 | 2% | 集計の代表色 |
| `text-body` | `#353535` | 長文本文・フッターの濃いグレー文字 | 3% | 集計の代表色 |
| `text-muted` | `#777777` | 注釈・出典・キャプションのグレー文字 | 1% | 集計の代表色 |
| `accent-1` | `#B69335` | 番号・実績メダル・強調ラベルのくすんだ金 | 1% | 集計の代表色 |
| `line` | `#D0D9DF` | カードの枠線・区切り線・FAQ の罫線 | 0% | 集計の代表色 |
| `cta-accessible` | `#BE5603` | AA を満たす補正値（計算） |  | 計算 |

- 地の色は白を基本にし、淡い水色（background-alt・tint-1）の帯を交互に入れてセクションのリズムをつくる
- ブランドの青は見出し文字・Q記号・帯・アイコン・枠線に統一し、色の数を増やさない
- オレンジは主CTAボタン専用にする。ほかの面や装飾には使わない
- 濃紺の面は FV・CTA 帯・フッターに限り、上に置く文字はすべて白にする
- くすんだ金は番号ラベル・実績メダル・ポイントの強調に限り、量を絞る
- 強調語は黄色の細いマーカーか青の太字にし、赤い原色はできるだけ避ける
- 注釈・出典はグレーの小さな文字でそろえ、本文の色と分ける
- `button-primary` は文字 `#FCFDFD` × 背景 `#FB8425` のコントラスト比が 2.44:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#BE5603`、4.56:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューとクロージングのメインコピー | 明朝 | Shippori Mincho | 700 | 34px | 1.3 | 0.04em |
| `headline-lg` | セクション見出し（中央揃え） | ゴシック | Noto Sans JP | 700 | 24px | 1.45 | 0.05em |
| `headline-md` | カード見出し・ステップ名・小見出し | ゴシック | Noto Sans JP | 700 | 18px | 1.5 | 0.04em |
| `headline-sm` | FAQ の質問・図解の小見出し | ゴシック | Noto Sans JP | 700 | 16px | 1.5 | 0.025em |
| `body-md` | 本文・説明文 | ゴシック | Noto Sans JP | 400 | 14px | 1.8 | 0.03em |
| `note` | ※注釈・法定表記・キャプション | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.01em |
| `accent` | 英字の飾り見出し・POINT/STEP 番号・実績の数字 | 欧文サンセリフ | Montserrat | 700 | 16px | 1.2 | 0.05em |
| `label-button` | CTA ボタンの文字（小さな前置き＋太字の2段） | ゴシック | Noto Sans JP | 700 | 15px | 1.4 | 0.05em |

- 大きなコピーは明朝体、本文・ボタン・注釈はゴシック体にして役割を分ける（見出しを明朝体にするなら Noto Serif JP でそろえる）
- セクション見出しは中央揃えにし、上に灰色か金の小さな英字ラベルを置く
- 本文は 14px 前後・行間 1.8 で、説明文は左揃えにする
- 実績の数値は大きな太い欧文にし、単位と※は小さく添える
- 要点は黄色マーカーか青の太字で示し、強調の方法は 1 ページで 2 種類までにする
- 注釈には※と番号を付け、10px 前後のグレー文字で対象のすぐ近くに置く
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。症例の Before/After や小さな特長アイコンだけ 2〜3 列
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- 見出しは中央、本文はカード・表・リストの中に左揃えで収める
- 色帯は画面の端から端まで広げ、中のコンテンツは幅 90% に収める
- 治療の流れはステップカードを縦に積み、間に青い下向きの三角を置く
- データや効果を示すセクションは、見出し・図表・数値・注釈の順に縦に積む
- FAQ のアコーディオンは高さ約 48〜70px にし、8〜10px の間隔で積む
- CTA は主要なセクションの区切りごとに同じ形で繰り返す

## Elevation & Depth

- 基本はフラットにし、枠線は 1px の細い線で表す
- 白カードと FAQ にはごく薄く広い影を付ける（0 2px 8px rgba(0,0,0,.08) 程度）
- CTA ボタンだけに下向きの短い影を付け、押せることを示す
- 写真の上に CTA 帯を置くときは、紺の半透明オーバーレイを重ねて文字を読みやすくする
- SP 下部に固定する予約ボタンには、薄い影と白い縁を付ける

## Shapes

- **角丸**: 小 4px ／ 中 6px ／ 大 12px。ボタンは角丸の長方形。
- **写真の切り抜き**: 写真は角丸なし〜6px の長方形でトリミングする。医師やスタッフは四角で切り取るか背景を抜く。症例写真は同じサイズの四角を横に並べる
- **セクション境界**: 基本は直線で背景色を切り替える。FV の下端だけ、浅い斜めカットにしてもよい
- CTA ボタンは角丸 6〜12px の横長の長方形にし、右端に矢印アイコンを置く
- カードの角丸は 6px 前後にし、大きな丸みでポップに見せない
- 番号・ラベルは濃紺の小さな角丸ラベルか、正円のバッジにする
- サブボタンは白地に青の細枠、角丸 4px
- FAQ とチェックリストは細い罫線で区切った白い帯にする

## Components

- **予約・申込ボタン**（`button-primary`）: オレンジ地に白の太字。上に小さな前置き（例: 24時間受付）、下に大きな行動の言葉を 2 段で入れ、右端に矢印または電話アイコンを置く。幅はコンテンツの 90%。
- **詳しく見るボタン**（`button-outline`）: 白地に青の細枠と青文字。中央に置き、幅は 60% 程度。右に小さな矢印を付ける。
- **英字ラベル付きセクション見出し**（`section-heading`）: 金かグレーの小さな英字（Montserrat）の下に、和文の大見出しを中央揃えで置き、下に青い短い線を引く。
- **番号付きの特長カード**（`point-card`）: 白カードの左上に金の大きな欧文番号、青の見出し、写真、本文を縦に積む。枠線は薄いグレー、影はごく薄い。
- **ステップカード**（`step-card`）: 白地に青の細い枠。左上に濃紺の STEP ラベル、横に太字のステップ名、下に本文を置く。カードの間は下向きの三角でつなぐ。
- **濃紺の CTA 帯**（`cta-band`）: 全幅の濃紺の面に、白い明朝の一行コピー（強調語は黄色マーカー）、オレンジのボタン、受付時間の注記を縦に積む。
- **FAQ アコーディオン**（`faq-item`）: 青い Q 記号と太字の質問、右端に＋アイコン。開くと A 記号と本文が出る。上下は細い罫線で区切る。
- **料金表**（`price-table`）: 見出しの行を淡い青で塗り、罫線で区切った表。価格は大きな太い数字で、税込表記と※注釈を小さく添える。
- **症例カード**（`case-card`）: 青の見出し帯の下に Before/After 写真を 2 列で並べ、施術内容・期間・費用・リスクを淡いグレーの表にまとめる。
- **注釈**（`note-text`）: ※と番号付きのグレーの小さな文字。数値や効果の主張のすぐ下に置き、省略しない。

## Do's and Don'ts

**Do**
- 見出しは明朝体か太いゴシック体を中央揃えにし、本文はゴシック体の左揃えで役割を分ける
- 予約 CTA はセクションの区切りごとに同じ形・同じ色で繰り返す
- 実績の数値や効果の主張には、必ずグラフ・表と※注釈を添える
- リスク・副作用・ダウンタイム・費用は表にまとめて、はっきり載せる
- 白と淡い水色の帯を交互に置き、ところどころに濃紺の帯をはさんで締める
- アイコンと図解は青 1 色の細い線画で清潔にそろえる

**Don't**
- オレンジを CTA 以外の面や装飾に使わない
- 角丸を大きくしたり、丸ゴシックやカラフルなイラストでポップに見せない
- 強い影・立体的な見出し・グラデーションを多用しない
- 効果を断定する大きなコピーや、根拠のない数字を置かない
- 暖色の背景をページ全体に使わない
- セクション見出しの揃え方をばらばらにしない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（医師や人物の写真とメインコピーで、信頼感と何の治療・サービスかを一目で伝える）: 濃紺〜青の面か白地に、明朝の大きなコピーと医師・人物の写真を置く。実績の丸バッジ（金）を 2〜3 個並べ、下にオレンジの CTA を置く
2. **悩みの提起**（読み手の症状や不安に共感し、自分ごとにしてもらう）: 淡いグレーの地に、チェックアイコン付きの悩みリストか線画イラストのタイルを並べる。最後に下向きの三角で解決のパートへつなぐ
3. **CTA**（早い段階で初回予約や無料カウンセリングに誘う）: 濃紺の全幅の帯に白文字のコピー、オレンジのボタン、電話番号と受付時間の注記を縦に積む
4. **特長**（技術・設備・診療体制などの強みを説明する）: 白地に番号付きの特長カードを縦に積む。金の欧文番号、青の見出し、写真、本文の順に置く
5. **選ばれる理由**（ほかとの違いを根拠とともに伝える）: 淡い水色の帯に、POINT 番号付きの白カードを並べる。数値は大きな欧文で示し、※注釈を添える
6. **料金**（費用と付帯サービスをわかりやすく示し、不安を減らす）: 白地に罫線の料金表。見出しの行は淡い青で塗り、価格は大きな太字、税込と注釈を小さく添える
7. **治療の流れ**（来院から治療開始までの手順を見せ、不安を減らす）: 淡い水色の地に、青枠のステップカードを縦に積み、間に下向きの三角を入れる
8. **よくある質問**（残っている疑問を解消する）: 白地に Q/A のアコーディオンを罫線で区切って積む。Q 記号と質問文は青にする
9. **クロージング**（最後にもう一度予約を後押しする）: 院内写真に紺の半透明を重ねた帯に、明朝のメッセージとオレンジのボタン、電話の導線を置く
10. **フッター**（医院情報・アクセス・法定表記を示す）: 濃紺の地に白文字で医院名・住所・診療時間・リンクを並べ、注釈を小さく入れる

## Imagery

- 診察やカウンセリングの場面は、白と青が基調の明るい院内で、自然光に近い高めの露出で撮る
- 医師やスタッフは白衣か制服で、正面を向いた穏やかな表情の上半身を撮る
- 症例写真は同じ角度・同じ背景・同じ照明で Before/After をそろえる
- アイコンや症状の説明は、青 1 色の細い線画でシンプルに描く
- 図表は青の濃淡の棒グラフや人体のシルエットで、清潔に見せる
- 装飾は控えめにし、FV や CTA 帯にだけ淡い光のぼかしや細い幾何学模様を薄く敷く
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC 画像はないため、SP の 1 カラムを中央幅 640〜900px で見せ、色帯だけを全幅に広げることを推奨する
- PC の FV は左にコピー・バッジ・CTA、右に医師の写真を置く 2 分割にする
- 特長・選ばれる理由のカードは、PC では 2〜3 列に増やす
- 料金や症例の比較は、PC では 2 カラムにして横に並べる
- PC ではヘッダーにナビゲーションと電話番号・予約ボタンを横に並べる。SP では下部に固定の予約ボタンを置く

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

- **ID**: `pk-medical-trust`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「医療・クリニック・ヘルスケア」・主な雰囲気「信頼・誠実」の設計書 21 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-medical-trust/
