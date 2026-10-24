---
version: alpha
name: Trustworthy BtoB SaaS LP Pattern
description: 白地と淡い青グレーの地をセクションごとに交互に敷き、ブランドの青で見出しや番号を整理する、やや寒色寄りで落ち着いた法人向けLPの型。主CTAはオレンジのピル型ボタンにして、寒色のページの中で一番目立たせる。書体はNoto Sans JPのゴシックが中心で、数字や英字ラベルにだけMontserratを使う。影の少ないフラットな白カード、線画やフラットなイラスト、UIのモックアップ、実績の数字を組み合わせ、課題→理由→事例→FAQ→資料請求の順に安心感を積み上げていく。
colors:
  background: '#FDFEFD'
  background-alt: '#F1F4F6'
  primary: '#1B58A8'
  secondary: '#3486C9'
  cta: '#F2951E'
  on-cta: '#FDFDFC'
  text: '#2E2E2F'
  text-body: '#404040'
  text-muted: '#848587'
  line: '#D5DBDC'
  surface: '#F6F7F8'
  tint-1: '#E4EAF5'
  dark-section: '#16386F'
  on-dark: '#F5FAFB'
  accent-1: '#DA2E29'
  tint-2: '#ECF5F7'
  cta-accessible: '#AA640A'
typography:
  display:
    fontFamily: Noto Sans JP
    fontSize: 30px
    fontWeight: 900
    lineHeight: 1.35
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Noto Sans JP
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.04em
  headline-md:
    fontFamily: Noto Sans JP
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Noto Sans JP
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.02em
  body-md:
    fontFamily: Noto Sans JP
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0.025em
  note:
    fontFamily: Noto Sans JP
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.02em
  accent:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.01em
  label-button:
    fontFamily: Noto Sans JP
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.045em
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
    rounded: '{rounded.full}'
    height: 52px
  button-secondary:
    backgroundColor: '{colors.background}'
    textColor: '{colors.primary}'
    typography: '{typography.label-button}'
    rounded: '{rounded.full}'
    height: 44px
  section-heading:
    textColor: '{colors.text}'
    typography: '{typography.headline-lg}'
    height: 72px
  problem-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 145px
  feature-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 280px
  stats-band:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.accent}'
    height: 200px
  case-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    height: 310px
  step-card:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    rounded: '{rounded.md}'
    height: 175px
  faq-item:
    backgroundColor: '{colors.background}'
    textColor: '{colors.text}'
    typography: '{typography.headline-sm}'
    height: 56px
  cta-band:
    backgroundColor: '{colors.dark-section}'
    textColor: '{colors.on-dark}'
    typography: '{typography.headline-md}'
    height: 260px
---

# DESIGN.md — BtoB・SaaSの信頼・誠実なLPの型（Trustworthy BtoB SaaS LP Pattern）

designmark が、BtoB・SaaS・ITサービス・主な雰囲気「信頼・誠実」の LP の設計書 60 件を集計して合成した型です。特定の LP のデザインではありません。
AI コーディングツール（Claude Code / Cursor / v0 など）に渡すと、この業種・雰囲気の LP を同じトンマナで作れます。上の YAML（トークン）が正、本文はその使い方の説明です。
ライセンス: CC BY 4.0（表示: designmark / 株式会社 XECIN）

## Overview

- **業種**: BtoB・SaaS・ITサービス ／ **雰囲気**: 信頼・誠実、情報量多め・訴求型、清潔・爽やか
- **キーワード**: 白カード・線画イラスト・オレンジCTA・青と淡青グレー・数値訴求・英字ラベル
- **地の質感**: フラットな単色面が基本。グラデーションや質感はほぼ使わない。白カードは薄い影か細い罫線で区切り、濃い色の帯にだけ淡いドットやグリッドの柄を薄く重ねてもよい
- **形**: 角丸8px前後の白カード、ピル型のCTA、円形の番号バッジ、セクションは直線で地の色を切り替える
- **温度感**: やや寒色寄りで、誠実で落ち着いたビジネスらしい温度感。CTAのオレンジだけで暖かさを足す

## Colors

| Token | HEX | 役割 | 面積の目安 | 値の出どころ |
|---|---|---|---|---|
| `background` | `#FDFEFD` | ページの基本の白地 | 38% | 集計の代表色 |
| `background-alt` | `#F1F4F6` | 交互に置くセクションの淡い青グレー地（悩み・FAQなど） | 13% | 集計の代表色 |
| `primary` | `#1B58A8` | ブランドの青（見出しの強調・番号バッジ・枠・アイコン） | 7% | 集計の代表色 |
| `secondary` | `#3486C9` | 中間の青（リンク・小見出し・区切り線） | 4% | 集計の代表色 |
| `cta` | `#F2951E` | 主CTA（資料請求・問い合わせ）のオレンジ | 2% | 集計の代表色 |
| `on-cta` | `#FDFDFC` | CTAボタン上の白文字 | 0% | 集計の代表色 |
| `text` | `#2E2E2F` | 見出しの濃い文字 | 2% | 集計の代表色 |
| `text-body` | `#404040` | 本文の濃いグレー | 2% | 集計の代表色 |
| `text-muted` | `#848587` | 注釈・日付の補助文字 | 0% | 集計の代表色 |
| `line` | `#D5DBDC` | カード・表・リストの罫線 | 1% | 集計の代表色 |
| `surface` | `#F6F7F8` | ライトグレーの面（ロゴ帯・カード地） | 7% | 集計の代表色 |
| `tint-1` | `#E4EAF5` | 淡い青の面（実績の帯・注記の箱・締めのセクション） | 4% | 集計の代表色 |
| `dark-section` | `#16386F` | 濃い青の帯（実績の数字・CTA帯・フッターの著作権帯） | 5% | 集計の代表色 |
| `on-dark` | `#F5FAFB` | 濃い面の上の白文字 | 0% | 集計の代表色 |
| `accent-1` | `#DA2E29` | 削減率など数値を強調する赤 | 1% | 集計の代表色 |
| `tint-2` | `#ECF5F7` | CTA見出しの淡い水色帯 | 3% | 集計の代表色 |
| `cta-accessible` | `#AA640A` | AA を満たす補正値（計算） |  | 計算 |

- 地は白（background）と淡い青グレー（background-alt）をセクションごとに交互に切り替え、境目は直線にする
- ブランドの青は見出しの強調語・番号バッジ・アイコン・枠線に使い、大きな面に塗るのは実績帯やCTA帯など一部だけにする
- オレンジは主CTAボタンにだけ使い、ページの中で一番目立つ暖色として役割をはっきりさせる
- 見出しは濃いグレー（ほぼ黒）にし、強調するキーワード1語だけをブランドの青にする
- 濃い青の面の上の文字は白にする。濃い面は実績の数字・CTA帯・フッターの2〜3か所までにする
- 赤は削減率などの数字や警告の強調だけに使い、見出しや面には広げない
- 注釈・日付はグレーの小さい文字にして、本文とはっきり差をつける
- `button-primary` は文字 `#FDFDFC` × 背景 `#F2951E` のコントラスト比が 2.27:1 で、WCAG AA（4.5:1）に届かない。通常サイズの文字で AA を満たすなら `cta-accessible`（`#AA640A`、4.55:1）を使う。

## Typography

| Token | 用途 | 書体の分類 | 代替 Web フォント | ウェイト | サイズ（375px 幅） | 行間 | 字間 |
|---|---|---|---|---|---|---|---|
| `display` | ファーストビューのキャッチコピー・サービス名 | ゴシック | Noto Sans JP | 900 | 30px | 1.35 | 0.02em |
| `headline-lg` | セクション見出し | ゴシック | Noto Sans JP | 700 | 22px | 1.5 | 0.04em |
| `headline-md` | カード見出し・CTA帯の見出し・事例の見出し | ゴシック | Noto Sans JP | 700 | 18px | 1.5 | 0.02em |
| `headline-sm` | FAQの質問・番号の横の機能名・カード内の小見出し | ゴシック | Noto Sans JP | 700 | 15px | 1.5 | 0.02em |
| `body-md` | 本文・説明文 | ゴシック | Noto Sans JP | 400 | 13px | 1.8 | 0.025em |
| `note` | 注釈・日付・タグ | ゴシック | Noto Sans JP | 400 | 10px | 1.6 | 0.02em |
| `accent` | 英字のセクションラベル・実績の数字・STEPやPOINTの番号 | 欧文サンセリフ | Montserrat | 700 | 20px | 1.2 | 0.01em |
| `label-button` | CTAボタン・サブボタンの文字 | ゴシック | Noto Sans JP | 700 | 14px | 1.3 | 0.045em |

- 和文はすべてNoto Sans JPのゴシックで統一し、明朝体や手書き風の書体は混ぜない
- セクション見出しは中央揃えの太字にし、上に小さな英字ラベル（ブランドの青）、下に幅40〜60pxの青の短い線を置く
- 数字は欧文の太字で周りの文字の1.5〜2倍の大きさにし、単位は小さく添える
- 本文は13px前後・行間1.8でゆったり組み、長い説明は左揃えにする
- 注釈は※付きの小さいグレー文字にして、該当するブロックのすぐ下に置く
- 英字はラベル・番号・数字だけに使い、長い文章には使わない
- 書体は集計で多かった分類に近い Web フォントの提案。サイズは 375px 幅に換算した目安。

## Layout

- **カラム**: SP は 1 カラム。PC では文章と画像の左右2カラム、カードは2〜3カラムのグリッドにする
- **本文ブロックの幅**: 画面幅の約 90%
- **余白**: セクション間 64px、基本単位 8px、カード内 20px（375px 幅換算）
- 余白は8pxの倍数で取る。セクションの上下は64px前後、カード同士の間は16〜24pxにする
- カードは画面の左右に18〜20pxの余白を取って置く
- 各セクションは英字ラベル→見出し→リード文→カードや図解→CTAの順に縦に積む
- CTAボタンは主要なブロックの最後に中央揃えで置き、必要ならテキストリンクを下に添える
- 料金表や比較表はSPで横スクロールさせず、プランや項目ごとのカードに分けて縦に並べる
- 機能の紹介は番号→見出し→UI画像→説明の順に縦に積む

## Elevation & Depth

- 基本は影の少ないフラットにし、地の色の差と細い罫線で階層を表す
- 白カードには淡くて広い影（0 4px 16px rgba(20,40,80,0.08)程度）だけを付ける
- CTAボタンは影なしか、ごくわずかな下向きの影にとどめる
- フォームのカードは薄い影と角丸で少し浮かせる

## Shapes

- **角丸**: 小 4px ／ 中 8px ／ 大 16px。ボタンはピル型。
- **写真の切り抜き**: 写真・UIのキャプチャ・サムネイルは角丸8〜12pxの横長の長方形にする。資料の表紙は数枚を少し斜めに重ねて見せる
- **セクション境界**: 直線で背景色を切り替える。悩み→解決や手順の間は下向きの三角やシェブロンでつなぐ
- 主CTAとサブボタンは完全なピル型にし、右端に矢印アイコンを置く
- カードは角丸8px前後で、角を直角にも大きすぎる丸にもしない
- 番号バッジやSTEPのラベルはブランドの青の円か小さなピル型にする
- タグ・カテゴリのバッジは角丸4pxの小さな長方形にする
- 灰色のセクションに白カードを並べ、色の差で区切る

## Components

- **主CTA（資料請求）ボタン**（`button-primary`）: オレンジのピル型ボタンに白い太字。右端に白い丸の矢印アイコンを置き、上に「1分で完了」のような短いマイクロコピーを添える。SPでは横幅いっぱいにする
- **サブCTA（問い合わせ・相談）ボタン**（`button-secondary`）: 白地にブランドの青の枠と青文字のピル型ボタン。主CTAのすぐ下か横に並べ、右端に＞の矢印を置く
- **英字ラベル付きのセクション見出し**（`section-heading`）: 小さな英字ラベル（青・字間を広めに）の下に太字の和文見出しを中央揃えで置き、その下に青の短い線を引く
- **悩みのチェックリスト**（`problem-card`）: 淡い青グレーの地に白いカードを置き、青い丸のチェックアイコンと太字の悩みを縦に並べる。下に三角を置いて解決策へつなぐ
- **選ばれる理由・機能カード**（`feature-card`）: 白カードの上に青の円の番号バッジ、線画のアイコンかUIの画像、青の小見出し、短い説明を順に並べる
- **実績の数字帯**（`stats-band`）: 濃い青の帯に導入社数・継続率などの数字をMontserratの太字で大きく並べ、単位と出典を小さく添える
- **導入事例カード**（`case-card`）: 上に人物やオフィスの写真、下に青い成果の見出し（数値は赤で強調）、コメント、社名と業種のタグを置く白カード
- **導入の流れのステップカード**（`step-card`）: 青のピル型STEPラベル、工程名、短い説明を入れた白カードを縦に並べ、間に下向きのシェブロンを挟む
- **FAQのアコーディオン**（`faq-item`）: 青いQアイコンと太字の質問を1行にし、右端に＋を置く。開くとAアイコンと回答が出る。項目の間は細い罫線で区切る
- **CTA帯**（`cta-band`）: 濃い青の帯に白い見出しと資料の表紙画像を置き、主CTAとサブCTAを縦に並べる。ページの中ほどと最後に繰り返す

## Do's and Don'ts

**Do**
- 地は白と淡い青グレーを交互に使い、色の差でセクションを区切る
- 主CTAはオレンジのピル型だけに統一し、白地に青枠のサブCTAとセットで置く
- 見出しの強調は1語だけをブランドの青にし、数字は欧文の太字で大きく見せて出典を添える
- 特長は番号バッジと青の小見出しで整理し、機能の説明には簡略化したUIのモックを添える
- イラストやアイコンは青系2〜3色の線画かフラットなイラストで統一する
- FAQ・導入の流れ・事例を入れて、導入前の不安を順に解消する

**Don't**
- CTA以外の場所にオレンジを使わない（ボタンの役割が伝わらなくなる）
- 強い影や派手なグラデーションを多用しない
- 強調の色を増やさない。青・オレンジ・数字の赤の3つまでにする
- 明朝体や手書き風の書体を混ぜない
- 暖色の大きな面や、全面が黒い背景を作らない
- カードの角丸を大きくしすぎない（16pxまで）

## Page Structure

この業種・雰囲気の LP に多いセクションの並び。上から順に、カッコ内が各セクションの役割。

1. **ファーストビュー**（誰に向けたどんなサービスか、どんな価値があるかを一目で伝える）: 白か淡い青の地に、極太ゴシックのキャッチコピーと青の強調語を置く。PCとスマホのモックアップかフラットなイラストを添え、実績のバッジと主CTA・サブCTAを並べる
2. **悩みの提起**（担当者が抱える課題を自分のこととして感じてもらう）: 淡い青グレーの地に、チェックアイコン付きの悩みのリストか人物の線画イラスト付きのカードを置き、下向きの三角で解決策へつなぐ
3. **CTA**（早い段階で資料請求に誘う）: 資料の表紙画像を斜めに重ね、オレンジの主CTAと青枠のサブCTAを中央に置く
4. **選ばれる理由**（他のサービスとの違いやメリットを示す）: 英字ラベル付きの見出しの下に、番号バッジ・アイコン・青の小見出し・説明を入れた白カードを縦に積む。数字は大きく見せる
5. **導入事例**（具体的な活用の様子と成果で信頼を裏付ける）: 写真・成果の数字・コメント・社名のタグを入れた白カードを並べる。PCでは3列にする
6. **導入の流れ**（申し込んだ後の手順を見せ、不安を解消する）: STEPラベル付きのカードを縦に並べ、間にシェブロンを挟む
7. **料金プラン**（費用の目安を示す）: SPではプランごとのカードに分け、おすすめのプランは青い枠と帯で目立たせる
8. **よくある質問**（導入するときの疑問や不安を解消する）: 淡い青グレーの地に、Q＆Aのアコーディオンを細い罫線で区切って並べる
9. **最終CTA**（資料請求・問い合わせへ最後にもう一度誘う）: 濃い青の帯に白い見出しと資料の画像を置き、主CTAとサブCTAを縦に並べる
10. **フッター**（運営会社の情報・規約・サイト内のリンクを示す）: ライトグレーの地にリンクを並べ、最下部に濃い青の著作権帯を置く

## Imagery

- 人物はスーツ姿のビジネスパーソンを濃紺の線で描き、髪や服を青で塗るフラットなイラストにする
- アイコンは青系の線画で、一部に淡い水色の塗りを入れる。2〜3色に抑える
- 製品の画面はPCやスマホのモックアップに管理画面を入れ、角丸の枠に収める
- イラストの背後に淡い水色の丸い不定形の面を敷き、やわらかさを足す
- 事例の写真は人物とオフィスの自然光の実写にし、角丸8〜12pxで切り抜く
- 棒グラフや折れ線グラフ風の装飾、資料の表紙を斜めに重ねた画像で、データ感と具体性を出す
- 写真・イラストは自社で撮影・作成するか、上の条件で生成・素材を選ぶ。

## Responsive Behavior

- PCのコンテンツ幅は約1000〜1100pxにして中央に置き、左右に十分な余白を取る
- ファーストビューはPCでは文章が左・ビジュアルが右の2分割にし、SPではビジュアルを下に回して縦に積む
- 理由・事例・機能のカードはPCで3列に並べ、SPでは1列に縦に積む
- CTAボタンはSPでは横幅いっぱいにして縦に並べ、PCでは主CTAとサブCTAを横に並べる
- 料金表はPCでは横並びの比較表にし、SPではプランごとのカードに分ける
- 見出しの文字サイズはPCで1.3〜1.5倍に広げ、本文は15〜16pxにする

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

- **ID**: `pk-btob-saas-trust`
- **種類**: 型パック（複数の LP の設計書を集計して合成。特定の LP のデザインではない）
- **合成元**: designmark で公開中の「BtoB・SaaS・ITサービス」・主な雰囲気「信頼・誠実」の設計書 60 件（2026-10-24 時点）
- **生成**: 2026-10-24、claude-opus-5-5、書式 xecin-lp-design-md-pack 0.1（DESIGN.md 仕様 alpha 準拠）
- **ライセンス**: CC BY 4.0（https://creativecommons.org/licenses/by/4.0/deed.ja）。表示の例:「designmark（株式会社 XECIN）の型パックを利用」
- **詳細**: https://designmark.jp/packs/pk-btob-saas-trust/
