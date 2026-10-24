---
version: alpha
name: Pop Energetic Entertainment & App LP Pattern
description: 白に近い地をベースに、朱赤・黄・青の原色に近い色をセクションごとの面で切り替えて、にぎやかで熱量の高い画面を作る型です。見出しは極太のディスプレイ書体（Dela Gothic One系）にし、英字の大見出しの下に和文の小ラベルを添えて2段にします。CTAはオレンジのピル型ボタンで、FVの直下とページ末尾に置きます。影はほとんど付けず、ベタ塗り・太枠・吹き出し・ストライプやドット柄で動きを出します。お知らせ・動画・遊び方・作品紹介・FAQなど、情報量の多い構成をSPの1カラムに縦に積みます。
colors:
  primary: '#D83212'
  background: '#FDFCFB'
  background-alt: '#F6F6F6'
  surface: '#FBFBFB'
  tint-1: '#FBF6D3'
  secondary: '#1E5BAA'
  cta: '#F5A821'
  on-cta: '#FDFDFC'
  accent-1: '#F2E41A'
  accent-2: '#2BA8E0'
  accent-3: '#703C97'
  dark-section: '#040404'
  on-dark: '#F8F9F8'
  text: '#1A1A1A'
  line: '#E0E5EA'
  marker: '#FCF047'
  cta-accessible: '#A16907'
typography:
  display:
    fontFamily: Dela Gothic One
    fontSize: 40px
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Dela Gothic One
    fontSize: 26px
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0.035em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 20px
    fontWeight: 900
    lineHeight: 1.4
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.03em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: 0.02em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
  accent:
    fontFamily: Montserrat
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.04em
rounded:
  sm: 4px
  md: 12px
  lg: 20px
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
  button-secondary:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 40px
  button-outline:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 36px
  section-heading:
    textColor: '{colors.primary}'
    typography: '{typography.display}'
    height: 70px
  step-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 150px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.lg}'
    height: 80px
  news-list:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 110px
  badge-label:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.text}'
    typography: '{typography.note}'
    rounded: '{rounded.full}'
    height: 22px
  faq-item:
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    height: 58px
  marquee-band:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.accent}'
    height: 40px
---

# DESIGN.md — エンタメ・アプリのポップで元気なLPの型（Pop Energetic Entertainment & App LP Pattern）

designmark が、エンタメ・ゲーム・アプリ・主な雰囲気「ポップ・元気」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: エンタメ・ゲーム・アプリ ／ **雰囲気**: ポップ・元気、情報量多め・訴求型、力強い・インパクト、親しみ・手作り感
- **キーワード**: 原色ベタ塗り・極太見出し・黄色マーカー・吹き出し・コミック調・白カード
- **地の質感**: フラットなベタ塗りが基本。地や帯にドット・斜めストライプ・網点の柄を薄く重ね、印刷物やコミックのような質感を足す。グラデーションとぼかした影は最小限にする
- **形**: ピル型ボタン、角丸12〜20pxのカード、正円の番号バッジ、吹き出し、星形・爆発形のバッジ。セクションの境目は直線か斜めの帯で切り替える
- **温度感**: 明るく高彩度。朱赤・黄・オレンジの暖色を主役にして、青や水色の寒色をぶつける補色配色でにぎやかにする

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#D83212` | ブランドの朱赤。FVや特長セクションの面・見出し | 10% | 集計の代表色 |
| `background` | `#FDFCFB` | ページ全体の基本の白地 | 29% | 集計の代表色 |
| `background-alt` | `#F6F6F6` | セクションを切り替える淡いグレー地 | 8% | 集計の代表色 |
| `surface` | `#FBFBFB` | お知らせ・カードの白い面 | 10% | 集計の代表色 |
| `tint-1` | `#FBF6D3` | 手順パネル・情報枠の淡いクリーム地 | 4% | 集計の代表色 |
| `secondary` | `#1E5BAA` | サブボタン・見出し帯の青 | 5% | 集計の代表色 |
| `cta` | `#F5A821` | 主CTAボタンのオレンジ | 1% | 集計の代表色 |
| `on-cta` | `#FDFDFC` | CTAボタン上の白文字 | 0% | 集計の代表色 |
| `accent-1` | `#F2E41A` | 見出し・番号丸・帯に使う黄色 | 2% | 集計の代表色 |
| `accent-2` | `#2BA8E0` | バッジ・アイコン・FAQのQに使う水色 | 2% | 集計の代表色 |
| `accent-3` | `#703C97` | タブや装飾枠に使う紫 | 1% | 集計の代表色 |
| `dark-section` | `#040404` | フッター・動画などの黒い帯セクション | 5% | 集計の代表色 |
| `on-dark` | `#F8F9F8` | 黒地の上の白文字 | 1% | 集計の代表色 |
| `text` | `#1A1A1A` | 見出しと本文の黒 | 2% | 集計の代表色 |
| `line` | `#E0E5EA` | 点線の区切り・表の罫線 | 0% | 集計の代表色 |
| `marker` | `#FCF047` | 見出しのキーワードを強調する黄色マーカー | 1% | 集計の代表色 |
| `cta-accessible` | `#A16907` | AA を満たす補正値（計算） |  | 計算 |

- 地は白（#FDFCFB）を基本にし、朱赤・青・黒・クリームの面のセクションを挟んで、数セクションごとに色のリズムを変える
- 主CTAはオレンジ1色に絞り、ほかの面やボタンにオレンジを広く使わない
- サブボタンは青のピルか、白地に色付きの細枠のアウトラインにして、主CTAと見分けられるようにする
- 黄色は番号丸・見出し帯・キーワードのマーカーに限って使う。本文の地には使わない
- 黒い帯セクションの文字は白にし、日付や見出しの強調に黄を差す
- 暖色（朱赤・黄）と寒色（青・水色）を隣り合わせ、補色の対比でにぎやかさを出す
- 本文は濃い黒（#1A1A1A）で読みやすくし、色付きの文字は見出しと強調語だけにする
- `button-primary` は文字 `#FDFDFC` × 背景 `#F5A821` のコントラスト比が 1.96:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#A16907`、4.55:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FVのタイトル・セクションの英字大見出し | 装飾・ディスプレイ | Dela Gothic One | 900 | 40px | 1.2 | 0.02em |
| `headline-lg` | 縁取りを付けた企画見出し・セクションのリード見出し | 装飾・ディスプレイ | Dela Gothic One | 900 | 26px | 1.3 | 0.035em |
| `headline-md` | イベント名・商品名・吹き出しのラベル | ゴシック | Noto Sans JP | 900 | 20px | 1.4 | 0.02em |
| `headline-sm` | 英字見出しの下の和文ラベル・カード名・手順の見出し | ゴシック | Noto Sans JP | 700 | 15px | 1.4 | 0.03em |
| `body-md` | 本文・案内文・キャプション | ゴシック | Noto Sans JP | 500 | 13px | 1.8 | 0.02em |
| `note` | 注釈・日付・コピーライト | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.0em |
| `accent` | 流れる英字帯・MORE表記・英字の小ラベル | 欧文サンセリフ | Montserrat | 700 | 19px | 1.2 | 0.02em |
| `label-button` | ボタンの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.2 | 0.04em |

- 見出しは極太の英字の大見出しと、和文の小ラベルの2段で作る。小ラベルは字間を広めにとる
- 見出しの太さは800〜900を基本にし、細い字は注釈だけに使う
- 見出しには白や濃紺のフチ取りを付けて、色面の上でも浮かせる
- 数字（日付・価格・STEP番号）は大きく太くし、単位や曜日は小さく添える
- コンセプト文やリードは中央揃えにして短く改行し、行間を広めにとる
- ニュースや注意事項は左揃えにし、注意事項は記号付きの箇条書きにする
- 見出しのキーワードには黄色マーカーか強調色を一語だけ載せる
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。カード類は必要に応じて 2 列グリッド
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 64px、基本単位 8px、カード内 16px（375px 幅換算）
- 本文ブロックは左右に約6%（16〜24px）の余白をとり、色帯や背景柄は画面の端まで敷く
- セクションの間は64px前後を基本にする。余白を広げすぎて静かな印象にしない
- カードは縦に16〜24px間隔で積み、同じ種類の情報は同じ枠と並び順で繰り返す
- CTAはFVの直下とページの末尾の2か所に置き、全幅の色帯の中に配置する
- 見出しはセクション上部の中央に置き、その下に本文やカードを縦に並べる
- 余白は8pxの倍数でそろえる

## Elevation & Depth

- 基本は影を付けず、ベタ塗りの色面と太い枠線で前後関係を表す
- 立体感を出したいカードやボタンには、ぼかさない濃色のずらし影（オフセット影）を使う
- 主CTAだけ、下側に少し濃い色の縁を付けて押せる立体感を出す
- パネルとバッジ、見出しと枠を重ねて、奥行きを出す

## Shapes

- **角丸**: 小 4px ／ 中 12px ／ 大 20px。ボタンはピル型。
- **写真の切り抜き**: キャラクターや商品は輪郭で切り抜き、少し傾けてカードや色面の外にはみ出させる。シーン写真やバナーは角丸8〜12pxの長方形に収める
- **セクション境界**: 基本は直線で色帯を切り替える。要所に斜めのストライプ帯や流れる英字帯を挟んでリズムを付ける
- ボタンとラベルはピル型でそろえる
- 番号バッジは正円にし、カードの枠線に半分重ねて置く
- カードは角丸12〜20pxにし、太めの枠線で囲む
- 強調バッジには星形・爆発形の尖った形を使う
- 吹き出しは大きな角丸か楕円にし、しっぽを付けて人物やカードに重ねる

## Components

- **主CTAボタン**（`button-primary`）: オレンジのピル型ボタン。白い太字を中央に置き、右端に小さな矢印か三角を付ける。必要に応じて下に締切などの注記を添える
- **サブボタン**（`button-secondary`）: 青のピル型ボタン。会員登録や詳細ページへの誘導に使う
- **アウトラインボタン**（`button-outline`）: 白地に色付きの細い枠のピル型。もっと見る・注意事項・アコーディオンの開閉に使う
- **英字＋和文の2段見出し**（`section-heading`）: 極太の英字を大きく置き、その下に和文の小ラベルを添える。英字にはフチ取りや星などの小さな装飾を付ける
- **番号付きステップカード**（`step-card`）: 白い角丸カードの上部に黄色の円形番号を重ね、見出し・イラスト・短い説明を縦に並べる
- **吹き出し**（`speech-bubble`）: しっぽ付きの大角丸の吹き出し。疑問文や一言コメントを太字で入れ、キャラクターやカードの角に重ねる
- **お知らせリスト**（`news-list`）: 白い地に、日付とリンクの見出しを点線で区切って縦に並べる。日付は強調色にし、最後にもっと見るボタンを置く
- **強調バッジ**（`badge-label`）: 黄色や水色の小さなピル、または星形のバッジ。NEW・期間限定・番号などを短く載せる
- **FAQ行**（`faq-item`）: 水色の円にQを置き、太字の質問と右端の＋アイコンを並べる。開くと下に回答が出て、行の間を区切り線で分ける
- **流れる英字帯**（`marquee-band`）: 黒か朱赤の全幅の帯に、白い英字を繰り返して流す。セクションの区切りに使う

## Do's and Don'ts

**Do**
- 見出しは毎回、極太の英字と和文の小ラベルの組で作る
- セクションごとに地の色（白・朱赤・クリーム・黒）を切り替えて、にぎやかなリズムを作る
- キャラクターや商品の切り抜きを、カードや色面の外にはみ出させて動きを出す
- ボタンとラベルはピル型でそろえ、主CTAはオレンジだけにする
- ドット・ストライプ・集中線などの柄を地や帯に薄く重ねて、コミック的な質感を足す
- 日付・番号・価格は大きく太くして、一目で分かるようにする

**Don't**
- 淡いパステルや余白の多い上品な構成にしない
- 見出しに細字や明朝体を使わない
- ぼかした大きな影やリッチなグラデーションを足さない
- 主CTA以外の大きな面にオレンジを使わない
- 本文を左揃えの長い段落で詰め込まない
- 地を無地の白だけで通さない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（作品・アプリ・イベントの世界観とタイトルを一目で伝える）: ブランド色の面に、キービジュアルやキャラクターを大きく置き、極太のタイトルロゴを重ねる。下に主CTAかストアバッジを置く
2. **お知らせ**（最新情報や更新を伝える）: 白いカードに日付とリンクの見出しを点線区切りで並べ、右下にもっと見るボタンを置く
3. **CTA**（ダウンロードや参加・購入を促す）: 全幅の黄色か朱赤の帯に、オレンジのピル型の主CTAとストアバッジを中央にそろえて置く
4. **動画**（PV・CMで雰囲気や動きを伝える）: 黒か青の帯の上に、16:9の動画枠と丸い再生ボタンを置く。上下に英字帯を流す
5. **作品紹介・イントロダクション**（あらすじやコンセプト、世界観を伝える）: 英字＋和文の2段見出しの下に、中央揃えの短い文章と、切り抜いたキャラクターを配置する
6. **遊び方**（ルールや使い方の手軽さを伝える）: クリーム地に、円形の番号を重ねたステップカードを縦に並べる。吹き出しやイラストを添える
7. **ストーリー**（物語への没入感を高める）: 濃い色の面にシーンの画像を全幅で置き、白文字の物語文を中央揃えで短く改行して載せる
8. **アクセス・開催概要**（場所・日程・行き方を伝える）: 白地に罫線の表組みで情報をまとめ、日付は強調色の太字にする。地図は角丸の枠に収める
9. **よくある質問**（参加や利用の前の疑問を解消する）: Q円アイコン付きのアコーディオンを区切り線で縦に並べる
10. **フッター**（規約・注意事項・コピーライトを載せる）: 黒い面に白文字のリンク、SNSアイコン、小さな注釈とコピーライトを中央にそろえて置く

## Imagery

- キャラクターや主役のモチーフは、太い輪郭線のアニメ調イラストに白フチを付けて切り抜く
- 商品や端末のモックは白背景で切り抜き、少し傾けて置いて動きを出す
- 集中線・稲妻・星・紙吹雪などの手描き風の記号を、見出しや画像のまわりに散らす
- 背景にはドット・網点・斜めストライプ・方眼などの柄を薄く敷き、印刷物のような質感を出す
- 人物写真は明るい光で、笑顔や大げさなポーズのものを選び、切り抜いて色面に重ねる
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- SPは1カラムで縦に積み、ナビはハンバーガーメニューにまとめる
- PCでは本文の幅を約1000pxにして中央に置き、色帯と背景柄は全幅のまま残す
- PCのFVは横長にし、キャラクターを中央か右、タイトルとストアバッジを左に置く2カラム構成にする
- 遊び方やカード類は、PCで2〜4列の横並びにする
- 太枠・ずらし影・カードの傾きは、SPとPCで共通にする。SPでは枠線を少し細くする

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

- **ID**: `pk-entertainment-pop`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「エンタメ・ゲーム・アプリ」・主な雰囲気「ポップ・元気」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-entertainment-pop/
