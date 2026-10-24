---
version: alpha
name: Cinematic Dark Luxury Entertainment LP Pattern
description: 漆黒に近い地に、深紅と金を差し色に使うシネマ調の型。見出しは太い明朝や装飾セリフの大きな英字で組み、本文は小さめのゴシックで控えめにする。セクションの境目は直線か背景の連続でつなぎ、角丸はほとんど使わない。発光・煙・星屑・透かし英字で奥行きを出す。ファーストビューで世界観を見せ、物語・遊び方・出演者を順に紹介してから、チケットや購入の導線につなぐ。
colors:
  background: '#040405'
  primary: '#D21019'
  dark-section: '#0B0B0B'
  background-alt: '#161312'
  surface: '#F7F6F5'
  secondary: '#6E1D1E'
  text: '#F4F4F4'
  text-body: '#1F1F1E'
  text-muted: '#B2B0AF'
  accent-1: '#DBC683'
  accent-2: '#CD9F34'
  cta: '#E42B14'
  on-cta: '#FAF9F7'
  line: '#898A8A'
  cta-accessible: '#DD2A13'
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Shippori Mincho
    fontSize: 24px
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Noto Serif JP
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.025em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.03em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.02em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
  accent:
    fontFamily: Playfair Display
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.1em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
rounded:
  sm: 0px
  md: 4px
  lg: 7px
  full: 999px
spacing:
  unit: 8px
  card: 16px
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
    rounded: '{rounded.sm}'
    height: 48px
  button-outline:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    height: 40px
  section-heading:
    textColor: '{colors.accent-1}'
    typography: '{typography.accent}'
    height: 80px
  heading-plate:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 48px
  story-block:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    height: 320px
  cast-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    height: 230px
  step-card:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 360px
  price-table:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    height: 160px
  notice-box:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text-body}'
    typography: '{typography.note}'
    height: 120px
  accordion:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.sm}'
    height: 52px
---

# DESIGN.md — エンタメ作品の漆黒×金のダークな LP の型（Cinematic Dark Luxury Entertainment LP Pattern）

designmark が、エンタメ・ゲーム・アプリ・主な雰囲気「ラグジュアリー・ダーク」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: エンタメ・ゲーム・アプリ ／ **雰囲気**: ラグジュアリー・ダーク、力強い・インパクト、クール・先進的、上品・高級
- **キーワード**: 漆黒・金色の明朝・深紅・発光・シネマティック・ミステリー
- **地の質感**: 基本は黒の無地。背景には放射状の暗いグラデーション、煙や霧、星屑、ぼかした光の粒をうっすら重ねる。見出しや枠には金や色付きの淡い発光を添える。写真は暗くグレーディングし、黒に溶けるグラデーションで地とつなぐ。
- **形**: 角のある長方形が基本。ラベルや帯は端を斜めに切るか、角を落とした八角形にする。丸い形は SNS アイコンや商品の切り抜きだけに使う。
- **温度感**: 冷たく硬い暗色が地。深紅と金が熱を差し、緊張感と高揚感を生む。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#040405` | ページ全体の漆黒の地 | 45% | 集計の代表色 |
| `primary` | `#D21019` | 作品を象徴する深紅（ロゴ周り・帯・強調面） | 6% | 集計の代表色 |
| `dark-section` | `#0B0B0B` | 物語・ファーストビューなどのチャコールのグラデーション地 | 8% | 集計の代表色 |
| `background-alt` | `#161312` | 交互に置くセクションの墨黒の地 | 7% | 集計の代表色 |
| `surface` | `#F7F6F5` | 情報カード・注意ボックスの白い面 | 4% | 集計の代表色 |
| `secondary` | `#6E1D1E` | 見出しプレート・特長カードのバーガンディの面 | 4% | 集計の代表色 |
| `text` | `#F4F4F4` | 黒地の上の見出し・本文の白 | 2% | 集計の代表色 |
| `text-body` | `#1F1F1E` | 白いカードの中の本文の黒 | 2% | 集計の代表色 |
| `text-muted` | `#B2B0AF` | 注釈・日付・ラベルの薄いグレー | 0% | 集計の代表色 |
| `accent-1` | `#DBC683` | 英字見出し・ラベルのシャンパンゴールド | 1% | 集計の代表色 |
| `accent-2` | `#CD9F34` | 金の罫線・枠・発売中の印に使う濃い金 | 1% | 集計の代表色 |
| `cta` | `#E42B14` | 購入・チケット申込ボタンの赤 | 1% | 集計の代表色 |
| `on-cta` | `#FAF9F7` | CTA ボタン上の白文字 | 0% | 集計の代表色 |
| `line` | `#898A8A` | 区切り線・注記の枠線のグレー | 0% | 集計の代表色 |
| `cta-accessible` | `#DD2A13` | AA を満たす補正値（計算） |  | 計算 |

- 地はほぼ黒（#040405）で統一する。セクションごとにチャコールや墨黒のグラデーションを重ね、明るさを少しだけ変えて場面の切り替わりを見せる
- 白い面（surface）は、情報カード・注意ボックス・表に限って使う。セクション全体の背景を白やパステルにしない
- 深紅はロゴ周り・帯・購入ボタンに集める。金は英字見出し・罫線・枠に使う。差し色はこの 2 系統に絞る
- 黒地の上の文字は白が基本。強調したい語だけを金にする
- CTA は赤い面に白文字にして、ページの中で最も彩度の高い要素にする
- 注釈・日付・役職などは薄いグレーにして、本文より一段弱く見せる
- 発光（glow）は見出し・枠線・ファーストビューの光に限る。面全体を光らせない
- `button-primary` は文字 `#FAF9F7` × 背景 `#E42B14` のコントラスト比が 4.29:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#DD2A13`、4.52:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューのタイトル・写真に重ねる大きなコピー | 明朝 | Shippori Mincho | 700 | 40px | 1.1 | 0.02em |
| `headline-lg` | セクションの大見出し・日付や価格の大きな数字 | 明朝 | Shippori Mincho | 800 | 24px | 1.3 | 0.02em |
| `headline-md` | リード見出し・カードの見出し | 明朝 | Noto Serif JP | 700 | 20px | 1.4 | 0.025em |
| `headline-sm` | 小見出し・キャスト名・写真のキャプション | ゴシック | Noto Sans JP | 700 | 16px | 1.4 | 0.03em |
| `body-md` | 説明本文・あらすじ | ゴシック | Noto Sans JP | 400 | 13px | 1.8 | 0.02em |
| `note` | ※注釈・権利表記・期間条件 | ゴシック | Noto Sans JP | 400 | 10px | 1.5 | 0.0em |
| `accent` | セクション上部の英字見出し・正面/背面などの小ラベル・価格の数字 | 欧文セリフ | Playfair Display | 700 | 17px | 1.2 | 0.1em |
| `label-button` | CTA・READ MORE・タブの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.2 | 0.05em |

- タイトルと大見出しは太い明朝で組み、ドラマやゲームの演出のような重さを出す
- 英字見出しはすべて大文字のセリフ体にする。字間を広く取って中央に置き、下に小さな和文の明朝を添えて 2 段にする
- 本文はゴシックの 13px 前後。行間は 1.8 と広めにし、見出しより十分小さく控えめにする
- 物語の文章は明朝で中央揃えにし、短い行で改行する
- 写真の上に置く大見出しには、黒いドロップシャドウか淡い外光を付けて浮かせる
- コピーの中で強調する語は、字を大きくするか金色にする
- 丸ゴシック・手書き・細いゴシックは見出しに使わない
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。アイコンやサムネイルは 2〜3 列のグリッド、ニュースとキャラクターは横スライダー
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 64px、基本単位 8px、カード内 16px（375px 幅換算）
- 各セクションの冒頭は、英字と和文の 2 段見出しを中央に置き、その下に 32px ほど余白を取る
- キービジュアルと作品紹介の写真は画面幅いっぱいに敷く
- カードや写真は 16〜24px の間隔で縦に積む
- ニュース・キャラクター・STEP は横スライドのカードにし、矢印か番号表示を付ける
- 料金や日程は 2〜3 列の罫線付きの表にまとめる
- 最後に料金・日程と、中央に置いた購入ボタンで締める

## Elevation & Depth

- カードには基本的に影を付けない。細い枠線か面の明暗だけで区切る
- 見出しプレートと枠線には、淡い金や色付きの外光（glow）を付けて浮かせる
- 背景写真には黒のグラデーションを重ね、上に置く文字を浮かせる
- 黒地の上の白いボックスと CTA にだけ、下向きの薄い影を付ける
- 奥行きは、写真の明暗・煙・光の粒で出す

## Shapes

- **角丸**: 小 0px ／ 中 4px ／ 大 7px。ボタンは角丸の長方形。
- **写真の切り抜き**: 写真は四角のまま切り抜き、細い金か白の枠で額縁のように見せる。キャラクターや商品は背景を抜いて大きく見せる。帯やラベルは端を斜めに切った平行四辺形にする
- **セクション境界**: 境界は直線にし、背景のグラデーションや煙を連続させてつなぐ。必要なら細い金の水平線を 1 本引く
- タブ・見出し枠・カード・表は角丸なしにする
- 購入ボタンとアコーディオンだけ 4px 前後の小さな角丸にしてよい
- 見出しのプレートやラベルは、角を斜めに落とした八角形か、左右の端をとがらせた形にする
- 丸い形は SNS アイコン・円形バッジ・商品の切り抜きだけに使う
- ピル型のボタンは使わない

## Components

- **購入・チケット申込ボタン**（`button-primary`）: 赤い横長の長方形に、白い太字のラベルを中央に置く。右端に三角の矢印。薄い影か赤い外光で押せる質感を出す
- **詳細・続きを読むボタン**（`button-outline`）: 黒地に 1px の白か金の細い枠を付け、文字も同じ色にする。右端に三角の矢印
- **2 段のセクション見出し**（`section-heading`）: 字間を広げた金の大文字の英字セリフの下に、小さな白い明朝の和文を中央揃えで添える。両脇に細い線か小さな星を置く
- **金枠の見出しプレート**（`heading-plate`）: バーガンディの横長プレートを金の二重枠で囲み、淡い金の外光を付ける。中に白い明朝の見出しを置く
- **物語テキストブロック**（`story-block`）: 暗いグラデーションの地に、明朝の短い行を中央揃えで並べる。背後に巨大な英字を半透明で透かして入れる
- **キャスト・キャラクターカード**（`cast-card`）: 上に正方形の写真、その下に白い明朝の名前、細い赤の線、グレーの役名を縦に並べる。横にスライドさせる
- **遊び方の STEP カード**（`step-card`）: 墨黒の面に金の細い枠を付ける。欧文の STEP 番号、金の下線、白の細線アイコン、説明文の順に入れる
- **料金・日程の表**（`price-table`）: 選択中のタブに金の上線を付けたタブ付きの表。グレーの罫線で 2 列に分け、白い太字で価格を載せる
- **注意事項ボックス**（`notice-box`）: 上は黒い帯に白抜きの見出し、下は白い面に注意事項を左揃えで並べる
- **注意事項アコーディオン**（`accordion`）: 細いグレーの枠を付けた帯の中央に太字のラベルを置き、右端に ▼ を付ける

## Do's and Don'ts

**Do**
- 地は黒、差し色は深紅と金の 2 系統に絞る
- 見出しは太い明朝と、字間を広げた大文字の英字セリフで統一する
- 写真に細い金か白の枠を付け、劇場の額縁のように見せる
- 背景に煙・星屑・光の粒・透かし英字を薄く重ねて奥行きを出す
- アイコンは白一色の細い線画にそろえる
- CTA は赤い面と白文字にして、ページの中で最も目立たせる

**Don't**
- 白・パステル・明るい色をセクションの背景に使わない（表やカードは例外）
- 丸ゴシック・手書き・ポップな書体を見出しに使わない
- ピル型や大きな角丸のボタンを使わない
- 蛍光色や金を本文に使わない
- 差し色を 3 色以上に増やさない
- 装飾を省いたフラットなだけのカードを並べない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（作品の世界観と公開日・発売日を一瞬で伝える）: 全幅のキービジュアルを暗くグレーディングし、太い明朝のタイトルと日付を重ねる。下端は黒へ溶けるグラデーションにする
2. **ニュース**（最新のお知らせを伝える）: 日付をグレー、タイトルを白にしたリストか横スライダーにする。行の間に細いグレーの区切り線を引く
3. **動画**（予告映像や CM で興味を引く）: 16:9 の動画枠に細い金の枠と淡い外光を付け、中央に再生アイコンを置く
4. **イントロダクション**（作品の背景と企画の意図を伝える）: 2 段の見出しの下に、明朝のリード文を中央揃えで置く。背景に巨大な英字を透かして入れる
5. **ストーリー**（あらすじで世界に引き込む）: チャコールのグラデーションの地に、煙のテクスチャを重ねる。明朝の短い行を中央揃えで並べる
6. **遊び方**（人数・時間などの条件と、参加の流れを示す）: 条件は白い線画アイコンの 2 列グリッドにする。手順は金枠の STEP カードを横スライドで並べる
7. **キャスト**（出演者やキャラクターを紹介する）: 正方形の写真カードを 2 列か横スライダーで並べる。名前は明朝、役名はグレーにする
8. **チケット情報**（日程・会場・料金を伝える）: 金枠の会場カードと、タブ付きの料金表を縦に積む
9. **チケット購入**（購入方法を示して申込につなげる）: 赤い CTA ボタンを中央に大きく置き、下に注意事項のアコーディオンを付ける
10. **フッター**（FAQ や SNS への導線と権利表記）: 黒地に円形の白線の SNS アイコンを並べ、10px のグレーで権利表記を入れる

## Imagery

- キャラクターは厚塗りのアニメ調イラストか、劇画調にする。武器を構える・拳を握るなど動きのあるポーズを斜めの角度から描く
- 実写は暗い会場や夜景にして、青や赤の照明を当てたシネマ調に色を整える
- 背景には星屑・煙・霧・ぼかした光の粒を薄く散らす
- 背景に巨大な欧文ロゴや英字を半透明で重ね、奥行きを作る
- 商品や機体は背景を抜いて大きく見せ、白か金の淡い外光を付ける
- 装飾には金の細い罫線・アールデコ風の点線・唐草ラインを使う
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC では中央に 750〜960px 程度の固定幅のコンテンツを置き、左右は黒地か煙・光の装飾で埋める
- PC のファーストビューは全幅のビジュアルのまま、タイトルを片側に寄せて置いてもよい
- PC のイントロダクションや作品紹介は、画像と文を左右交互の 2 カラムにする
- キャストカードは PC で 3〜4 列のグリッドにする。STEP カードは横一列に並べる
- 見出しの帯や表はコンテナ幅に合わせ、SP と同じ構成のまま広げる

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

- **ID**: `pk-entertainment-dark-luxury`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「エンタメ・ゲーム・アプリ」・主な雰囲気「ラグジュアリー・ダーク」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-entertainment-dark-luxury/
