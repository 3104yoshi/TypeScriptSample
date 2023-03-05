# TypeScriptSample
### TypeScript の install
- node.js を公式サイトからインストール https://nodejs.org/en/
- npm でインストールするときは、-g オプションでパスを通すことができる npm help install で各種オプションを確認できる

### npm init
- npm initで様々な依存関係を追加するのに必要なpackage.json を追加できる
- npm init はファイル名に日本語が含まれてるとエラーが出る

### npm install を用いてツールを導入する方法
- npm install ツール名 で導入する
- よく使うオプション
  - --save-dev は開発中にのみ必要なものをインストールするときのオプション。本オプションをつけてインストールしたモジュールは実際のプロダクトには含まれない
- package.json の devDependencies にinstall したツール が追加される
- package.json の scripts に導入したツールとコマンドを設定できる
  - 例) "start": ツール名 を追加すると、npm start でツールを呼び出せる

### npm install で開発用サーバーを導入する方法
- lite-server
  - 開発用のWebServer。フォルダ内のファイルが変更されると自動的にページがリロードされる (.ts を変更しただけではリロードされない。コンパイルの必要あり)
  - npm install --save-dev lite-server で開発用サーバーを導入できる
  - package.json の devDependencies にlite-server が追加される
  - package.json の scripts に開発に使用するツールを設定する

### enumについて
- 安全上の問題がある (以下、誤った使い方をしているが、コンパイルエラーが出ないパターン)
1. 10 は初めに定義していないが代入できる
```typescript
enum BookEnum {
    comic = 0,
    magazine,
    paperback,
}

const book : BookEnum =  10;
```

2. 存在しないインデックスにアクセスできる
```typescript
enum BookEnum {
    comic = 0,
    magazine,
    paperback,
}

console.log(BookEnum[5]); // // undefined
```


### Tips
- vscode で html と入力すると候補が表示される。html5を選択するとテンプレt－とが表示される
- script タグのdefer 属性でhtmlを解析してからjavascriptを読み込むように設定できる
