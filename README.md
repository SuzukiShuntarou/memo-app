# memo_app

メモアプリをローカル環境で立ち上げる為の手順です。

## How to Use

1. 作業 PC の任意のディレクトリにて`git clone`してください。

```
$ git clone git@github.com:SuzukiShuntarou/memo-app.git
```

2. `$ cd memo-app`でディレクトリを移動します。
3. `$ git switch memoapp`で memoapp ブランチへ移動します。
4. `$ npm install`で npm パッケージをインストールします。
5. `$ npx prettier --check .` と `$ npx eslint ./src`を実行して警告がでないことを確認します。
6. `$ npm start`で memo_app を起動します。
