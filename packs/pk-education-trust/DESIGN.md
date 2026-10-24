---
version: alpha
name: Trustworthy Navy Education School LP Pattern
description: 白地と淡いブルーグレー地を交互に敷き、濃紺を見出し・帯・料金パネルの軸にした誠実なスクール向けLPの型。CTAはえんじ系の暖色ピル型ボタンで目立たせ、金・オレンジの大きな数字で実績を示し、強調語は黄色マーカーで示す。全体はフラットで影は控えめ。情報量は多いが、白カードと罫線で整理して読みやすく見せる。
colors:
  primary: '#173C87'
  background: '#FDFDFD'
  background-alt: '#E9EFF4'
  surface: '#F8F8F7'
  tint-1: '#DAE2EE'
  text: '#252525'
  text-body: '#343435'
  text-muted: '#767C85'
  cta: '#C82923'
  on-cta: '#FDFEFE'
  secondary: '#2168B9'
  dark-section: '#1F4681'
  accent-1: '#F19E0E'
  accent-2: '#1D97C0'
  line: '#DEE2E4'
  marker: '#F9DF40'
  accent-1-accessible: '#A16A09'
typography:
  display:
    fontFamily: Noto Sans JP
    fontSize: 30px
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Noto Sans JP
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.04em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.02em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.02em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
  accent:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0.05em
rounded:
  sm: 2px
  md: 6px
  lg: 12px
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
    height: 48px
  button-outline:
    backgroundColor: '{colors.background}'
    textColor: '{colors.primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 44px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 58px
  heading-bar:
    backgroundColor: '{colors.primary}'
    typography: '{typography.headline-md}'
    height: 40px
  feature-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 220px
  stat-badge:
    backgroundColor: '{colors.background}'
    textColor: '{colors.accent-1}'
    typography: '{typography.accent}'
    height: 90px
  voice-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 360px
  compare-table:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    height: 230px
  faq-item:
    backgroundColor: '{colors.background-alt}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.sm}'
    height: 52px
  cta-band:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-cta}'
    typography: '{typography.body-md}'
    height: 200px
---

# DESIGN.md — スクール・資格の信頼・誠実なLPの型（Trustworthy Navy Education School LP Pattern）

designmark が、教育・スクール・資格・主な雰囲気「信頼・誠実」の LP の設計書 26 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 教育・スクール・資格 ／ **雰囲気**: 信頼・誠実、情報量多め・訴求型、清潔・爽やか
- **キーワード**: 濃紺・白カード・実績・データ訴求・黄色マーカー・暖色CTA・淡いブルーグレー地
- **地の質感**: フラットな単色面が基本。濃紺の帯にだけ薄い斜線やグラデーションの模様を敷き、淡い地の上に白カードを重ねて段差をつける。影はごく弱い。
- **形**: カードやボックスは角が小さい（2〜6px）か直角に近い。ボタンはピル型。人物写真は円形に切り抜く。番号やバッジは円形にする。
- **温度感**: やや寒色寄り。紺と青で落ち着きと誠実さを出し、えんじのCTAと金・黄色のアクセントで少しだけ温かさと行動のきっかけを足す。

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#173C87` | ブランドの濃紺。見出し帯・料金パネル・アイコン線 | 9% | 集計の代表色 |
| `background` | `#FDFDFD` | 基本の白地 | 34% | 集計の代表色 |
| `background-alt` | `#E9EFF4` | セクションを交互に切り替える淡いブルーグレー地 | 13% | 集計の代表色 |
| `surface` | `#F8F8F7` | 淡い地や青帯の上に置く白に近いカード面 | 5% | 集計の代表色 |
| `tint-1` | `#DAE2EE` | メッセージ部・グラフのバーに使う淡い青 | 4% | 集計の代表色 |
| `text` | `#252525` | 見出しの濃い文字 | 2% | 集計の代表色 |
| `text-body` | `#343435` | 本文の濃いグレー | 2% | 集計の代表色 |
| `text-muted` | `#767C85` | 注釈・出典・期間表記 | 0% | 集計の代表色 |
| `cta` | `#C82923` | 申込・無料相談の主ボタン（えんじ） | 1% | 集計の代表色 |
| `on-cta` | `#FDFEFE` | ボタン上・濃い地の上の白文字 | 0% | 集計の代表色 |
| `secondary` | `#2168B9` | サブボタン・帯の中間の青 | 3% | 集計の代表色 |
| `dark-section` | `#1F4681` | CTA帯・フッター上の濃紺の帯 | 4% | 集計の代表色 |
| `accent-1` | `#F19E0E` | 金・オレンジの強調数字・メダル・リボン | 1% | 集計の代表色 |
| `accent-2` | `#1D97C0` | 英字ラベル・図解に使う空色 | 1% | 集計の代表色 |
| `line` | `#DEE2E4` | 表の区切り・カード枠・見出しの下線 | 1% | 集計の代表色 |
| `marker` | `#F9DF40` | 強調語の黄色マーカー | 0% | 集計の代表色 |
| `accent-1-accessible` | `#A16A09` | AA を満たす補正値（計算） |  | 計算 |

- 見出し・見出し帯・料金パネル・フッターは濃紺で揃え、ページの軸にする
- 地は白と淡いブルーグレーをセクションごとに交互に敷き、直線で切り替える
- 主CTAはえんじの1色に固定し、他の部品には使わない。LINE導線を置く場合だけ緑を例外にする
- 金・オレンジは実績数字・メダル・リボンだけに使い、大きな面は塗らない
- 強調語は白地では濃紺や赤の文字、濃い地では黄色の文字かマーカーで示す
- 英字の小ラベルや図解の補助色には空色を使い、濃紺とのグラデーションは帯の中だけにする
- 注釈はグレーの小さな文字にし、本文の色と分ける
- `stat-badge` は文字 `#F19E0E` × 背景 `#FDFDFD` のコントラスト比が 2.14:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `accent-1-accessible`（`#A16A09`、4.51:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューのキャッチ | ゴシック | Noto Sans JP | 900 | 30px | 1.3 | 0.02em |
| `headline-lg` | セクションの大見出し | ゴシック | Noto Sans JP | 700 | 22px | 1.4 | 0.04em |
| `headline-md` | カード見出し・番号付き小見出し | ゴシック | Noto Sans JP | 700 | 18px | 1.5 | 0.03em |
| `headline-sm` | リード・FAQの質問・小見出し | ゴシック | Noto Sans JP | 700 | 15px | 1.5 | 0.02em |
| `body-md` | 本文・カードの説明 | ゴシック | Noto Sans JP | 400 | 14px | 1.8 | 0.02em |
| `note` | 注釈・出典・補足 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.0em |
| `accent` | POINT番号・実績数字・英字ラベル | 欧文サンセリフ | Montserrat | 700 | 24px | 1.2 | 0.02em |
| `label-button` | CTAボタンの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.35 | 0.05em |

- 和文はNoto Sans JP系のゴシックで統一する。格調を出したい場合だけ大見出しを明朝の太字・濃紺にする
- セクション見出しは中央揃えにし、上に空色の小さな英字ラベルを置いて2段で組む
- 本文は14px前後・行間1.8で左揃えにする
- 数字は大きく太く、%や単位は小さく添える
- ボタンの補足ラベルは「＼ ／」で挟んで主ラベルの上に小さく置く
- 見出しのキーワードは濃紺や青で一段大きくし、黄色マーカーで強調する
- 注釈は10px前後のグレーで、出典や期間を必ず添える
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。アイコン付きの特長や実績だけ 2〜3 列グリッド
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 64px、基本単位 8px、カード内 16px（375px 幅換算）
- 本文ブロックは左右に 16〜20px 前後の余白をとり、ほぼ全幅に置く
- 見出しの下は 24〜32px 空けてから本文やカードを置く
- セクション見出しは中央揃え、説明文は左揃えにする
- カード同士の縦の間隔は 16px 前後にする
- CTAブロックは 2〜3 セクションごとに同じデザインで繰り返す
- 横に長い比較表は横スクロールにし、スクロールできる旨の注記を添える

## Elevation & Depth

- 基本はフラットで、影はほとんど使わない
- 白カードは 1px の薄い罫線か、ごく薄い影（0 2px 8px rgba(0,0,0,.08)）で地から分ける
- 料金プランのカードだけ淡く広い影をつけ、おすすめ側は太枠で示す
- 主CTAボタンには小さな影か、下側にわずかな濃色の厚みをつける
- 画面下部の固定CTAバーだけを浮かせて見せる

## Shapes

- **角丸**: 小 2px ／ 中 6px ／ 大 12px。ボタンはピル型。
- **写真の切り抜き**: 写真は四角か角丸小。講師や受講生の人物写真は円形に切り抜く。動画は16:9の角なし
- **セクション境界**: 基本は直線で地の色を切り替える。見出しの下や帯の区切りに小さな下向き三角を置く程度にとどめる
- CTAとサブボタンはピル型にし、右端に丸い矢印アイコンをつける
- カードやボックスの角は 2〜6px の小さな角丸に抑える
- 大きなパネルや料金枠は 8〜12px の角丸にする
- ステップ番号・事実バッジ・Qアイコンは円形にする
- 図解は円と菱形の単純な図形で組む

## Components

- **主CTAボタン**（`button-primary`）: えんじのピル型ボタンに白い太字を置き、右端に白丸の矢印を添える。上に「＼無料／」などの小ラベルを置く
- **サブボタン**（`button-outline`）: 白地に濃紺の細い枠と濃紺文字のピル型。資料請求や詳細ページへの導線に使う
- **英字ラベル付き見出し**（`section-heading`）: 空色の小さな英字ラベルの下に、濃い色の太字見出しを中央に置き、下に短い細線を引く
- **濃紺の見出し帯**（`heading-bar`）: 幅いっぱいの濃紺の帯に白抜きの中央見出し。下に淡い地の本文ブロックを続ける
- **番号付き特長カード**（`feature-card`）: 淡いブルーグレー地の上の白カード。左上に円形のPOINT番号、太字見出し、本文、写真か図版を置く
- **実績数字ブロック**（`stat-badge`）: 金・オレンジの大きな欧文数字に小さな単位を添え、上に短いラベル、下に出典注釈を置く
- **受講生の声カード**（`voice-card`）: 白カードに円形の顔写真、属性、太字の一言見出し、本文を並べる。淡い地の上に縦に積む
- **比較表**（`compare-table`）: 自社列だけを濃紺のヘッダーと太枠で強調し、他は淡いグレー地に◎○△で比べる。行の区切りは薄い罫線
- **FAQアコーディオン**（`faq-item`）: 淡い地の帯に濃紺の四角に白いQ、太字の質問、右端に＋を置く。開くと白い面に回答を表示する
- **CTA帯**（`cta-band`）: 濃紺の全幅帯に、黄色の強調リード、白い説明文、主CTAとサブボタンを縦に積む。ページ内で繰り返す

## Do's and Don'ts

**Do**
- 見出し・帯・料金パネルは濃紺で揃え、ページ全体の基調色を1つに保つ
- 主CTAは同じ色・形・文言のパターンで2〜3セクションごとに繰り返す
- 実績や合格者数などは大きな金の数字で示し、必ず注釈で出典や期間を添える
- 白地と淡いブルーグレー地を交互に使い、セクションの切れ目をはっきりさせる
- 講師や受講生は自然光の明るい教室で撮った落ち着いた写真を使う
- 強調は黄色マーカーと濃紺・赤文字の2種類に限定する

**Don't**
- ビビッドな原色を多く使ったり、ポップなイラストを主役にしたりしない
- CTAの色を何色にも増やさない
- 強い影や立体的な装飾でカードを浮かせない
- 丸ゴシックや手書き書体を見出しに使わない
- 写真の上に、オーバーレイなしで文字を直接のせない
- 金・オレンジで広い面を塗らない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（対象者と、未経験から目指せることを一目で伝える）: 明るい人物写真か青系イラストの上に、濃紺の太字キャッチと実績バッジ（金のメダル型）を置き、下にえんじの主CTAを配置する
2. **悩みの提起**（読み手の不安や迷いに共感する）: 淡いブルーグレー地に、悩みを書いた白い角丸の吹き出しを人物イラストのまわりに並べ、下向き三角で次へつなぐ
3. **選ばれる理由**（スクールの強みを番号付きで示す）: 英字ラベル付き見出しの下に、円形のPOINT番号付き白カードを3〜6枚縦に積み、写真や図解を添える
4. **合格・実績**（数字で成果を証明して信頼を得る）: 白地に金の大きな数字と小さな単位を並べ、グラフや表で比較し、出典を注釈で添える
5. **CTA**（資料請求・無料相談へ誘導する）: 濃紺の全幅帯に黄色の強調リード、えんじの主ボタン、白枠のサブボタンを縦に積む
6. **料金プラン**（価格とお得感をはっきり見せる）: 濃紺のヘッダー付き白パネルに通常価格と割引価格を並べ、金の数字で差を強調する。各プランの下にCTAを置く
7. **お客様の声**（受講生の体験で社会的証明を示す）: 淡い地の上に円形顔写真付きの白カードを縦に積むか、横スクロールのカルーセルにする
8. **よくある質問**（申込前の疑問や不安を解消する）: Qアイコン付きのアコーディオンを罫線で区切って縦に並べる
9. **CTA**（最後のひと押しで申込へつなぐ）: 前のCTA帯と同じデザインを繰り返し、電話番号や受付時間を添える
10. **フッター**（運営情報・規約・コピーライトを示す）: 濃紺か濃い地に白の小さな文字で、運営会社名とリンクを中央に並べる

## Imagery

- 明るい教室や自習室で、自然光を受ける講師と受講生の落ち着いた写真を使う
- 写真は白と青を基調に露出をやや高くし、清潔感を出す
- 講師はスーツや職業がわかる服装で、正面か斜めから誠実な表情で撮る
- 学習シーンはタブレットやPC、教材を持つ手元を明るく撮る
- アイコンは濃紺か青の単色のフラットな線画にする
- イラストを使う場合は青と黄の2色程度に抑えた、輪郭線のないフラットな人物にする
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC ではコンテンツ幅を 960〜1080px 程度に収め、左右に白地の余白をとる
- PC のファーストビューは左にキャッチとバッジ、右に写真かイラストを置く横長の構成にする
- 特長カードや声のカードは PC で 2〜3 列、SP では 1 列に積む
- 料金プランは PC で横並びにし、SP では縦に積む
- 比較表は SP で横スクロールにし、PC では全列を表示する
- SP では画面下部に固定CTAバーを置き、PC ではヘッダー右に申込ボタンと電話番号を置く

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

- **ID**: `pk-education-trust`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「教育・スクール・資格」・主な雰囲気「信頼・誠実」の設計書 26 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-education-trust/
