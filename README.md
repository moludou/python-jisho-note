# Python辞書ノート

スマートフォンで素早く調べ、詳しく読むとそのまま学習できる日本語Python辞書です。

## 特徴

- コードエディターを思わせる独自のダークテーマ
- Python 3.12の公開標準モジュールとpandas 2.2.3を一覧表示
- モジュールをタッチすると、公開トップレベルの関数・クラス・定数を表示
- モジュール名・用途・API名の検索と種類別フィルター
- 組み込み型、メソッド、構文、標準ライブラリ、pandasを横断検索
- 正常な実行例とエラー例
- エラー原因と修正例
- 変数の型と現在値の追跡
- 処理フローの段階表示
- 元データへの影響と戻り値の区別
- 正常、空、形式不正、型変換不正、境界値の5種類のテスト
- スマートフォン向けのナビゲーションとお気に入り

## 現在の収録項目

- `list.append()`
- `list.extend()`
- `set`
- `dict.get()`
- `dict.update()`
- `str.split()`
- `continue`
- `try / except`
- `sys.argv`
- `yield`
- リスト内包表記
- `pandas`
- `pandas.read_csv()`
- `csv.DictReader`
- `DataFrame.to_csv()`

モジュール図鑑は公開トップレベルAPIを網羅する索引です。学習辞書は、実行例・エラー例・変数追跡を確認できる詳しい解説を段階的に増やします。

API索引は実行環境から取得した公開名とシグネチャを表示します。Python・pandasのドキュメント本文は転載せず、詳しい仕様は各公式ドキュメントを参照する設計です。収録数と利用可否は生成環境によって変わります。

## ファイル構成

```text
dist/
├── index.html
├── styles.css
├── app.js
└── module-catalog.js
```

静的なHTML、CSS、JavaScriptのみで動作します。サイトからPythonコードを直接実行する機能はありません。

お気に入りはブラウザのローカルストレージだけに保存され、このサイトのサーバーへ送信されません。アクセス先のホスティング事業者がセキュリティ目的のログを取得する場合があります。

`module-catalog.js` は次のコマンドで再生成できます。

```text
python generate_module_catalog.py
```

## 権利・出典

このサイトは個人制作の非公式学習サイトであり、Python Software Foundation、pandasプロジェクト、Microsoft、O'Reilly Mediaとは提携・承認関係にありません。

- PythonはPython Software Foundationの商標または登録商標です。
- pandasはpandasプロジェクトおよび関係する権利者によって提供されています。
- API索引の対象情報はPython 3.12とpandas 2.2.3の実行環境から取得しています。
- 詳細は [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) を参照してください。

サイト独自部分の利用条件は [`LICENSE.md`](LICENSE.md) を参照してください。
# 統合先のお知らせ

Python辞典は https://moludou.github.io/linux-command-dictionary/python/ に統合しました。
共通の入口は https://moludou.github.io/linux-command-dictionary/ です。
今後の編集・公開は `moludou/linux-command-dictionary` の `python/` で行います。このリポジトリの公開ページは統合先へ自動移動します。

