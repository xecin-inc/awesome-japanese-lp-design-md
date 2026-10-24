---
version: alpha
name: Information-Dense Persuasive Supplement LP Pattern
description: 白と淡いグレーの地を基本に、悩み提起・根拠・比較・価格を縦に積み上げて説得する健康食品・サプリメントの LP の型。ブランド色は緑系にして、主 CTA も緑の立体ボタンに統一する。赤・オレンジは限定や価格の強調、金は権威バッジや帯に使い、黄色マーカーで要点を拾わせる。危機感を出すパートだけ黒やチャコールの帯に切り替えて緩急をつける。数字は大きく、単位は小さくし、主張には必ず※注釈を添える。
colors:
  primary: '#328B47'
  background: '#FCFCFC'
  background-alt: '#F4F4F1'
  surface: '#FCFBFB'
  tint-1: '#F7F4EF'
  tint-2: '#FEF9C9'
  text: '#21201F'
  secondary: '#C3A05A'
  accent-1: '#E3432B'
  accent-2: '#D1181E'
  dark-section: '#1F201F'
  cta: '#399936'
  on-cta: '#FDFDFC'
  marker: '#FAEC71'
  cta-accessible: '#31842F'
  primary-accessible: '#308544'
  secondary-accessible: '#8E7034'
typography:
  display:
    fontFamily: Noto Sans JP
    fontSize: 44px
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Noto Sans JP
    fontSize: 30px
    fontWeight: 900
    lineHeight: 1.33
    letterSpacing: 0.035em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.03em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: 0.02em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
  accent:
    fontFamily: Playfair Display
    fontSize: 39px
    fontWeight: 700
    lineHeight: 1.05
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.04em
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 999px
spacing:
  unit: 8px
  card: 16px
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
    height: 60px
  band-heading:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-md}'
    height: 48px
  check-list:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.sm}'
    height: 140px
  worry-bubble:
    backgroundColor: '{colors.dark-section}'
    typography: '{typography.body-md}'
    rounded: '{rounded.full}'
    height: 56px
  graph-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 260px
  compare-table:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 260px
  voice-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sm}'
    height: 320px
  price-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.accent-2}'
    typography: '{typography.display}'
    rounded: '{rounded.lg}'
    height: 540px
  badge-circle:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 80px
  faq-item:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    height: 54px
---

# DESIGN.md — 健康食品の情報量多め・訴求型 LP の型（Information-Dense Persuasive Supplement LP Pattern）

designmark が、健康食品・サプリメント・主な雰囲気「情報量多め・訴求型」の LP の設計書 38 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: 健康食品・サプリメント ／ **雰囲気**: 情報量多め・訴求型、信頼・誠実、力強い・インパクト、ナチュラル
- **キーワード**: 黄色マーカー・比較表・エビデンスグラフ・大きな数字・価格訴求・注釈多め
- **地の質感**: 白〜淡グレーのフラットな地が基本。章によって生成りや木目・和紙調の質感を敷き、金は光沢のあるグラデーションで箔のように見せる。悩みパートだけ暗い写真やチャコールの面にする
- **形**: 角丸の小さい長方形の帯とカード、円形の数値バッジ、ピル型の CTA。下向き三角の吹き出しや斜めカットで章をつなぐ
- **温度感**: 暖色寄りで熱量が高い。白と緑で清潔感と信頼を保ち、赤・オレンジ・金で熱を足して、黒で締める

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `primary` | `#328B47` | ブランドを代表する緑（帯見出し・番号・ラベル） | 8% | 集計の代表色 |
| `background` | `#FCFCFC` | 基本の白地 | 20% | 集計の代表色 |
| `background-alt` | `#F4F4F1` | セクションを交互に切り替える淡いグレー地 | 9% | 集計の代表色 |
| `surface` | `#FCFBFB` | グラフ・Q&A・比較表の白カード | 6% | 集計の代表色 |
| `tint-1` | `#F7F4EF` | 成分・補完栄養セクションの生成りベージュ地 | 6% | 集計の代表色 |
| `tint-2` | `#FEF9C9` | 特典帯・吹き出しの淡いクリーム黄 | 3% | 集計の代表色 |
| `text` | `#21201F` | 見出し・本文の黒 | 3% | 集計の代表色 |
| `secondary` | `#C3A05A` | 金（権威バッジ・帯・成分ラベル） | 5% | 集計の代表色 |
| `accent-1` | `#E3432B` | 限定・強調の朱赤帯と強調文字 | 3% | 集計の代表色 |
| `accent-2` | `#D1181E` | 価格数字・割引バッジの赤 | 2% | 集計の代表色 |
| `dark-section` | `#1F201F` | 悩み提起・比較の黒〜チャコール帯 | 6% | 集計の代表色 |
| `cta` | `#399936` | 購入・申込ボタンの緑 | 1% | 集計の代表色 |
| `on-cta` | `#FDFDFC` | CTA ボタン上の白文字 | 0% | 集計の代表色 |
| `marker` | `#FAEC71` | 強調語の下に敷く黄色マーカー | 1% | 集計の代表色 |
| `cta-accessible` | `#31842F` | AA を満たす補正値（計算） |  | 計算 |
| `primary-accessible` | `#308544` | AA を満たす補正値（計算） |  | 計算 |
| `secondary-accessible` | `#8E7034` | AA を満たす補正値（計算） |  | 計算 |

- 地は白と淡いグレー・生成りをセクションごとに交互に切り替え、背景色の差で章を区切る
- 悩み提起・危機感のパートだけ黒〜チャコールの全幅帯にし、白文字に赤と黄の強調を合わせる
- 主 CTA はページ全体で緑の立体ボタン 1 色に固定し、箇所によって色を変えない
- 朱赤・赤は限定ラベル・価格数字・割引バッジに限り、長い本文には使わない
- 金は権威バッジ・数値円・見出し帯のアクセントにだけ使い、光沢のあるグラデーションで箔のように見せる
- 黄色マーカーは要点の語の下半分に敷く。1 文あたり 1〜2 か所までにする
- 見出し帯は primary の緑の面に白文字を置き、帯の色はページ内で 1 系統にそろえる
- `button-primary` は文字 `#FDFDFC` × 背景 `#399936` のコントラスト比が 3.57:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#31842F`、4.61:1）を使う。
- `band-heading` は文字 `#FDFDFC` × 背景 `#328B47` のコントラスト比が 4.19:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#308544`、4.52:1）を使う。
- `badge-circle` は文字 `#FDFDFC` × 背景 `#C3A05A` のコントラスト比が 2.43:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `secondary-accessible`（`#8E7034`、4.57:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューと結論の大コピー、実績の数字 | ゴシック | Noto Sans JP | 900 | 44px | 1.2 | 0.02em |
| `headline-lg` | セクションの大見出し（成分・権威のパートは明朝にしてよい） | ゴシック | Noto Sans JP | 900 | 30px | 1.33 | 0.035em |
| `headline-md` | 帯見出し・小見出し | ゴシック | Noto Sans JP | 700 | 22px | 1.4 | 0.03em |
| `headline-sm` | カード内の小見出し・チェックリスト・吹き出し | ゴシック | Noto Sans JP | 700 | 17px | 1.4 | 0.03em |
| `body-md` | 説明本文・図解の説明 | ゴシック | Noto Sans JP | 500 | 14px | 1.8 | 0.02em |
| `note` | ※注釈・出典・試験方法 | ゴシック | Noto Sans JP | 400 | 10px | 1.5 | 0.0em |
| `accent` | 価格の特大数字、見出し上の英字ラベル・番号 | 欧文セリフ | Playfair Display | 700 | 39px | 1.05 | 0.0em |
| `label-button` | CTA ボタンの文字・ラベル・タグ | ゴシック | Noto Sans JP | 700 | 18px | 1.3 | 0.04em |

- 効果の訴求は極太ゴシック、成分名・権威・品質の見出しは明朝（Shippori Mincho など）と使い分ける
- 見出しは 1 行の中で強調語だけを 1.5〜2 倍に大きくし、助詞は一回り小さくして強弱をつける
- 数字は単位より 1.5〜2 倍大きくし、単位は小さく添える
- 強調語は色（朱赤・緑）とサイズを同時に変えるか、黄色マーカーを引く
- 数値の主張には必ず※付きの小さいグレーの注釈を添える
- 見出しは中央揃え、本文は左揃えにする
- 英字のセリフ体・スクリプト体は見出しの上のラベルか、背景に薄く重ねる飾りに留める
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。成分バッジ・実績・数値円だけ 2〜3 列
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 56px、基本単位 8px、カード内 16px（375px 幅換算）
- セクションは全幅で縦に積み、背景色の切り替えで区切る
- カードは左右 5% の余白を取って中央に置く
- オファー（価格・特典・保証・CTA）は中盤と終盤に繰り返して置く
- 悩み → 原因 → 解決策 → 根拠 → 証言 → 価格の順に、章の間につなぎ語と下向き矢印を入れて読み進める流れを作る
- 成分やこだわりは「番号バッジ → 見出し → 本文 → 写真・図解」の順で 1 つずつ組む
- 見出しの上に小さい英字ラベルを置いてもよい

## Elevation & Depth

- CTA ボタンは上から下へのグラデーションと上部のハイライト、下側の濃い影で立体的に見せる
- 白カードにはぼかしの弱い影（0 4px 12px rgba(0,0,0,.08)）を付ける
- 商品パッケージの切り抜き画像にはやわらかい落ち影を付ける
- 円形の金バッジは金属調のグラデーションと小さな影を付ける
- それ以外の面はフラットにして、地の色の差と枠線で区切る

## Shapes

- **角丸**: 小 4px ／ 中 8px ／ 大 16px。ボタンはピル型。
- **写真の切り抜き**: 成分・素材の写真は角丸なしの長方形。人物と商品は背景を切り抜いて重ねる。悩みの場面は円形やモノクロにしてもよい
- **セクション境界**: 基本は直線で全幅の色を切り替える。要所は下向き三角の吹き出し、斜めのカット、V 字のリボン帯でつなぐ
- 帯見出し・ラベルは角丸なしか小さい角丸の長方形の色帯にする
- 数値・割引・成分区分は円形バッジに入れる
- POINT やこだわりの番号は円か菱形のバッジにする
- 比較表・価格カードは枠線付きの角丸カードにする
- 悩みの吹き出しは雲形かピル型にしっぽを付ける

## Components

- **緑の立体申込ボタン**（`button-primary`）: 横長のピル型ボタン。緑のグラデーションに下側の影を付ける。上に「初回限定」などの小さなラベル、右端に丸い矢印アイコンを置く
- **帯見出し**（`band-heading`）: 全幅の緑の帯に白い太字の見出しを置き、下に三角の吹き出しを付けて次の内容へつなぐ
- **悩みチェックリスト**（`check-list`）: 白カードの上に黒い見出し帯を置き、チェックボックス付きの短い悩みを 3〜5 行並べる。キーワードは太字にし、人物写真を添える
- **悩みの吹き出し**（`worry-bubble`）: チャコールの雲形・ピル型の吹き出しに白文字で悩みを短く書き、写真の周りに散らして置く
- **エビデンスグラフカード**（`graph-card`）: 白カードの上部に色帯のタイトルを置き、棒グラフか折れ線グラフ、差の数値を入れた赤い円バッジ、下に出典の注釈を入れる
- **比較表**（`compare-table`）: 項目列と他社列はグレー、自社列だけ金か緑の枠で上に飛び出させ、○や赤文字の価格で優位を示す
- **お客様の声カード**（`voice-card`）: 写真と年代、太字の短い見出し、マーカーを引いた本文を組む。左上に番号のリボンを付け、写真と文章を左右交互に並べる
- **価格カード**（`price-card`）: 白カードに商品画像、取り消し線の通常価格、赤の特大初回価格、割引率の円バッジ、送料無料のマーカー行、CTA、注意書きの順で並べる
- **金の数値バッジ**（`badge-circle`）: 金のグラデーションの円に、実績や割引率を 2〜3 行で入れる。数字だけ大きくする
- **FAQ アコーディオン**（`faq-item`）: 緑の Q バッジと太字の質問、右端に＋を置く。開くと淡いグレーの地に回答を表示し、項目は細い罫線で区切る

## Do's and Don'ts

**Do**
- 数値の主張には必ず※注釈と出典を添える
- 数値の訴求は円バッジか金枠で囲み、数字を単位の 1.5〜2 倍にする
- 危機感 → 解決策 → 根拠の流れに合わせて、背景の色調を切り替える
- 本文の要点には黄色マーカーを引き、読み飛ばしても要点が拾えるようにする
- 成分は番号付きのカードで 1 つずつ説明する
- 価格と CTA のブロックはページの中盤と終盤の 2 回以上置く

**Don't**
- CTA の色を箇所ごとに変えない（緑で固定）
- 注釈を省いて数字だけを見せない
- 赤や朱赤を長い本文や広い地に使わない
- 本文を区切りなく長く続けない。3〜4 行ごとに図・カード・強調を挟む
- 1 つのブロックに強調色を何色も混ぜない
- 明るい原色を広い地の色に使わない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（商品と主な効果、実績を一目で伝える）: 明るい地に商品パッケージを切り抜いて大きく置き、極太ゴシックの大コピーと金の実績バッジ、緑の CTA を重ねる
2. **実績・第三者評価**（販売実績やランキング・メディア掲載で信頼を得る）: 金の円バッジを 3 列に並べ、数字を特大にして単位を小さく添える。下に※注釈を置く
3. **価格オファー**（早い段階で限定価格を見せて購入へ誘導する）: 朱赤の限定帯の下に価格カードと緑の立体 CTA を置く
4. **悩みの提起**（読み手の症状に当てはめ、原因を自覚させる）: チャコールの全幅帯に切り替え、悩みの吹き出しとチェックリストを置く。下向き三角で次へつなぐ
5. **解決策の提示**（悩みに対する答えとして商品を提案する）: 白地に戻し、緑の帯見出しとマーカーを引いた結論コピー、商品画像を中央に置く
6. **成分紹介・根拠**（機能性成分と研究データで効果の根拠を示す）: 生成りの地に番号付きの成分カードを縦に並べ、明朝の成分名とグラフカード、出典の注釈を添える
7. **比較**（他の選択肢との違いを示す）: 淡いグレーの地に比較表を置き、自社列だけ枠で強調する
8. **お客様の声**（体験談で共感と安心を生む）: 写真付きの声カードを左右交互に 3〜4 件並べ、見出しを太字、要点にマーカーを引く
9. **品質管理**（製造と安全性の安心を伝える）: 白地に工場・研究の写真と認証の円バッジを並べ、明朝の見出しで落ち着いて見せる
10. **価格・CTA**（定期コースの条件を示し申込を促す）: 金枠の価格カード、特典ラベル、保証、緑の立体 CTA を縦に積む
11. **よくある質問**（購入前の不安を解消する）: Q バッジ付きのアコーディオンを罫線で区切って並べ、最後にもう一度 CTA を置く

## Imagery

- 商品パッケージは正面から撮って切り抜き、手前にカプセルや原料を散らしてやわらかい落ち影を付ける
- 人物は自然光で撮った 30〜50 代の明るい笑顔を切り抜き、白やベージュの服で清潔に見せる
- 悩みの場面は少し暗いグレー調やモノクロの写真にして、明るいパートと対比させる
- 白衣やスーツの専門家は背景を切り抜き、肩書の帯と経歴のボックスを添える
- 成分や原料は角丸なしの長方形の物撮りで、果実や葉はみずみずしく明るく撮る
- グラフや図解はシンプルなフラットのイラストで描き、色は primary と赤だけに絞る
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- 元は SP 幅の縦長 1 カラムの設計。PC では中央に幅 750px 前後の 1 カラムを固定し、左右は淡いグレーか生成りの無地で埋める
- 見出しは PC で 1.3〜1.4 倍まで拡大し、本文は 16px 程度にする
- 円バッジの 3 列は PC でも維持し、サイズだけ大きくする
- 価格カードと CTA は PC でも最大幅 600px 程度に収める
- 比較表やお客様の声は PC で 2〜3 列に広げてもよい
- SP では図解の横並びを縦積みにし、文字は 375px 幅で読めるサイズを保つ

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

- **ID**: `pk-supplements-dense`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「健康食品・サプリメント」・主な雰囲気「情報量多め・訴求型」の設計書 38 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-supplements-dense/
