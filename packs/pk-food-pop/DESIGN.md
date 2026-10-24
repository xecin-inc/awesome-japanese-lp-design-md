---
version: alpha
name: Pop Energetic Japanese Food LP Pattern
description: 白い地を土台に、トマトレッドの主色と山吹色を大きな面で使い、セクションごとに地の色を切り替えて調子を付ける食品 LP の型。ファーストビューは極太のディスプレイ書体で短いコピーを置き、料理や商品のシズル写真、手描き線画、吹き出し、キャラクターでにぎやかさを出す。本文は小さめのゴシック体で読みやすく保つ。CTA は赤いピル型ボタンに白文字で統一し、ページ内で何度も置く。
colors:
  primary: '#E41219'
  background: '#FEFDFC'
  background-alt: '#F5E7CD'
  secondary: '#FCD00C'
  surface: '#FDFDFC'
  tint-1: '#FDF5D5'
  tint-2: '#FDF3CE'
  cta: '#E1141C'
  on-cta: '#FBFBF9'
  text: '#2B2A29'
  accent-1: '#F59724'
  accent-2: '#F8C427'
  dark-section: '#342C23'
  on-dark: '#FEFEFC'
  line: '#EFEFED'
  marker: '#FDF150'
  accent-1-accessible: '#AE6308'
typography:
  display:
    fontFamily: Dela Gothic One
    fontSize: 44px
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
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: 0.03em
  accent:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 5px
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
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 40px
  button-secondary:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 44px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.lg}'
    height: 90px
  ribbon-heading:
    backgroundColor: '{colors.cta}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-lg}'
    height: 52px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 90px
  recipe-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 250px
  product-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 340px
  number-badge:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.on-dark}'
    typography: '{typography.accent}'
    rounded: '{rounded.full}'
    height: 56px
  marker-highlight:
    backgroundColor: '{colors.marker}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    height: 12px
---

# DESIGN.md — 食品・飲料のポップで元気な LP の型（Pop Energetic Japanese Food LP Pattern）

designmark が、食品・飲料・主な雰囲気「ポップ・元気」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 食品・飲料 ／ **雰囲気**: ポップ・元気、親しみ・手作り感、情報量多め・訴求型、かわいい
- **キーワード**: トマトレッド・山吹色・シズル写真・吹き出し・手描き線画・極太見出し
- **地の質感**: ベタ塗りの原色とクリーム色の面を基本にする。地にはドットや食材シルエットなど同系色の柄をうっすら敷き、影やグラデーションは控えめにして、平らでも温かみが出るようにする。
- **形**: ボタンや吹き出しは丸みを強く、カードは中くらいの角丸。見出しにはリボン帯や波線などの遊びのある形を加える。
- **温度感**: 暖色が中心で、明るく温かくにぎやか。赤と黄の熱量を、白とクリーム色の地がやわらげる。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#E41219` | ブランドの赤。FV 周りや強調セクションの地色 | 12% | 集計の代表色 |
| `background` | `#FEFDFC` | 白い基本の地 | 24% | 集計の代表色 |
| `background-alt` | `#F5E7CD` | 交互に入れる淡いクリーム〜ベージュの地 | 11% | 集計の代表色 |
| `secondary` | `#FCD00C` | 山吹色のセクション地・ラベル | 8% | 集計の代表色 |
| `surface` | `#FDFDFC` | 白いカード・パネルの面 | 6% | 集計の代表色 |
| `tint-1` | `#FDF5D5` | 図表やレシピ枠の淡いクリーム地 | 4% | 集計の代表色 |
| `tint-2` | `#FDF3CE` | パネル下側などの淡い黄の面 | 4% | 集計の代表色 |
| `cta` | `#E1141C` | 主 CTA ボタン・リボン帯の赤 | 1% | 集計の代表色 |
| `on-cta` | `#FBFBF9` | CTA ボタン上の白文字 | 0% | 集計の代表色 |
| `text` | `#2B2A29` | 見出し・本文の濃い墨色 | 2% | 集計の代表色 |
| `accent-1` | `#F59724` | オレンジのサブ強調・番号バッジ | 2% | 集計の代表色 |
| `accent-2` | `#F8C427` | 小見出し・ラベルの山吹色 | 1% | 集計の代表色 |
| `dark-section` | `#342C23` | フッター・締めの帯の焦げ茶 | 3% | 集計の代表色 |
| `on-dark` | `#FEFEFC` | 色地・濃色地の上の白文字 | 1% | 集計の代表色 |
| `line` | `#EFEFED` | カード輪郭・区切りの細線 | 0% | 集計の代表色 |
| `marker` | `#FDF150` | 強調語の下線マーカーの黄 | 0% | 集計の代表色 |
| `accent-1-accessible` | `#AE6308` | AA を満たす補正値（計算） |  | 計算 |

- 地は白を基本にし、セクションごとに赤・山吹色・クリームを切り替えて、スクロールしたときに調子が出るようにする
- 赤は FV、強調セクション、CTA、リボン見出しに絞る。長い本文の地には使わない
- 赤や山吹色の地の上の文字は白にする。長い説明は白いカードを重ねてその中に入れる
- 主 CTA は全ページで同じ赤の塗りと白文字に統一し、サブの導線は山吹色か白地の線ボタンで分ける
- 強調語には黄色の蛍光ペン風マーカーを引く。強調色は赤と黄の 2 系統までにする
- フッターや数値ボックスは焦げ茶で締め、黒ベタの重い面は使わない
- 商品ごとに固有の色を決め、ラベルやカードの帯に使って見分けやすくする
- `number-badge` は文字 `#FEFEFC` × 背景 `#F59724` のコントラスト比が 2.23:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-1-accessible`（`#AE6308`、4.53:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FV のロゴ風の極太キャッチ・章タイトル | 装飾・ディスプレイ | Dela Gothic One | 900 | 44px | 1.2 | 0.02em |
| `headline-lg` | セクションの大見出し | 丸ゴシック | M PLUS Rounded 1c | 900 | 28px | 1.3 | 0.04em |
| `headline-md` | ポイントの小見出し・カードのタイトル | 丸ゴシック | M PLUS Rounded 1c | 700 | 21px | 1.4 | 0.05em |
| `headline-sm` | 商品名・レシピ名・吹き出しの文字 | ゴシック | Noto Sans JP | 700 | 16px | 1.4 | 0.05em |
| `body-md` | 本文・カードの説明文 | ゴシック | Noto Sans JP | 500 | 14px | 1.8 | 0.03em |
| `accent` | 見出しに添える英字ラベル・英字の商品名 | 欧文サンセリフ | Montserrat | 700 | 20px | 1.2 | 0.02em |
| `label-button` | ボタンの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.2 | 0.05em |
| `note` | 注釈・分量や調理時間の補足 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.0em |

- 極太のディスプレイ書体は FV と章タイトルだけに使い、本文の近くには置かない
- コピーは短く 2 行ほどに切り、行間を詰めて塊として見せる
- 大見出しには英字ラベルを小さく添え、和文と英字の 2 段で組む
- 重要な語だけ一段大きくし、赤い文字か黄色のマーカーで強調する
- 本文は 14px 前後に抑え、行間 1.8 で読みやすくする
- 価格は太字で大きくし、税込表記や単位は小さく添える
- 明朝体や細い書体は使わず、太めのゴシック体と丸ゴシック体でまとめる
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。商品やレシピのカードは 2 列のグリッド
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 64px、基本単位 8px、カード内 16px（375px 幅換算）
- 背景色は画面幅いっぱいに敷き、本文とカードは幅 88% に収める
- 商品紹介は写真とテキストを左右交互に並べ、リズムを付ける
- キャラクターや切り抜き写真は、カードやパネルの縁からはみ出すように重ねる
- CTA ブロック（価格・ボタン・補足）は同じ形でページ内に 2〜3 回置く
- レシピや商品は 2×2 のカードで並べ、各カードの下に短い名前を付ける
- 余白は 8px 刻みで取り、セクションの間は 64px 前後にする

## Elevation & Depth

- 基本はフラットにし、カードは影なしか、ごく薄い影にとどめる
- 商品の切り抜き写真には、薄いドロップシャドウを付けてもよい
- CTA ボタンは下に 2〜4px の濃い色のずらし影を付けて、押せることを示してもよい
- 吹き出しは影ではなく、太い縁取りや色の差で目立たせる

## Shapes

- **角丸**: 小 5px ／ 中 12px ／ 大 24px。ボタンはピル型。
- **写真の切り抜き**: 料理は皿ごと丸く切り抜くか、角丸の長方形にする。商品は白抜きの切り抜き、人物は正円で切り抜いて白フチを付ける
- **セクション境界**: 基本は直線で地の色を切り替え、要所ではゆるい波形のカーブやジグザグ帯を使う
- ボタンはピル型、カードは角丸 12px、大きなパネルは角丸 24px にする
- 吹き出しは丸みの強い雲形か楕円にし、小さな尻尾を付ける
- 見出しの帯は両端を切り込んだリボン形か平行四辺形にする
- 背景に大小の円やドット、しずくの形を散らしてにぎやかさを出す
- 番号バッジは正円にし、カードの左上にはみ出すように置く

## Components

- **主 CTA ボタン**（`button-primary`）: 画面幅に近い横長の赤いピル型ボタン。白い太字で、右端に矢印を付ける
- **線ボタン**（`button-outline`）: 白地に赤い枠線と墨色の文字のピル型ボタン。右端に赤い三角の矢印を付ける。詳細ページへの誘導に使う
- **山吹色のサブボタン**（`button-secondary`）: 一覧や別ページへの誘導に使う山吹色のピル型ボタン
- **雲形の吹き出し**（`speech-bubble`）: 人物やキャラクターの斜め上に置く白い雲形の吹き出し。強調する語は赤にする
- **リボン見出し**（`ribbon-heading`）: 赤い帯の両端を切り込んだリボン形の見出し。中に白抜きの文字を入れる
- **英字ラベル付きのセクション見出し**（`section-heading`）: 太い和文の見出しの上か下に、小さな英字ラベルを添え、下に波線などの小さな飾りを置く
- **レシピカード**（`recipe-card`）: 白いカードの上部に角丸の料理写真、下に 2 行ほどの料理名と調理時間の注釈を置く
- **商品カード**（`product-card`）: 縦長のカード。上に切り抜いた商品写真を置き、下に商品固有色の帯で商品名と価格を入れる
- **番号バッジ**（`number-badge`）: カードの左上にはみ出すオレンジの正円。中に白い太字の英数字を入れる
- **マーカー強調**（`marker-highlight`）: 本文や見出しの重要な語の下半分に、黄色の蛍光ペン風の帯を引く

## Do's and Don'ts

**Do**
- セクションごとに地の色を赤・山吹色・クリーム・白と切り替えて、リズムを作る
- 料理や商品はシズル感のある寄りの写真を大きく使い、皿ごと丸く切り抜いて置く
- 見出しには英字ラベルを小さく添え、和文と英字の 2 段で統一する
- 主 CTA は全セクションで同じ赤いピル型にして、横幅いっぱいに置く
- 吹き出し、手描きの線画、キャラクターを散らして親しみやすさを出す
- コピーは短く切り、オノマトペや話し言葉で明るく語りかける

**Don't**
- 赤や山吹色の地の上に、長い本文を直接置かない
- 明朝体や細い書体で高級感を出さない
- 黒や濃紺の重い地をページの広い範囲に使わない
- 装飾のない白い地だけのセクションを何度も続けない
- 強い影や立体的なグラデーションのボタン・カードを多用しない
- 強調色を 3 色以上に増やして、CTA を目立たなくしない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（明るい世界観と主力商品を一目で印象づける）: 赤か山吹色の地に、極太のディスプレイ書体で短いキャッチを 2 行で置く。シズル写真や切り抜いた商品を大きく見せ、雲形の吹き出しで手軽さなどを訴える
2. **コンセプト**（商品の価値や新しい楽しみ方を伝える）: 白地に英字ラベル付きの見出しと、中央揃えの短いリード文を置く。手描きの線画を余白に散らす
3. **悩みの提起**（よくある困りごとに共感してもらう）: クリーム色の地に吹き出しを左右交互に並べ、人物の線画アイコンを添える。最後に下向きの矢印でつなぐ
4. **特長**（素材や製法のこだわりを 3〜4 点で説明する）: 番号バッジ付きの白いカードを縦に積み、丸い写真と小見出し、短い説明を入れる。重要な語には黄色のマーカーを引く
5. **商品紹介**（主力商品と価格を見せる）: 赤い地に白いカードを重ね、切り抜いた商品写真と、太字で大きな価格を置く。下に赤いリボン見出しを入れる
6. **CTA**（最初の購入へ誘導する）: 山吹色の帯の中に価格、赤いピル型の主ボタン、小さな注釈をまとめる
7. **ラインナップ**（味や種類ごとの違いを比べてもらう）: 商品固有色の帯が付いた商品カードを 2 列で並べるか、写真とテキストを左右交互に並べる
8. **レシピ・楽しみ方**（食べ方の提案で、使う場面を想像してもらう）: クリーム色の地にレシピカードを 2×2 で並べ、各カードに料理名と調理時間を添える
9. **お客様の声**（実際に食べた人の感想で安心してもらう）: 白地に、人物の丸いアイコンと吹き出し形のコメントカードを並べる
10. **よくある質問**（購入前の不安や疑問を解消する）: Q と A の文字を色違いの丸に入れ、細線で区切った行を縦に並べる
11. **フッター**（企業情報と権利表記で締める）: 焦げ茶の地に白文字で、ロゴやリンク、コピーライトを中央に揃える

## Imagery

- 料理は暖色寄りで明るく、彩度を高めにする。湯気や持ち上げた麺、断面などのシズル感を寄りで撮る
- 料理は真上から撮り、皿ごと丸く切り抜く。素材の果物や野菜は白抜きで散らす
- 人物は明るい光の中で笑顔の上半身を撮り、切り抜くか正円の窓に入れる
- 黒や白の太いペンで、食器・キラキラ・星などの手描き線画を描き足す
- 商品を擬人化したキャラクターや、シンプルな線画アイコンを案内役に添える
- 背景には同系色のドットや食材シルエットの柄をうっすら敷く
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC ではコンテンツを中央の約 60〜70% の幅に収め、背景色と柄は画面幅いっぱいに敷く
- 文字サイズは SP とほぼ同じにし、PC では余白を広げて調整する
- 特長カードやステップは、PC では横に 3〜4 列で並べる
- レシピや商品のカードは、PC では 3〜4 列で並べる
- FV は PC で横長にし、キャッチを中央に置いて料理写真を左右に散らす
- 左右交互の商品紹介は、SP では写真の下に見出しとテキストを縦に積む

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

- **ID**: `pk-food-pop`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「食品・飲料」・主な雰囲気「ポップ・元気」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-food-pop/
