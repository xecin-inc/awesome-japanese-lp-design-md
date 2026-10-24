---
version: alpha
name: Elegant Japanese Hair & Body Care LP Pattern
description: 生成りの白い地に明朝の大見出しを置き、くすみローズとくすみゴールドを少しだけ差す、サロン品質を感じさせるヘアケア・ボディケア LP の型。写真は艶・水滴・オイルの透明感が主役で、余白を広くとる。悩みの提起だけ暗い面に切り替えて流れに区切りをつけ、購入ブロックは中盤と終盤で同じデザインを繰り返す。
colors:
  background: '#FAFAF9'
  background-alt: '#F2F0ED'
  primary: '#CC8E98'
  secondary: '#99755B'
  accent-1: '#C8A156'
  tint-1: '#F3E1D8'
  dark-section: '#201513'
  cta: '#AE9B65'
  on-cta: '#FBFBFB'
  text: '#262525'
  text-body: '#524C4B'
  text-muted: '#8E8A86'
  line: '#BFB1A7'
  on-dark: '#F8F7F5'
  cta-accessible: '#827244'
  secondary-accessible: '#8E6C54'
  primary-accessible: '#B35866'
typography:
  display:
    fontFamily: Shippori Mincho
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Shippori Mincho
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.06em
  headline-md:
    fontFamily: Noto Serif JP
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.05em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0.04em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.02em
  accent:
    fontFamily: Playfair Display
    fontSize: 25px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.04em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.07em
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 999px
spacing:
  unit: 8px
  card: 20px
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
    rounded: '{rounded.sm}'
    height: 54px
  button-secondary:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.label-button}'
    rounded: '{rounded.sm}'
    height: 48px
  band-heading:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-cta}'
    typography: '{typography.headline-md}'
    height: 45px
  badge-circle:
    backgroundColor: '{colors.primary}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.full}'
    height: 76px
  price-block:
    backgroundColor: '{colors.background}'
    textColor: '{colors.primary}'
    typography: '{typography.display}'
    height: 220px
  voice-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text-body}'
    typography: '{typography.body-md}'
    height: 340px
  check-list:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.body-md}'
    height: 40px
  step-number:
    textColor: '{colors.secondary}'
    typography: '{typography.accent}'
    rounded: '{rounded.full}'
    height: 60px
  faq-item:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    height: 88px
  note-text:
    textColor: '{colors.text-muted}'
    typography: '{typography.note}'
    height: 24px
---

# DESIGN.md — ヘアケアの上品・高級な LP の型（Elegant Japanese Hair & Body Care LP Pattern）

designmark が、ヘアケア・ボディケア・主な雰囲気「上品・高級」の LP の設計書 59 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: ヘアケア・ボディケア ／ **雰囲気**: 上品・高級、やさしい・柔らかい、情報量多め・訴求型、清潔・爽やか
- **キーワード**: 明朝見出し・サロン品質・透明感・くすみローズ・生成り・余白多め
- **地の質感**: 地はマットな生成り白と淡いグレージュ。その上に、水滴・ジェル・オイル・シルク布など濡れたような艶のある写真を重ね、ところどころに薄いグラデーションや粒子感を入れる
- **形**: 直線を基本にした長方形と細い線の枠。特長や成分は正円で切り抜き、角丸は小さめにして甘くしすぎない
- **温度感**: やや暖かいニュートラル。生成りとベージュを中心に、くすみローズと金で温かみを足し、彩度は低めに抑える

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FAFAF9` | 生成り白の基本の地 | 22% | 集計の代表色 |
| `background-alt` | `#F2F0ED` | セクションを切り替えるオフホワイト〜グレージュの地 | 11% | 集計の代表色 |
| `primary` | `#CC8E98` | くすみローズ（帯見出し・バッジ・強調） | 7% | 集計の代表色 |
| `secondary` | `#99755B` | モカブラウン（サブボタン・ラベル・ステップ） | 3% | 集計の代表色 |
| `accent-1` | `#C8A156` | くすみゴールド（数字・飾り線・月桂冠） | 2% | 集計の代表色 |
| `tint-1` | `#F3E1D8` | 淡いピンクベージュのカード・帯 | 5% | 集計の代表色 |
| `dark-section` | `#201513` | 悩み提起や締めの帯に使う濃いこげ茶 | 6% | 集計の代表色 |
| `cta` | `#AE9B65` | 金系の購入ボタン地 | 1% | 集計の代表色 |
| `on-cta` | `#FBFBFB` | ボタン上の白文字 | 0% | 集計の代表色 |
| `text` | `#262525` | 見出しの濃い墨色 | 2% | 集計の代表色 |
| `text-body` | `#524C4B` | 本文のこげ茶グレー | 2% | 集計の代表色 |
| `text-muted` | `#8E8A86` | 注釈・キャプションの薄グレー | 0% | 集計の代表色 |
| `line` | `#BFB1A7` | 見出し下線・枠・区切りの細線 | 0% | 集計の代表色 |
| `on-dark` | `#F8F7F5` | 暗い地や写真の上の白文字 | 1% | 集計の代表色 |
| `cta-accessible` | `#827244` | AA を満たす補正値（計算） |  | 計算 |
| `secondary-accessible` | `#8E6C54` | AA を満たす補正値（計算） |  | 計算 |
| `primary-accessible` | `#B35866` | AA を満たす補正値（計算） |  | 計算 |

- 地は生成り白（background）とグレージュ（background-alt）を交互に使い、ページの大半を明るく保つ
- くすみローズは帯見出し・バッジ・強調語の文字色に絞り、広い面には塗らない
- 金は数字・飾り線・購入ボタンだけに使い、黄色のベタ塗りにはしない
- 悩み提起のパートだけ濃いこげ茶の暗い面に切り替え、ネガティブな話題を分ける
- 本文は墨色かこげ茶グレーにし、#000 の純黒は使わない
- 注釈は薄グレーの小さい文字で、ブロックの末尾にまとめる
- 原色の赤・黄・ビビッドなピンクで値引きを訴えない
- `button-primary` は文字 `#FBFBFB` × 背景 `#AE9B65` のコントラスト比が 2.64:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#827244`、4.57:1）を使う。
- `button-secondary` は文字 `#FBFBFB` × 背景 `#99755B` のコントラスト比が 4.02:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `secondary-accessible`（`#8E6C54`、4.59:1）を使う。
- `band-heading` は文字 `#FBFBFB` × 背景 `#CC8E98` のコントラスト比が 2.57:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#B35866`、4.51:1）を使う。
- `price-block` は文字 `#CC8E98` × 背景 `#FAFAF9` のコントラスト比が 2.55:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `primary-accessible`（`#B35866`、4.53:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューと各セクションの大見出し | 明朝 | Shippori Mincho | 500 | 40px | 1.3 | 0.05em |
| `headline-lg` | セクション見出し | 明朝 | Shippori Mincho | 500 | 26px | 1.4 | 0.06em |
| `headline-md` | カード内の見出し・英字見出しに添える和文の小見出し | 明朝 | Noto Serif JP | 700 | 20px | 1.5 | 0.05em |
| `headline-sm` | FAQ の質問・強調リード・特長名 | ゴシック | Noto Sans JP | 700 | 16px | 1.5 | 0.05em |
| `body-md` | 本文・回答 | ゴシック | Noto Sans JP | 400 | 13px | 1.9 | 0.04em |
| `note` | ※注釈・出典・イメージ表記 | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.02em |
| `accent` | 英字の飾り見出し・価格や番号の数字 | 欧文セリフ | Playfair Display | 400 | 25px | 1.2 | 0.04em |
| `label-button` | ボタン文字・step や商品名のラベル | ゴシック | Noto Sans JP | 700 | 15px | 1.3 | 0.07em |

- 大見出しは明朝。キーワードは大きく、助詞は一回り小さくして強弱をつける
- 見出しの上に薄い色の英字飾り見出し（欧文セリフ）を重ねるか添える
- 見出しの字間は 0.05〜0.06em とやや広めにする
- 本文はゴシックで行間 1.9 前後、短い文は中央揃えにする
- 強調語は太字にせず、ローズの文字色か淡いマーカーで示す
- 数字は欧文セリフで大きく、単位は小さくする。定価には取り消し線を引く
- 注釈は 9〜10px で、セクションの末尾にまとめて置く
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。効果ラベルや成分は 2〜3 列の小さなグリッドにする
- **本文ブロックの幅**: 画面幅の約 88%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- 見出しは中央揃えにし、上に英字の飾り、下に細線を添える
- 商品写真は淡い面の中央に置き、周りの余白を広くとる
- 購入ブロック（商品写真・価格・CTA）は同じデザインのまま中盤と終盤に繰り返す
- 写真の片側は画面端まで出し、反対側に余白を残して動きを出す
- 成分写真を 2 列に並べるときは、片方の列を下にずらして段違いにする
- セクションの区切りは直線か、縦の細線・小さな下向き三角で示す

## Elevation & Depth

- 基本はフラットにし、カードは影ではなく地の色の差で区別する
- 商品ボトルの写真にだけ、ごく薄い接地影を付ける
- 主 CTA は控えめなグラデーションで立体感を出し、強い影は付けない
- 奥行きは背景写真のぼかしや光のボケで出す

## Shapes

- **角丸**: 小 4px ／ 中 8px ／ 大 16px。ボタンは角丸の長方形。
- **写真の切り抜き**: FV と特長写真は角版の長方形。成分や素材は正円で切り抜き、商品は切り抜いて淡い円や台座の上に置く
- **セクション境界**: 直線で切り替える。必要なら縦の細線や小さな下向き三角を添える（大きな波や斜めは避ける）
- カード・帯は角丸なしか 4px 程度の小さな角丸にする
- 特長は細い線の正円バッジに短い言葉を入れて表す
- ラベルは細い枠線の長方形にする
- 帯見出しは左右の端を透明にしたグラデーションの長方形も可
- 番号は細い線の円か、欧文の数字に細い横線を添えて示す

## Components

- **購入ボタン**（`button-primary`）: 金系の地に白文字のボタンを幅いっぱいに置き、右端に細い矢印を付ける。グラデーションはごく控えめにする
- **サブボタン**（`button-secondary`）: モカブラウン地に白文字の長方形。詳細やほかの購入先への導線に使い、右端に＋や矢印を置く
- **帯見出し**（`band-heading`）: くすみローズの帯に白い明朝を載せる。行ごとに帯を分けて重ねてもよい
- **円形の特長バッジ**（`badge-circle`）: ローズ地か細線の白い正円に、2〜4 文字の特長や実績数字を入れる。商品の周りに放射状に置く
- **価格ブロック**（`price-block`）: 取り消し線を引いた通常価格から、細い矢印の先に欧文セリフの大きな初回価格を置き、下に注釈をまとめる
- **お客様の声カード**（`voice-card`）: 白カードに人物写真と明朝の見出し、本文を入れ、年齢などの属性は右揃えで小さく添える。角に欧文の番号を置く
- **悩みチェックリスト**（`check-list`）: 暗い地の上に半透明の白い行を並べ、チェックマークと悩みを書く。キーワードだけローズにする
- **使い方のステップ番号**（`step-number`）: 細い線の円に Step の欧文と数字を入れ、左右に細い水平線を伸ばす。下に手順文を置く
- **FAQ アコーディオン**（`faq-item`）: 白い行の頭に欧文の Q、右端に細い＋を置き、細線で区切る。回答の頭には A を置く
- **注釈**（`note-text`）: 効能や数字の根拠を薄グレーの小さい文字で、ブロックの下にまとめる

## Do's and Don'ts

**Do**
- 見出しは明朝にし、キーワードを大きく、助詞を小さくして強弱をつける
- 生成り白の余白を広くとり、髪や液体の艶が見える写真を大きく使う
- 強調はくすみローズの文字色か、淡いマーカー線にとどめる
- 効能や数字には必ず小さなグレーの※注釈を添える
- 購入ブロックは同じデザインのまま、中盤と終盤に繰り返し置く
- 特長は短い言葉にして円バッジで見せる

**Don't**
- 原色の赤・黄・ビビッドなピンクで値引きを訴えない
- 金を黄色のベタ塗りにしたり、広い面に塗ったりしない
- 角丸の大きなポップなボタンや強い影を使わない
- 黄色マーカーや強調色を多用しない
- 装飾や文字を詰め込んで余白を潰さない
- 純黒のベタ背景や純黒の本文を使わない

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（悩みの解決と実績、商品の世界観をひと目で伝える）: 艶のある髪や商品の全幅写真に明朝の大見出しを重ね、円形の実績バッジと金の月桂冠を添える。下に購入ボタンを置く
2. **コンセプト**（開発の考え方と主な訴求を示す）: 生成りの地に英字の飾り見出しと明朝の見出しを中央揃えで置き、短い文と商品写真を余白多めに組む
3. **悩みの提起**（日常の髪や肌の悩みに気づかせる）: 濃いこげ茶の暗い面に切り替え、半透明の白い行でチェックリストを並べる。キーワードだけローズにする
4. **商品紹介**（商品と差別化のポイントを示す）: 切り抜いた商品を中央に置き、周りに特長の円バッジを放射状に配置する。最後に購入ブロックを置く
5. **特長・成分**（処方と成分の価値を説明する）: グレージュの地に番号付きのポイント見出しを並べ、成分写真は正円で切り抜いて段違いに配置する。注釈を末尾にまとめる
6. **お客様の声**（使った人の実感で信頼をつくる）: 白カードを縦に並べ、人物写真・明朝の見出し・本文・属性を入れる。要点に淡いマーカーを引く
7. **香り**（香りの体験を伝える）: 果実や花の自然光の写真を背景に使い、香りの構成を細い線の円や三角形の図で示す
8. **使い方**（手順と使用量を示す）: 細い線の円の Step 番号で 3 ステップを縦に並べ、それぞれに写真と短い説明を添える
9. **購入・ラインナップ**（価格と購入先を示して申込みにつなげる）: FV 直後と同じ購入ブロックを繰り返す。取り消し線の通常価格と、欧文セリフの大きな初回価格を並べる
10. **よくある質問**（使い方や購入の不安をなくす）: 白い地に Q と＋の付いたアコーディオンを細線で区切って並べる
11. **フッター**（公式情報・規約への導線）: グレージュの地に小さなリンクと注釈を中央揃えでまとめる

## Imagery

- 黒髪のストレートを逆光気味に撮り、髪のツヤと光の筋をはっきり見せる
- 水滴・ジェル・オイル・泡を、白〜グレージュの明るいトーンでマクロ撮影する
- 商品ボトルは淡い面の上に置き、透け感と薄い接地影だけで高級感を出す
- 成分は果実・花・葉を自然光で撮り、正円で切り抜く
- シルク布や大理石の質感写真を背景に薄く敷き、上品な光沢を足す
- 装飾は金の細線・月桂冠・小さな光のボケ程度にとどめる
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PC はコンテンツ幅 600〜760px 程度を中央に置き、両側は生成りかグレージュの地にする
- PC の FV は横長にして商品写真を全面に敷き、キャッチは左側に置く
- 特長・成分・香りの章は、PC で写真と文字の 2 カラムにし、左右を交互に入れ替える
- 使い方の 3 ステップは PC で横 3 列のカードにする
- 成分や原因のカードは PC で 2 カラムにする
- 購入ボタンの追従バナーは SP・PC とも画面下か右下に固定する

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

- **ID**: `pk-haircare-elegant`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「ヘアケア・ボディケア」・主な雰囲気「上品・高級」の設計書 59 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-haircare-elegant/
