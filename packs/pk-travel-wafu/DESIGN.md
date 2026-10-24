---
version: alpha
name: Japanese Washi Travel & Tourism LP Pattern
description: 生成りの和紙風の地に、墨色の文字と明朝体の見出しを置き、藍・金茶・朱赤を小さな面積で効かせる観光 LP の型。写真を大きく使って旅情を出し、UI はフラットに抑える。縦書きや英字セリフの副見出し、細い罫線、和柄の装飾で、上品で落ち着いた和の世界観を作る。
colors:
  background: '#F8F8F6'
  background-alt: '#F9F8F6'
  surface: '#F9FAF9'
  primary: '#2D5F8D'
  on-primary: '#F9FAFC'
  secondary: '#A38B72'
  accent-1: '#B2995C'
  accent-2: '#B62F2D'
  cta: '#DF302C'
  on-cta: '#FEFCFA'
  text: '#342C28'
  text-muted: '#6A6A69'
  line: '#CBCDCB'
  tint-1: '#F9F0DA'
  dark-section: '#111110'
  on-dark: '#FBFBFB'
  cta-accessible: '#DE2C28'
  accent-1-accessible: '#85713F'
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.08em
  headline-lg:
    fontFamily: Shippori Mincho
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.08em
  headline-md:
    fontFamily: Noto Serif JP
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.04em
  headline-sm:
    fontFamily: Noto Serif JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0.05em
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
    fontFamily: Playfair Display
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.05em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.05em
rounded:
  sm: 4px
  md: 8px
  lg: 12px
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
    rounded: '{rounded.sm}'
    height: 48px
  button-outline:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.sm}'
    height: 38px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 64px
  ribbon-heading:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.headline-md}'
    height: 52px
  info-table:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.note}'
    height: 56px
  spot-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 340px
  category-tag:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.on-dark}'
    typography: '{typography.accent}'
    height: 34px
  news-item:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 52px
  banner-card:
    backgroundColor: '{colors.surface}'
    rounded: '{rounded.md}'
    height: 140px
---

# DESIGN.md — 旅行・観光の和風で格調ある LP の型（Japanese Washi Travel & Tourism LP Pattern）

designmark が、旅行・観光・ホテル・主な雰囲気「和風」の LP の設計書 24 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 旅行・観光・ホテル ／ **雰囲気**: 和風、上品・高級、情報量多め・訴求型、やさしい・柔らかい
- **キーワード**: 和紙テクスチャ・明朝体・縦書き・生成り・和モダン・静寂
- **地の質感**: 生成り〜薄灰の地に、細かな和紙の繊維ノイズをうっすら敷く。カードの中は無地。金は箔のような軽いムラ、濃色帯はほぼベタ塗りにする。
- **形**: 角丸は小さめか、角丸なしの矩形が基本。リボンの矢羽、雲形、波線などの和の輪郭を見出しや区切りのアクセントに限って使う。
- **温度感**: 生成りと墨色の落ち着いた中間色が土台。藍や深緑の寒色に、金茶と朱赤を少し加えて温かみを出す。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#F8F8F6` | ページ基本地（和紙風の生成り） | 31% | 集計の代表色 |
| `background-alt` | `#F9F8F6` | 交互セクション・アクセス帯の明るい生成り | 10% | 集計の代表色 |
| `surface` | `#F9FAF9` | カード・情報ボックスの地 | 11% | 集計の代表色 |
| `primary` | `#2D5F8D` | 藍の見出し帯・セクション地 | 6% | 集計の代表色 |
| `on-primary` | `#F9FAFC` | 藍帯の上に置く白文字 | 0% | 集計の代表色 |
| `secondary` | `#A38B72` | 金茶の英字見出し・サブ面 | 6% | 集計の代表色 |
| `accent-1` | `#B2995C` | 金の装飾線・ラベル・小見出し帯 | 1% | 集計の代表色 |
| `accent-2` | `#B62F2D` | 臙脂の強調文字・日付ラベル | 1% | 集計の代表色 |
| `cta` | `#DF302C` | 主ボタンの朱赤 | 1% | 集計の代表色 |
| `on-cta` | `#FEFCFA` | ボタン上の白文字 | 0% | 集計の代表色 |
| `text` | `#342C28` | 見出し・本文の墨色（焦げ茶寄り） | 3% | 集計の代表色 |
| `text-muted` | `#6A6A69` | 注釈・キャプションの灰色 | 0% | 集計の代表色 |
| `line` | `#CBCDCB` | 区切りの細い罫線・枠線 | 0% | 集計の代表色 |
| `tint-1` | `#F9F0DA` | 特典・要項枠の淡いクリーム面 | 5% | 集計の代表色 |
| `dark-section` | `#111110` | 章の区切り帯・フッターの墨色 | 2% | 集計の代表色 |
| `on-dark` | `#FBFBFB` | 墨色帯・フッター上の白文字 | 2% | 集計の代表色 |
| `cta-accessible` | `#DE2C28` | AA を満たす補正値（計算） |  | 計算 |
| `accent-1-accessible` | `#85713F` | AA を満たす補正値（計算） |  | 計算 |

- 地は生成りの近い 2〜3 色（background / background-alt / surface）だけで切り替え、真っ白一色のページにしない
- 色の華やかさは写真に任せ、UI の色は墨・生成り・藍・金茶の範囲に収める
- 金（accent-1）は罫線・ラベル・紋・箇条書きの印など細い要素だけに使い、広い面を塗らない
- 朱赤（cta）は主ボタンと要所の強調だけに使い、1 画面に 1〜2 か所までにする
- 藍（primary）は見出し帯やセクション地に使い、上には白文字か白カードを載せる
- 本文は焦げ茶寄りの墨色にして、純黒は使わない
- 章の切り替えやフッターには墨色の全幅帯を入れて、画面を引き締める
- `button-primary` は文字 `#FEFCFA` × 背景 `#DF302C` のコントラスト比が 4.46:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#DE2C28`、4.56:1）を使う。
- `category-tag` は文字 `#FBFBFB` × 背景 `#B2995C` のコントラスト比が 2.67:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-1-accessible`（`#85713F`、4.58:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FV のタイトル・章タイトル（縦書きも可） | 明朝 | Shippori Mincho | 500 | 30px | 1.3 | 0.08em |
| `headline-lg` | セクションの大見出し・名所のキャッチ | 明朝 | Shippori Mincho | 500 | 24px | 1.4 | 0.08em |
| `headline-md` | スポット名・プラン名・カード見出し | 明朝 | Noto Serif JP | 700 | 19px | 1.5 | 0.04em |
| `headline-sm` | 施設名・小見出し・カテゴリ名 | 明朝 | Noto Serif JP | 700 | 16px | 1.45 | 0.05em |
| `body-md` | 解説文・案内の本文 | ゴシック | Noto Sans JP | 400 | 13px | 1.8 | 0.03em |
| `note` | 注釈・日付・補足 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.02em |
| `accent` | 英字のサブタイトル・セクションラベル | 欧文セリフ | Playfair Display | 400 | 15px | 1.2 | 0.05em |
| `label-button` | ボタン・ラベルの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.3 | 0.05em |

- 見出しは明朝、本文・注釈・機能的な文言はゴシックにして役割を分ける
- 見出しの字間は 0.08em 前後と広めにとり、和の落ち着きを出す
- FV や章の入口のキャッチは縦書きの明朝にしてもよい
- セクション見出しは、英字セリフのラベルと和文見出しを上下に重ねて組む
- 導入文は中央揃えで短めに改行し、行間を広くとる。長い説明文は左揃えにする
- 大見出しにゴシックの極太や丸ゴシックを使わない
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。ナビやロゴは 2〜3 列のグリッド
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 64px、基本単位 8px、カード内 16px（375px 幅換算）
- 章は全幅の写真で始め、その下に見出し → リード → 本文 → リンクの順で縦に積む
- 写真はカラム幅いっぱいか全幅で置き、小さく収めない
- セクションの間は広めにとり、余白で静けさを出す
- 開催情報やアクセス情報は「項目名＋値」の 2 列の表にまとめる
- 見出しは中央揃え、本文ブロックは左揃えを基本にする
- 主 CTA は幅 80% 前後で中央に置き、下に注釈を添える

## Elevation & Depth

- 基本はフラットにして、影はほぼ使わない
- 奥行きは写真の重ね配置や、地とカードの色差で出す
- カードに影を付ける場合は、下方向にごく弱い影だけにする
- 写真の上に文字を置くときは、薄い暗幕を重ねて読みやすくする

## Shapes

- **角丸**: 小 4px ／ 中 8px ／ 大 12px。ボタンは角丸の長方形。
- **写真の切り抜き**: 角丸なしの横長矩形（3:2〜4:3）が基本。アクセントに正円や白枠付きの写真を少しだけ混ぜる
- **セクション境界**: 基本は直線か細い罫線。FV の下端や和紙地のセクションには、ゆるい弧・波線・浅い斜めを使う
- ボタンは小さい角丸の矩形。細い内枠で額縁風にしてもよい
- リボン見出しは左右の端を矢羽形や燕尾形に切る
- 線は 1px の細線に統一する
- カテゴリ札は縦長の長方形にする
- 装飾には雲・波・桜・葉などの和のモチーフを小さく使う

## Components

- **朱赤 CTA ボタン**（`button-primary`）: 小さい角丸の横長の朱赤ボタン。白い文字を中央に置き、右端に細い矢印を付ける。内側に細い線を入れて額縁風にしてもよい。
- **細枠サブボタン**（`button-outline`）: 生成りの面に 1px の墨色か金茶の枠を付けたボタン。明朝の文字で、詳細ページや外部情報へ誘導する。
- **英字ラベル付き見出し**（`section-heading`）: 金茶の英字セリフのラベルの下に、明朝の和文見出しを置く。脇や下に金の細線を添える。
- **リボン見出し**（`ribbon-heading`）: 藍の帯の両端を矢羽形に切り、白い明朝の見出しを置く。上に小さな英字やルビを添える。
- **開催・アクセス情報表**（`info-table`）: 左に藍の見出しセル、右に生成りの値セルを置く 2 列の表。セルの間は細い隙間か細い罫線で区切る。
- **名所カード**（`spot-card`）: 全幅の写真の下に、名称・キャッチ・本文・点線・詳細の順で並べる。写真の角に縦書きの札を重ねてもよい。
- **縦書きカテゴリ札**（`category-tag`）: 写真の右上に重ねる縦長の小さな札。金茶の地に白文字で、カテゴリ名を縦書きにする。
- **お知らせ行**（`news-item`）: 日付・小さなタグ・タイトルを並べ、行の間を細い罫線で区切るリスト。
- **関連バナー**（`banner-card`）: 横長の画像バナーを細い枠付きの生成りカードに収め、縦に積む。

## Do's and Don'ts

**Do**
- 和紙風の生成りの地に、墨・金茶・朱赤（または藍）の少数の色で格調を保つ
- 風景・寺社・宿の写真を大きく使い、旅情を主役にする
- 見出しは明朝、本文はゴシックにして読みやすさと品を両立する
- 英字セリフのラベルと和文の見出しを組み合わせて、和モダンに見せる
- 青海波・麻の葉・雲などの和柄を、淡い色で帯や背景に少しだけ使う
- 情報は表やカードにまとめ、細い罫線で整理する

**Don't**
- 純黒の文字や真っ白一色の背景にしない
- 強い影や派手なグラデーションのボタンにしない
- ポップな丸ゴシックや太いゴシックを大見出しに使わない
- 原色を多く入れて、パステル調やポップな配色にしない
- 写真を小さく枠に収めて、余白に埋もれさせない
- 金を広い面に塗らない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（土地の景色と世界観で引き込み、企画のタイトルを伝える）: 全幅の風景写真か和紙地のイラストに、縦書きの明朝タイトルを重ねる。下端はゆるい弧かグラデーションで本文につなぐ。
2. **リード・導入**（地域の魅力と企画の趣旨を語りで伝える）: 生成りの地に、中央揃えの短い行の本文を広い行間で置く。上に英字ラベルと金の細線を添える。
3. **ページ内ナビ**（各テーマのセクションへ移動させる）: 写真付きのナビカードを 2×2 のグリッドで並べ、明朝のラベルを付ける。
4. **開催概要**（日程・場所・料金などを伝える）: 藍の見出しセルと生成りの値セルからなる 2 列の情報表にまとめる。
5. **コンセプト**（施設や企画の成り立ちと想いを伝える）: 大きな写真の下に、明朝の見出しと左揃えの本文を置く。背景に淡い和柄をうっすら敷く。
6. **スポット・モデルコース紹介**（巡る場所と回り方を提案する）: 名所カードを縦に積み、写真に縦書きのカテゴリ札を重ねる。コースは番号と細い線でつなぐ。
7. **お知らせ**（最新のトピックを伝える）: 日付・タグ・タイトルを並べたリストにして、行を細い罫線で区切る。
8. **アクセス**（所在地と行き方を案内する）: 地図の下に経路を表か白ボックスでまとめ、細い枠線で囲む。
9. **関連バナー**（旅行商品や関連施策へ回遊させる）: 横長のバナーを細い枠付きのカードに入れて縦に積む。
10. **フッター**（サイト情報・共有・コピーライトを載せる）: 墨色の全幅帯に白文字でナビとコピーライトを並べる。上端は浅い斜めか直線で区切る。

## Imagery

- 自然光で柔らかく、やや明るめの露出で撮った風景・寺社・町並みの写真
- 寺社や名所は晴天の正面寄りで撮り、横長に切り出す
- 和装の人物は後ろ姿やシルエットを中心に、情緒的に撮る
- 料理は木の器や竹かごを使い、真上か斜め上から撮る
- 背景は和紙の繊維感と、淡い青海波・雲・麻の葉などの和柄
- 見出しの装飾は、山並み・波線・鳥などの細い線画に限る
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC でも本文の中央カラムは 500〜960px 程度に抑え、余白と字間の広さを保つ
- PC ではスポットやイベントのカードを「写真を左、テキストを右」の 2 カラムにする
- PC のナビカードは 4 つ横並びにする
- PC のアクセスは地図と文字を横並びにする
- PC の FV では全幅の写真を広く見せ、縦書きタイトルの位置は SP と揃える
- SP では写真のコラージュを 1〜2 枚ずつ縦に積む

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

- **ID**: `pk-travel-wafu`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「旅行・観光・ホテル」・主な雰囲気「和風」の設計書 24 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-travel-wafu/
