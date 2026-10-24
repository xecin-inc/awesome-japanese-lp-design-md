---
version: alpha
name: Refined Japanese Restaurant LP Pattern
description: 生成りの明るい地に、深い緑か焦げ茶の主色と、控えめな金を合わせる飲食店 LP の型。見出しは明朝と欧文セリフ、添え文字は欧文スクリプト。料理写真を大きく見せ、余白を広く取る。影はほとんど使わない。暗いセクションを差し込んで章を切り替え、ボタンは細身のピル型か金の塗りに抑える。
colors:
  primary: '#015E3C'
  background: '#F8F7F5'
  background-alt: '#E8DFD3'
  surface: '#F4F3F1'
  dark-section: '#140B06'
  on-dark: '#F8F6F2'
  accent-1: '#D5B26E'
  accent-2: '#AF8D68'
  secondary: '#2C2623'
  cta: '#D3A560'
  on-cta: '#F9F9F7'
  text: '#2B2928'
  text-body: '#49413A'
  text-muted: '#857F7A'
  line: '#CEC4AF'
  tint-1: '#E0CEB7'
  cta-accessible: '#956A29'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Shippori Mincho
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.08em
  headline-md:
    fontFamily: Shippori Mincho
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0.06em
  headline-sm:
    fontFamily: Noto Serif JP
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.05em
  body-md:
    fontFamily: Noto Serif JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0.05em
  accent:
    fontFamily: Great Vibes
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.08em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.03em
rounded:
  sm: 2px
  md: 8px
  lg: 16px
  full: 999px
spacing:
  unit: 8px
  card: 20px
  section: 80px
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
    height: 40px
  button-outline:
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 40px
  button-reserve:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 44px
  heading-serif-en:
    textColor: '{colors.primary}'
    typography: '{typography.display}'
    height: 110px
  script-heading:
    textColor: '{colors.accent-1}'
    typography: '{typography.accent}'
    height: 63px
  menu-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    height: 445px
  info-table:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.note}'
    height: 380px
  notice-box:
    backgroundColor: '{colors.tint-1}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
    height: 250px
  text-link-underline:
    textColor: '{colors.accent-1}'
    typography: '{typography.note}'
    height: 20px
---

# DESIGN.md — 飲食店の上品・高級な LP の型（Refined Japanese Restaurant LP Pattern）

designmark が、飲食店・レストラン・主な雰囲気「上品・高級」の LP の設計書 39 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 飲食店・レストラン ／ **雰囲気**: 上品・高級、ナチュラル、ラグジュアリー・ダーク、シンプル・ミニマル
- **キーワード**: 明朝体・欧文セリフ・金の細罫・料理写真主役・余白多め・生成り地
- **地の質感**: 生成りや淡いベージュの地を基本にする。地には和紙や紙のムラをうっすら入れてもよい。暗いセクションは焦げ茶〜黒のフラット面か、ほのかなグラデーションにする。質感は料理の焼き色や照り、木・石などの素材写真に任せる。
- **形**: 四角い写真と直線の区切りが基本。ボタンだけ細身のピル型にする。素材写真を正円で切り抜いたり、四芒星のきらめきや金の細線を添える程度にとどめる。
- **温度感**: 暖色寄りで落ち着いた温かさ。彩度は控えめにし、暖色は料理写真と金で出す。地は無彩色に近い生成りと深い緑か焦げ茶でまとめる。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#015E3C` | 大見出し・欧文タイトル・ブランド帯に使う深緑 | 9% | 集計の代表色 |
| `background` | `#F8F7F5` | 基本の生成り白の地 | 39% | 集計の代表色 |
| `background-alt` | `#E8DFD3` | 章を切り替える淡いクリームベージュの地 | 10% | 集計の代表色 |
| `surface` | `#F4F3F1` | 写真カード・囲みボックスのオフホワイト | 4% | 集計の代表色 |
| `dark-section` | `#140B06` | FV・メッセージ・フッターの黒茶の面 | 8% | 合成 |
| `on-dark` | `#F8F6F2` | 暗い地の上の白文字 | 1% | 集計の代表色 |
| `accent-1` | `#D5B26E` | 欧文小見出し・スクリプト・細罫の金 | 2% | 集計の代表色 |
| `accent-2` | `#AF8D68` | サブ装飾・写真背面の帯のくすんだ茶金 | 1% | 集計の代表色 |
| `secondary` | `#2C2623` | 予約ボタン・ラベルの濃茶 | 2% | 集計の代表色 |
| `cta` | `#D3A560` | 主ボタンの金の塗り | 1% | 集計の代表色 |
| `on-cta` | `#F9F9F7` | ボタン上の白文字 | 0% | 集計の代表色 |
| `text` | `#2B2928` | 見出し・ラベルの墨色 | 2% | 集計の代表色 |
| `text-body` | `#49413A` | 本文の暖かいダークブラウン | 2% | 集計の代表色 |
| `text-muted` | `#857F7A` | 注釈・日付・補足のグレー | 0% | 集計の代表色 |
| `line` | `#CEC4AF` | 金がかった細罫・表の区切り線 | 0% | 集計の代表色 |
| `tint-1` | `#E0CEB7` | 問い合わせ・注意書きボックスの淡いベージュ | 3% | 集計の代表色 |
| `cta-accessible` | `#956A29` | AA を満たす補正値（計算） |  | 計算 |

- 地は生成り白を基本にする。章の切り替えでは淡いベージュと黒茶の暗いセクションを交互に差し込み、境目は直線で切る
- 金は欧文小見出し・細罫・スクリプト・主ボタンに限る。広い面には使わない
- 主色の深緑は大見出しや欧文タイトル、細い帯に絞る。面として使う場合もページの 1 割程度にとどめる
- 暖色の鮮やかさは料理写真に任せる。赤やピンクなどの強い差し色を UI に足さない
- 暗い地では文字を白か金だけにし、細い白罫や金罫を添える
- 黒そのものではなく、墨色や焦げ茶寄りの暗色で文字と面を組み、温かさを保つ
- `button-primary` は文字 `#F9F9F7` × 背景 `#D3A560` のコントラスト比が 2.14:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#956A29`、4.56:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FV やセクションの欧文大見出し | 欧文セリフ | Playfair Display | 400 | 40px | 1.1 | 0.02em |
| `headline-lg` | 和文のセクション見出し（縦書きも可） | 明朝 | Shippori Mincho | 500 | 26px | 1.4 | 0.08em |
| `headline-md` | 料理名・店舗名・リード文 | 明朝 | Shippori Mincho | 500 | 20px | 1.45 | 0.06em |
| `headline-sm` | 欧文見出しの下に添える和文サブ見出し・メニュー名 | 明朝 | Noto Serif JP | 500 | 16px | 1.5 | 0.05em |
| `body-md` | 本文・料理の説明文 | 明朝 | Noto Serif JP | 400 | 13px | 1.9 | 0.05em |
| `accent` | 見出しに重ねる欧文スクリプトの添え文字 | 欧文スクリプト | Great Vibes | 400 | 21px | 1.2 | 0.02em |
| `label-button` | ボタン・リンク・バッジの文字 | ゴシック | Noto Sans JP | 700 | 13px | 1.2 | 0.08em |
| `note` | 注釈・日付・フッターナビ・コピーライト | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.03em |

- 和文の見出しは細めの明朝にし、字間を広めにとる。太いゴシックの見出しは使わない
- セクション見出しは、大きな欧文セリフと和文の小見出しを上下に組み、中央揃えにする
- 欧文スクリプトは薄めの金で和文見出しに半分重ねるなど、添え物として使う
- 本文は 13px 前後で行間を 1.9 程度と広くとる。明朝かゴシックのどちらかにページ全体でそろえる
- コンセプト文は中央揃えにし、短い行で改行して余韻をつくる
- 価格・日付・電話番号は欧文セリフの数字にし、字間を広げて見せる
- 注釈は ※ 付きの 10〜11px にし、muted 色で控えめに置く
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。写真は全幅で裁ち落とすか、左右に約 6% の余白を取る
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 80px、基本単位 8px、カード内 20px（375px 幅換算）
- セクション間は 80px 以上空け、1 画面の情報量を絞る
- 見出しは中央揃えを基本にする。店舗情報だけは左揃えの表組みにする
- メニューと商品は「写真 → 欧文見出し → 料理名 → 価格 → 説明 → ボタン」の順で同じ型を繰り返す
- ファーストビューは写真の上に文字を直接重ね、余白を多めにとる
- ボタンは幅 200px 前後で中央に置く。1 ブロックにボタンは 1 つ
- PC で写真と本文を左右に並べる場合も、SP では写真 → 文字の順に縦に積む

## Elevation & Depth

- 影は基本的に使わない。奥行きは写真の明暗と、地色の明度差で出す
- 切り抜いた料理や商品の写真にだけ、ごく薄く柔らかい接地影をつけてよい
- 暗いセクションでは、背景に差す光のグラデーションやボケ光で奥行きを出す
- カードは影ではなく 1px の細線か地色の差で区切る

## Shapes

- **角丸**: 小 2px ／ 中 8px ／ 大 16px。ボタンはピル型。
- **写真の切り抜き**: 主役の料理は角版で大きく見せる。素材のアップは正円で切り抜き、単品は背景を抜いた切り抜きにする。カード内の写真は横長の約 3:2 にする
- **セクション境界**: 直線で切り替え、地色の変化と広い余白で区切る。写真の端は地へフェードさせてもよい
- ピル型にするのはボタンだけ。カードや写真の角丸は 0〜8px に控える
- 線はすべて 1px の細線にし、金か淡いベージュグレーにする
- 四芒星のきらめきや金の細い曲線を、見出しの下や写真の角に小さく添える
- 囲みボックスは細線枠か二重枠にし、角飾りを付けてもよい

## Components

- **金の主ボタン**（`button-primary`）: 金で塗ったピル型。白文字を中央に置き、幅は約 200px で中央寄せ。右端に細い矢印を添えてもよい
- **細線アウトラインボタン**（`button-outline`）: 背景は透明。金か墨色の 1px 枠と同じ色の文字で、一覧や詳細ページへ誘導する
- **Web 予約ボタン**（`button-reserve`）: カレンダーアイコン付きの濃茶の塗りボタン。暗い地の上では金で塗る。電話番号の下に置く
- **欧文セリフ大見出し**（`heading-serif-en`）: 大文字の欧文セリフを 1〜2 行で中央揃えにし、下に明朝の和文サブ見出しと金の細罫を添える
- **スクリプト透かし見出し**（`script-heading`）: 薄い金の欧文スクリプトの上に明朝の料理名を重ね、下に小さなきらめきを置く
- **メニューカード**（`menu-card`）: 上に料理写真、下に欧文名・料理名・価格・短い説明を中央揃えで置く。1px の細線枠で同じ形を繰り返す
- **店舗情報表**（`info-table`）: 項目と内容の 2 列の表。行間を広くとり、行ごとに細い罫線を引く
- **注意書きボックス**（`notice-box`）: 淡いベージュの地に細線枠と角飾りを付け、中央揃えの説明文を置く
- **下線テキストリンク**（`text-link-underline`）: アレルゲン情報などへの小さな補助リンク。金か白の文字に細い下線を引く

## Do's and Don'ts

**Do**
- 料理写真は湯気や照り、断面が伝わる寄りのカットで大きく使う
- 余白を広くとり、1 画面に置くのは見出し・写真・短い文だけにする
- 和文の見出しは明朝、数字と欧文見出しは欧文セリフにそろえる
- メニューや商品のブロックは同じ型を繰り返し、リズムをそろえる
- 金は細罫・欧文小見出し・主ボタンに少量だけ使う
- 暗いセクションを 1〜2 か所に挟み、章の切り替えと特別感を出す

**Don't**
- 鮮やかな色の大きな CTA や、グラデーションのボタンを置かない
- 強いドロップシャドウや大きな角丸のカードを使わない
- 金を背景の広い面に塗らない
- 文字を詰めて組んだり、余白を削って情報を詰め込んだりしない
- 1 つの商品ブロックに複数のボタンを並べない
- 太いゴシックや、ポップな装飾フォントを見出しに使わない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（店や料理の世界観と名前を一目で伝える）: 暗めに撮った料理か店内の写真を全幅に敷き、欧文セリフのタイトルと明朝のキャッチを直接重ねる。縦書きのコピーにしてもよい
2. **コンセプト**（素材や製法へのこだわりを語る）: 生成りの地に、欧文見出し・明朝の見出し・中央揃えの短い文を置く。職人の手元や素材の写真を添える
3. **お知らせ**（季節限定や最新情報を知らせる）: 日付を欧文セリフにし、細い罫線で区切ったリストにする。最後に細線ボタンを置く
4. **コース紹介**（ランチ・ディナー・記念日などの利用シーンを示す）: 淡いベージュの地に角版の写真とコース名・価格・説明を縦に積み、同じ型を繰り返す
5. **メニュー**（看板料理を魅力的に見せる）: 暗いセクションに切り替え、スクリプト透かし見出しと寄りのシズル写真を置く。料理名と価格は白か金にする
6. **単品・フード**（単品の価格や関連するフードを紹介する）: 切り抜き写真のメニューカードを縦積みか 2 列で並べ、写真・名前・価格・説明の順にそろえる
7. **物販・グッズ**（持ち帰りの商品や季節のグッズを紹介する）: 切り抜いた商品写真に柔らかい落ち影を付け、写真と文字を左右交互に配置する。ボタンは金のピル型を 1 つ
8. **店舗情報**（アクセスと予約に必要な情報を伝える）: 左揃えの 2 列表で情報を並べる。下に欧文セリフの大きな電話番号と Web 予約ボタンを置く
9. **フッター**（予約の再訴求とサイト内の回遊）: 黒茶の地に白文字のナビ・SNS・コピーライトを小さく置き、ロゴを中央に配置する

## Imagery

- 料理は寄りのシズル写真にする。湯気・照り・断面がわかるよう、暖色の低い照明で暗部を深く撮る
- 主役の料理は暗い背景から浮かび上がらせ、スポットライトのような光を当てる
- 素材のアップは正円で切り抜き、余白の中に左右にずらして配置する
- 店内や外観は、木や石の素材感と暖かい照明が映える落ち着いた写真にする
- 装飾は金の細線・四芒星のきらめき・筆のかすれ線を小さく添える程度にとどめる
- 背景には和紙・リネン・大理石などの素材感をうっすら敷き、手前にボケたハーブやグラスを入れて奥行きを出す
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- SP は 1 カラムで縦に積み、写真は全幅で裁ち落とす
- PC では本文ブロックを最大 1080px 前後に収め、写真と本文を左右 2 カラムに分ける
- PC のメニューカードは 2〜3 カラムに並べ、店舗情報の表は地図と左右に並べる
- 縦書きのコピーは PC ではそのまま使い、SP では短く改行するか横書きにする
- ボタンの幅は PC でも 200〜240px に固定し、中央寄せを保つ
- SP では画面下に予約ボタンを固定してもよい。PC では右上のナビに置き換える

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

- **ID**: `pk-restaurant-elegant`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「飲食店・レストラン」・主な雰囲気「上品・高級」の設計書 39 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-restaurant-elegant/
