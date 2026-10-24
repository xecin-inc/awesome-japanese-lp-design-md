---
version: alpha
name: Pop Energetic Japanese Finance Campaign LP Pattern
description: 白に近い地色の上に、はっきりしたブランド色（緑・青・赤系）の帯と、黄色・ピンク・水色の差し色を重ねた、にぎやかで親しみやすい金融系キャンペーンLPの型。FVは極太ディスプレイ書体の大見出しと特大の金額数字で特典を一目で伝え、セクションごとに地色を替えてテンポよく区切る。主CTAはオレンジ系のピル型ボタンで、特典のまとまりごとに繰り返し置く。陰影は少なめのフラットな塗りが中心で、紙吹雪・キラキラ・ゆるいイラストで楽しさを出す。そのうえで、注釈や条件は小さな文字で省かずに載せ、信頼感も保つ。
colors:
  background: '#FCFDFD'
  primary: '#079C59'
  on-primary: '#FDFFFE'
  secondary: '#0A8BC9'
  background-alt: '#FDF3C3'
  surface: '#F6F7F6'
  tint-1: '#D7E8FB'
  text: '#1D1C1B'
  cta: '#F3591D'
  on-cta: '#FEFBF8'
  accent-1: '#D2444B'
  accent-2: '#21B9D7'
  marker: '#FDF230'
  dark-section: '#2F3234'
  line: '#C5D3E3'
  cta-accessible: '#CF420B'
  secondary-accessible: '#097AB1'
  accent-2-accessible: '#178095'
typography:
  display:
    fontFamily: Dela Gothic One
    fontSize: 52px
    fontWeight: 900
    lineHeight: 1.1
  headline-lg:
    fontFamily: Noto Sans JP
    fontSize: 28px
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.02em
  accent:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: 0.01em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: 0.02em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.04em
  note:
    fontFamily: Noto Sans JP
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 4px
  md: 10px
  lg: 20px
  full: 999px
spacing:
  unit: 8px
  card: 20px
  section: 56px
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
    height: 54px
  button-secondary:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 50px
  section-heading:
    textColor: '{colors.primary}'
    typography: '{typography.headline-lg}'
    height: 96px
  benefit-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.display}'
    rounded: '{rounded.md}'
    height: 480px
  step-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.md}'
    height: 200px
  point-badge:
    backgroundColor: '{colors.accent-2}'
    textColor: '{colors.on-primary}'
    typography: '{typography.accent}'
    rounded: '{rounded.full}'
    height: 48px
  faq-item:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 56px
  notice-accordion:
    backgroundColor: '{colors.tint-1}'
    textColor: '{colors.text}'
    typography: '{typography.note}'
    rounded: '{rounded.sm}'
    height: 52px
  check-box:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 200px
  footer:
    backgroundColor: '{colors.dark-section}'
    typography: '{typography.note}'
    height: 220px
---

# DESIGN.md — 金融・保険のポップで元気なキャンペーンLPの型（Pop Energetic Japanese Finance Campaign LP Pattern）

designmark が、金融・保険・主な雰囲気「ポップ・元気」の LP の設計書 20 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 金融・保険 ／ **雰囲気**: ポップ・元気、情報量多め・訴求型、信頼・誠実、親しみ・手作り感
- **キーワード**: 極太数字・黄色マーカー・ピル型CTA・紙吹雪・セクションごとの地色替え・フラットな塗り
- **地の質感**: グラデーションやぼかし影を控えたフラットなベタ塗りが基本。FVや見出しのまわりに紙吹雪・キラキラ・放射状の光を薄く重ねてお祝い感を出す。背景に方眼や淡い柄を敷くこともある。
- **形**: ボタンはピル型、カードは中くらいの角丸（約10px）。番号やSTEPは円形かピル型のバッジにする。星形バッジや吹き出しなど、遊びのある形を部分的に使う。
- **温度感**: 明るく暖色寄りで熱量が高い。ブランドの寒色（緑・青）で安心感を出し、黄色・オレンジ・ピンクで元気さを足す。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FCFDFD` | ページの基本の地色（ほぼ白） | 29% | 集計の代表色 |
| `primary` | `#079C59` | ブランド色。ヘッダー・見出し帯・濃色セクション・見出し文字に使う | 10% | 集計の代表色 |
| `on-primary` | `#FDFFFE` | ブランド色の面に乗せる白文字 | 1% | 集計の代表色 |
| `secondary` | `#0A8BC9` | サブ見出し・ポイント枠・手順セクションの地に使う明るい青 | 5% | 集計の代表色 |
| `background-alt` | `#FDF3C3` | 特長・手順など、セクションを切り替えるときのクリーム地 | 9% | 集計の代表色 |
| `surface` | `#F6F7F6` | FAQ・グラフ・タイルの淡いグレー面 | 6% | 集計の代表色 |
| `tint-1` | `#D7E8FB` | カード内の淡い水色パネル・ラベル円 | 4% | 集計の代表色 |
| `text` | `#1D1C1B` | 見出し・本文・輪郭線の黒 | 3% | 集計の代表色 |
| `cta` | `#F3591D` | 主CTAボタン（申込・見積）のオレンジ | 2% | 集計の代表色 |
| `on-cta` | `#FEFBF8` | CTAボタン上の白文字 | 0% | 集計の代表色 |
| `accent-1` | `#D2444B` | サブボタン・数字強調のピンク寄りの赤 | 2% | 集計の代表色 |
| `accent-2` | `#21B9D7` | キャンペーン帯・ラベルのターコイズ | 2% | 集計の代表色 |
| `marker` | `#FDF230` | 金額や重要語の下に敷く黄色マーカー・矢印 | 0% | 集計の代表色 |
| `dark-section` | `#2F3234` | フッター・最上部帯の濃いグレー | 2% | 集計の代表色 |
| `line` | `#C5D3E3` | FAQや表の区切り線 | 1% | 集計の代表色 |
| `cta-accessible` | `#CF420B` | AA を満たす補正値（計算） |  | 計算 |
| `secondary-accessible` | `#097AB1` | AA を満たす補正値（計算） |  | 計算 |
| `accent-2-accessible` | `#178095` | AA を満たす補正値（計算） |  | 計算 |

- 地はほぼ白を基本にし、クリーム・淡グレー・ブランド色の帯をセクションごとに交互に入れて区切る
- ブランド色は帯・見出し・濃色セクションに使い、その上の文字は白だけにする
- 主CTAはオレンジに固定し、ほかの要素にオレンジの広い面を使わない
- 金額・%・ポイント数は特大にして、下に黄色マーカーを敷くか赤系の太字で強調する
- ピンクの赤はサブボタン・数字・小さなラベルに限り、面の色として広く使わない
- 注釈・注意事項は白地に濃い文字だけで、装飾色を使わない
- フッターだけ濃いグレーにしてページを締める
- `button-primary` は文字 `#FEFBF8` × 背景 `#F3591D` のコントラスト比が 3.25:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#CF420B`、4.59:1）を使う。
- `button-secondary` は文字 `#FEFBF8` × 背景 `#0A8BC9` のコントラスト比が 3.67:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `secondary-accessible`（`#097AB1`、4.6:1）を使う。
- `point-badge` は文字 `#FDFFFE` × 背景 `#21B9D7` のコントラスト比が 2.33:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-2-accessible`（`#178095`、4.59:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FVのメインタイトル・特典金額（白フチや縁取りを付けてもよい） | 装飾・ディスプレイ | Dela Gothic One | 900 | 52px | 1.1 | 0.0em |
| `headline-lg` | セクションの大見出し（中央揃え・2行以内） | ゴシック | Noto Sans JP | 900 | 28px | 1.3 | 0.02em |
| `headline-md` | カード・吹き出しパネル・特典の中見出し | ゴシック | Noto Sans JP | 700 | 21px | 1.4 | 0.02em |
| `headline-sm` | 英字見出しの下に付ける日本語の副題・図のラベル | ゴシック | Noto Sans JP | 700 | 16px | 1.4 | 0.02em |
| `accent` | STEP・POINT・FAQなどの英字ラベルや英数字の強調 | 欧文サンセリフ | Montserrat | 800 | 28px | 1.1 | 0.01em |
| `body-md` | 説明文・本文 | ゴシック | Noto Sans JP | 500 | 14px | 1.8 | 0.02em |
| `label-button` | CTA・タブボタンの文字 | ゴシック | Noto Sans JP | 700 | 15px | 1.3 | 0.04em |
| `note` | ※で始まる注釈・審査や条件の文言 | ゴシック | Noto Sans JP | 400 | 11px | 1.6 | 0.0em |

- 金額は数字だけを特大にし、「円」や後ろの語は数字の6割前後に小さくする
- 見出しは中央揃え、カード内の本文は左揃えにする
- 大見出しは極太ゴシックかディスプレイ書体にし、細い明朝は使わない
- セクション見出しは英字ラベル（Montserrat）＋日本語の見出し＋短い線の三段組にしてもよい
- 重要語には黄色マーカーか太字の色文字を使い、1文の中で強調は1〜2か所までにする
- 注釈は本文より明らかに小さい11px前後にし、関係する箇所の直下に置く
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 56px、基本単位 8px、カード内 20px（375px 幅換算）
- セクションごとに地の色を切り替えて区切る
- 特典のまとまりごとにCTAを1つ置く
- キャンペーンの各段は「小ラベル→見出し→特典カード→注釈」の順で繰り返す
- 手順は番号付きのカードを縦に並べ、間を矢印か点線でつなぐ
- 特典の足し算は＋と＝の記号でカードをつなぎ、合計額を最後に大きく見せる
- カードの幅は揃えて中央に寄せる

## Elevation & Depth

- 基本はフラットにし、面の重なりは色の差で表す
- 白カードには付けても薄い影まで（0 2px 8px rgba(0,0,0,.08)程度）
- 目立たせたいカードは、ぼかしのない右下へのずらし影（4〜6px）か太めの枠線にする
- CTAボタンだけは下に濃い色の影を付け、押せる立体感を出してよい
- FVの数字は白フチとずらし影を重ねて、ステッカーのように立体的に見せる

## Shapes

- **角丸**: 小 4px ／ 中 10px ／ 大 20px。ボタンはピル型。
- **写真の切り抜き**: イラストや人物は切り抜きで配置するか、円・角丸の枠に入れる。ロゴは角丸の白枠に入れる。
- **セクション境界**: 基本は直線で地色を切り替える。要所では斜めの線や、山形・雲形の上辺を差し込んで動きを出す。
- CTAボタンはすべてピル型にし、右端に矢印か丸の矢印アイコンを付ける
- カードは角丸10px前後。強調カードは2px程度の枠線を付ける
- STEPや番号は円形かピル型のバッジにする
- 特典率・お得感のバッジにはギザギザの星形を使ってよい
- 条件ラベルは下に小さな三角が付いた吹き出し型のピルにする

## Components

- **主CTAボタン**（`button-primary`）: オレンジのピル型ボタン。白の太字で、右端に白丸の矢印アイコンを付ける。下に濃いめの影を付けて押せる感じを出す。上に小さな吹き出しで一言添えてもよい。
- **サブ導線ボタン**（`button-secondary`）: 資料請求・アプリDL・店舗検索などの補助の導線に使うピル型ボタン。主CTAと縦に並べて2段にする。
- **セクション見出し**（`section-heading`）: 上に英字ラベル、中央に極太の日本語見出し、下に短い線か黄色の下線を置く三段組。周りに紙吹雪やキラキラを散らす。
- **特典カード**（`benefit-card`）: 白カードの上部に「特典1」などのリボンかブランド色の見出し帯を付ける。中央に特大の金額と黄色マーカー、下に条件と注釈を小さく並べる。
- **STEPカード**（`step-card`）: 白の角丸カードの左上にSTEP番号のピルバッジを付け、見出し・短い説明・イラストを入れる。カードの間に下向きの三角矢印を置く。
- **ポイント番号バッジ**（`point-badge`）: 特長・選ばれる理由の番号を入れる円形バッジ。英数字は太いMontserratで入れる。
- **FAQアコーディオン**（`faq-item`）: 白か淡いグレーの角丸バーに、色付きの丸Qアイコン・太字の質問・右端の下向き矢印を並べる。開くと回答を左揃えで出し、細い線で区切る。
- **注意事項アコーディオン**（`notice-accordion`）: 淡い水色の帯に太字の項目名を置き、右端に＋を付ける。開いた中は白地に小さな注釈文字だけを並べる。
- **条件チェックリスト**（`check-box`）: クリーム地の角丸ボックスに、チェックマーク付きの参加条件を並べる。上にピル型の「Check」ラベルを付ける。
- **フッター**（`footer`）: 濃いグレーの地に、白文字で規約リンク・会社情報・ページトップへのボタンを置く。

## Do's and Don'ts

**Do**
- 金額やポイント数は画面幅の半分以上の特大数字にし、黄色マーカーを敷く
- 主CTAはオレンジのピル型に統一し、特典のまとまりごとに繰り返し置く
- セクションごとに地色を替えて、区切りとテンポをはっきりさせる
- 条件・注釈は省かず、小さな文字で関係する箇所のすぐ下にまとめる
- 見出しのまわりに紙吹雪・キラキラ・ゆるいイラストを添えて、楽しさを出す
- ブランド色の面の上は白文字だけにして、読みやすさを保つ

**Don't**
- 細い明朝体や細字で見出しや数字を組まない
- CTAを角張った四角いボタンにしない
- 暗い色や重いトーンの写真を使わない
- ぼかしの強いドロップシャドウや強いグラデーションを多用しない
- オレンジや赤を装飾色として広い面に使わない
- 注釈を本文と同じ大きさにしたり、ページの末尾だけにまとめて隠したりしない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（キャンペーンの特典と金額を一目で伝える）: 明るい地にブランド色の帯を組み合わせ、極太ディスプレイ書体のタイトルと特大の金額数字を中央に置く。紙吹雪・放射状の光・キャラクターで華やかにし、下に主CTAを置く。
2. **CTA帯**（早い段階で申込へ誘導する）: 地色を切り替えた帯に、短いリードと主CTA・サブCTAの2段ボタンを中央に縦に並べる。
3. **キャンペーン内容**（特典の内訳と合計額、参加条件を示す）: 特典カードを＋と＝でつなぎ、合計額を最後に特大で見せる。条件チェックリストと注釈をカードの下に置く。
4. **サービス紹介**（サービスの概要と立ち位置を伝える）: 白地に英字ラベル付きの見出しを置き、短い説明文とフラットなイラスト、またはアプリ画面のモックを並べる。
5. **特長**（使う利点を3つにまとめて伝える）: クリーム地に、番号バッジ付きの白カードを3枚縦に並べる。各カードは見出し・イラスト・短い説明で構成する。
6. **制度の解説**（制度や仕組みの基礎知識をやさしく説明する）: キャラクターの吹き出しで会話のように進め、要点は水色のポイント枠や平面的な図解でまとめる。
7. **選ばれる理由**（金利・手数料・使いやすさなどの優位点を示す）: ブランド色の帯の見出しの下に、3つの理由をアイコンと太字の数字付きで並べる。数字は大きく、単位は小さくする。
8. **申込の流れ**（申込の手軽さを示して不安を減らす）: STEPカードを縦に並べ、間を三角矢印でつなぐ。各カードにSTEPのピルバッジと簡単なイラストを付ける。
9. **よくある質問**（疑問や不安を解消する）: 淡いグレー地にFAQアコーディオンを1カラムで並べる。Qは色付きの丸アイコンにする。
10. **CTA**（最後にもう一度申込を促す）: ブランド色かクリームの地に、特典の要約と特大の金額、主CTA・サブCTAを置く。その下に注意事項のアコーディオンを並べる。
11. **フッター**（会社情報・規約リンク・ページトップへの導線）: 濃いグレーの地に白文字で、小さめのリンクと会社情報を中央揃えで並べる。

## Imagery

- 人物やキャラクターは線の少ないフラットなイラストか、丸みのあるゆるキャラ調にし、表情とポーズを大きくする
- 写真は明るい室内の自然光で、笑顔の若い人物がスマホを持つような軽い構図にする
- カードやスマホ画面は、平面的なモックで見せる
- 黄色の4点キラキラ・紙吹雪・コイン・集中線で盛り上げる
- アイコンは黒い線画に、ブランド色や水色の塗りを部分的に入れる
- グラフや図解は平面的に描き、立体表現はしない
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PCでもSPのレイアウトを幅440〜700px程度の中央カラムに固定し、左右はブランド色や淡い柄で埋める
- 左右の余白には、大きなキャラクターやステッカー風の装飾、固定の申込ボタンを置いてもよい
- 2段のCTAはPCで横並びにする
- FVはPCで横に広げ、人物やイラストを左、タイトルと金額を右に置いてもよい
- FAQはPCでも1カラムのアコーディオンのままにする

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

- **ID**: `pk-finance-pop`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「金融・保険」・主な雰囲気「ポップ・元気」の設計書 20 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-finance-pop/
