---
version: alpha
name: Trustworthy Corporate Navy Recruitment LP Pattern
description: 白地をベースに濃紺のコーポレートブルーで骨格を作る採用 LP の型です。英字ラベルと和文見出しを組み合わせ、薄い青灰の地と白カードで情報を整理します。色を強く使うのは応募ボタンと数字だけで、オレンジなどの暖色を少しだけ差します。影はほとんど使わず、色面と細い罫線で階層を作ります。本文は小さめにして行間を広く取り、落ち着いた誠実な印象にまとめます。
colors:
  background: '#FDFDFE'
  primary: '#0F377E'
  secondary: '#2F78D3'
  cta: '#F87011'
  on-cta: '#FDFCFA'
  background-alt: '#F0F2F5'
  surface: '#F9F9F9'
  text: '#1D1E1F'
  text-body: '#393939'
  text-muted: '#929395'
  line: '#C8CFD7'
  accent-1: '#237FE0'
  tint-1: '#E0E8F0'
  tint-2: '#DBEFF9'
  dark-section: '#112952'
  on-dark: '#F9FCFC'
  cta-accessible: '#C15306'
  accent-1-accessible: '#1D72CD'
typography:
  display:
    fontFamily: Zen Kaku Gothic New
    fontSize: 36px
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0.02em
  accent:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.04em
  headline-lg:
    fontFamily: Noto Sans JP
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.04em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.03em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0.03em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.05em
  note:
    fontFamily: Noto Sans JP
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.02em
rounded:
  sm: 4px
  md: 8px
  lg: 16px
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
    height: 52px
  button-secondary:
    backgroundColor: '{colors.primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 44px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 72px
  stat-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.accent-1}'
    typography: '{typography.accent}'
    rounded: '{rounded.md}'
    height: 140px
  interview-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.md}'
    height: 300px
  job-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 280px
  step-card:
    backgroundColor: '{colors.tint-2}'
    textColor: '{colors.primary}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 110px
  faq-item:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.sm}'
    height: 58px
  cta-band:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-md}'
    height: 220px
  news-list:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
    height: 64px
---

# DESIGN.md — 求人・採用の信頼・誠実な紺基調 LP の型（Trustworthy Corporate Navy Recruitment LP Pattern）

designmark が、求人・採用・主な雰囲気「信頼・誠実」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 求人・採用 ／ **雰囲気**: 信頼・誠実、清潔・爽やか、情報量多め・訴求型、クール・先進的
- **キーワード**: 濃紺・白カード・英字ラベル・線画イラスト・余白多め・コーポレートブルー
- **地の質感**: ほぼフラットな単色面。紺〜青の帯にだけ縦方向のゆるいグラデーションをかけ、白地には薄い方眼や淡い水色のにじみを控えめに敷く程度にとどめる
- **形**: 角丸 4〜8px の小さめの矩形が基本。カードは白で細い枠線か淡い地色の差で区切り、主 CTA はピル型、または角丸の小さな長方形にする
- **温度感**: 青が主体のややクールで知的な印象。応募ボタンのオレンジと人物写真で、ところどころ温かみを足す

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FDFDFE` | ページの基本の白地 | 32% | 集計の代表色 |
| `primary` | `#0F377E` | 見出し帯・セクション帯の濃紺（コーポレートカラー） | 8% | 集計の代表色 |
| `secondary` | `#2F78D3` | グラデーション明側・カード帯のロイヤルブルー | 4% | 集計の代表色 |
| `cta` | `#F87011` | エントリー・応募の主ボタン | 2% | 集計の代表色 |
| `on-cta` | `#FDFCFA` | ボタン上の白文字 | 0% | 集計の代表色 |
| `background-alt` | `#F0F2F5` | 実績・FAQ セクションの薄い青灰の地 | 12% | 集計の代表色 |
| `surface` | `#F9F9F9` | 白いカード面 | 6% | 集計の代表色 |
| `text` | `#1D1E1F` | 見出しの濃い文字 | 2% | 集計の代表色 |
| `text-body` | `#393939` | 本文のチャコール | 2% | 集計の代表色 |
| `text-muted` | `#929395` | 日付・補足の灰文字 | 0% | 集計の代表色 |
| `line` | `#C8CFD7` | FAQ・表・一覧の淡い青灰の罫線 | 0% | 集計の代表色 |
| `accent-1` | `#237FE0` | 数字・アイコン・リンクの鮮やかな青 | 1% | 集計の代表色 |
| `tint-1` | `#E0E8F0` | アイコン背景の円・グラフ残部の淡い青灰 | 4% | 集計の代表色 |
| `tint-2` | `#DBEFF9` | 流れのセクションなどに使う淡い水色の地 | 2% | 集計の代表色 |
| `dark-section` | `#112952` | 最終 CTA・フッターの深い紺 | 5% | 集計の代表色 |
| `on-dark` | `#F9FCFC` | 紺・青面の上の白文字 | 1% | 集計の代表色 |
| `cta-accessible` | `#C15306` | AA を満たす補正値（計算） |  | 計算 |
| `accent-1-accessible` | `#1D72CD` | AA を満たす補正値（計算） |  | 計算 |

- 地の色は白を基本にし、薄い青灰（background-alt）と交互に敷いてセクションを区切る。
- 濃紺（primary）は見出し帯・CTA 帯・フッターなど骨格になる面に使い、ブランドの軸を作る。
- オレンジ（cta）はエントリー・応募ボタンにだけ使う。本文や広い背景には使わない。
- 鮮やかな青（accent-1）は数字・グラフ・Q アイコン・リンクに絞って使う。
- 見出しは濃い黒〜紺、本文はチャコールにして、真っ黒や原色の地色は避ける。
- 紺の面に載せる文字は白（on-dark）にし、帯の中で強調したいときはボタン色を 1 点だけ置く。
- 淡い水色・青灰の tint は、アイコンの円や STEP の地など小さな面の装飾に使う。
- `button-primary` は文字 `#FDFCFA` × 背景 `#F87011` のコントラスト比が 2.8:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#C15306`、4.54:1）を使う。
- `stat-card` は文字 `#237FE0` × 背景 `#F9F9F9` のコントラスト比が 3.85:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-1-accessible`（`#1D72CD`、4.6:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューの大コピー・大きな統計数字 | ゴシック | Zen Kaku Gothic New | 900 | 36px | 1.3 | 0.02em |
| `accent` | セクションの英字ラベル・英字大見出し・数字 | 欧文サンセリフ | Montserrat | 700 | 24px | 1.2 | 0.04em |
| `headline-lg` | セクションの和文大見出し | ゴシック | Noto Sans JP | 700 | 26px | 1.4 | 0.04em |
| `headline-md` | 中見出し・帯の中の見出し | ゴシック | Noto Sans JP | 700 | 19px | 1.5 | 0.03em |
| `headline-sm` | カードのタイトル・FAQ の質問・小見出し | ゴシック | Noto Sans JP | 700 | 15px | 1.5 | 0.03em |
| `body-md` | 本文・リード文・表の中身 | ゴシック | Noto Sans JP | 400 | 13px | 1.9 | 0.03em |
| `label-button` | CTA ボタンの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.3 | 0.05em |
| `note` | 注釈・日付・コピーライト・入社年 | ゴシック | Noto Sans JP | 400 | 11px | 1.6 | 0.02em |

- 和文はゴシック 1 書体で組み、階層は太さとサイズの違いで作る。
- 各セクションの見出しは、英字ラベル（Montserrat）と和文見出しを縦に積んだ二層構成で統一する。
- 英字ラベルは青か紺の小さな文字にし、下線や小さな丸を添えて見出しの上に置く。
- 数字や実績値は欧文サンセリフの太字で大きく見せ、単位は小さく添える。
- 本文は 13px 前後と小さめにし、行間 1.9 前後と字間 0.03em で、ゆとりを持たせて左揃えで組む。
- 日付や入社年は欧文の数字で、本文より一段小さく灰色で表記する。
- ポップな丸ゴシックや手書き書体は混ぜない。
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。カードは縦に積み、インタビューや求人カードは横スライダーにする
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 72px、基本単位 8px、カード内 20px（375px 幅換算）
- 左右の余白は画面幅の約 5%（16〜20px）を確保する。
- 各セクションは「英字ラベル → 和文見出し → リード → 写真・カード → ボタン」の順に積む。
- セクションの間は 72px 前後を基準にし、大きな区切りでは地の色も切り替える。
- インタビューや求人カードは横スライダーにし、両隣のカードを少しはみ出させて見せる。
- 流れ（選考ステップ）は STEP カードを縦に積み、下向きの矢印や点線でつなぐ。
- ページの中盤と終盤に CTA 帯を挟み、応募への入口を繰り返し置く。

## Elevation & Depth

- 基本は影を付けず、白カードと淡い地の色差、1px の細い罫線で階層を作る。
- 目立たせたいカードは、影ではなく紺や青の枠線で囲む。
- 影を使う場合も、白カードに 0 2px 8px rgba(0,0,0,.08) 程度のごく淡いものに限る。
- CTA ボタンには、下方向へ淡い影を 1 段だけ付けてもよい。

## Shapes

- **角丸**: 小 4px ／ 中 8px ／ 大 16px。ボタンはピル型。
- **写真の切り抜き**: 写真は横長の長方形（約 3:2）にし、角は 4〜8px の小さな角丸にする。人物のポートレートは縦長の矩形、または円形にする
- **セクション境界**: 直線で地の色を切り替えるのが基本。ファーストビューの下だけ、ゆるい弧や斜めのカットで変化を付けてもよい
- 主 CTA はピル型にし、右端に丸の中の矢印アイコンを付ける。
- カードは角丸 8px、FAQ の行やタグは角丸 4px にする。
- バッジ・職種タグ・STEP 番号はピル型か円形にする。
- 大きな装飾の角丸（16px）は、帯やファーストビューの写真枠だけに使う。
- ピル型と角型のボタンに同じ役割を混在させない。

## Components

- **エントリーボタン**（`button-primary`）: オレンジのピル型ボタン。白い太字の文字を中央に置き、右端に白い丸矢印アイコンを付ける。幅は画面の約 80% で中央に置く。
- **サブボタン（詳しく見る）**（`button-secondary`）: 紺のピル型、または白地に紺の枠線のボタン。主 CTA の下か隣に置き、一覧や詳細ページへ誘導する。
- **英字ラベル付きセクション見出し**（`section-heading`）: 青い英字ラベル（小さな丸か下線付き）の下に、紺〜黒の太い和文見出しを置く。必要に応じて背景に薄い大きな英字を透かして敷く。
- **実績数値カード**（`stat-card`）: 白い角丸カードに、小さなラベル・青い大きな数字・小さな単位を縦に並べる。2 列のグリッドで並べ、淡い青灰の地の上に置く。
- **社員インタビューカード**（`interview-card`）: 縦長の人物写真の下に、職種のピル型タグ・入社年・名前・ひとことのキャッチを並べる。横スライダーで見せる。
- **募集職種カード**（`job-card`）: 白カードに職種名を太字で置き、灰色のチップで勤務地・雇用形態・給与の行を並べる。下に枠線の「詳細を見る」ボタンを付ける。
- **選考ステップカード**（`step-card`）: 淡い水色のカードの左に青い円の STEP 番号、右に見出しと説明文を置く。カードの間は下向きの矢印でつなぐ。
- **FAQ アコーディオン**（`faq-item`）: 白い行の左に青い「Q」、右に＋アイコンを置き、各行の下に淡い青灰の罫線を引く。開くと「A」と回答の本文が出る。
- **紺地 CTA 帯**（`cta-band`）: 全幅の濃紺帯に、白の 2 行見出しと短い説明文、オレンジのエントリーボタンを中央揃えで置く。
- **お知らせ一覧**（`news-list`）: 欧文の日付・紺のピル型カテゴリタグ・タイトルを 1 行ずつ並べ、行の間に細い罫線を引く。

## Do's and Don'ts

**Do**
- 英字ラベルと和文見出しの組み合わせを、すべてのセクションで同じ形にそろえる。
- 地の色は白と薄い青灰を交互に敷き、セクションの切り替わりをはっきりさせる。
- 応募ボタンは 1 色・1 形状にそろえ、ページの中盤と最後に繰り返し置く。
- 実際の職場で働く社員の、自然光で撮った明るい写真を使う。
- 実績や制度は数字で示し、数値カードで大きく見せる。
- 本文は行間を広く取り、短い段落に分けて読みやすくする。

**Don't**
- カードに濃い影や立体的な装飾を付けない。
- オレンジや赤を本文や広い背景に使わない。
- ポップな丸ゴシックや手書き書体を見出しに混ぜない。
- 黒や彩度の高い原色を地の色に使わない。
- 本文を詰めて組んだり、行間を狭くしたりしない。
- 青系の色を役割の区別なく何色も増やさない。

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ヘッダー**（ロゴとエントリー導線を常に見せる）: 白地の細いバーに左ロゴ、右にオレンジの小さなエントリーボタンとハンバーガーメニューを置き、上部に固定する。
2. **ファーストビュー**（会社の印象と働く人の姿を一目で伝える）: 社員の写真を全幅か大きな角丸枠で見せ、白帯や紺帯の上に太いゴシックの大コピーを重ねる。英字の大きな装飾文字を添える。
3. **お知らせ**（最新の採用情報や説明会の告知を届ける）: 白地に日付・タグ・タイトルの行を 3 件ほど罫線で区切って並べ、右下に「一覧へ」のテキストリンクを置く。
4. **メッセージ**（会社の存在意義と、仲間を募る思いを伝える）: 英字ラベル付き見出しの下に、行間の広い本文と横長の写真を置く。地は白のまま、余白を広めに取る。
5. **数字で見る会社**（実績や制度を数値で示し、安心感を与える）: 薄い青灰の地に白い数値カードを 2 列で並べ、青い大きな数字と線画アイコンを入れる。
6. **職種紹介**（仕事の種類を示し、自分に合う入口を選ばせる）: 写真付きの白カードを縦に積むか横スライダーにし、職種名と短い説明、矢印ボタンを付ける。
7. **CTA**（途中で応募・説明会予約へ誘導する）: 全幅の濃紺帯に白文字の見出しとオレンジのピル型ボタンを中央揃えで置く。
8. **社員インタビュー**（働く人のリアルな声を伝える）: 縦長の人物写真カードを横スライダーで並べ、職種タグ・入社年・キャッチを添える。
9. **選考の流れ**（応募から入社までの流れを示し、不安を減らす）: 淡い水色の STEP カードを縦に積み、青い円の番号と下向きの矢印でつなぐ。
10. **募集要項**（条件と詳細を漏れなく伝える）: 職種ごとの白カード、または罫線で区切った 2 列の表で、項目名を紺の太字、内容を本文色で示す。
11. **よくある質問**（応募前の疑問を解消する）: 薄い青灰の地に、Q アイコンと＋が付いたアコーディオンを罫線で区切って並べる。
12. **フッター**（最終の応募導線とサイト内リンクを置く）: 上部にエントリーボタン付きの紺の CTA 帯、その下の濃紺の全面に白文字のリンク一覧とコピーライトを置く。

## Imagery

- 写真は実際の職場で働く社員を自然光で撮り、明るく清潔な印象にそろえる。スーツや作業着など業務が伝わる服装にする。
- 集合写真や人物の切り抜きは、大きな英字の上に重ねて奥行きを出す。
- アイコンは紺 1 色の細い線画にし、必要なら小さくオレンジのアクセントを入れる。
- 図解やイラストを使う場合は、黒〜紺の線に青と白で塗るシンプルなフラットイラストにする。
- 背景に写真を敷くときは、紺の半透明を重ねて彩度を落とし、白文字を載せる。
- 装飾は控えめにし、薄い方眼・幾何学の線・英字の透かし文字程度にとどめる。
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC では本文ブロックを中央の約 60〜70%（最大 1080px 前後）に収め、両側に余白を取る。
- PC のメッセージや職種紹介は、テキストと写真を左右に並べた 2 カラムにする。
- 数値カードは PC で 3〜4 列、インタビューは 3 枚が見えるスライダーにする。
- PC の CTA 帯では、エントリーと説明会予約のボタン 2 つを横に並べる。
- SP では画面下部にエントリーボタンを追従させ、PC ではヘッダー右に固定する。
- 募集要項の表は SP で項目と内容を縦に積み、PC では 2 列の表にする。

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

- **ID**: `pk-recruiting-trust`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「求人・採用」・主な雰囲気「信頼・誠実」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-recruiting-trust/
