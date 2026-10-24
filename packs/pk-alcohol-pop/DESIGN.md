---
version: alpha
name: Pop Festive Japanese Alcohol LP Pattern
description: 生成りのクリーム地に、濃紺の帯と赤・黄・空色の差し色をはっきりぶつけた、お祭りのような酒類 LP の型。見出しは極太のディスプレイ書体と大きな欧文で目立たせる。本文は太めのゴシックで、短く中央揃えにする。黄色のピル型 CTA、白カード、吹き出し、ギザギザのバッジ、流れる帯でにぎやかさを出す。影はほぼ付けず、色面の切り替えと切り抜き写真のはみ出しで立体感を出す。最後に、紺のフッターと飲酒の注意書きでページを締める。
colors:
  primary: '#1F3C86'
  background: '#FDFCF9'
  background-alt: '#F6F6EF'
  surface: '#F9F9F8'
  accent-1: '#DE1B14'
  secondary: '#E2C070'
  accent-2: '#71C0F7'
  accent-3: '#E2AD31'
  tint-1: '#FEE990'
  cta: '#FEF437'
  on-cta: '#161813'
  text: '#302F2D'
  dark-section: '#091448'
  on-dark: '#FBFDFB'
typography:
  display:
    fontFamily: Dela Gothic One
    fontSize: 44px
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Dela Gothic One
    fontSize: 30px
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0.04em
  headline-md:
    fontFamily: M PLUS Rounded 1c
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.03em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: 0.03em
  accent:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.035em
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
  sm: 4px
  md: 12px
  lg: 20px
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
  button-outline:
    backgroundColor: '{colors.background}'
    textColor: '{colors.primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 40px
  section-heading:
    textColor: '{colors.primary}'
    typography: '{typography.display}'
    height: 90px
  card-white:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 260px
  speech-bubble:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 90px
  burst-badge:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 80px
  marquee-band:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.cta}'
    typography: '{typography.accent}'
    height: 45px
  faq-item:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 63px
  footer-dark:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.note}'
    height: 260px
---

# DESIGN.md — 酒類のポップ・元気な LP の型（Pop Festive Japanese Alcohol LP Pattern）

designmark が、酒類・主な雰囲気「ポップ・元気」の LP の設計書 24 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 酒類 ／ **雰囲気**: ポップ・元気、情報量多め・訴求型、親しみ・手作り感、力強い・インパクト
- **キーワード**: お祭り感・クリーム地・濃紺の帯・レモンイエロー・白カード・紙吹雪
- **地の質感**: 基本はグラデーションのないフラットなベタ塗り。大小の泡の水玉、紙吹雪、薄いドットや方眼の地紋を散らしてにぎやかにする。艶や立体感は、水滴の付いた缶やグラスの切り抜き写真だけで出す
- **形**: ピル型ボタン、角丸 12〜20px の白カード、円形やギザギザ星形のバッジ、雲形の吹き出し、セクション境界の波形や直線の色切替
- **温度感**: 暖色寄りで明るく陽気。黄・赤・オレンジの熱量を濃紺で引き締め、空色で爽やかさを足す

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#1F3C86` | 帯セクションの地色・見出し文字の濃紺 | 16% | 集計の代表色 |
| `background` | `#FDFCF9` | ページ全体の生成りクリーム地 | 26% | 集計の代表色 |
| `background-alt` | `#F6F6EF` | FAQ・手順など後半セクションの淡い生成り地 | 9% | 集計の代表色 |
| `surface` | `#F9F9F8` | 白カード・見出し白帯・吹き出しの面 | 8% | 集計の代表色 |
| `accent-1` | `#DE1B14` | 強調見出し・キーワード・バッジの赤 | 5% | 集計の代表色 |
| `secondary` | `#E2C070` | 琥珀・ゴールド系の補助地色とライン | 5% | 集計の代表色 |
| `accent-2` | `#71C0F7` | 装飾図形・イラストの空色 | 2% | 集計の代表色 |
| `accent-3` | `#E2AD31` | FAQ の Q マークや額縁・バッジの金茶 | 1% | 集計の代表色 |
| `tint-1` | `#FEE990` | 説明パネル・タブ見出しの淡黄 | 3% | 集計の代表色 |
| `cta` | `#FEF437` | 主 CTA ボタンのレモンイエロー | 1% | 集計の代表色 |
| `on-cta` | `#161813` | 黄色ボタン上の黒文字 | 0% | 集計の代表色 |
| `text` | `#302F2D` | 見出し・本文の焦げ茶黒 | 2% | 集計の代表色 |
| `dark-section` | `#091448` | フッター・締めの帯の濃紺 | 3% | 集計の代表色 |
| `on-dark` | `#FBFDFB` | 濃紺・色面の上の白文字 | 1% | 集計の代表色 |

- 地はクリーム（background）が基本。2〜3 セクションごとに濃紺の帯（primary）か淡黄（tint-1）へ直線で切り替えて、リズムを付ける
- 濃紺の地では見出しを黄か白にし、明るい地では見出しを濃紺にする
- 赤（accent-1）は強調語・価格の数字・新発売バッジなど、ここぞという所だけに使う
- 主 CTA はレモンイエローの地に黒文字にそろえる。濃紺の帯の上に置いてコントラストを最大にする
- 情報の中身は白カード（surface）にまとめ、枠や見出しの色でセクションのテーマ色を示す
- 差し色は赤・黄・空色・金茶までにする。4 色を超えて増やさない
- FAQ とフッター前は淡い生成り（background-alt）に落ち着かせ、最後は濃紺のフッターで締める

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューやセクションの巨大な見出し・英字見出し | 装飾・ディスプレイ | Dela Gothic One | 900 | 44px | 1.1 | 0.02em |
| `headline-lg` | セクションの大見出し・金額や倍率の大きな数字 | 装飾・ディスプレイ | Dela Gothic One | 900 | 30px | 1.3 | 0.04em |
| `headline-md` | カード群の見出し・FAQ や商品ブロックの中見出し | 丸ゴシック | M PLUS Rounded 1c | 700 | 22px | 1.35 | 0.03em |
| `headline-sm` | カード見出し・商品名・リードコピー | ゴシック | Noto Sans JP | 700 | 17px | 1.5 | 0.03em |
| `body-md` | 本文・スペック・吹き出しの文 | ゴシック | Noto Sans JP | 500 | 13px | 1.8 | 0.03em |
| `accent` | 見出しに添える英字ラベル・数字の強調 | 欧文サンセリフ | Montserrat | 700 | 16px | 1.2 | 0.035em |
| `label-button` | ボタン文字・日付ラベル | ゴシック | Noto Sans JP | 700 | 14px | 1.2 | 0.05em |
| `note` | 注釈・飲酒の注意・フッターリンク | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.0em |

- セクション見出しは大きな英字（display か accent）と日本語見出しの 2 段で組む。英字は画面幅いっぱい近くまで大胆に置く
- 見出しは極太で、明朝や細い書体は使わない
- 1 行の中でキーワードだけを大きくし、色も変える。助詞や語尾は小さくする
- 価格や倍率の数字は単位の約 2 倍の大きさにし、数字だけ赤かオレンジにする
- リードや本文は中央揃えで、2〜4 行の短い改行にする。行間は 1.8 前後と広めにとる
- 黄色地には細い文字や淡い色の文字を置かず、700 以上の濃色文字にする
- 注釈は ※ を付けて 10px で入れる。年齢制限や飲酒の注意は読める濃さで載せる
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム、中央揃え。カード群は縦積みか横スライダー
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- 本文ブロックは左右に約 6% の余白をとる。写真や帯はほぼ全幅まで広げる
- 英字見出しは中央揃えにし、カードの中の文は左揃えにする
- 主 CTA は中央に置き、幅は 60〜90% にする
- 商品・缶・ボトル・グラスの切り抜きは、セクションやカードの端からはみ出させて重ねる
- 星形や円形のバッジは、カードや写真の角に少しはみ出させて重ねる
- お客様の声や関連商品は横スライダーにまとめる

## Elevation & Depth

- 影は基本的に使わず、フラットな色面の重なりで奥行きを出す
- 白カードは影なしで、地色との差か 2px 程度の色枠で浮かせる
- 強調したいボタンだけ、ぼかさない濃紺のずらし影（4px 程度）を付けてもよい
- 立体感は、水滴付きの缶やグラスの切り抜き写真に任せる

## Shapes

- **角丸**: 小 4px ／ 中 12px ／ 大 20px。ボタンはピル型。
- **写真の切り抜き**: 商品の缶やボトルは切り抜いて大きく見せ、斜めに置くか枠からはみ出させる。素材写真や人物は円形か角丸 12px の四角にトリミングする
- **セクション境界**: 直線で地色を切り替えるのが基本。要所で雲形の波や下向き三角、流れる帯を挟む
- ボタンはピル型（全角丸）を基本にする
- カードの角丸は 12px、吹き出しの角丸は 20px にし、吹き出しにはしっぽを付ける
- バッジは真円か、花のようなギザギザ円・星形にする
- 泡の装飾は大小の真円をランダムに散らす
- 番号ラベルは小さなピル型か円にして、見出しの左に置く

## Components

- **黄色ピル CTA**（`button-primary`）: レモンイエローの横長ピルボタン。黒の太字で、右端に矢印を付ける。濃紺の帯の上か商品の下に置く
- **紺枠の誘導ボタン**（`button-outline`）: クリーム地に 2px の濃紺の枠を引き、濃紺の文字と右向きの山括弧を添えた詳細ボタン
- **英字＋日本語の 2 段見出し**（`section-heading`）: 極太の大きな英字の下に、日本語見出しを小さく添える。左右に放射状の短い線や紙吹雪を付けてもよい
- **白カード**（`card-white`）: 角丸 12px の白い面に、商品名・説明・写真をまとめる。見出しはテーマ色の文字にし、影は付けない
- **吹き出し**（`speech-bubble`）: 白の角丸吹き出しにしっぽを付け、短い訴求や声を入れる。強調語だけを赤にする
- **ギザギザバッジ**（`burst-badge`）: 赤いギザギザの円や星形に、白文字で番号・新発売・特典数を入れ、写真やカードの角に重ねる
- **流れる英字帯**（`marquee-band`）: セクションの境目に挟む高さ約 45px の帯。濃紺の地に黄色の英字を横に流す
- **FAQ アコーディオン**（`faq-item`）: 白い行の先頭に金茶か赤の Q を置き、右端に＋を付ける。全幅の行を縦に積む
- **濃紺フッター**（`footer-dark`）: 濃紺のベタ地に、白文字でロゴ・SNS・規約リンク・著作権表記・飲酒の注意を並べる

## Do's and Don'ts

**Do**
- 見出しは極太のディスプレイ書体にし、英字を大きく大胆に置く
- 缶・ボトル・グラスは切り抜いて大きく見せ、斜めの配置やはみ出しで躍動感を出す
- 泡・紙吹雪・星などの小さな装飾を散らし、お祭りのにぎやかさを出す
- 主 CTA はレモンイエローのピル型にそろえ、濃紺の帯の上に置いて目立たせる
- キーワードと数字だけを大きく色付きにして、メリハリを付ける
- 年齢制限・飲酒運転禁止などの注意書きは、必ず読める大きさと濃さで載せる

**Don't**
- 淡いパステルだけ、または白一色のミニマルな配色にしない
- 黒基調の暗い配色や、くすんだ色でまとめない
- 見出しに細い明朝や細いゴシックを使わない
- 黄色の地に細い文字や淡い色の文字を置かない
- ぼかした強いドロップシャドウや、凝ったグラデーションを多用しない
- 差し色を 4 色より増やさない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（企画・商品の内容とお得さ、開催日程を一目で伝える）: 濃紺かクリームの地に、極太の大見出しと切り抜いた商品を大きく置く。紙吹雪とバッジを散らし、下に黄色の CTA を置く
2. **コンセプト**（商品の価値や味、飲み方の魅力を一言で伝える）: 英字＋日本語の 2 段見出しを置き、中央揃えの短い改行のリードを添える。グラスや素材の写真を円形に切り抜いて添える
3. **イベント・企画紹介**（企画の趣旨と楽しさ、特典を伝える）: 淡黄の地に白カードを縦に積む。番号の付いたギザギザバッジをカードの角に重ねる
4. **商品ラインナップ**（対象の銘柄や定番商品を見せる）: 白カードに缶の切り抜きと商品名を入れ、縦積みか横スライダーにする。各カードに紺枠の誘導ボタンを付ける
5. **CTA**（購入・参加へ誘導する）: 濃紺の帯に、黄色のピル CTA を中央に大きく置く。上に赤の短い強調コピーを添える
6. **お客様の声**（実際の評価や SNS 投稿で共感と信頼を得る）: SNS 投稿風の白カードか吹き出しを横スライダーで並べ、強調語だけを赤にする
7. **商品紹介・スペック**（商品の特長とスペックを示す）: クリームの地に、切り抜いた商品と仕様の表を並べる。数字は大きく、色を付けて強調する
8. **注意事項**（応募や購入の条件を補足する）: 淡い生成りの地に、※ 付きの注釈を左揃えの小さな文字で並べる
9. **よくある質問**（疑問を解消して離脱を防ぐ）: 生成りの地に、Q マーク付きの白いアコーディオン行を縦に積む
10. **フッター**（ロゴ・SNS・規約・飲酒の注意を載せてページを締める）: 濃紺のベタ地に白文字を中央揃えで置く。注意書きははっきり読める形で入れる

## Imagery

- 商品は正面から撮った缶やボトルの切り抜きにする。氷入りのグラス、しぶき、泡を添えて、冷たさとシズル感を出す
- 人物は笑顔の乾杯シーンや、屋外イベントのにぎわい。明るい日中か夜のライトアップで、彩度は高めにする
- イラストは線の太いフラットな描画で、紺・黄・赤・空色の限られた色だけを使う
- 背景に紙吹雪・星・ひし形・大小の泡の真円を散らし、お祭りの空気を出す
- 手前のレモンや素材はぼかして奥行きを出し、画面の端からはみ出させる
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC では中央に SP 幅（約 375〜420px）の縦長カラムを固定し、左右はクリームか濃紺の地に装飾を散らす方法が手軽
- 全幅で組む場合は、本文の最大幅を約 1000px に制限する。カードや商品は 3 列に並べる
- SP の横スライダー（声・商品）は、PC では 3 列の並びに展開する
- PC のファーストビューは横長のコラージュにし、商品を中央に大きく置く
- PC のフッターではリンクを横 1 行に並べ、注意書きは中央にそろえる

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

- **ID**: `pk-alcohol-pop`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「酒類」・主な雰囲気「ポップ・元気」の設計書 24 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-alcohol-pop/
