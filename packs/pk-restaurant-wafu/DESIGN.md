---
version: alpha
name: Japanese Washi & Sumi Restaurant LP Pattern
description: 生成りの和紙のような地と墨黒の帯を交互に置き、明朝の縦書き見出しと暖色の料理写真で店の格を伝える和風飲食店LPの型。色の数は焦げ茶・墨・朱赤（えんじ）に絞り、角丸や影はほとんど使わない。直線と細い罫線で組み、余白は広くとって静かな余韻を出す。予約ボタンはえんじ色の角型にし、締めは店舗情報の表と黒いフッターにする。
colors:
  primary: '#2C2723'
  background: '#F6F4EF'
  background-alt: '#E3D8C8'
  dark-section: '#100E0D'
  on-dark: '#F8F6F3'
  surface: '#FBFAF7'
  cta: '#981D19'
  on-cta: '#F8F5F0'
  accent-1: '#B9221D'
  secondary: '#5E3323'
  text: '#080606'
  text-body: '#292827'
  text-muted: '#7E7D7B'
  line: '#B5AFA9'
  tint-1: '#DECCBA'
typography:
  display:
    fontFamily: Shippori Mincho B1
    fontSize: 44px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: 0.08em
  headline-lg:
    fontFamily: Shippori Mincho
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.1em
  headline-md:
    fontFamily: Shippori Mincho
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0.08em
  headline-sm:
    fontFamily: Noto Serif JP
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.08em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 12px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0.06em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.05em
  accent:
    fontFamily: Cormorant Garamond
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.12em
  label-button:
    fontFamily: Noto Serif JP
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.1em
rounded:
  sm: 0px
  md: 2px
  lg: 4px
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
    height: 48px
  button-outline:
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    height: 44px
  button-secondary:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-dark}'
    typography: '{typography.label-button}'
    height: 52px
  vertical-heading:
    textColor: '{colors.text}'
    typography: '{typography.display}'
    height: 260px
  vertical-tag:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    height: 180px
  info-table:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text-body}'
    typography: '{typography.note}'
    height: 42px
  notice-box:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 185px
  boxed-kanji:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.on-dark}'
    typography: '{typography.display}'
    height: 75px
  fixed-bottom-nav:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.label-button}'
    height: 56px
---

# DESIGN.md — 和食・飲食店の和風で落ち着いたLPの型（Japanese Washi & Sumi Restaurant LP Pattern）

designmark が、飲食店・レストラン・主な雰囲気「和風」の LP の設計書 22 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 飲食店・レストラン ／ **雰囲気**: 和風、上品・高級、力強い・インパクト
- **キーワード**: 和紙テクスチャ・縦書き明朝・シズル写真・墨黒の帯・朱赤の一点強調・広い余白
- **地の質感**: 地の全面に繊維感のある生成りの和紙テクスチャを敷き、暗いセクションには墨の揉み紙のようなざらつきを持たせる。余白には墨のかすれや筆の円弧、和柄の地紋（青海波・麻の葉など）を淡く添える。
- **形**: 角丸なしの直線と長方形が基本。罫線は極細の1px線か二重線にし、縦書き見出しの横に細い縦線を伸ばす。写真は四角のまま、画面端にはみ出すよう非対称に置く。
- **温度感**: 暖色寄り。生成り・焦げ茶・朱赤と暖色照明の料理写真で温かさを出し、墨黒で全体を引き締める落ち着いた夜の温度感。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#2C2723` | 焦げ茶のブランド色・見出し帯 | 8% | 集計の代表色 |
| `background` | `#F6F4EF` | 和紙の生成り地 | 30% | 集計の代表色 |
| `background-alt` | `#E3D8C8` | 店舗情報などの淡いベージュ地 | 12% | 集計の代表色 |
| `dark-section` | `#100E0D` | FV・品書き・フッターの墨黒帯 | 10% | 集計の代表色 |
| `on-dark` | `#F8F6F3` | 暗い地の上の白文字 | 1% | 集計の代表色 |
| `surface` | `#FBFAF7` | お知らせ枠・カードの白面 | 3% | 集計の代表色 |
| `cta` | `#981D19` | 予約ボタンのえんじ色 | 2% | 合成 |
| `on-cta` | `#F8F5F0` | ボタン上の白文字 | 0% | 集計の代表色 |
| `accent-1` | `#B9221D` | 価格・強調の一字の深紅 | 1% | 集計の代表色 |
| `secondary` | `#5E3323` | サブボタン・陰影の濃い焦茶 | 2% | 合成 |
| `text` | `#080606` | 見出しの墨色 | 2% | 集計の代表色 |
| `text-body` | `#292827` | 本文の濃いこげ茶グレー | 2% | 集計の代表色 |
| `text-muted` | `#7E7D7B` | 英字ラベル・注記 | 0% | 集計の代表色 |
| `line` | `#B5AFA9` | 表の罫線・項目区切り | 0% | 集計の代表色 |
| `tint-1` | `#DECCBA` | 和柄の帯・地紋の薄いベージュ | 2% | 集計の代表色 |

- 地は和紙の生成りを基本にし、墨黒の帯と交互に置いてセクションに強弱をつける。
- 朱赤・えんじは予約ボタン、価格、見出し中の要の一字だけに使い、面積は全体の数%に抑える。
- 暗い地の上の文字は必ず生成り寄りの白にする。純白・純黒は避け、少し温かみのある色を使う。
- 色の情報量は料理写真の焼き色・照りに任せ、UI側は墨・焦げ茶・生成りの無彩色寄りでまとめる。
- 店舗情報やお知らせは淡いベージュ地か白い面に載せ、本文エリアと区別する。
- フッターは墨黒か濃い焦げ茶で締める。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FVの縦書きメインコピー・大見出し | 明朝 | Shippori Mincho B1 | 800 | 44px | 1.2 | 0.08em |
| `headline-lg` | セクションのキャッチ見出し | 明朝 | Shippori Mincho | 500 | 30px | 1.4 | 0.1em |
| `headline-md` | 料理名・カード見出し | 明朝 | Shippori Mincho | 700 | 24px | 1.45 | 0.08em |
| `headline-sm` | 小見出し・リード文 | 明朝 | Noto Serif JP | 700 | 18px | 1.4 | 0.08em |
| `body-md` | 本文・説明文 | ゴシック | Noto Sans JP | 400 | 12px | 2.0 | 0.06em |
| `note` | 住所・営業時間・注釈 | ゴシック | Noto Sans JP | 400 | 10px | 1.75 | 0.05em |
| `accent` | 見出しに添える英字ラベル（CONCEPT・MENUなど） | 欧文セリフ | Cormorant Garamond | 400 | 18px | 1.3 | 0.12em |
| `label-button` | ボタン・ナビの文字 | 明朝 | Noto Serif JP | 700 | 13px | 1.4 | 0.1em |

- 見出しはすべて明朝体にし、ゴシックや丸ゴシックは見出しに使わない。
- FVのコピーとセクションの大見出しは縦書きを基本にし、横に細い縦線を添える。改行は意味の区切りで入れる。
- 見出しの字間は0.08em以上（大見出しは0.1〜0.2em）とり、和の余韻を出す。
- 見出しの要の一字だけを朱赤にするか、四角い枠で囲んで強調する。
- 本文は小さめのゴシック（または明朝）にし、行間は2.0前後と広くとる。
- 日本語の見出しには小さな欧文セリフの英字ラベルを添え、文字色は補助色にする。
- 見出し・料理名・価格は中央揃えにし、長い本文だけ左揃えにする。
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。写真は左右に互い違いに置き、縦書き見出しを横に重ねる
- **本文ブロックの幅**: 画面幅の約 89%
- **余白**: セクション間 72px、基本単位 8px、カード内 20px（375px 幅換算）
- 本文ブロックの左右には約5〜7%の余白を残す。写真だけは画面端まで寄せてよい。
- 縦書き見出しと写真は左右に分け、一部を重ねて奥行きを出す。
- 写真は画面の片側にはみ出させ、反対側に文章を置く非対称の構成にする。
- 店舗情報は「項目名｜内容」の2列の表にし、行を細い罫線で区切る。
- 和柄や墨の円弧などの装飾は画面端からはみ出すように置く。
- セクション間は72px前後と広くとり、要素を詰め込まない。

## Elevation & Depth

- ドロップシャドウは基本的に使わない。奥行きは地色の差と色面の重なり・ずらしで出す。
- 立体感はボタンやカードの細い内枠線、二重線、白フチで表現する。
- 切り抜いた料理や器の写真にだけ、ごく薄い自然な落ち影を許す。
- 写真同士の重なりは白フチや1pxの白枠で分ける。

## Shapes

- **角丸**: 小 0px ／ 中 2px ／ 大 4px。ボタンは角丸の長方形。
- **写真の切り抜き**: 角丸なしの長方形が基本。料理は寄りでトリミングし、一部を画面外にはみ出させる。器や皿は背景を抜いた切り抜きにして地の上に浮かせてもよい。
- **セクション境界**: 基本は直線で色面を切り替える。境目に和柄の帯、墨の筆跡、細い斜線などを飾りとして添える。
- ボタン・カード・枠は角丸を使わない（使っても4px以下）。
- ボタンは横長の長方形にし、右端に小さな矢印（» や →）を置く。
- お知らせや注意書きは細線か二重線の四角い枠で囲む。
- 縦書き見出しの横に細い縦線や二重の縦罫を添える。
- 装飾は極細線・墨の円弧・和柄の地紋に限る。

## Components

- **予約ボタン（えんじ角型）**（`button-primary`）: えんじ色の横長長方形。明朝の白文字を中央に置き、右端に小さな矢印、内側に1pxの細い白線を入れる。
- **線枠ボタン**（`button-outline`）: 透明か生成りの地に墨色の1px枠線と墨の文字。右端に小さな丸矢印を置く。お品書きや詳細への導線に使う。
- **焦茶のサブボタン**（`button-secondary`）: 焦げ茶の面に白い明朝文字の角型ボタン。暗い地の上では白枠線だけにする。
- **縦書き大見出し**（`vertical-heading`）: 大きな明朝の縦書き2〜3行に細い縦線を添え、写真の横か端に重ねる。上下に小さな英字ラベルを置く。
- **縦書きの短冊ラベル**（`vertical-tag`）: 深紅か焦げ茶の細長い短冊に白い明朝を縦書きにし、写真の横に添える。
- **店舗情報の表**（`info-table`）: 左に太めの項目名、右に値を置く2列の表。行を淡い細線で区切り、地は淡いベージュにする。
- **お知らせ枠**（`notice-box`）: 細線か二重線で囲んだ四角い枠。見出しを【】で囲んで中央に置き、本文も中央揃えにする。
- **角枠の強調文字**（`boxed-kanji`）: 見出しの要の一字を朱赤の四角に白抜きにするか、細い四角枠で囲んで判子のように見せる。
- **SP固定下部ナビ**（`fixed-bottom-nav`）: 画面下に電話・地図・メニュー・予約を等分して並べる固定バー。地は墨黒にし、予約だけえんじの面にする。

## Do's and Don'ts

**Do**
- 料理は湯気・照り・焼き色が分かる寄りのシズル写真を大きく使い、見出しと重ねる。
- 全面に和紙テクスチャを敷き、余白に淡い墨のかすれや和柄の地紋を添える。
- 生成りの地と墨黒の地をセクションごとに交互に置き、メリハリをつける。
- 大見出しは明朝の縦書きで組み、細い縦線を添える。
- 余白を広くとり、本文の行間は2.0前後にする。
- 朱赤は予約ボタンと要の一字だけに絞る。

**Don't**
- 角丸の大きいボタンやピル型ボタン、角丸カードを使わない。
- 強いドロップシャドウで浮かせたカードにしない。
- 見出しにゴシック体や丸ゴシックを使わない。
- パステル色・蛍光色・グラデーションで和の重厚さを崩さない。
- 料理写真を青白く補正したり、寒色を主役にしない。
- テキストや要素を詰め込みすぎない。

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（店の佇まいと看板料理を一目で伝え、店の格を印象づける）: 墨黒の地か全面の料理写真に、白い明朝の縦書きコピーを重ねる。小さな英字ラベルと筆風のロゴを添え、下に予約ボタンを置く。
2. **お知らせ**（営業時間の変更や価格改定などの最新情報を伝える）: 生成り地に細線の四角い枠を置き、日付とタイトルを罫線で区切って並べる。見出しは中央揃えの明朝。
3. **コンセプト**（店の想い・歴史・料理への姿勢を語る）: 縦書きの大見出しと職人や手元の写真を左右に分け、一部を重ねる。本文は中央揃えで行間を広くとる。
4. **名物・お品書き**（看板メニューと価格を伝え、来店の動機をつくる）: 料理の寄り写真を大きく置き、料理名を明朝、価格を深紅で添える。墨黒の帯と生成り地を交互に使う。
5. **店内紹介**（空間・席数・個室や貸切の可否を伝える）: 暖色照明の店内写真を画面端まで寄せ、反対側に縦書きの短冊ラベルと短い説明を置く。
6. **利用シーン**（接待・宴会・一人飲みなど使い道を提案する）: 写真とシーン名を1カラムで縦に積み、写真は左右互い違いに配置する。各ブロックに線枠ボタンを置く。
7. **テイクアウト**（弁当や持ち帰りの需要を案内する）: 淡いベージュ地に切り抜いた料理写真を並べ、品名と価格を明朝で中央揃えにする。
8. **店舗情報・アクセス**（住所・営業時間・支払い方法など来店に必要な情報を示す）: 淡いベージュ地に項目名と内容の2列の表を細い罫線で組み、地図と予約ボタンを続ける。
9. **フッター**（予約導線を繰り返し、サイト内の回遊先と会社情報を示す）: 墨黒の地に白文字のロゴ・ナビ・コピーライトを中央揃えで置き、えんじの予約ボタンを再掲する。

## Imagery

- 料理は暖色の照明で寄って撮り、湯気・照り・焼き色が分かるシズル感を出す。
- 職人の手元・カウンター・暖簾・提灯など、店の佇まいを暖かい光と暗めの露出で撮る。
- 器や刺身・鍋などは切り抜いて生成り地に置き、ごく薄い落ち影をつける。
- 背景には和紙の繊維、墨のかすれ、青海波や麻の葉などの和柄を薄く敷く。
- 料理写真の一部を低い不透明度で地に溶かし、背景の装飾として使う。
- 装飾イラストは墨の線画や筆の円弧にとどめ、色は墨・焦げ茶・朱に限る。
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PCでは写真と文章を左右2カラムにし、行ごとに左右を入れ替える非対称レイアウトにする。
- PCのヘッダーは店名・電話番号・予約ボタンを並べ、ナビを縦書きにして片側に置いてもよい。
- PCの店舗情報は、左に地図と写真、右に情報の表を置く2カラムにする。
- PCでは本文の幅を720〜960px程度に絞り、余白をさらに広くとる。
- SPでは画面下に予約・電話・地図の固定ナビを置き、PCでは外してヘッダーに集約する。
- SPで縦書きの見出しが窮屈になる場合は、主見出しを36〜40px程度に縮めるか横書きにする。

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

- **ID**: `pk-restaurant-wafu`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「飲食店・レストラン」・主な雰囲気「和風」の設計書 22 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-restaurant-wafu/
