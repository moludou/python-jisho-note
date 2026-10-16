const entries = [
  {
    id: "list-append",
    title: "list.append()",
    category: "メソッド",
    path: "組み込み型 › list › メソッド",
    summary: "リストの末尾に、値を1つの要素として追加します。",
    keywords: "追加 末尾 配列 リスト 値 add push",
    signature: "list.append(object)",
    successCode: "numbers = [10, 20]\nnumbers.append(30)\nprint(numbers)",
    successOutput: "[10, 20, 30]",
    successExplanation: "30が末尾に追加されています。append()は新しいリストを作らず、元のnumbersを直接変更します。",
    errorCode: "numbers = [10, 20]\nnumbers.append()",
    errorOutput: "TypeError: list.append() takes exactly one argument (0 given)",
    errorExplanation: "append()には、追加する値を1個渡す必要があります。この例では引数が0個です。エラー文の表現はPythonのバージョンによって少し異なる場合があります。",
    fixCode: "numbers.append(30)",
    arguments: "<strong>object</strong>：末尾に追加する値です。型は問いません。<br><strong>戻り値</strong>：常に <code>None</code> です。",
    mutation: "元のリストを直接変更します。<code>numbers = numbers.append(30)</code> と代入すると、numbersがNoneになるので注意します。",
    related: ["list.extend()", "list.insert()", "list.pop()"]
  },
  {
    id: "list-extend",
    title: "list.extend()",
    category: "メソッド",
    path: "組み込み型 › list › メソッド",
    summary: "反復可能なオブジェクトの各要素を、リストの末尾へ追加します。",
    keywords: "追加 複数 リスト iterable append 結合",
    signature: "list.extend(iterable)",
    successCode: "numbers = [10, 20]\nnumbers.extend([30, 40])\nprint(numbers)",
    successOutput: "[10, 20, 30, 40]",
    successExplanation: "渡したリストの30と40が、それぞれ別の要素として追加されています。append([30, 40])との違いが重要です。",
    errorCode: "numbers = [10, 20]\nnumbers.extend(30)",
    errorOutput: "TypeError: 'int' object is not iterable",
    errorExplanation: "30は1個の整数であり、順番に要素を取り出せる反復可能オブジェクトではありません。",
    fixCode: "numbers.extend([30])",
    arguments: "<strong>iterable</strong>：リスト、タプル、文字列など、要素を順番に取り出せる値です。<br><strong>戻り値</strong>：常に <code>None</code> です。",
    mutation: "元のリストを直接変更します。変更前のリストを残したい場合は、コピーまたは <code>+</code> を検討します。",
    related: ["list.append()", "list.insert()", "list.copy()"]
  },
  {
    id: "set",
    title: "set",
    category: "組み込み型",
    path: "組み込み型 › set",
    summary: "重複しない要素を保持し、和集合や共通部分を扱える組み込み型です。",
    keywords: "集合 重複 削除 和集合 共通部分 型 unique",
    signature: "set(iterable) / {value1, value2, ...}",
    successCode: "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a | b)\nprint(a & b)",
    successOutput: "{1, 2, 3, 4, 5}\n{3}",
    successExplanation: "| は和集合、& は共通部分です。setは順序ではなく、要素が含まれているかを中心に扱います。表示順には依存しないでください。",
    errorCode: "values = {[1, 2], [3, 4]}",
    errorOutput: "TypeError: unhashable type: 'list'",
    errorExplanation: "setの要素には、変更可能なlistをそのまま入れられません。要素として使うならtupleなどのハッシュ可能な値にします。",
    fixCode: "values = {(1, 2), (3, 4)}",
    arguments: "<strong>iterable</strong>：省略可能です。渡した要素から重複を取り除いてsetを作ります。<br>空のsetは <code>set()</code> で作ります。<code>{}</code> は空のdictです。",
    mutation: "<code>add()</code>や<code>remove()</code>は元のsetを変更します。集合演算子 <code>|</code> や <code>&</code> は新しいsetを返します。",
    related: ["set.add()", "set.remove()", "frozenset"]
  },
  {
    id: "pandas",
    title: "pandas",
    category: "外部パッケージ",
    path: "外部パッケージ › データ分析",
    summary: "表形式のデータを読み込み、整理、集計、保存するための外部パッケージです。",
    keywords: "データ分析 表 CSV Excel DataFrame Series pd",
    signature: "import pandas as pd",
    successCode: "import pandas as pd\n\ndf = pd.DataFrame({\"name\": [\"Aki\", \"Mio\"], \"score\": [82, 91]})\nprint(df)",
    successOutput: "  name  score\n0  Aki     82\n1  Mio     91",
    successExplanation: "2行2列のDataFrameです。左端の0と1はインデックス、nameとscoreは列名です。",
    errorCode: "import pandas as pd",
    errorOutput: "ModuleNotFoundError: No module named 'pandas'",
    errorExplanation: "現在使用しているPython環境にpandasがインストールされていない、または別の仮想環境へインストールされています。",
    fixCode: "python -m pip install pandas",
    arguments: "pandasは標準ライブラリではありません。使用するPython環境へインストールしてから、一般的に <code>pd</code> という別名で読み込みます。",
    mutation: "処理によって元のDataFrameを変更するものと、新しいDataFrameを返すものがあります。各メソッドの戻り値を個別に確認します。",
    related: ["pandas.DataFrame", "pandas.read_csv()", "NumPy"]
  },
  {
    id: "pandas-read-csv",
    title: "pandas.read_csv()",
    category: "外部パッケージ",
    path: "pandas › 入出力 › CSV",
    summary: "CSVファイルを読み込み、DataFrameとして返します。",
    keywords: "CSV 読み込み ファイル DataFrame encoding path pandas",
    signature: "pandas.read_csv(filepath_or_buffer, ...)",
    successCode: "import pandas as pd\n\ndf = pd.read_csv(\"scores.csv\")\nprint(df.head())",
    successOutput: "   name  score\n0   Aki     82\n1   Mio     91",
    successExplanation: "CSVの先頭行が列名として使われ、各データ行に0から始まるインデックスが付きます。head()は先頭部分を確認するメソッドです。",
    errorCode: "df = pd.read_csv(\"score.csv\")",
    errorOutput: "FileNotFoundError: [Errno 2] No such file or directory: 'score.csv'",
    errorExplanation: "現在の作業ディレクトリから見てscore.csvが存在しません。ファイル名、拡張子、相対パスの基準を確認します。",
    fixCode: "from pathlib import Path\nprint(Path.cwd())\ndf = pd.read_csv(\"scores.csv\")",
    arguments: "<strong>filepath_or_buffer</strong>：CSVのパスなどです。<br>よく使う引数には <code>encoding</code>、<code>sep</code>、<code>header</code>、<code>usecols</code> があります。",
    mutation: "ファイルを読み込み、新しいDataFrameを返します。CSVファイル自体を書き換える処理ではありません。",
    related: ["pandas", "DataFrame.head()", "DataFrame.to_csv()"]
  },
  {
    id: "dict-get",
    title: "dict.get()",
    category: "メソッド",
    path: "組み込み型 › dict › メソッド",
    summary: "辞書からキーに対応する値を取得し、キーがない場合の既定値も指定できます。",
    keywords: "辞書 キー 取得 デフォルト KeyError dictionary",
    signature: "dict.get(key, default=None)",
    successCode: "user = {\"name\": \"Aki\"}\nprint(user.get(\"name\"))\nprint(user.get(\"age\", 0))",
    successOutput: "Aki\n0",
    successExplanation: "nameは登録済みの値を返します。ageは存在しないため、指定した既定値0を返します。",
    errorCode: "user = {\"name\": \"Aki\"}\nprint(user[\"age\"])",
    errorOutput: "KeyError: 'age'",
    errorExplanation: "角括弧で存在しないキーを取得するとKeyErrorになります。キーがなくてもよい場面ではget()を使用できます。",
    fixCode: "print(user.get(\"age\", 0))",
    arguments: "<strong>key</strong>：探すキーです。<br><strong>default</strong>：キーが存在しない場合に返す値です。省略時はNoneです。",
    mutation: "辞書を読み取るだけで、元のdictは変更しません。",
    related: ["dict.setdefault()", "dict.keys()", "KeyError"]
  },
  {
    id: "dict-update",
    title: "dict.update()",
    category: "メソッド",
    path: "組み込み型 › dict › メソッド",
    summary: "別の辞書やキーと値を使って、元の辞書を直接更新します。",
    keywords: "辞書 更新 追加 上書き inventory magic_item None 破壊的変更",
    signature: "dict.update([mapping], **kwargs)",
    successCode: "inventory = {\"sword\": 2}\nresult = inventory.update({\"magic_item\": 1})\nprint(inventory)\nprint(result)",
    successOutput: "{'sword': 2, 'magic_item': 1}\nNone",
    successExplanation: "inventoryには新しいキーが追加されました。一方、update()の戻り値はNoneです。更新後の辞書を受け取るための代入は不要です。",
    errorCode: "inventory = {\"sword\": 2}\ninventory = inventory.update({\"magic_item\": 1})\nprint(inventory[\"sword\"])",
    errorOutput: "TypeError: 'NoneType' object is not subscriptable",
    errorExplanation: "update()の戻り値Noneをinventoryへ代入したため、辞書ではなくなりました。",
    fixCode: "inventory.update({\"magic_item\": 1})\nprint(inventory[\"sword\"])",
    arguments: "<strong>mapping</strong>：追加・更新するキーと値です。<br><strong>戻り値</strong>：常に <code>None</code> です。",
    mutation: "元の辞書を直接変更します。同じキーがあれば、その値を上書きします。",
    related: ["dict.get()", "dict.setdefault()", "dict | dict"]
  },
  {
    id: "str-split",
    title: "str.split()",
    category: "メソッド",
    path: "組み込み型 › str › メソッド",
    summary: "文字列を区切り文字で分け、文字列のリストとして返します。",
    keywords: "文字列 分割 item quantity colon コロン list unpack",
    signature: "str.split(sep=None, maxsplit=-1)",
    successCode: "argument = \"sword:2\"\nitem_name, quantity_text = argument.split(\":\")\nprint(item_name)\nprint(quantity_text)",
    successOutput: "sword\n2",
    successExplanation: "split()の戻り値はlist[str]です。この例では['sword', '2']となり、2個の変数へ分けて代入しています。",
    errorCode: "argument = \"hello\"\nitem_name, quantity_text = argument.split(\":\")",
    errorOutput: "ValueError: not enough values to unpack (expected 2, got 1)",
    errorExplanation: "helloにはコロンがないため、split()の結果が1要素だけになり、2変数へ分けられません。",
    fixCode: "if argument.count(\":\") != 1:\n    print(\"形式が不正です\")\nelse:\n    item_name, quantity_text = argument.split(\":\")",
    arguments: "<strong>sep</strong>：区切り文字です。省略時は連続する空白で分割します。<br><strong>戻り値</strong>：<code>list[str]</code>です。",
    mutation: "元の文字列は変更しません。分割結果として新しいlistを返します。",
    related: ["str.rsplit()", "str.partition()", "list"]
  },
  {
    id: "continue",
    title: "continue",
    category: "構文",
    path: "構文 › ループ制御",
    summary: "現在の周回だけを中断し、同じループの次の周回へ進みます。",
    keywords: "for while 次 周回 スキップ 不正入力 制御フロー",
    signature: "continue",
    successCode: "values = [\"10\", \"bad\", \"20\"]\nfor value in values:\n    if not value.isdigit():\n        continue\n    print(int(value))",
    successOutput: "10\n20",
    successExplanation: "badの周回だけが中断されました。forループそのものは終わらず、次の20を処理します。",
    errorCode: "value = \"bad\"\nif not value.isdigit():\n    continue",
    errorOutput: "SyntaxError: 'continue' not properly in loop",
    errorExplanation: "continueはforまたはwhileの中でしか使用できません。ifの中でも、外側にループが必要です。",
    fixCode: "for value in values:\n    if not value.isdigit():\n        continue",
    arguments: "引数や戻り値はありません。作用する対象は、continueを含む最も内側のループです。",
    mutation: "データを直接変更する構文ではありません。現在の処理位置を次の周回へ移します。",
    related: ["break", "return", "for", "while"]
  },
  {
    id: "try-except",
    title: "try / except",
    category: "構文",
    path: "構文 › 例外処理",
    summary: "失敗する可能性のある処理を試し、指定した例外が発生したときの処理を分けます。",
    keywords: "例外 エラー ValueError int 変換 継続 try except",
    signature: "try: ... except ExceptionType: ...",
    successCode: "quantity_text = \"3\"\ntry:\n    quantity = int(quantity_text)\nexcept ValueError:\n    quantity = 0\nprint(quantity)",
    successOutput: "3",
    successExplanation: "int('3')は成功するため、exceptの処理には入りません。quantityはint型の3です。",
    errorCode: "quantity = int(\"three\")",
    errorOutput: "ValueError: invalid literal for int() with base 10: 'three'",
    errorExplanation: "threeは10進整数として解釈できません。ValueErrorを捕まえると、不正な1件だけを処理できます。",
    fixCode: "try:\n    quantity = int(\"three\")\nexcept ValueError:\n    print(\"数量が整数ではありません\")",
    arguments: "<strong>except ValueError</strong>：整数変換などの値に関する失敗だけを捕まえます。広すぎるexceptは原因を隠すため避けます。",
    mutation: "例外を捕まえる構文です。変数の変更はtryまたはexcept内の各処理によって決まります。",
    related: ["ValueError", "continue", "raise", "finally"]
  },
  {
    id: "sys-argv",
    title: "sys.argv",
    category: "標準ライブラリ",
    path: "標準ライブラリ › sys",
    summary: "コマンドラインで渡された引数を、文字列のリストとして保持します。",
    keywords: "コマンドライン 引数 script terminal list str sys argv",
    signature: "sys.argv: list[str]",
    successCode: "# python inventory.py sword:2 potion:5\nimport sys\n\nprint(sys.argv[0])\nprint(sys.argv[1:])",
    successOutput: "inventory.py\n['sword:2', 'potion:5']",
    successExplanation: "0番目はプログラム名です。ユーザーが渡した引数だけを処理する場合はsys.argv[1:]を使います。",
    errorCode: "import sys\nprint(sys.argv[1])  # 引数なしで実行",
    errorOutput: "IndexError: list index out of range",
    errorExplanation: "引数がないとsys.argvにはプログラム名しかなく、1番目の要素は存在しません。",
    fixCode: "arguments = sys.argv[1:]\nif not arguments:\n    print(\"引数がありません\")",
    arguments: "各要素は常に文字列です。数値として使う場合は、検証してから<code>int()</code>などで変換します。",
    mutation: "通常は読み取りに使用します。<code>sys.argv[1:]</code>は新しいlistを作ります。",
    related: ["sys", "argparse", "list", "str.split()"]
  },
  {
    id: "yield",
    title: "yield",
    category: "構文",
    path: "構文 › ジェネレーター",
    summary: "値を1つ返して処理位置を一時停止し、次回そこから再開します。",
    keywords: "generator next return 遅延評価 メモリ 無限",
    signature: "yield expression",
    successCode: "def count_up():\n    number = 1\n    while True:\n        yield number\n        number += 1\n\ngenerator = count_up()\nprint(next(generator))\nprint(next(generator))",
    successOutput: "1\n2",
    successExplanation: "最初のnext()で1を返して停止し、次のnext()では停止位置の次から再開して2を返します。",
    errorCode: "generator = count_up()\nprint(generator[0])",
    errorOutput: "TypeError: 'generator' object is not subscriptable",
    errorExplanation: "ジェネレーターはlistのように添字で取得できません。next()またはforで順番に値を取り出します。",
    fixCode: "print(next(generator))",
    arguments: "<strong>expression</strong>：今回外へ渡す値です。yieldを含む関数を呼ぶと、値そのものではなくgeneratorオブジェクトが返ります。",
    mutation: "関数のローカル状態と実行位置を保持します。値をすべてメモリへ作るのではなく、必要な分だけ生成できます。",
    related: ["return", "next()", "iter()", "for"]
  },
  {
    id: "list-comprehension",
    title: "リスト内包表記",
    category: "構文",
    path: "構文 › 内包表記",
    summary: "新しいリストを作る繰り返し処理を、1つの式で表します。",
    keywords: "list comprehension for if squares 変換 フィルター",
    signature: "[expression for item in iterable if condition]",
    successCode: "numbers = [1, 2, 3, 4]\nsquares = [number * number for number in numbers]\nprint(squares)",
    successOutput: "[1, 4, 9, 16]",
    successExplanation: "numbersから1要素ずつnumberへ取り出し、number * numberの結果で新しいlistを作ります。",
    errorCode: "squares = [number * number in numbers]",
    errorOutput: "NameError: name 'number' is not defined",
    errorExplanation: "内包表記には、要素を取り出すforが必要です。通常のforへ展開すると構造を確認できます。",
    fixCode: "squares = []\nfor number in numbers:\n    squares.append(number * number)",
    arguments: "<strong>expression</strong>：新しい要素です。<br><strong>item</strong>：現在の要素です。<br><strong>iterable</strong>：元のデータです。",
    mutation: "元のnumbersは変更せず、新しいlistを返します。複雑になる場合は通常のforの方が読みやすくなります。",
    related: ["for", "list.append()", "generator expression"]
  },
  {
    id: "csv-dict-reader",
    title: "csv.DictReader",
    category: "標準ライブラリ",
    path: "標準ライブラリ › csv › CSV読み込み",
    summary: "CSVの各行を、列名をキーにした辞書として1行ずつ読み込みます。",
    keywords: "CSV 標準ライブラリ DictReader 辞書 行 読み込み ファイル",
    signature: "csv.DictReader(csvfile, fieldnames=None, ...)",
    successCode: "import csv\n\nwith open(\"scores.csv\", encoding=\"utf-8\", newline=\"\") as file:\n    reader = csv.DictReader(file)\n    for row in reader:\n        print(row[\"name\"], row[\"score\"])",
    successOutput: "Aki 82\nMio 91",
    successExplanation: "先頭行のnameとscoreが辞書のキーになります。大きいCSVでも全行を一度にメモリへ置かず、1行ずつ処理できます。",
    errorCode: "with open(\"scores.csv\") as file:\n    reader = csv.DictReader(file)\n    print(reader[0])",
    errorOutput: "TypeError: 'DictReader' object is not subscriptable",
    errorExplanation: "DictReaderはlistではなく反復可能オブジェクトです。添字ではなくforまたはnext()で1行ずつ取り出します。",
    fixCode: "first_row = next(reader)\nprint(first_row)",
    arguments: "<strong>csvfile</strong>：テキストモードで開いたファイルです。<br><strong>戻り値</strong>：各行をdictとして順番に返すDictReaderオブジェクトです。",
    mutation: "CSVファイルは変更しません。読み取った各行ごとに新しいdictを返します。",
    related: ["csv.reader()", "pandas.read_csv()", "dict.get()"]
  },
  {
    id: "dataframe-to-csv",
    title: "DataFrame.to_csv()",
    category: "外部パッケージ",
    path: "pandas › 入出力 › CSV保存",
    summary: "DataFrameをCSV形式のファイル、またはCSV文字列として出力します。",
    keywords: "pandas CSV 保存 書き込み export DataFrame index encoding",
    signature: "DataFrame.to_csv(path_or_buf=None, *, sep=',', index=True, ...)",
    successCode: "import pandas as pd\n\ndf = pd.DataFrame({\"name\": [\"Aki\", \"Mio\"], \"score\": [82, 91]})\ndf.to_csv(\"scores_out.csv\", index=False, encoding=\"utf-8\")",
    successOutput: "scores_out.csv\nname,score\nAki,82\nMio,91",
    successExplanation: "index=Falseにより、0と1のインデックス列をCSVへ書き出していません。元のdfは変更されません。",
    errorCode: "df.to_csv(\"missing/scores.csv\", index=False)",
    errorOutput: "OSError: Cannot save file into a non-existent directory: 'missing'",
    errorExplanation: "保存先のmissingディレクトリが存在しません。to_csv()は親ディレクトリを自動作成しません。",
    fixCode: "from pathlib import Path\nPath(\"missing\").mkdir(exist_ok=True)\ndf.to_csv(\"missing/scores.csv\", index=False)",
    arguments: "<strong>path_or_buf</strong>：保存先です。省略するとCSV文字列を返します。<br><strong>index</strong>：行インデックスを書き出すか指定します。",
    mutation: "DataFrame自体は変更しません。指定した保存先のファイルは新規作成または上書きされるため、パスを確認します。",
    related: ["pandas.read_csv()", "csv.DictReader", "pathlib.Path"]
  }
];

const learningGuides = {
  "list-append": {
    trace: [["numbers", "[10, 20]", "list[int]", "[10, 20, 30]"], ["result", "未定義", "NoneType", "None"]],
    flow: ["numbersをlistとして用意する", "append(30)で元のlistを変更する", "print()で変更後の値を確認する"],
    tests: ["正常：30を追加する", "空：空リストへ追加する", "形式不正：引数を0個または2個渡す", "型：listやdictを1要素として追加する", "境界：append()の戻り値を代入しない"],
    note: "<strong>最小設計：</strong>1要素ならappend()、複数要素ならextend()です。<br><strong>英語：</strong>append = 末尾に付け加える。"
  },
  "list-extend": {
    trace: [["numbers", "[10, 20]", "list[int]", "[10, 20, 30, 40]"], ["追加データ", "[30, 40]", "list[int]", "変更なし"]],
    flow: ["追加するiterableを受け取る", "要素を1つずつ取り出す", "元のlistの末尾へ順番に追加する"],
    tests: ["正常：listを追加する", "空：空listを渡す", "形式不正：引数を省略する", "型：intを渡してTypeErrorを確認する", "境界：文字列を渡すと1文字ずつ追加される"],
    note: "<strong>最小設計：</strong>複数要素の追加だけならループを書かずextend()を使えます。<br><strong>英語：</strong>extend = 広げる、延長する。"
  },
  "set": {
    trace: [["a", "{1, 2, 3}", "set[int]", "変更なし"], ["a | b", "未計算", "set[int]", "{1, 2, 3, 4, 5}"], ["a & b", "未計算", "set[int]", "{3}"]],
    flow: ["2つのsetを用意する", "演算子で要素の所属を比較する", "新しいsetとして結果を返す"],
    tests: ["正常：和集合と積集合", "空：set()との演算", "形式不正：{}を空setだと思わない", "型：listを要素にしてTypeErrorを確認", "境界：重複要素が1つになることを確認"],
    note: "<strong>最小設計：</strong>重複除去や所属判定が目的ならlistよりsetが自然です。<br><strong>英語：</strong>union = 和集合、intersection = 積集合。"
  },
  "pandas": {
    trace: [["df", "未定義", "pandas.DataFrame", "2行×2列"], ["df['score']", "未取得", "pandas.Series", "[82, 91]"]],
    flow: ["pandasをpdという別名で読み込む", "列名と値からDataFrameを作る", "行・列・型を確認する"],
    tests: ["正常：DataFrameを作る", "空：空のDataFrame", "形式不正：列ごとの長さを変える", "型：dtypesで列の型を確認", "境界：欠損値Noneを含める"],
    note: "<strong>最小設計：</strong>まずhead()、shape、dtypes、info()で状態を確認してから加工します。<br><strong>英語：</strong>DataFrame = 行と列を持つ表形式データ。"
  },
  "pandas-read-csv": {
    trace: [["ファイル", "scores.csv", "CSV", "変更なし"], ["df", "未定義", "pandas.DataFrame", "CSVの内容を保持"]],
    flow: ["現在地からファイルパスを解決する", "CSVを解析する", "DataFrameを返す", "head()やdtypesで結果を検証する"],
    tests: ["正常：UTF-8のCSV", "空：ヘッダーだけのCSV", "形式不正：列数が不揃い", "型：数値列のdtypesを確認", "境界：空欄をNaNとして確認"],
    note: "<strong>最小設計：</strong>読み込み直後にhead()、shape、dtypesを確認します。<br><strong>英語：</strong>encoding = 文字コード、separator = 区切り文字。"
  },
  "dict-get": {
    trace: [["user", "{'name': 'Aki'}", "dict[str, str]", "変更なし"], ["戻り値", "未取得", "str / int", "Aki または 0"]],
    flow: ["keyを辞書内で探す", "存在すれば対応する値を返す", "存在しなければdefaultを返す"],
    tests: ["正常：存在するkey", "空：空dictから取得", "形式不正：引数を3個渡す", "型：defaultの型を確認", "境界：値がNoneのkeyと未登録keyを区別"],
    note: "<strong>最小設計：</strong>keyがなくてもよいならget()、ないこと自体が異常なら[]を使います。<br><strong>英語：</strong>default = 既定値。"
  },
  "dict-update": {
    trace: [["inventory", "{'sword': 2}", "dict[str, int]", "{'sword': 2, 'magic_item': 1}"], ["result", "未定義", "NoneType", "None"]],
    flow: ["更新用のキーと値を受け取る", "同じキーなら上書き、なければ追加する", "元のdictを変更しNoneを返す"],
    tests: ["正常：新規keyを追加", "空：空dictでupdate", "形式不正：辞書化できない値を渡す", "型：戻り値がNoneか確認", "境界：既存keyを上書き"],
    note: "<strong>最小設計：</strong>magic_itemを1件追加するだけなら、追加用関数や再分割処理は不要です。<br><strong>英語：</strong>update = 更新する。"
  },
  "str-split": {
    trace: [["argument", "'sword:2'", "str", "変更なし"], ["分割結果", "未作成", "list[str]", "['sword', '2']"], ["quantity", "'2'", "int", "2（変換後）"]],
    flow: ["strを区切り文字で分割する", "要素数が期待どおりか確認する", "名前と数量文字列へ代入する", "数量をintへ変換する"],
    tests: ["正常：sword:2", "空：空文字列", "形式不正：helloやa:b:c", "型変換不正：key:value", "境界：名前または数量が空"],
    note: "<strong>最小設計：</strong>分割と整数変換は別段階にし、どこで失敗したか区別します。<br><strong>英語：</strong>split = 分割する。"
  },
  "continue": {
    trace: [["value", "'bad'", "str", "次の要素'20'へ"], ["ループ", "2周目", "制御状態", "3周目"]],
    flow: ["現在の要素を確認する", "不正なら残りの処理を行わない", "同じループの次の周回へ進む"],
    tests: ["正常：不正な1件だけスキップ", "空：空iterableでは実行されない", "形式不正：ループ外で使う", "型：条件式の真偽を確認", "境界：入れ子ループでは最内側に作用"],
    note: "<strong>比較：</strong>continueは今回だけ、breakはループ全体、returnは関数全体を終了します。"
  },
  "try-except": {
    trace: [["quantity_text", "'three'", "str", "変更なし"], ["quantity", "未定義", "int", "変換失敗のため未定義"], ["処理位置", "try内", "制御状態", "except内"]],
    flow: ["失敗する可能性のある処理をtryする", "成功ならexceptを飛ばす", "指定例外ならexceptへ移る", "必要ならcontinueで次の入力へ進む"],
    tests: ["正常：'3'をintへ変換", "空：''でValueError", "形式不正：'three'", "型：Noneを渡したTypeErrorは別例外", "境界：0や負数は変換後に別途検証"],
    note: "<strong>最小設計：</strong>例外が起き得る最小範囲だけをtryに入れます。<br><strong>英語：</strong>exception = 例外。"
  },
  "sys-argv": {
    trace: [["sys.argv", "['inventory.py', 'sword:2']", "list[str]", "変更なし"], ["arguments", "未作成", "list[str]", "['sword:2']"], ["arg", "未取得", "str", "'sword:2'"]],
    flow: ["コマンドライン入力をlist[str]で受け取る", "0番目のプログラム名を除く", "引数を1つずつ処理する"],
    tests: ["正常：複数引数", "空：プログラム名だけ", "形式不正：想定外の書式", "型：数字も最初はstr", "境界：空白を含む引数は引用符で囲む"],
    note: "<strong>最小設計：</strong>ユーザー引数だけなら最初にsys.argv[1:]へ切り出します。<br><strong>英語：</strong>argument = 引数。"
  },
  "yield": {
    trace: [["generator", "count_up()", "generator", "同じオブジェクト"], ["number", "1", "int", "停止後に2へ"], ["next()", "未実行", "返り値 int", "1"]],
    flow: ["関数呼び出しでgeneratorを作る", "next()でyieldまで進む", "値を返して実行位置を保存する", "次のnext()で続きから再開する"],
    tests: ["正常：next()を2回", "空：yieldが一度も実行されない", "形式不正：添字で取得する", "型：type()でgeneratorを確認", "境界：有限generatorの末尾でStopIteration"],
    note: "<strong>比較：</strong>returnは関数を終了し、yieldは状態を残して一時停止します。"
  },
  "list-comprehension": {
    trace: [["numbers", "[1, 2, 3, 4]", "list[int]", "変更なし"], ["number", "各要素", "int", "1→2→3→4"], ["squares", "未定義", "list[int]", "[1, 4, 9, 16]"]],
    flow: ["numbersから要素を1つ取り出す", "式number * numberを評価する", "結果を新しいlistへ追加する", "全要素が終わったらlistを返す"],
    tests: ["正常：4つの数値", "空：空listから空list", "形式不正：forを書き忘れる", "型：文字列で同じ式を試さない", "境界：条件付き内包表記を通常forへ展開"],
    note: "<strong>最小設計：</strong>一目で読めない内包表記は通常のforへ戻します。<br><strong>英語：</strong>comprehension = 内包表記。"
  },
  "csv-dict-reader": {
    trace: [["file", "開いたCSV", "TextIOWrapper", "読み取り位置が進む"], ["reader", "未作成", "csv.DictReader", "各行をdictで返す"], ["row", "未取得", "dict[str, str]", "{'name': 'Aki', 'score': '82'}"]],
    flow: ["CSVをnewline=''で開く", "1行目から列名を読み取る", "各データ行をdictへ変換する", "forで1行ずつ処理する"],
    tests: ["正常：ヘッダー付きCSV", "空：ヘッダーだけのCSV", "形式不正：列数が不揃い", "型：数値も最初はstr", "境界：空欄は空文字列として読む"],
    note: "<strong>使い分け：</strong>標準機能だけで1行ずつ扱うならDictReader、表全体を分析するならpandasです。"
  },
  "dataframe-to-csv": {
    trace: [["df", "2行×2列", "pandas.DataFrame", "変更なし"], ["保存先", "未作成", "CSVファイル", "scores_out.csv"], ["戻り値", "未定義", "NoneType", "None"]],
    flow: ["DataFrameと保存先を確認する", "indexやencodingを決める", "CSV形式へ変換する", "ファイルへ書き込み、必要なら読み直して確認する"],
    tests: ["正常：index=Falseで保存", "空：空DataFrameを保存", "形式不正：存在しない親ディレクトリ", "型：object列と数値列を確認", "境界：同名ファイルの上書きに注意"],
    note: "<strong>最小設計：</strong>提出用CSVはindex=Falseを確認し、保存後にread_csv()で読み戻すと安心です。"
  }
};

const moduleCatalog = window.PYTHON_MODULE_CATALOG || {
  metadata: { moduleCount: 0, apiCount: 0, pythonVersion: "", pandasVersion: "", scope: "" },
  modules: []
};

const featuredModules = new Set(["pandas", "csv", "pathlib", "json", "os", "sys", "math", "datetime"]);
const apiKindLabels = { function: "関数", class: "クラス", constant: "定数" };

const state = {
  query: "",
  category: "all",
  favoritesOnly: false,
  currentEntry: null,
  favorites: loadFavorites(),
  moduleQuery: "",
  moduleCategory: "all",
  currentModule: null,
  apiQuery: "",
  apiKind: "all"
};

const elements = {
  drawer: document.querySelector("#drawer"),
  scrim: document.querySelector("#scrim"),
  menuButton: document.querySelector("#menuButton"),
  closeDrawerButton: document.querySelector("#closeDrawerButton"),
  searchInput: document.querySelector("#searchInput"),
  resultGrid: document.querySelector("#resultGrid"),
  resultCount: document.querySelector("#resultCount"),
  resultTitle: document.querySelector("#resultTitle"),
  emptyState: document.querySelector("#emptyState"),
  entryDialog: document.querySelector("#entryDialog"),
  moduleGrid: document.querySelector("#moduleGrid"),
  moduleSearchInput: document.querySelector("#moduleSearchInput"),
  moduleCategoryList: document.querySelector("#moduleCategoryList"),
  moduleEmptyState: document.querySelector("#moduleEmptyState"),
  moduleDialog: document.querySelector("#moduleDialog"),
  apiSearchInput: document.querySelector("#apiSearchInput"),
  apiList: document.querySelector("#apiList"),
  apiEmptyState: document.querySelector("#apiEmptyState"),
  toast: document.querySelector("#toast")
};

function loadFavorites() {
  try {
    return new Set(JSON.parse(localStorage.getItem("python-pocket-favorites") || "[]"));
  } catch {
    return new Set();
  }
}

function saveFavorites() {
  try {
    localStorage.setItem("python-pocket-favorites", JSON.stringify([...state.favorites]));
  } catch {
    showToast("この環境ではお気に入りを保存できません");
  }
}

function normalize(value) {
  return value.toLocaleLowerCase("ja").replace(/[()._\s]/g, "");
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function visibleEntries() {
  const query = normalize(state.query);
  return entries.filter((entry) => {
    const categoryMatch = state.category === "all" || entry.category === state.category || (state.category === "エラー" && entry.errorOutput);
    const favoriteMatch = !state.favoritesOnly || state.favorites.has(entry.id);
    const guide = learningGuides[entry.id];
    const guideText = guide ? `${guide.flow.join(" ")} ${guide.tests.join(" ")} ${guide.note}` : "";
    const haystack = normalize(`${entry.title} ${entry.category} ${entry.path} ${entry.summary} ${entry.keywords} ${entry.errorOutput} ${guideText}`);
    return categoryMatch && favoriteMatch && (!query || haystack.includes(query));
  });
}

function renderEntries() {
  const visible = visibleEntries();
  elements.resultGrid.innerHTML = visible.map((entry) => `
    <button class="entry-card" type="button" data-entry-id="${entry.id}">
      <span class="card-meta">
        <span class="type-badge">${entry.category}</span>
        <span class="card-star" aria-hidden="true">${state.favorites.has(entry.id) ? "★" : "☆"}</span>
      </span>
      <h3>${entry.title}</h3>
      <p>${entry.summary}</p>
      <span class="card-path">${entry.path}</span>
    </button>
  `).join("");
  elements.resultCount.textContent = `${visible.length}項目`;
  elements.emptyState.hidden = visible.length !== 0;
  elements.resultGrid.hidden = visible.length === 0;
  elements.resultTitle.textContent = state.favoritesOnly ? "お気に入り" : state.query ? `「${state.query}」の検索結果` : state.category === "all" ? "実行例・エラー例つき学習辞書" : state.category;
}

function visibleModules() {
  const query = normalize(state.moduleQuery);
  return moduleCatalog.modules.filter((module) => {
    const categoryMatch = state.moduleCategory === "all" || module.category === state.moduleCategory || module.source === state.moduleCategory;
    const apiNames = query ? module.api.map((item) => item.name).join(" ") : "";
    const haystack = normalize(`${module.name} ${module.source} ${module.category} ${module.summary} ${apiNames}`);
    return categoryMatch && (!query || haystack.includes(query));
  });
}

function renderModuleCategories() {
  const categories = ["all", "外部ライブラリ", ...new Set(moduleCatalog.modules.map((module) => module.category))];
  const labels = { all: "すべて", 外部ライブラリ: "外部" };
  elements.moduleCategoryList.innerHTML = categories.map((category) => `
    <button type="button" class="${state.moduleCategory === category ? "active" : ""}" data-module-category="${escapeHTML(category)}">
      ${labels[category] || escapeHTML(category)}
    </button>
  `).join("");
}

function renderModules() {
  const visible = visibleModules();
  elements.moduleGrid.innerHTML = visible.map((module) => `
    <button class="module-card ${featuredModules.has(module.name) ? "featured" : ""}" type="button" data-module-name="${escapeHTML(module.name)}">
      <span class="module-card-top">
        <span class="module-source">${escapeHTML(module.source)}</span>
        <span class="module-arrow" aria-hidden="true">›</span>
      </span>
      <h3>${escapeHTML(module.name)}</h3>
      <p>${escapeHTML(module.summary)}</p>
      <span class="module-card-counts">
        <b>ƒ ${module.counts.function}</b><b>◆ ${module.counts.class}</b><b>● ${module.counts.constant}</b>
      </span>
    </button>
  `).join("");
  elements.moduleEmptyState.hidden = visible.length !== 0;
  elements.moduleGrid.hidden = visible.length === 0;
  document.querySelector("#moduleTotalCount").textContent = `${visible.length} / ${moduleCatalog.metadata.moduleCount}モジュール`;
}

function renderApiItems() {
  if (!state.currentModule) return;
  const query = normalize(state.apiQuery);
  const visible = state.currentModule.api.filter((item) => {
    const kindMatch = state.apiKind === "all" || item.kind === state.apiKind;
    const textMatch = !query || normalize(`${item.name} ${item.signature} ${item.summary}`).includes(query);
    return kindMatch && textMatch;
  });
  elements.apiList.innerHTML = visible.map((item) => `
    <details class="api-item">
      <summary>
        <span class="api-item-name"><span class="api-kind">${apiKindLabels[item.kind]}</span>${escapeHTML(item.name)}</span>
      </summary>
      <div class="api-item-body">
        <pre class="api-signature">${escapeHTML(`${state.currentModule.name}.${item.name}${item.signature}`)}</pre>
        <p class="api-summary">${escapeHTML(item.summary || "公開APIの名前とシグネチャを表示しています。詳しい仕様は公式ドキュメントも確認してください。")}</p>
      </div>
    </details>
  `).join("");
  document.querySelector("#apiResultCount").textContent = `${visible.length}件を表示（公開トップレベルAPI）`;
  elements.apiEmptyState.hidden = visible.length !== 0;
  elements.apiList.hidden = visible.length === 0;
}

function openModule(module) {
  state.currentModule = module;
  state.apiQuery = "";
  state.apiKind = "all";
  elements.apiSearchInput.value = "";
  document.querySelector("#moduleDialogBreadcrumb").textContent = `${module.source} › ${module.category}`;
  document.querySelector("#moduleDialogTitle").textContent = module.name;
  document.querySelector("#moduleDialogSummary").textContent = module.summary;
  document.querySelector("#moduleImportCode").textContent = module.importCode;
  document.querySelector("#apiOverview").innerHTML = `
    <div><strong>${module.counts.function}</strong><span>関数</span></div>
    <div><strong>${module.counts.class}</strong><span>クラス</span></div>
    <div><strong>${module.counts.constant}</strong><span>定数</span></div>`;
  document.querySelectorAll("[data-api-kind]").forEach((button) => button.classList.toggle("active", button.dataset.apiKind === "all"));
  renderApiItems();
  if (typeof elements.moduleDialog.showModal === "function") elements.moduleDialog.showModal();
  else elements.moduleDialog.setAttribute("open", "");
}

function closeModule() {
  if (typeof elements.moduleDialog.close === "function") elements.moduleDialog.close();
  else elements.moduleDialog.removeAttribute("open");
  state.currentModule = null;
}

function scrollToModules() {
  closeDrawer();
  document.querySelector("#modules").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openDrawer() {
  elements.drawer.classList.add("open");
  elements.drawer.setAttribute("aria-hidden", "false");
  elements.menuButton.setAttribute("aria-expanded", "true");
  elements.scrim.hidden = false;
}

function closeDrawer() {
  elements.drawer.classList.remove("open");
  elements.drawer.setAttribute("aria-hidden", "true");
  elements.menuButton.setAttribute("aria-expanded", "false");
  elements.scrim.hidden = true;
}

function openEntry(entry) {
  state.currentEntry = entry;
  const guide = learningGuides[entry.id];
  document.querySelector("#dialogBreadcrumb").textContent = entry.path;
  document.querySelector("#dialogTitle").textContent = entry.title;
  document.querySelector("#dialogSummary").textContent = entry.summary;
  document.querySelector("#dialogSignature").textContent = entry.signature;
  document.querySelector("#successCode").textContent = entry.successCode;
  document.querySelector("#successOutput").textContent = entry.successOutput;
  document.querySelector("#successExplanation").textContent = entry.successExplanation;
  document.querySelector("#errorCode").textContent = entry.errorCode;
  document.querySelector("#errorOutput").textContent = entry.errorOutput;
  document.querySelector("#errorExplanation").textContent = entry.errorExplanation;
  document.querySelector("#fixCode").textContent = entry.fixCode;
  document.querySelector("#argumentDetail").innerHTML = entry.arguments;
  document.querySelector("#mutationDetail").innerHTML = entry.mutation;
  document.querySelector("#stateTrace").innerHTML = `
    <table class="trace-table">
      <thead><tr><th>変数・対象</th><th>実行前</th><th>型</th><th>実行後</th></tr></thead>
      <tbody>${guide.trace.map((row) => `<tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`;
  document.querySelector("#flowList").innerHTML = guide.flow.map((step) => `<li>${escapeHTML(step)}</li>`).join("");
  document.querySelector("#testList").innerHTML = guide.tests.map((test) => `<li>${escapeHTML(test)}</li>`).join("");
  document.querySelector("#learningDetail").innerHTML = guide.note;
  document.querySelector("#favoriteEntryButton").textContent = state.favorites.has(entry.id) ? "★" : "☆";
  document.querySelector("#relatedList").innerHTML = entry.related.map((item) => `<button type="button" data-related="${item}">${item}</button>`).join("");
  setExampleMode("success");
  if (typeof elements.entryDialog.showModal === "function") {
    elements.entryDialog.showModal();
  } else {
    elements.entryDialog.setAttribute("open", "");
  }
}

function closeEntry() {
  if (typeof elements.entryDialog.close === "function") elements.entryDialog.close();
  else elements.entryDialog.removeAttribute("open");
  state.currentEntry = null;
}

function setExampleMode(mode) {
  const success = mode === "success";
  document.querySelector("#successPanel").hidden = !success;
  document.querySelector("#errorPanel").hidden = success;
  document.querySelector("#successTab").classList.toggle("active", success);
  document.querySelector("#errorTab").classList.toggle("active", !success);
  document.querySelector("#successTab").setAttribute("aria-selected", String(success));
  document.querySelector("#errorTab").setAttribute("aria-selected", String(!success));
}

function toggleFavorite(entry) {
  if (state.favorites.has(entry.id)) {
    state.favorites.delete(entry.id);
    showToast("お気に入りから外しました");
  } else {
    state.favorites.add(entry.id);
    showToast("お気に入りに追加しました");
  }
  saveFavorites();
  renderEntries();
  if (state.currentEntry) document.querySelector("#favoriteEntryButton").textContent = state.favorites.has(entry.id) ? "★" : "☆";
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  showToast("コードをコピーしました");
}

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 1800);
}

elements.menuButton.addEventListener("click", openDrawer);
elements.closeDrawerButton.addEventListener("click", closeDrawer);
elements.scrim.addEventListener("click", closeDrawer);
document.querySelector("#bottomModuleButton").addEventListener("click", scrollToModules);
document.querySelector("#drawerModuleButton").addEventListener("click", scrollToModules);
document.querySelector("#heroModuleButton").addEventListener("click", scrollToModules);
document.querySelector("#bottomSearchButton").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => elements.searchInput.focus(), 250);
});

document.querySelector("#searchForm").addEventListener("submit", (event) => event.preventDefault());
elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  state.favoritesOnly = false;
  renderEntries();
});

document.querySelectorAll("[data-query]").forEach((button) => button.addEventListener("click", () => {
  elements.searchInput.value = button.dataset.query;
  elements.searchInput.dispatchEvent(new Event("input"));
  document.querySelector("#resultTitle").scrollIntoView({ behavior: "smooth", block: "start" });
}));

elements.moduleSearchInput.addEventListener("input", (event) => {
  state.moduleQuery = event.target.value.trim();
  renderModules();
});

elements.moduleCategoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-module-category]");
  if (!button) return;
  state.moduleCategory = button.dataset.moduleCategory;
  renderModuleCategories();
  renderModules();
});

elements.moduleGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-module-name]");
  if (!card) return;
  const module = moduleCatalog.modules.find((item) => item.name === card.dataset.moduleName);
  if (module) openModule(module);
});

document.querySelectorAll("[data-entry-jump]").forEach((button) => button.addEventListener("click", () => {
  const entry = entries.find((item) => item.id === button.dataset.entryJump);
  if (entry) openEntry(entry);
}));

document.querySelector("#closeModuleDialogButton").addEventListener("click", closeModule);
elements.apiSearchInput.addEventListener("input", (event) => {
  state.apiQuery = event.target.value.trim();
  renderApiItems();
});
document.querySelector("#apiFilterList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-api-kind]");
  if (!button) return;
  state.apiKind = button.dataset.apiKind;
  document.querySelectorAll("[data-api-kind]").forEach((item) => item.classList.toggle("active", item === button));
  renderApiItems();
});
document.querySelector("#copyModuleImportButton").addEventListener("click", () => {
  copyText(document.querySelector("#moduleImportCode").textContent);
});

document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  state.category = button.dataset.filter;
  state.favoritesOnly = false;
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
  closeDrawer();
  renderEntries();
  document.querySelector("#resultTitle").scrollIntoView({ behavior: "smooth", block: "start" });
}));

elements.resultGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-entry-id]");
  if (!card) return;
  const entry = entries.find((item) => item.id === card.dataset.entryId);
  if (entry) openEntry(entry);
});

document.querySelector("#closeDialogButton").addEventListener("click", closeEntry);
document.querySelector("#successTab").addEventListener("click", () => setExampleMode("success"));
document.querySelector("#errorTab").addEventListener("click", () => setExampleMode("error"));
document.querySelector("#favoriteEntryButton").addEventListener("click", () => {
  if (state.currentEntry) toggleFavorite(state.currentEntry);
});

document.querySelectorAll(".copy-button").forEach((button) => button.addEventListener("click", () => {
  const target = document.querySelector(`#${button.dataset.copyTarget}`);
  if (target) copyText(target.textContent);
}));

document.querySelector("#relatedList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-related]");
  if (!button) return;
  closeEntry();
  elements.searchInput.value = button.dataset.related;
  state.query = button.dataset.related;
  state.favoritesOnly = false;
  renderEntries();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function showFavorites() {
  state.favoritesOnly = true;
  state.query = "";
  elements.searchInput.value = "";
  renderEntries();
  document.querySelector("#resultTitle").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#headerFavoriteButton").addEventListener("click", showFavorites);
document.querySelector("#bottomFavoriteButton").addEventListener("click", showFavorites);
document.querySelector("#resetSearchButton").addEventListener("click", () => {
  state.query = "";
  state.category = "all";
  state.favoritesOnly = false;
  elements.searchInput.value = "";
  renderEntries();
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    elements.searchInput.focus();
  }
  if (event.key === "Escape" && elements.drawer.classList.contains("open")) closeDrawer();
});

document.querySelector("#catalogScope").textContent = `Python ${moduleCatalog.metadata.pythonVersion} 標準ライブラリ + pandas ${moduleCatalog.metadata.pandasVersion}。${moduleCatalog.metadata.scope}。合計 ${moduleCatalog.metadata.apiCount.toLocaleString("ja-JP")} API。`;
renderModuleCategories();
renderModules();
renderEntries();
