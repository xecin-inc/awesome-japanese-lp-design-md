---
version: alpha
name: Pop Energetic Japanese Sweets LP Pattern
description: 赤と黄を主役に、紺や水色で引き締める高彩度の配色。極太のディスプレイ書体と丸ゴシックで、にぎやかで親しみやすい印象を作る。商品は切り抜き写真で大きく見せ、キラキラ・紙吹雪・キャラクターで余白を埋める。セクションごとに地の色を切り替え、境目は波線などの曲線でつなぐ。SP 1 カラムで中央揃えを基本とし、ピル型の CTA と角丸の白カードで情報をまとめる。
colors:
  primary: '#DA0D19'
  background: '#FCFBF9'
  background-alt: '#F8EAC9'
  secondary: '#0B3A8F'
  accent-1: '#FCE338'
  accent-2: '#2CADE8'
  surface: '#FCFCFC'
  cta: '#DE0E17'
  on-cta: '#FDFCFA'
  text: '#2F1D17'
  text-body: '#634031'
  dark-section: '#511501'
  on-dark: '#FDFCFB'
  marker: '#FCEE34'
typography:
  display:
    fontFamily: Dela Gothic One
    fontSize: 37px
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: M PLUS Rounded 1c
    fontSize: 28px
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0.04em
  headline-md:
    fontFamily: M PLUS Rounded 1c
    fontSize: 20px
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: 0.04em
  headline-sm:
    fontFamily: M PLUS Rounded 1c
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: 0.04em
  accent:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.01em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
  note:
    fontFamily: Noto Sans JP
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.02em
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
    height: 46px
  button-secondary:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 41px
  section-title:
    textColor: '{colors.primary}'
    typography: '{typography.headline-lg}'
    height: 68px
  point-label:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.text}'
    typography: '{typography.accent}'
    height: 33px
  product-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 420px
  price-block:
    textColor: '{colors.text}'
    typography: '{typography.accent}'
    height: 80px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 52px
  ribbon-heading:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    height: 36px
  allergy-table:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.note}'
    rounded: '{rounded.md}'
    height: 260px
---

# DESIGN.md — お菓子のポップ・元気な LP の型（Pop Energetic Japanese Sweets LP Pattern）

designmark が、菓子・スイーツ・主な雰囲気「ポップ・元気」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 菓子・スイーツ ／ **雰囲気**: ポップ・元気、かわいい、親しみ・手作り感、力強い・インパクト
- **キーワード**: 高彩度の赤と黄・極太ディスプレイ見出し・切り抜き商品写真・キャラクター・キラキラ・紙吹雪・期間限定
- **地の質感**: 基本はフラットな単色の面。そこにドット・ストライプ・ギンガムなどの細かい柄を薄く敷き、四芒星のキラキラや紙吹雪を散らしてにぎやかにする。立体的なグラデーションは使わず、色面を重ねて奥行きを出す
- **形**: ピル型ボタン、大きな角丸の白カード、吹き出しやリボン帯、星・雲の形。セクションの境目は直線にせず、波線やジグザグでつなぐ
- **温度感**: 暖かく明るい。赤と黄でにぎやかさと熱量を出し、紺や水色で全体を引き締める。文字は黒よりこげ茶寄りにして柔らかくする

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#DA0D19` | ブランドの赤（見出し帯・強調面・FV の主色） | 14% | 集計の代表色 |
| `background` | `#FCFBF9` | ページの基本地（オフホワイト） | 22% | 集計の代表色 |
| `background-alt` | `#F8EAC9` | セクションを切り替えるクリーム地 | 9% | 集計の代表色 |
| `secondary` | `#0B3A8F` | 引き締めの紺（帯・吹き出し・影） | 8% | 集計の代表色 |
| `accent-1` | `#FCE338` | 黄色のバッジ・番号・見出しの裏の面 | 3% | 集計の代表色 |
| `accent-2` | `#2CADE8` | 水色の色帯・サブラベル | 2% | 集計の代表色 |
| `surface` | `#FCFCFC` | 白い角丸カード・ボックス | 9% | 集計の代表色 |
| `cta` | `#DE0E17` | 購入・予約などの主ボタンの赤 | 2% | 集計の代表色 |
| `on-cta` | `#FDFCFA` | ボタン上の白文字 | 0% | 集計の代表色 |
| `text` | `#2F1D17` | 見出し・価格のこげ茶文字 | 2% | 集計の代表色 |
| `text-body` | `#634031` | 本文の茶色文字 | 2% | 集計の代表色 |
| `dark-section` | `#511501` | フッター・帯の焦げ茶面 | 2% | 集計の代表色 |
| `on-dark` | `#FDFCFB` | 濃色面・赤面の上の白抜き文字 | 1% | 集計の代表色 |
| `marker` | `#FCEE34` | キーワード下に敷く黄色マーカー | 1% | 集計の代表色 |

- 地は白系とクリームを基本にし、セクションごとに赤・黄・水色などの色面を順に切り替える。同じ色の地を続けない
- 赤（primary）は FV・大見出しの帯・主 CTA に絞って使い、熱量の中心にする
- 黄色はバッジ・番号・見出しの裏・キーワードのマーカーに使い、文字色としては濃色の地の上でだけ使う
- 紺や水色は全体を引き締める差し色にし、吹き出し・帯・ボタンのずらし影に使う
- 文字・縁取りは真っ黒ではなくこげ茶で統一する。赤や濃茶の面の上は白抜きの太字にする
- 商品は白いカードか単色の円の上に置き、背景の柄と混ざらないようにする
- 注釈も地の色に合わせて読みやすい色を選び、色面の上に細く淡い文字を置かない

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FV の商品名・ロゴ風タイトル・大きな告知 | 装飾・ディスプレイ | Dela Gothic One | 900 | 37px | 1.2 | 0.02em |
| `headline-lg` | セクションの大見出し・英字見出し | 丸ゴシック | M PLUS Rounded 1c | 900 | 28px | 1.3 | 0.04em |
| `headline-md` | パネル内の訴求コピー・中見出し | 丸ゴシック | M PLUS Rounded 1c | 800 | 20px | 1.4 | 0.04em |
| `headline-sm` | リボン内のラベル・POINT 見出し・商品名 | 丸ゴシック | M PLUS Rounded 1c | 700 | 15px | 1.4 | 0.05em |
| `body-md` | 商品説明などの本文 | ゴシック | Noto Sans JP | 500 | 13px | 1.8 | 0.04em |
| `accent` | 価格・英字ラベル・吹き出しやバッジの短い文字 | 欧文サンセリフ | Montserrat | 700 | 18px | 1.2 | 0.01em |
| `label-button` | ボタンの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.2 | 0.05em |
| `note` | ※付きの注釈・注意事項 | ゴシック | Noto Sans JP | 400 | 11px | 1.6 | 0.02em |

- 大見出しは極太のディスプレイ書体か丸ゴシックにし、白フチや色のずらし影を付けて元気よく見せる
- セクション見出しは「大きな英字＋小さな和訳」の 2 段にし、左右に星やイラストを添える
- 本文は 13px 前後のゴシック、中央揃えで短く改行し、1 段落 3〜4 行に収める
- 価格や数字、強調する語だけを一回り大きく極太にする
- キーワードには黄色のマーカーか手描き風の下線を引く
- 細い明朝体や繊細な書体は使わず、どの文字も太めに組む
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム、中央揃え
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 64px、基本単位 8px、カード内 16px（375px 幅換算）
- 要素は基本的に中央揃えで縦に積む
- 各セクションは英字見出し→和訳→ビジュアル→本文→ボタンの順にする
- 商品の切り抜き写真は画面幅いっぱい近くまで大きく置く
- 特長やポイントは番号ラベル付きのブロックを縦に並べるか、写真と文を左右交互に置く
- カード・情報ボックスは左右に 6% ほどの余白を取り、背景の色面は全幅に広げる
- 余白は 8px 単位で取り、セクションは色面の切り替えと余白で区切る

## Elevation & Depth

- 影はほとんど使わず、フラットな色面の重なりで奥行きを出す
- ボタンやカードには、ぼかさない濃い色のずらし影（ベタ影）を付けて立体感を出す
- 切り抜き商品写真の下には柔らかい弱い落ち影を付ける
- 見出し帯やパネルは太い縁取りで浮かせ、ぼかし影は付けない

## Shapes

- **角丸**: 小 4px ／ 中 12px ／ 大 24px。ボタンはピル型。
- **写真の切り抜き**: 商品は背景を抜いた切り抜き写真にし、白フチを付けるか単色の円の上に置く。シーン写真は角丸の四角か円に切り抜く
- **セクション境界**: 直線では区切らず、波線・ジグザグ・雲形などの曲線で次の色面につなぐ
- ボタンはピル型を基本にし、右端に丸の矢印を付ける
- カードは 24px の大きな角丸にし、必要なら内側に白線を入れる
- 見出しラベルは両端を斜めに切ったリボン帯か旗形にする
- 吹き出しは角丸か雲形にし、尾を付けて会話っぽく見せる
- 番号やバッジは円・星形・爆発形にする
- 表は 8〜12px の小さな角丸の外枠にし、格子で区切る

## Components

- **主 CTA ボタン**（`button-primary`）: 赤いピル型ボタンに白い太字。右端に白丸の矢印を置き、下か右に紺のずらし影を付ける
- **サブリンクボタン**（`button-secondary`）: 白地のピル型に、こげ茶の枠と文字。左右どちらかに丸の矢印を添える
- **英字＋和訳の見出し**（`section-title`）: 中央揃えの極太英字の大見出しの下に、小さな日本語の訳を置く。左右に星やキャラのイラストを散らす
- **POINT 番号ラベル**（`point-label`）: 黄色の旗形か吹き出し形のラベルに、英字の POINT と大きな番号を入れる
- **商品カード**（`product-card`）: 白い角丸カードに、切り抜き写真・商品名・説明・価格を縦に並べる。縁はこげ茶の細線かずらし影
- **価格ブロック**（`price-block`）: 小さなサイズ名のラベルの下に、極太の価格を大きく置く。複数サイズは縦線で区切って横に並べる
- **キャラの吹き出し**（`speech-bubble`）: 白地に色の枠線を付けた角丸の吹き出しに、キャラクターのセリフを太字で入れる
- **リボン帯見出し**（`ribbon-heading`）: 両端を斜めに切った赤い帯に、白抜きの小見出しを入れる
- **アレルギー表**（`allergy-table`）: 白いセルを 4 列に並べ、該当する品目のセルだけ濃い色で塗って白文字にする

## Do's and Don'ts

**Do**
- セクションごとに地の色を切り替え、境目は波線やジグザグの曲線でつなぐ
- 商品は切り抜き写真で大きく見せ、背後に単色の円や白フチを敷く
- キラキラ・星・紙吹雪・キャラクターを各セクションに散らして、にぎやかさを保つ
- 見出しは「英字＋和訳」かリボン帯の型にそろえ、ページ全体で統一する
- 主 CTA は赤のピル型にそろえ、繰り返し置いて導線を途切れさせない
- 注意事項やアレルギー情報は省かず、ページ下にまとめる

**Don't**
- 細い明朝体や繊細な書体を使わない
- 長い本文を左揃えで詰め込まない。1 段落は 3〜4 行までにする
- 直線の区切りや無機質なグレーの地を使わない
- ぼかしの強い影や立体的なグラデーションのボタンにしない
- 色面の上に細く小さい黒文字を置かない
- 同じ色の地を何セクションも続けない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（商品名・期間限定などの告知・魅力をひと目で伝える）: 赤や黄の地に集中線やキラキラを敷き、極太のロゴ風タイトルと大きな切り抜き商品写真を中央に重ねる。発売日や価格はバッジにする
2. **コンセプト**（商品やキャンペーンの魅力を短い言葉で伝える）: クリーム地に中央揃えの短い導入文。上下にイラストや星を散らし、キーワードに黄色のマーカーを引く
3. **商品紹介**（商品が何かと味の特徴を伝える）: 英字＋和訳の見出しの下に、切り抜き写真を大きく置き、短い説明と価格ブロックを続ける
4. **特長**（商品の魅力を 3 点で伝える）: POINT 番号ラベルを付けたブロックを縦に並べ、写真と短い文を組み合わせる。地の色をひとつ前と変える
5. **商品ラインナップ**（種類やフレーバーの一覧を見せる）: 白い角丸の商品カードを縦に積むかカルーセルで並べ、商品ごとにカードの上部の色を変える
6. **キャラクター紹介**（キャラクターで親しみを深める）: キャラのイラストに吹き出しでセリフを添え、色の円や星を背景に散らす
7. **動画**（CM や紹介動画を見せる）: 太い枠の角丸フレームに動画を入れ、上にリボン帯の見出しを置く
8. **アレルギー情報**（原材料を表で示し安心してもらう）: 白地の 4 列表で、該当品目だけを色で塗って反転させる。見出しは小さめの帯にする
9. **CTA**（購入・予約・店舗検索へ誘導する）: 赤や黄の色面に商品写真と赤いピル型の主ボタンを中央に置き、サブボタンを下に並べる
10. **注意事項・フッター**（販売条件・権利表記・SNS リンクを示す）: 上端を波形にした焦げ茶の帯に白い文字。注釈は 11px で箇条書きにまとめ、SNS アイコンを丸く並べる

## Imagery

- 商品は真上からやや斜めに、明るく均一な光で撮り、背景を抜いて大きく見せる
- 切り抜いた商品の背後に赤・黄・水色などの単色の円を敷くか、白フチを付ける
- 四芒星のキラキラ・紙吹雪・リボン・雲のシルエットで余白を埋める
- キャラクターは太い線のフラットなイラストにし、各セクションに案内役として出す
- 背景には薄いドット・ストライプ・ギンガムチェックなどの柄を敷き、フラットに保つ
- 具材や果物のイラスト・写真を画面の端に散らし、シズル感を足す
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC では中央に 480〜600px 程度の幅で SP と同じレイアウトを置き、左右には背景の色や柄を延長する
- 色面の帯や波形の境界は PC でも全幅のまま保つ
- PC の FV は横長にし、左に見出し、右に商品写真を置いてもよい
- 特長は PC で写真と文の 2 カラムにし、商品一覧は 3〜4 列のグリッドに広げる
- 価格の数字や display 見出しは PC で 1.5 倍程度まで拡大する
- SP では装飾の円やイラストを画面の端からはみ出させて、動きを出す

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

- **ID**: `pk-sweets-pop`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「菓子・スイーツ」・主な雰囲気「ポップ・元気」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-sweets-pop/
