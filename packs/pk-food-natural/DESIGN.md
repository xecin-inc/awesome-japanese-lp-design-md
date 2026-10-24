---
version: alpha
name: Natural Warm Food & Beverage LP Pattern
description: 生成りの地と白いカードを交互に重ね、焦げ茶の文字と見出し、緑やはちみつ色の差し色で素材の温かさを伝える食品 LP の型。暖色の自然光で撮ったシズル写真、手描きの線画や葉のイラスト、紙のような質感で手作り感とやさしさを出す。本文は中央揃えで行間を広く取り、オレンジのピル型ボタンで購入へつなぐ。
colors:
  background: '#FAF8F3'
  background-alt: '#F8F3EE'
  surface: '#FDFCFA'
  primary: '#462718'
  secondary: '#E8D9B4'
  dark-section: '#251917'
  text: '#331C12'
  text-muted: '#8A877F'
  accent-1: '#35A22B'
  accent-2: '#EEB255'
  cta: '#ED9713'
  on-cta: '#FDFBFA'
  on-dark: '#FCFBF9'
  line: '#DDD9CC'
  cta-accessible: '#A2670C'
  accent-2-accessible: '#A16810'
  accent-1-accessible: '#2B8423'
typography:
  display:
    fontFamily: Zen Kaku Gothic New
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.04em
  headline-lg:
    fontFamily: Shippori Mincho
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.07em
  headline-md:
    fontFamily: Zen Kaku Gothic New
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.03em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.9
    letterSpacing: 0.04em
  accent:
    fontFamily: Pacifico
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.02em
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
    letterSpacing: 0.02em
rounded:
  sm: 4px
  md: 12px
  lg: 22px
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
    height: 48px
  button-secondary:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 40px
  section-heading:
    textColor: '{colors.primary}'
    typography: '{typography.headline-lg}'
    height: 80px
  ribbon-heading:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-md}'
    height: 46px
  product-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 400px
  badge-circle:
    backgroundColor: '{colors.accent-2}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 84px
  label-pill:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 28px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.full}'
    height: 104px
  voice-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 200px
  note-text:
    textColor: '{colors.text-muted}'
    typography: '{typography.note}'
    height: 16px
---

# DESIGN.md — 食品・飲料のナチュラルで温かい LP の型（Natural Warm Food & Beverage LP Pattern）

designmark が、食品・飲料・主な雰囲気「ナチュラル」の LP の設計書 30 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 食品・飲料 ／ **雰囲気**: ナチュラル、やさしい・柔らかい、親しみ・手作り感
- **キーワード**: 生成りの地・シズル写真・手描き線画・クラフト紙・白カード・焼き色ブラウン
- **地の質感**: 生成りの紙や和紙のようなマットな地に、薄い粒状のざらつきを重ねる。色面はベタ塗りにして、グラデーションや光沢はほとんど使わない。写真の地は木目やクラフト紙の素材感にする。
- **形**: 角丸の白カード、ピル型のボタンとラベル、円形バッジ、いびつな丸で切り抜いた写真。セクションの境目は直線かゆるい波線にし、下向きの三角や吹き出しで次につなぐ。
- **温度感**: 暖色寄り。茶・ベージュ・クリームを基本にして、若草色の緑とはちみつ色で瑞々しさを足す。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FAF8F3` | 基本の生成りがかった白地 | 30% | 集計の代表色 |
| `background-alt` | `#F8F3EE` | 交互に敷くベージュの地（産地・レシピ・フッター） | 12% | 集計の代表色 |
| `surface` | `#FDFCFA` | カード・こだわりボックスの白い面 | 10% | 集計の代表色 |
| `primary` | `#462718` | ブランドの焦げ茶（見出し文字・リボン・帯） | 6% | 集計の代表色 |
| `secondary` | `#E8D9B4` | 素材解説セクションのベージュ茶の地 | 5% | 集計の代表色 |
| `dark-section` | `#251917` | 写真に重ねる濃い焦げ茶の面・締めのセクション | 5% | 集計の代表色 |
| `text` | `#331C12` | 見出し・本文の濃茶 | 3% | 集計の代表色 |
| `text-muted` | `#8A877F` | 注釈・商品説明のグレー | 1% | 集計の代表色 |
| `accent-1` | `#35A22B` | 英字ラベル・ピル型ラベルの若草色の緑 | 2% | 集計の代表色 |
| `accent-2` | `#EEB255` | 原料バッジ・番号のはちみつ色 | 1% | 集計の代表色 |
| `cta` | `#ED9713` | 主 CTA ボタンのオレンジ | 1% | 集計の代表色 |
| `on-cta` | `#FDFBFA` | ボタン・帯の上の白文字 | 0% | 集計の代表色 |
| `on-dark` | `#FCFBF9` | 暗い地・木目の上の白文字 | 1% | 集計の代表色 |
| `line` | `#DDD9CC` | ピル型ボタン・カードの細い枠線 | 0% | 集計の代表色 |
| `cta-accessible` | `#A2670C` | AA を満たす補正値（計算） |  | 計算 |
| `accent-2-accessible` | `#A16810` | AA を満たす補正値（計算） |  | 計算 |
| `accent-1-accessible` | `#2B8423` | AA を満たす補正値（計算） |  | 計算 |

- 地は生成りの白（background）とベージュ（background-alt）を交互に敷き、セクションの切り替わりを色で見せる
- 情報は白いカード（surface）に入れ、色のついた地の上に浮かせて読みやすくする
- 文字は純黒にせず、焦げ茶（text）でそろえて全体を暖色にまとめる
- オレンジ（cta）は購入・申込のボタンと、ごく少ない強調語だけに使う
- 緑（accent-1）とはちみつ色（accent-2）は英字ラベル・バッジ・番号などの小さな面に使い、広い面には敷かない
- 焦げ茶の濃い面（dark-section）は FV や締めくくりなど 1〜2 か所に絞り、上の文字は on-dark の白にする
- 彩度の高い原色や寒色は使わず、くすんだアースカラーにとどめる。強調色は 3 色まで
- `button-primary` は文字 `#FDFBFA` × 背景 `#ED9713` のコントラスト比が 2.25:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#A2670C`、4.54:1）を使う。
- `badge-circle` は文字 `#FCFBF9` × 背景 `#EEB255` のコントラスト比が 1.82:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-2-accessible`（`#A16810`、4.51:1）を使う。
- `label-pill` は文字 `#FDFBFA` × 背景 `#35A22B` のコントラスト比が 3.2:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-1-accessible`（`#2B8423`、4.6:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FV の商品名・大きなキャッチ | ゴシック | Zen Kaku Gothic New | 700 | 40px | 1.2 | 0.04em |
| `headline-lg` | セクションの大見出し | 明朝 | Shippori Mincho | 700 | 26px | 1.4 | 0.07em |
| `headline-md` | 特長の項目見出し・リボン内の見出し | ゴシック | Zen Kaku Gothic New | 700 | 20px | 1.5 | 0.05em |
| `headline-sm` | 商品名・フレーバー名・小見出し | ゴシック | Noto Sans JP | 700 | 16px | 1.5 | 0.03em |
| `body-md` | 特長の説明・お客様の声の本文 | ゴシック | Noto Sans JP | 500 | 14px | 1.9 | 0.04em |
| `accent` | 見出しの上か下に添える小さな英字ラベル | 欧文スクリプト | Pacifico | 400 | 18px | 1.3 | 0.02em |
| `label-button` | CTA・ボタンの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.3 | 0.05em |
| `note` | 注釈・出典 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.02em |

- 見出しは「小さな英字ラベル（accent）→ 日本語見出し」の 2 段で組み、中央揃えにする
- 大見出しは字間を広めにとった明朝かやわらかいゴシックにし、太い黒文字で煽らない
- 本文は中央揃えで短く改行し、行間を 1.9〜2 と広くとる
- 英字ラベルは緑か金茶の小さな文字にして、見出しの添え物として扱う
- 数字や価格は太字にし、数字だけを周りの文字の 1.5〜2 倍に大きくする
- 注釈は 10px ほどの灰色で、※を付けて写真や情報のすぐ下に置く
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。特長は写真と文章を縦に流し、商品は横スクロールのカルーセルにする
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- セクションの最初は「英字ラベル → 見出し → 短い導入文」の順にそろえる
- カードは画面幅の約 88〜90% にし、白い角丸カードを生成りの地に浮かせる
- 特長は「番号の丸 → 見出し → 丸く切り抜いた写真 → 説明文」の縦の流れにする
- 商品やレシピは、隣のカードが端から少し見える横スクロールにする
- 料理写真は画面幅いっぱいに使い、本文の間に挟んで区切りにする
- 葉や素材のイラストは画面の左右の端に一部だけ見せて余白を彩る

## Elevation & Depth

- 影はほとんど使わず、色の面と細い線で上下関係を見せる
- 白カードを使うときは、ごく淡い影（0 2px 8px rgba(0,0,0,.06)）までにする
- 商品パッケージや果実の切り抜きにだけ、柔らかい落ち影を付ける
- 写真を少しずらして重ね、強い影を使わずに奥行きを出す

## Shapes

- **角丸**: 小 4px ／ 中 12px ／ 大 22px。ボタンはピル型。
- **写真の切り抜き**: 主役の写真は円かいびつな丸（有機的な形）で切り抜き、点線の輪郭を沿わせる。説明用の写真は角丸の長方形、商品パッケージは背景を抜いて浮かせる。FV だけは全面写真にする
- **セクション境界**: 基本は直線で地の色を切り替え、要所はゆるい波線にする。下向きの小さな三角や吹き出しで次のセクションにつなぐ
- カードは角丸 12〜22px でやわらかく見せる
- ボタン・ラベル・特長タグはピル型にする
- バッジは正円にし、内側に点線の枠を入れてもよい
- ラベルの下に小さな三角を付けて吹き出しにする
- 線は 1〜1.5px の細線にし、太い枠は使わない

## Components

- **主 CTA ボタン**（`button-primary`）: オレンジのピル型ボタンに白い太字。右端に白い丸の矢印アイコンを置き、中央にそろえる
- **サブボタン**（`button-secondary`）: 白地のピル型に細い枠線と焦げ茶の文字。詳しく見る・レシピを見るなどの導線に使う
- **英字ラベル付き見出し**（`section-heading`）: 緑の小さな英字スクリプトの下に、焦げ茶の明朝で日本語の見出しを中央揃えで置く
- **リボン見出し**（`ribbon-heading`）: 両端に切れ込みを入れた焦げ茶の帯に白文字。おすすめ商品やセクションの区切りに使う
- **商品カード**（`product-card`）: 白い角丸カードの上端からパッケージをはみ出させ、商品名・短い説明・ボタンを中央揃えで並べる
- **原料・特長の丸バッジ**（`badge-circle`）: はちみつ色の正円に白い太字 2〜3 行で原料や特長を書き、写真の角に重ねる
- **ピル型ラベル**（`label-pill`）: 緑の小さなピル型に白文字。下に小さな三角を付け、カード上端や番号に重ねる
- **手描き風の吹き出し**（`speech-bubble`）: 細い茶色の線で描いた円や楕円に、悩みや感想の短い言葉を入れる
- **お客様の声カード**（`voice-card`）: 白いカードに線画の顔アイコン、太字の感想、補足文を入れ、左右交互に並べる
- **注釈**（`note-text`）: ※から始まる小さなグレー文字。写真や数字のすぐ下に添える

## Do's and Don'ts

**Do**
- 料理や飲み物は暖色の自然光で、湯気や照り、注ぐ瞬間などのシズル感が伝わる写真を使う
- 地は生成りとベージュを交互に敷き、白カードを浮かせて読ませる
- 見出しには小さな英字ラベルを添え、字間を広くとってゆったり組む
- 葉・素材・調理器具の手描きイラストを、セクションの端に一部だけ見せて配置する
- 主役の写真は丸やいびつな丸で切り抜き、細い点線の輪郭を添える
- 本文は中央揃えで短く改行し、行間を広くとる

**Don't**
- 純黒の文字や寒色のメインカラーを使わない
- 彩度の高い原色や強調色を 4 色以上使わない
- 強いドロップシャドウや派手なグラデーションを使わない
- 緑やオレンジを広い面に敷かない。ボタン・ラベルなどの小さな面に絞る
- 写真を青白いトーンや冷たい色に加工しない
- 左揃えの長い文章を詰めて組まない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（商品とおいしさの印象をひと目で伝える）: 暖色のシズル写真を全面に敷くか、生成りの地に切り抜いた商品を置き、商品名を大きく載せる。手描きの英字キャッチや葉のイラストを添える
2. **コンセプト**（商品の価値と素材へのこだわりを短く伝える）: 生成りの地に英字ラベル付きの明朝見出しを置き、中央揃えで短く改行した文章を、行間を広くとって組む
3. **ブランド紹介**（産地や作り手の考え方を伝え、信頼を得る）: ベージュの地に産地や作り手の写真を角丸で置き、白カードに説明を入れる。端に葉のイラストを散らす
4. **特長**（素材・栄養・製法の特長を 3〜4 つに分けて示す）: 番号のピル型ラベル → 見出し → 丸く切り抜いた写真 → 説明文の縦の流れを繰り返す。原料は丸バッジで目立たせる
5. **商品ラインナップ**（味や種類ごとに商品を比べて選んでもらう）: パッケージを上にはみ出させた白い角丸カードを横スクロールで並べ、各カードにサブボタンを置く
6. **レシピ**（食べ方・使い方を提案して食べる場面を想像させる）: 器やテーブルクロスが写る料理写真を画面幅いっぱいに使い、クリーム地のカードに名前と手順の要点を添える
7. **CTA**（購入・店舗検索へ誘導する）: 白いカードの中央にオレンジのピル型の主ボタンを置き、上にリボン見出し、下に注釈を添える
8. **お客様の声**（味や使い心地への共感を集める）: 線画の顔アイコン付きの白カードを左右交互に配置し、太字の一言と補足文で見せる
9. **フッター**（サイト内リンクと会社情報・著作権を示す）: 焦げ茶かベージュの地に小さな文字でリンクと著作権表示を中央揃えで置く

## Imagery

- 料理や飲み物は木目のテーブルで、暖かい自然光を使って寄りで撮る。注ぐ・垂らす・湯気など動きのある瞬間を選ぶ
- 商品パッケージは正面から背景を抜き、小さな落ち影を付けて、素材（豆・果実・葉）を周りに散らす
- 素材は小皿に入れて白い布やクラフト紙の上に並べ、真上から撮る
- イラストは茶色の細い線画か水彩風の葉・果実にし、セクションの端に一部だけ見せる
- 背景には生成りの紙・和紙・クラフト紙のような淡い質感を重ねる
- 人物は自然光の中で笑顔の生活シーンにし、作り込みすぎない
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC では本文の幅を 640〜800px に抑えて中央に置き、左右は地色で埋める
- PC の FV は横長にして、写真を左、キャッチと商品を右に置く
- 特長やレシピは PC で写真と文章の 2 カラムにし、左右交互に並べる
- 商品カードは PC で 3〜4 列に並べ、横スクロールはやめる
- 見出しや大きな数字は PC でも 1.2 倍程度までにとどめ、やさしい印象を保つ

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

- **ID**: `pk-food-natural`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「食品・飲料」・主な雰囲気「ナチュラル」の設計書 30 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-food-natural/
