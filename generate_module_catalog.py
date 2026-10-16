#!/usr/bin/env python3
"""Generate the browser-side Python module/API catalog.

The catalog intentionally records public top-level names only. Private modules
and names beginning with an underscore are implementation details and are not
part of this learner-facing index.
"""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "dist" / "module-catalog.js"

JAPANESE_SUMMARIES = {
    "pandas": "表形式データを読み込み、整理、集計、保存する外部ライブラリです。CSV学習の中心になります。",
    "csv": "CSV形式のデータを1行ずつ読み書きする標準モジュールです。",
    "json": "JSON形式の文字列やファイルをPythonの値へ変換します。",
    "pathlib": "ファイルやディレクトリのパスをオブジェクトとして扱います。",
    "os": "OSに関係する操作、環境変数、パス、プロセス機能を扱います。",
    "sys": "Python実行環境やコマンドライン引数を扱います。",
    "math": "平方根や三角関数など、実数向けの数学関数を提供します。",
    "statistics": "平均、中央値、分散などの統計計算を行います。",
    "random": "疑似乱数、ランダム選択、シャッフルを扱います。",
    "datetime": "日付、時刻、期間、タイムゾーンを扱います。",
    "collections": "dequeやCounterなど、用途別のコンテナ型を提供します。",
    "itertools": "繰り返し処理を効率よく組み合わせる道具を提供します。",
    "functools": "関数を組み合わせたり、結果をキャッシュしたりします。",
    "re": "正規表現を使って文字列を検索・分割・置換します。",
    "argparse": "コマンドライン引数を定義し、検証して読み取ります。",
    "logging": "プログラムの動作記録を重要度別に出力します。",
    "sqlite3": "SQLiteデータベースをPythonから操作します。",
    "asyncio": "async/awaitによる非同期処理を扱います。",
    "threading": "1つのプロセス内で複数のスレッドを扱います。",
    "subprocess": "別のコマンドやプログラムを子プロセスとして実行します。",
    "typing": "型ヒントを記述するための型や補助機能を提供します。",
    "dataclasses": "データを保持するクラスの定型コードを減らします。",
    "decimal": "10進数を指定した精度で計算します。",
    "fractions": "分数を分子と分母の形で正確に計算します。",
    "unittest": "標準ライブラリだけで自動テストを作成・実行します。",
    "tempfile": "安全な一時ファイルや一時ディレクトリを作成します。",
    "shutil": "ファイルやディレクトリを高水準でコピー・移動します。",
    "glob": "ワイルドカードに一致するパスを検索します。",
}

CATEGORY_MEMBERS = {
    "データ・ファイル": {
        "csv", "json", "pathlib", "os", "io", "pickle", "shelve", "sqlite3",
        "tempfile", "shutil", "glob", "fnmatch", "fileinput", "zipfile", "tarfile",
        "gzip", "bz2", "lzma", "pandas",
    },
    "文字列・形式": {
        "re", "string", "textwrap", "unicodedata", "difflib", "struct", "codecs",
        "html", "xml", "tomllib", "base64", "binascii", "csv",
    },
    "数値・統計": {
        "math", "cmath", "decimal", "fractions", "random", "statistics", "numbers",
    },
    "日時": {"datetime", "calendar", "time", "zoneinfo"},
    "反復・関数": {"collections", "itertools", "functools", "operator", "contextlib"},
    "システム": {
        "sys", "os", "platform", "subprocess", "signal", "threading", "multiprocessing",
        "asyncio", "concurrent", "queue", "socket", "selectors", "sched", "resource",
    },
    "開発・検証": {
        "typing", "dataclasses", "inspect", "traceback", "logging", "warnings", "pdb",
        "unittest", "doctest", "timeit", "profile", "cProfile", "trace", "dis", "ast",
    },
    "Web・通信": {
        "urllib", "http", "email", "socket", "ssl", "ftplib", "poplib", "imaplib",
        "smtplib", "uuid", "ipaddress", "webbrowser",
    },
}

FEATURED_ORDER = ["pandas", "csv", "pathlib", "json", "os", "sys", "math", "datetime"]

INSPECT_CODE = r'''\
import contextlib
import importlib
import inspect
import io
import json
import sys
import warnings

module_name = sys.argv[1]
result = {"ok": False, "api": [], "error": ""}
try:
    with warnings.catch_warnings(), contextlib.redirect_stdout(io.StringIO()), contextlib.redirect_stderr(io.StringIO()):
        warnings.simplefilter("ignore")
        module = importlib.import_module(module_name)

    exported = getattr(module, "__all__", None)
    if isinstance(exported, (list, tuple)) and all(isinstance(name, str) for name in exported):
        names = sorted(set(exported), key=str.casefold)
    else:
        names = sorted((name for name in dir(module) if not name.startswith("_")), key=str.casefold)

    for name in names:
        if name.startswith("_"):
            continue
        try:
            value = getattr(module, name)
        except BaseException:
            continue

        if inspect.isclass(value):
            kind = "class"
        elif inspect.isroutine(value):
            kind = "function"
        elif name.isupper() and isinstance(value, (str, int, float, bool, bytes, tuple, frozenset, type(None))):
            kind = "constant"
        else:
            continue

        try:
            inspected = inspect.signature(value)
            safe_parameters = []
            for parameter in inspected.parameters.values():
                # Some standard-library defaults contain a live os.environ
                # object. Never serialize runtime values into the public site.
                safe_default = parameter.default
                if safe_default is not inspect.Parameter.empty:
                    safe_default = "…"
                safe_parameters.append(
                    parameter.replace(
                        default=safe_default,
                        annotation=inspect.Parameter.empty,
                    )
                )
            signature = str(
                inspected.replace(
                    parameters=safe_parameters,
                    return_annotation=inspect.Signature.empty,
                )
            )
        except BaseException:
            signature = ""
        if len(signature) > 220:
            signature = signature[:217] + "..."
        result["api"].append({
            "name": name,
            "kind": kind,
            "signature": signature,
            # Do not republish third-party documentation text. The catalog is
            # intentionally limited to factual API names and signatures.
            "summary": "",
        })
    result["ok"] = True
except BaseException as exc:
    result["error"] = type(exc).__name__

print(json.dumps(result, ensure_ascii=False))
'''


def category_for(name: str) -> str:
    for category, members in CATEGORY_MEMBERS.items():
        if name in members:
            return category
    return "その他"


def inspect_module(name: str) -> dict:
    try:
        completed = subprocess.run(
            [sys.executable, "-c", INSPECT_CODE, name],
            check=False,
            capture_output=True,
            text=True,
            timeout=4,
        )
        result = json.loads(completed.stdout.strip().splitlines()[-1])
    except (subprocess.TimeoutExpired, json.JSONDecodeError, IndexError):
        result = {"ok": False, "api": [], "error": "読み込み不可"}

    api = result.get("api", [])
    counts = {
        "function": sum(item["kind"] == "function" for item in api),
        "class": sum(item["kind"] == "class" for item in api),
        "constant": sum(item["kind"] == "constant" for item in api),
    }
    source = "外部ライブラリ" if name == "pandas" else "標準ライブラリ"
    return {
        "name": name,
        "source": source,
        "category": category_for(name),
        "summary": JAPANESE_SUMMARIES.get(name) or f"Pythonの{name}モジュールにある公開APIの索引です。",
        "importCode": "import pandas as pd" if name == "pandas" else f"import {name}",
        "available": bool(result.get("ok")),
        "counts": counts,
        "api": api,
    }


def main() -> None:
    public_stdlib = sorted(
        name
        for name in sys.stdlib_module_names
        if not name.startswith("_") and name.isidentifier()
    )
    names = ["pandas", *public_stdlib]
    modules = [inspect_module(name) for name in names]
    modules.sort(
        key=lambda module: (
            FEATURED_ORDER.index(module["name"])
            if module["name"] in FEATURED_ORDER
            else len(FEATURED_ORDER),
            module["name"].casefold(),
        )
    )

    metadata = {
        "pythonVersion": f"{sys.version_info.major}.{sys.version_info.minor}",
        "pandasVersion": __import__("pandas").__version__,
        "scope": "公開トップレベルAPI（先頭が_の内部モジュール・内部名は除外）",
        "moduleCount": len(modules),
        "apiCount": sum(len(module["api"]) for module in modules),
    }
    payload = {"metadata": metadata, "modules": modules}
    OUTPUT.write_text(
        "window.PYTHON_MODULE_CATALOG = "
        + json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    print(json.dumps(metadata, ensure_ascii=False))


if __name__ == "__main__":
    main()
