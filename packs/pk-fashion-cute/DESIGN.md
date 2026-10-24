---
version: alpha
name: Cute Pastel Fashion Lookbook LP Pattern
description: 生成りの地にくすみピンク・クリーム・ラベンダー系のパステル帯を章ごとに切り替え、ルックブックのように写真を主役にして見せる型。見出しは大きな欧文、和文は中央揃えの短いリード文に絞る。影はほぼ使わず、ピル型ボタン・円やアーチの写真フレーム・手描き風の装飾でやわらかさを出す。CTA は商品一覧への誘導を中心に控えめに置く。
colors:
  background: '#FBFAF7'
  primary: '#F9C1D4'
  background-alt: '#F8EEE2'
  tint-1: '#EBD9DD'
  tint-2: '#FCEEF3'
  secondary: '#E9D0C3'
  surface: '#F9F9F8'
  accent-1: '#EEB5B8'
  accent-2: '#CBA0A3'
  text: '#242424'
  text-muted: '#928E8C'
  cta: '#E596B0'
  on-cta: '#F9F9F8'
  line: '#CFBBB1'
  cta-accessible: '#CE3869'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0.04em
  headline-lg:
    fontFamily: Josefin Sans
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.04em
  headline-md:
    fontFamily: Zen Kaku Gothic New
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Montserrat
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.04em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0.05em
  accent:
    fontFamily: Playfair Display
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.035em
  label-button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.05em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.03em
rounded:
  sm: 4px
  md: 12px
  lg: 24px
  full: 999px
spacing:
  unit: 8px
  card: 16px
  section: 72px
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
    height: 50px
  button-outline:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 40px
  button-buy:
    backgroundColor: '{colors.cta}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 32px
  product-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 230px
  script-heading:
    textColor: '{colors.accent-2}'
    typography: '{typography.display}'
    height: 70px
  arch-photo:
    rounded: '{rounded.lg}'
    height: 420px
  circle-badge:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 135px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.full}'
    height: 60px
  info-box:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 220px
  credit-list:
    textColor: '{colors.text-muted}'
    typography: '{typography.note}'
    height: 140px
---

# DESIGN.md — ファッション小物のかわいいパステルLPの型（Cute Pastel Fashion Lookbook LP Pattern）

designmark が、ファッション・アクセサリー・主な雰囲気「かわいい」の LP の設計書 39 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: ファッション・アクセサリー ／ **雰囲気**: かわいい、やさしい・柔らかい、ポップ・元気、上品・高級
- **キーワード**: ルックブック・くすみパステル・生成り地・欧文見出し・余白多め・切り抜き写真
- **地の質感**: マットなパステルの単色面が中心で、ところどころにごく淡いグラデーションを使う。水玉・方眼・星のきらめき・細い線画を小さく散らし、紙もののような軽さを出す。光沢や強い影は付けない。
- **形**: ピル型のボタン、正円・アーチ窓・楕円の写真フレーム、角丸で終わる色帯を組み合わせる。四角い写真は裁ち落としで置き、丸い形とのリズムを作る。
- **温度感**: やや暖かく甘い。くすみピンクと生成りを軸にして、ラベンダーやクリームを章ごとの変化に使う。彩度は抑えて大人っぽさも残す。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FBFAF7` | ページ全体の生成り地 | 30% | 集計の代表色 |
| `primary` | `#F9C1D4` | ブランドを代表するくすみピンクの帯・見出し帯 | 9% | 集計の代表色 |
| `background-alt` | `#F8EEE2` | 章を切り替えるクリーム地 | 10% | 集計の代表色 |
| `tint-1` | `#EBD9DD` | サブ見出し帯や写真背景のごく淡いローズ | 6% | 集計の代表色 |
| `tint-2` | `#FCEEF3` | 商品紹介欄の淡いピンク地 | 6% | 集計の代表色 |
| `secondary` | `#E9D0C3` | ベージュピンクのセクション地・円形バッジ | 6% | 集計の代表色 |
| `surface` | `#F9F9F8` | 説明パネル・写真の白フチ・カードの白 | 5% | 集計の代表色 |
| `accent-1` | `#EEB5B8` | カラー名・引き出し線・ドットのピンク | 1% | 集計の代表色 |
| `accent-2` | `#CBA0A3` | 筆記体見出しや一覧リンクのくすみローズ | 1% | 集計の代表色 |
| `text` | `#242424` | 見出し・本文・商品名・価格の文字 | 1% | 集計の代表色 |
| `text-muted` | `#928E8C` | クレジット・注釈の灰色文字 | 0% | 集計の代表色 |
| `cta` | `#E596B0` | 購入・一覧へ誘導するボタンの塗り | 1% | 集計の代表色 |
| `on-cta` | `#F9F9F8` | ボタン上の白文字 | 0% | 集計の代表色 |
| `line` | `#CFBBB1` | スペック枠・アウトラインボタン・区切りの細線 | 0% | 集計の代表色 |
| `cta-accessible` | `#CE3869` | AA を満たす補正値（計算） |  | 計算 |

- 地は生成り（background）にし、章ごとに primary・background-alt・tint-1・tint-2 の帯を 1 色ずつ割り当てて切り替える
- 隣り合う帯は色相を少しずつずらし、明度は近いまま保つ
- 強い色は写真や商品の中だけに使う。地や面に原色や純黒を広く敷かない
- 説明パネルや商品カードは surface の白にして、パステル地から少し浮かせる
- カラー名・引き出し線・小さなドットは accent-1 のピンクでそろえる
- CTA の塗りは cta の 1 色だけにし、ほかのボタンは白地に line 色の枠を付ける
- 文字は text の濃いグレーを基本とし、クレジットと注釈だけ text-muted にする
- `button-primary` は文字 `#F9F9F8` × 背景 `#E596B0` のコントラスト比が 2.14:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#CE3869`、4.54:1）を使う。
- `button-buy` は文字 `#F9F9F8` × 背景 `#E596B0` のコントラスト比が 2.14:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#CE3869`、4.54:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューやシリーズ名の大きな欧文タイトル | 欧文サンセリフ | Montserrat | 400 | 40px | 1.1 | 0.04em |
| `headline-lg` | セクション見出しの欧文・カラー名 | 欧文サンセリフ | Josefin Sans | 400 | 26px | 1.2 | 0.04em |
| `headline-md` | 和文の小見出し・コーディネート名 | ゴシック | Zen Kaku Gothic New | 700 | 19px | 1.4 | 0.05em |
| `headline-sm` | 写真に重ねる短いムードコピー・欧文の小見出し | 欧文サンセリフ | Montserrat | 700 | 15px | 1.4 | 0.04em |
| `body-md` | 中央揃えのリード文・説明文 | ゴシック | Noto Sans JP | 400 | 13px | 2.0 | 0.05em |
| `accent` | 筆記体やセリフ体の欧文ラベル（Scene・カラー名など） | 欧文セリフ | Playfair Display | 400 | 16px | 1.2 | 0.035em |
| `label-button` | ピル型ボタン・カテゴリラベル | 欧文サンセリフ | Montserrat | 700 | 14px | 1.15 | 0.05em |
| `note` | クレジット・価格の税込表記・注釈 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.03em |

- 大きな見出しは欧文が主役。和文は下に添える 1〜2 行のリードだけにする
- 本文は 13px 前後で中央揃えにし、行間は 2 前後、字間はやや広めにとる
- 太字の訴求コピーや強調マーカーは使わない。強調は短いフレーズと余白で行う
- 価格は『アイテム名 ¥価格（税込）』を 1 行ずつ並べ、数字より税込表記を小さくする
- 筆記体やセリフ体は 1 セクションにつき 1 か所までにし、ラベルとして使う
- 欧文の見出しは字間を 0.04〜0.1em とり、ゆったり見せる
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。写真は全幅のものと左右どちらかに寄せたものを交互に置く
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 72px、基本単位 8px、カード内 16px（375px 幅換算）
- シリーズや章の帯は色面を縦に連結し、境界は色の切り替えで見せる
- 写真は左右非対称にずらし、空いた側に欧文の短いコピーや装飾を置く
- 導入文は中央揃えにし、上下に 64〜80px の余白をとる
- 1 ルック＝写真 → 短い説明 → アイテム名と価格 → ボタン の順で縦に積み、これを繰り返す
- 商品一覧は 2 列のグリッドにし、写真の比率と背景をそろえる
- 8px 単位で余白を刻み、カード内側の余白は 16px にする

## Elevation & Depth

- 影は基本的に使わず、フラットな面で構成する
- 奥行きは写真の重ね配置と地色の切り替えで出す
- 傾けたポストカード風の写真にだけ、ごく薄い影（0 2px 6px・透明度 10%）を付けてよい
- 切り抜いた商品は地色の上に直接置き、硬いドロップシャドウは付けない

## Shapes

- **角丸**: 小 4px ／ 中 12px ／ 大 24px。ボタンはピル型。
- **写真の切り抜き**: 正円・上辺が半円のアーチ窓・楕円・裁ち落としの四角を混ぜる。小物は背景を消して切り抜き、色帯の上に浮かせて置く
- **セクション境界**: 基本は直線で色面を切り替える。要所だけ角丸で終わる色帯やゆるい波形のカーブを使う
- ボタンとリンクボタンはすべてピル型にする
- カードと情報ボックスは 24px の大きな角丸にする
- NEW などの小さなラベルは角丸 4px の矩形にする
- 円形のバッジや写真には円弧に沿わせた欧文を添えてよい
- 尖った角のカードやシャープな斜めの区切りは使わない

## Components

- **主ボタン（一覧へ・購入）**（`button-primary`）: cta 色で塗ったピル型。中央に白の欧文大文字ラベルを置き、右端に小さな矢印を付ける。幅は画面の 70〜80%
- **アウトラインのサブボタン**（`button-outline`）: 白地に line 色の細い枠を付けたピル型。商品詳細などの補助的な導線に使い、2 つを横に並べてもよい
- **小さな BUY ボタン**（`button-buy`）: 商品名と価格の下や右に置く、幅 120〜180px の小さなピル型ボタン
- **商品カード**（`product-card`）: 白い角丸カードの上側に淡色背景の商品写真を置き、下に商品名・税込価格・BUY ボタンを中央揃えで並べる
- **欧文ラベル付きの見出し**（`script-heading`）: 大きな欧文見出しの上か横に、くすみピンクの筆記体やセリフ体のラベルを小さく重ね、下に和文のリードを 1〜2 行添える
- **アーチ窓の写真**（`arch-photo`）: 上辺を半円にした縦長の写真フレーム。帯色の上に置き、横か下に欧文タイトルを添える
- **円形の説明バッジ**（`circle-badge`）: 直径 130〜150px の正円に 2 行の短いコピーを入れ、写真の端に重ねて置く
- **ひとこと吹き出し**（`speech-bubble`）: 白い角丸の吹き出しに小さなしっぽを付け、丸く切り抜いた人物やキャラクターの横に 2 行以内のコメントを入れる
- **販売情報ボックス**（`info-box`）: 白地の角丸ボックスに細い line 色の枠を付け、発売日・取扱店舗・注意事項を中央見出しと箇条書きで並べる
- **スタッフクレジット**（`credit-list`）: ページ末尾に、小さな欧文大文字の役職と名前を中央揃えで縦に並べる

## Do's and Don'ts

**Do**
- 余白を広くとり、写真が主役のカタログのように見せる
- 章ごとに地のパステル色を 1 色決め、帯として切り替える
- 見出しは大きな欧文にし、和文は短いリードだけ添える
- 写真は円・アーチ・裁ち落としの四角を混ぜてリズムを作る
- 商品写真は無地のパステル背景や淡いグレー地で、自然光で明るく撮る
- 価格は『アイテム名 ¥価格（税込）』の形で、写真の近くに小さく添える

**Don't**
- 彩度の高い原色や純黒の面を広く使わない
- 太いゴシックの訴求見出しや強調マーカーで押し売り感を出さない
- 原色の購入ボタンを各所に何度も差し込まない
- 角張ったカードや硬いドロップシャドウを使わない
- 装飾を詰め込みすぎて余白をつぶさない
- 吹き出しに長い文章を入れない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（コレクションのテーマと世界観を一枚で伝える）: 全幅のモデル写真かアーチ窓の写真に、大きな欧文タイトルを重ねる。地は淡いパステルで、星やドットの小さな装飾を散らす
2. **コンセプト**（コレクションの想いや企画の背景を短く伝える）: 生成り地に中央揃えのリード文を 4〜6 行置き、上下の余白を大きくとる。上に小さな欧文ラベルを添える
3. **ムービー**（動きで世界観と着用シーンを補う）: 角丸の動画枠を帯色の上に置き、下に短い欧文キャプションを付ける
4. **ルック紹介（章ごとのコーディネート）**（アイテムの着こなしとかわいさを写真で見せる）: 章ごとに地色を切り替え、写真を左右にずらして配置する。各ルックの下にアイテム名・価格・BUY ボタンを並べる
5. **アイテム詳細**（素材や細部、カラー展開を伝える）: 楕円や正円で切り抜いた寄りの写真に、ピンクの引き出し線とカラー名を添える
6. **グッズ**（小物や限定アイテムを紹介する）: 切り抜いた小物を白い角丸の商品カードに入れ、2 列のグリッドで並べる
7. **販売情報**（発売日・販売店舗・通販を案内する）: 白い角丸の情報ボックスに日時と店舗を箇条書きでまとめ、下にアウトラインのボタンを置く
8. **CTA**（商品一覧ページへ誘導する）: パステルの帯の中央に欧文の誘導文字と主ボタンを置き、イラストを小さく添える
9. **クレジット**（モデルや制作スタッフを表記する）: 小さな欧文大文字を中央揃えで縦に並べ、文字色は灰色にする
10. **フッター**（権利表記と SNS への導線を示す）: 生成り地かくすみピンクの帯に、ロゴ・SNS アイコン・コピーライトを中央揃えで置く

## Imagery

- モデル写真は無地のパステル背景のスタジオで、柔らかい自然光で撮る。表情は笑顔や少しおどけた表情で親しみを出す
- 小物は背景を消して切り抜き、色帯の上に浮かせて置いたり、画面に散らしたりする
- ニットやレースなど素材感が伝わる寄りのカットと、全身の引きのカットを組み合わせる
- 写真の色味は地色と同じ系統にそろえ、彩度は少し落とす
- 装飾は星・ハート・リボン・水玉などを細い線画やフラットなイラストで描き、画面の端に小さく散らす
- キャラクターや手描きの要素は水彩風の淡い塗りにして、ステッカーのように写真の端へ重ねる
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- SP 幅で組んだ縦長の構成を基本にする
- PC では中央に幅 480px 前後の列を置き、左右の余白は生成りか淡いパステルで埋める
- PC の左右の余白には、ロゴや一覧へのリンクを固定表示してもよい
- PC のファーストビューは 2 カラムにし、左に欧文タイトル、右にアーチ窓の写真を置いてもよい
- PC の商品一覧は 3〜4 列に広げてよい。ただし本文の幅は 1000px 以内に収める
- 写真の切り抜き形と重ねる配置は PC でも保ち、比率を変えずにサイズだけ調整する

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

- **ID**: `pk-fashion-cute`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「ファッション・アクセサリー」・主な雰囲気「かわいい」の設計書 39 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-fashion-cute/
