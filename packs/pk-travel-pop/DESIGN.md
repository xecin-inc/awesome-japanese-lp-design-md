---
version: alpha
name: Pop Cheerful Travel & Tourism LP Pattern
description: 生成りに近い白地に、ターコイズ系の主色と青のサブ色を大きなベタ面で敷き、セクションごとに地の色を切り替えて旅のにぎやかさを出す型。見出しは極太のディスプレイ書体と欧文を 2 段に組み、黄色のピル型 CTA、赤やピンクの数字強調、マスコットや切り抜き写真をステッカーのように散らす。影はほとんど使わず、フラットな色面と太い線、波形の境界で動きをつける。
colors:
  background: '#FCFCFA'
  primary: '#17B7B2'
  secondary: '#2D95D5'
  background-alt: '#F2F4F6'
  surface: '#FCFCFC'
  tint-1: '#D9F2F3'
  cta: '#FDDE3D'
  on-cta: '#143672'
  text: '#212121'
  accent-1: '#D61A1C'
  accent-2: '#E175A6'
  marker: '#F5F23D'
  dark-section: '#122B68'
  on-dark: '#FBFCFC'
  line: '#DEDCDB'
  text-muted: '#949596'
  accent-2-accessible: '#D2327B'
typography:
  display:
    fontFamily: Dela Gothic One
    fontSize: 44px
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Zen Kaku Gothic New
    fontSize: 27px
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0.035em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.03em
  accent:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.05em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 4px
  md: 12px
  lg: 24px
  full: 999px
spacing:
  unit: 8px
  card: 16px
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
    height: 48px
  button-outline:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 46px
  section-title:
    textColor: '{colors.primary}'
    typography: '{typography.display}'
    height: 105px
  ribbon-heading:
    backgroundColor: '{colors.accent-2}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    height: 40px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.accent-1}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.full}'
    height: 58px
  spot-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.lg}'
    height: 330px
  badge-new:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.on-dark}'
    typography: '{typography.note}'
    rounded: '{rounded.sm}'
    height: 18px
  info-table:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 52px
  notice-box:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.note}'
    rounded: '{rounded.md}'
    height: 110px
---

# DESIGN.md — 旅行・観光のポップで元気な LP の型（Pop Cheerful Travel & Tourism LP Pattern）

designmark が、旅行・観光・ホテル・主な雰囲気「ポップ・元気」の LP の設計書 43 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 旅行・観光・ホテル ／ **雰囲気**: ポップ・元気、情報量多め・訴求型、親しみ・手作り感、清潔・爽やか
- **キーワード**: セクションごとの色替え・ピル型ボタン・フラットイラスト・波形境界・マスコット・切り抜きコラージュ
- **地の質感**: 基本はフラットな単色面。白い地にごく薄いストライプや紙のような粒子を薄く足してもよい。写真以外にグラデーションや柔らかい影はほとんど使わない。
- **形**: ピル型ボタンとタグ、角丸 12〜24px のカード、丸や楕円に切り抜いた写真、セクション境界のゆるい波形や斜めカット。
- **温度感**: 明るくて暖かい。海や空を思わせるターコイズと青を地にして、黄・赤・ピンクの暖色を差し、にぎやかで爽やかな印象にする。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FCFCFA` | ページ全体の生成りに近い白地 | 30% | 集計の代表色 |
| `primary` | `#17B7B2` | ブランドを代表するターコイズの面（FV・特集の地） | 9% | 集計の代表色 |
| `secondary` | `#2D95D5` | 青の帯・特集面・番号 | 6% | 集計の代表色 |
| `background-alt` | `#F2F4F6` | 概要・注釈エリアに使う薄いグレーの地 | 9% | 集計の代表色 |
| `surface` | `#FCFCFC` | 白カード・吹き出しの面 | 8% | 集計の代表色 |
| `tint-1` | `#D9F2F3` | 詳細パネルの淡い水色の地 | 4% | 集計の代表色 |
| `cta` | `#FDDE3D` | 主ボタンの黄色 | 1% | 集計の代表色 |
| `on-cta` | `#143672` | 黄色ボタン上の濃紺の文字・矢印 | 0% | 集計の代表色 |
| `text` | `#212121` | 見出しと本文の文字 | 2% | 集計の代表色 |
| `accent-1` | `#D61A1C` | 金額・割引率など数字を強調する赤 | 2% | 集計の代表色 |
| `accent-2` | `#E175A6` | 目玉企画・バッジ・吹き出しのピンク | 1% | 集計の代表色 |
| `marker` | `#F5F23D` | 数字や強調語の下に引く黄色マーカー | 1% | 集計の代表色 |
| `dark-section` | `#122B68` | 締めのセクションやフッターの濃紺の地 | 4% | 集計の代表色 |
| `on-dark` | `#FBFCFC` | 色の濃い面に乗せる白文字 | 2% | 集計の代表色 |
| `line` | `#DEDCDB` | 表・区切りの薄いグレーの線 | 0% | 集計の代表色 |
| `text-muted` | `#949596` | 補足文・日付・販売終了表示のグレー | 1% | 集計の代表色 |
| `accent-2-accessible` | `#D2327B` | AA を満たす補正値（計算） |  | 計算 |

- 地は生成り白を基本にし、ターコイズ・淡い水色・薄グレー・濃紺のベタ面をセクションごとに切り替えて区切りをはっきりさせる
- 主ボタンは黄色に統一し、濃紺の文字と丸い矢印を乗せる。ほかの要素に黄色の広い面を使わない
- 金額・割引率・ポイントの数字だけを赤の極太にし、下に黄色マーカーを引く
- ピンクは目玉企画の見出し・期間バッジ・吹き出しに絞り、広い面には使わない
- カテゴリやエリアごとに色を 1 つ決め、ボタン枠・ラベル・アイコンに同じ色を使う
- 濃紺の地では文字を白にし、強調語だけを黄色にする
- グラデーションは避け、色の切り替えは単色面の境目で行う
- `ribbon-heading` は文字 `#FBFCFC` × 背景 `#E175A6` のコントラスト比が 2.8:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-2-accessible`（`#D2327B`、4.56:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューの大見出し・セクションの英字タイトル | 装飾・ディスプレイ | Dela Gothic One | 900 | 44px | 1.1 | 0.02em |
| `headline-lg` | セクションの和文大見出し・色面上のキャッチ | ゴシック | Zen Kaku Gothic New | 900 | 27px | 1.3 | 0.05em |
| `headline-md` | 目玉企画やカテゴリの中見出し | ゴシック | Noto Sans JP | 700 | 20px | 1.4 | 0.05em |
| `headline-sm` | スポット名・帯見出し・カードタイトル | ゴシック | Noto Sans JP | 700 | 15px | 1.45 | 0.035em |
| `body-md` | 本文・カード本文 | ゴシック | Noto Sans JP | 400 | 13px | 1.8 | 0.03em |
| `accent` | 欧文の見出しラベル・和文見出しに添える英字 | 欧文サンセリフ | Montserrat | 700 | 16px | 1.2 | 0.05em |
| `label-button` | ボタン・タグの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.3 | 0.05em |
| `note` | 注釈・コピーライト・バッジの文字 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.0em |

- 大見出しは極太のディスプレイ書体を使い、太い英字と和文を 2 段に重ねる
- 見出しは 2 行に分け、1 行目を短くしてリズムを出す
- 本文は 13px 前後、行間 1.8 程度でゆったり組み、長い文はブロックを分ける
- 数字は見出しより一段大きい極太にして、単位を小さく添える
- ボタンの文字は短くし、1 行で中央にそろえる
- 細い明朝体は使わず、全体を太めのゴシックか丸ゴシックでそろえる
- 欧文ラベルは Montserrat の太字かイタリックにして、和文見出しの上か下に添える
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。スポットやカードは 2 列のグリッドか、横スクロールのカルーセルにする
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 64px、基本単位 8px、カード内 16px（375px 幅換算）
- 色面は画面幅いっぱいに敷き、その上の本文やカードは左右に約 5% の余白を取る
- 各セクションの末尾に中央寄せのピル型ボタンを 1 つ置く
- 横スクロールのカードは右端のカードを少し見切れさせ、スクロールできることを示す
- スポット紹介は「写真 → 名称と地域 → 紹介文 → データの箇条書き」の順でそろえる
- マスコットや切り抜きイラストは見出しの脇やカードの角からはみ出させる
- アクセスは出発地・所要時間・到着地を横に並べた図で見せる

## Elevation & Depth

- ぼかした影は使わず、フラットな色面の重なりで前後関係を表す
- 主ボタンだけ、真下に濃い色の影をぼかさずにずらして付け、押せそうに見せる
- カードは影の代わりに 2px 前後の濃い枠線か、右下にずらしたベタの影で浮かせる
- 写真の上に文字を乗せるときは、半透明の濃い面を重ねて読みやすくする

## Shapes

- **角丸**: 小 4px ／ 中 12px ／ 大 24px。ボタンはピル型。
- **写真の切り抜き**: 写真は角丸の長方形を基本にする。FV やスポットの写真は円・楕円・不定形に切り抜き、小さな丸写真を重ねてもよい
- **セクション境界**: FV の下とセクションの切り替えは、ゆるい波形か斜めカットの色面にする。片方の角だけ大きく丸めた色面にしてもよい
- ボタン・タグ・カテゴリラベルはすべてピル型にする
- ボタンの右端に丸い矢印か「>」を付ける
- ラベル帯は角丸 4px の長方形、カードは 12〜24px の角丸にする
- セクション見出しは両端を V 字に切ったリボン帯を使ってもよい
- アイコンバッジや番号は正円にする

## Components

- **黄色のピル型主ボタン**（`button-primary`）: 幅いっぱいの黄色いピル型ボタン。濃紺の太字で、右端に濃紺の丸い矢印を置く。下には濃い黄色の影をぼかさずにずらして付ける
- **枠線のサブボタン**（`button-outline`）: 白地に主色か濃い色の 2px 枠を付けたピル型のボタン。右に矢印を付け、色面の上や一覧への導線に使う
- **2 段のセクション見出し**（`section-title`）: 極太の英字タイトルを大きく置き、その下に和文の見出しを添える。中央にそろえ、脇にマスコットを置く
- **リボン帯見出し**（`ribbon-heading`）: 両端を V 字に切ったピンクか主色の帯に、白の太字で短い見出しを入れる。目玉企画の冒頭に使う
- **おトク訴求の吹き出し**（`speech-bubble`）: 白地に細い線の吹き出しで、中に赤の極太数字で割引額を書く。下向きの小さな三角を付け、少し傾けてもよい
- **スポット・記事カード**（`spot-card`）: 上に角丸の写真、下に太字のタイトル、グレーの補足文、# 付きのピル型タグを置く白いカード。濃い枠線を付けてもよい
- **NEW・期間バッジ**（`badge-new`）: カードの左上の角に重ねる、赤地に白文字の小さなラベル
- **アクセス・概要の表**（`info-table`）: 左に主色のセルで白い項目名、右に白いセルで内容を並べる 2 列の表。行は薄い線で区切り、外側を角丸にする
- **注意事項ボックス**（`notice-box`）: 薄グレーの地に見出しと箇条書きを小さな文字でまとめる。CTA のすぐ後に置く

## Do's and Don'ts

**Do**
- セクションごとに地の色を変え、波形や斜めカットの境界でリズムを出す
- マスコットやイラストを見出しの脇やカードの角に繰り返し置き、回遊する楽しさを出す
- 数字の訴求は赤の極太にして黄色マーカーを添え、ひと目で得だとわかるようにする
- ボタンはすべてピル型にし、主ボタンは黄色にそろえる
- 名物・景色・人物を切り抜いて、ステッカーのように貼る
- 注釈は ※ を付けて CTA の直後にまとめる

**Don't**
- ぼかした影やグラデーションを多用しない
- 細い明朝体や細字で上品に寄せない
- 赤やピンクを広い面に使わない
- ボタンを角張った四角にしない
- 写真に強いフィルターをかけたり、暗く沈んだ色に調整したりしない
- 長い本文を一つの段落に詰め込まない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（旅先や企画の世界観を一目で伝え、主な導線へ誘導する）: 主色の面に切り抜き写真やイラストをコラージュし、極太のディスプレイ書体で大見出しを置く。下の境界はゆるい波形にする
2. **導入**（地域や企画の魅力を短く語りかける）: 生成りの地に中央寄せの短いリード文を置き、周りに小さなイラストを散らす
3. **コンセプト**（旅に出たくなる理由や企画の考え方を伝える）: 英字と和文の 2 段見出し、丸く切り抜いた写真、行間を広くとった本文で構成する
4. **お知らせ**（イベントなどの最新情報を伝える）: 日付とタイトルを並べたリストか横スクロールのカードにし、NEW バッジを付ける
5. **キャンペーンバナー**（お得なきっぷや特典へ誘導する）: 角丸のバナーを縦に並べ、ピンクのリボン帯と赤の数字で割引を強調する
6. **スポット・モデルコース**（具体的な巡り方を見せて、行きたい気持ちを高める）: 淡い水色の地に番号付きの白カードを並べ、写真・名称・紹介文・データを同じ順にそろえる。行程は点線と丸い番号でつなぐ
7. **参加型キャンペーン**（SNS 投稿などで特典がもらえることを伝え、参加を促す）: ピンクか青のベタ面に手順を番号付きの丸で 3 段並べ、吹き出しで特典を強調する
8. **アクセス**（行き方と所要時間を案内する）: 簡単な地図のイラストと、出発地・所要時間・到着地のピル型の図、2 列の情報表で見せる
9. **CTA**（予約・申込ページへ誘導する）: 主色の全幅の帯に黄色のピル型主ボタンを中央に置き、直下に注釈ボックスを添える
10. **フッター**（締めのメッセージと問い合わせ先・SNS を示す）: 濃紺の地に白文字で、ロゴ・SNS アイコン・コピーライトを中央にそろえる

## Imagery

- 青空・海・街並みを明るい日中に撮り、彩度高めの写真にする
- 名物料理・動物・景色・道具を一つずつ切り抜き、白フチ付きのステッカーのように貼る
- 観光客やスタッフの笑顔の写真を入れて、親しみを出す
- マスコットやゆるいキャラクターのフラットなイラストを見出しの脇や境界に置く
- 地図は淡い塗りと太い線だけの簡単なイラストにし、スポットを丸いピンで示す
- 余白には紙吹雪・葉っぱ・波線などの小さなフラットな飾りを散らす
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC は中央に約 1000px 幅でコンテンツを置き、色面と波形の境界は画面幅いっぱいに敷く
- スポットカードは SP の 1〜2 列から PC で 3 列に増やす
- PC では写真と本文を左右 2 カラムにし、左右を交互に入れ替える
- PC のヘッダーは右にテキストのナビを置き、SP ではハンバーガーメニューにする
- PC では画面の端に予約ボタンを固定して置いてもよい
- フッターは PC でロゴと SNS を横一列に並べる

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

- **ID**: `pk-travel-pop`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「旅行・観光・ホテル」・主な雰囲気「ポップ・元気」の設計書 43 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-travel-pop/
