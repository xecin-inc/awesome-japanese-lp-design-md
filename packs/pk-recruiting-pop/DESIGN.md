---
version: alpha
name: Pop & Energetic Japanese Recruitment LP Pattern
description: 白地を基本に、赤系のブランド色と黄色・青を大胆にベタ塗りする採用サイトの型です。太い欧文見出しと日本語の小見出しを組み合わせ、ピル型CTA、黒線の白カード、笑顔の社員写真や線画イラストで、明るく親しみやすい雰囲気に仕上げます。影は使わず、色面の重なりと枠線で階層を表します。
colors:
  primary: '#DD1518'
  background: '#FCFCFB'
  background-alt: '#F3F2F0'
  surface: '#FCFCFB'
  cta: '#F04618'
  on-cta: '#FCFCFB'
  secondary: '#1067BF'
  accent-1: '#FAEE42'
  accent-3: '#4DB3DF'
  tint-1: '#F9F9BF'
  text: '#292A2B'
  text-muted: '#959799'
  line: '#222323'
  dark-section: '#0B0B0B'
  cta-accessible: '#D9390E'
typography:
  display:
    fontFamily: Dela Gothic One
    fontSize: 44px
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Noto Sans JP
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Zen Kaku Gothic New
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.03em
  accent:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.04em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.9
    letterSpacing: 0.04em
  note:
    fontFamily: Noto Sans JP
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.03em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
rounded:
  sm: 6px
  md: 12px
  lg: 24px
  full: 999px
spacing:
  unit: 8px
  card: 20px
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
    height: 48px
  button-secondary:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 44px
  section-heading:
    textColor: '{colors.primary}'
    typography: '{typography.headline-lg}'
    height: 70px
  marker-label:
    backgroundColor: '{colors.accent-1}'
    textColor: '{colors.text}'
    typography: '{typography.headline-md}'
    rounded: '{rounded.sm}'
    height: 28px
  news-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 230px
  interview-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    height: 360px
  speech-bubble:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 60px
  stat-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.primary}'
    typography: '{typography.display}'
    rounded: '{rounded.lg}'
    height: 240px
  faq-item:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.lg}'
    height: 80px
---

# DESIGN.md — 求人・採用のポップで元気なLPの型（Pop & Energetic Japanese Recruitment LP Pattern）

designmark が、求人・採用・主な雰囲気「ポップ・元気」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 求人・採用 ／ **雰囲気**: ポップ・元気、親しみ・手作り感、力強い・インパクト
- **キーワード**: 高彩度のベタ塗り・欧文の極太見出し・ピル型ボタン・黒線の白カード・笑顔の社員写真・線画イラスト
- **地の質感**: グラデーションと影をほぼ使わないフラットな単色面。白や生成りの地に、ドット・方眼・小さな図形を薄く敷いて、にぎやかさと紙のような手触りを出す
- **形**: 大きな角丸パネル、ピル型ボタン、不定形のブロブや円で切り抜いた人物写真、吹き出し。セクションの境界は色面の切り替えや曲線で表す
- **温度感**: 暖色寄りで明るく快活。赤と黄で熱量を上げ、青と墨色で締める

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#DD1518` | ブランドの赤。FVの色面・見出しの欧文・帯に使う | 9% | 集計の代表色 |
| `background` | `#FCFCFB` | ページの白地 | 30% | 集計の代表色 |
| `background-alt` | `#F3F2F0` | セクションを切り替える淡いグレーの地 | 12% | 集計の代表色 |
| `surface` | `#FCFCFB` | 白いカード・テキストパネル | 8% | 集計の代表色 |
| `cta` | `#F04618` | エントリーボタンの朱色 | 1% | 集計の代表色 |
| `on-cta` | `#FCFCFB` | ボタン上の白い文字 | 0% | 集計の代表色 |
| `secondary` | `#1067BF` | サブの青。ラベル・パネル・サブボタンに使う | 5% | 集計の代表色 |
| `accent-1` | `#FAEE42` | 黄色のハイライト・マーカー・装飾の円 | 2% | 集計の代表色 |
| `accent-3` | `#4DB3DF` | ブロブやイラストに使う水色 | 1% | 集計の代表色 |
| `tint-1` | `#F9F9BF` | 淡い黄色のドット柄・写真の背景 | 3% | 集計の代表色 |
| `text` | `#292A2B` | 見出しと本文の濃い墨色 | 3% | 集計の代表色 |
| `text-muted` | `#959799` | 日付・カナ・補足の灰色 | 0% | 集計の代表色 |
| `line` | `#222323` | カード・ボタン・区切りの黒い線 | 0% | 集計の代表色 |
| `dark-section` | `#0B0B0B` | 最終CTA帯・フッターの黒 | 5% | 集計の代表色 |
| `cta-accessible` | `#D9390E` | AA を満たす補正値（計算） |  | 計算 |

- 地は白を基本にし、淡いグレーや淡い黄色の面でセクションを交互に切り替える
- ブランドの赤はFV・見出しの欧文・帯など広い面に使い、ページの顔にする
- エントリーなどの主CTAは朱色のベタに白文字でそろえ、ページ内で色を変えない
- 黄色はマーカー・バッジ・装飾の円など小さな面に限り、視線を集める差し色にする
- 青と水色はサブボタン・ラベル・ブロブに使い、暖色の熱さを締める
- 黒は最終CTA帯・フッター・カードの枠線だけに使う
- グラデーションは使わず、すべてベタ塗りで仕上げる
- `button-primary` は文字 `#FCFCFB` × 背景 `#F04618` のコントラスト比が 3.66:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#D9390E`、4.5:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | FVのキャッチコピー | 装飾・ディスプレイ | Dela Gothic One | 900 | 44px | 1.2 | 0.02em |
| `headline-lg` | セクション見出し（和文の太字） | ゴシック | Noto Sans JP | 700 | 28px | 1.35 | 0.03em |
| `headline-md` | 節見出し・POINTなどの小見出し | ゴシック | Zen Kaku Gothic New | 700 | 20px | 1.4 | 0.03em |
| `headline-sm` | カード・記事タイトル、帯の文字 | ゴシック | Noto Sans JP | 700 | 16px | 1.5 | 0.03em |
| `accent` | 見出しに添える英字ラベル・背景の大きな欧文 | 欧文サンセリフ | Montserrat | 700 | 18px | 1.2 | 0.04em |
| `body-md` | 本文・説明文 | ゴシック | Noto Sans JP | 500 | 13px | 1.9 | 0.04em |
| `note` | 日付・入社年・キャプション | ゴシック | Noto Sans JP | 400 | 11px | 1.5 | 0.03em |
| `label-button` | ボタン・ラベル帯の文字 | ゴシック | Noto Sans JP | 700 | 13px | 1.2 | 0.05em |

- 見出しは「大きな英字ラベル＋日本語の太字見出し」の2段組みを基本にする
- 英字は太いジオメトリック体の大文字にし、ブランド色か黄色で目立たせる
- 和文はすべて太めの角ゴシックにし、細字や明朝は混ぜない
- 背景に同じ意味の英単語を半透明で大きく敷き、奥行きを出す
- 数字は本文の2〜3倍の大きさにし、単位は小さく添える
- 本文は13px前後、行間1.9前後でゆったり組む
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。カードは縦に積み、社員紹介などは 2 列のグリッドにする
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 72px、基本単位 8px、カード内 20px（375px 幅換算）
- 余白は8pxの倍数で取る
- 各セクションは「英字ラベル → 和文見出し → リード文 → カード／ボタン」の順に縦に積む
- セクションごとに地の色を切り替え、区切り線は使わない
- 写真やイラストはカードや色面から少しはみ出させて、動きを出す
- リンクのリストは左に文字、右に丸い矢印を置き、等間隔で並べる

## Elevation & Depth

- ぼかしたドロップシャドウは基本的に使わず、フラットに仕上げる
- 階層は色面の重なりと黒1〜2pxの枠線で表す
- 強調したいカードやCTAだけ、右下に黒いベタ影をずらして付ける
- 白カードを色面にはみ出させて重ね、段差を作る

## Shapes

- **角丸**: 小 6px ／ 中 12px ／ 大 24px。ボタンはピル型。
- **写真の切り抜き**: 社員写真は円か不定形のブロブで切り抜くか、切り抜いて色地に載せる。活動写真は角丸16〜20pxの長方形
- **セクション境界**: 区切り線は使わず、色面の切り替え、大きな角丸パネル、ゆるい曲線や波形でつなぐ
- カードとパネルは角丸12〜24pxにし、直角にはしない
- ボタンは完全なピル型で、右端に丸い矢印を置く
- 強調バッジは円形かギザギザの円にする
- 背景に円・ドット・三角などの小さな図形を散らす
- 吹き出しは白い塗りに黒線で、少し傾けてもよい

## Components

- **エントリーボタン**（`button-primary`）: 朱色のピル型に白い太字。右端に白い丸の矢印を付ける主CTA
- **サブボタン**（`button-secondary`）: 白地に黒枠のピル型。中央に墨色の文字、右に黄色の丸矢印を置く。一覧・募集要項への導線
- **英字＋和文の見出し**（`section-heading`）: 赤い大きな英字の下に、和文の太字見出しを添える2段見出し
- **黄色マーカーラベル**（`marker-label`）: 和文の小見出しやキーワードの下に黄色の帯を敷いて強調する
- **お知らせカード**（`news-card`）: 黒枠の角丸白カード。灰色の日付、色付きのタグ、1行の本文を並べる
- **社員紹介カード**（`interview-card`）: 角丸の写真の上に入社年のバッジ、下に職種ラベル、一言と名前を入れる白カード
- **吹き出し**（`speech-bubble`）: 白地に黒線の吹き出し。社員の一言や働く魅力を短く入れる
- **数字カード**（`stat-card`）: 白い角丸カードに見出し、赤の特大数字、小さな単位、説明文を縦に並べる
- **FAQ項目**（`faq-item`）: 淡いグレー地の角丸カード。左に大きなQ、右に＋を置くアコーディオン

## Do's and Don'ts

**Do**
- 見出しには必ず英字ラベルを添え、和文見出しとセットで使う
- 赤・黄・青をベタで大胆に使い、1色に偏らせず散らす
- 社員写真は明るい場所での笑顔のバストアップにする
- 円やブロブ、ドットなどの図形をFVからフッターまで繰り返す
- 数字やメリットは短い言葉で言い切る
- エントリーへの導線をFV・中盤・最終の帯に繰り返し置く

**Don't**
- グラデーションのボタンや濃いドロップシャドウを使わない
- カードやボタンを角の立った四角形にしない
- 明朝体や細い書体を見出しに混ぜない
- くすんだ色や彩度の低いパステルを主役にしない
- 暗い背景のセクションを続けない（黒は最終CTAとフッターだけ）
- 主CTAの色をセクションごとに変えない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（会社の明るさと働く楽しさを一目で伝え、エントリーへ誘う）: 赤や黄のベタ面に極太のキャッチを大きく置き、切り抜いた笑顔の社員と図形を散らす。下にピル型のエントリーボタンを置く
2. **メッセージ**（会社の想いと働く意義を短い言葉で伝える）: 白地に英字ラベルと和文見出し、ゆったりした本文。背景に半透明の大きな英字を敷く
3. **お知らせ**（採用の最新情報を見せる）: 黒枠の角丸白カードに日付・タグ・本文を並べ、一覧へのサブボタンを置く
4. **会社紹介**（事業の概要と数字で見る会社の姿を伝える）: 淡いグレー地に数字カードを縦に積み、特大の数字と小さな単位で見せる
5. **仕事紹介**（部署や分野ごとの仕事内容を伝える）: 角丸写真付きのカードを縦に並べ、右下に丸矢印を置いて詳細へ誘導する
6. **社員インタビュー**（働く人のリアルな姿を見せる）: ブランド色の大きな角丸パネルの上に、ブロブで切り抜いた写真・吹き出し・入社年バッジ付きのカードを並べる
7. **採用情報**（募集要項や職種一覧へ誘導する）: 白いピル型のリンクを縦に並べ、右端に丸矢印を付ける
8. **よくある質問**（応募前の不安を解消する）: 淡いグレーの角丸カードにQと＋を置くアコーディオンを縦に並べる
9. **CTA**（エントリーへの最後のひと押し）: 黒か赤の全幅の帯に白い太字のコピーと大きな朱色のピル型ボタンを置く
10. **フッター**（ロゴ・SNS・リンクを載せて締めくくる）: 黒地に白文字でロゴ・ナビ・SNSアイコンを並べる

## Imagery

- 社員写真は明るい自然光の職場で、笑顔の上半身を正面から撮る
- 人物は切り抜いて、赤・黄・水色など高彩度の単色地やブロブの上に載せる
- ラフな線画やフラットなイラストを余白に散らし、手作り感を出す
- 背景に円・ドット・三角・紙吹雪のような小さな図形を薄く散らす
- 写真に手描き風の丸や矢印の線画を重ね、にぎやかさを足す
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PCでは本文を最大幅1000〜1100pxで中央に置き、左右の余白に図形の装飾を多めに置く
- PCではヘッダーにナビとエントリーボタンを常に表示する
- 社員カード・仕事カードはPCで3列、SPで1〜2列にする
- お知らせはPCで1行の横長バーにして縦に並べる
- SPでは画面下にエントリーボタンを固定する

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

- **ID**: `pk-recruiting-pop`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「求人・採用」・主な雰囲気「ポップ・元気」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-recruiting-pop/
