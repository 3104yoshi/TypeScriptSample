### var と let の違い
- スコープが違う
- var はグローバル変数となり、let はブロック変数となる

### デフォルト関数
- デフォルト値のあるパラメータは右側にあるパラメータにしか設定できない。(1番目の引数にデフォルトを設定し、2番目の引数に設定しない場合、呼び出すときに省略できないため)

### スプレッド演算子 (...)
- 配列の値を展開できる
- array.push(...array2);　で一括で追加できる

### リスト内のオブジェクトをコピー

``` javascript
const array = { ...originalArray }
```
### レストパラメータ
- 任意の数の引数を受け取れる

### 分割代入
- 配列の分割代入
- オブジェクトの分割代入

### interface
- JavaScript には存在しないため、コンパイル後のコードには定義されない

### 型キャスト
- as HTMLInputElement のようにするとキャストできる
- 先頭に <HTMLInputElement> としてもよいが、React を使う場合に衝突する可能性があるので非推奨

### インデックス型
- 
  
### オプショナルチェーン
- プロパティが存在している場合のみ、そのプロパティにアクセスできる

### デコレータ
  - tsconfif の experimentaldecolator を true にする
  - クラスに対して @Function名 というアノテーションをつけることでデコレータをクラスに紐づけることができる
  - デコレータはクラスが定義されたときに実行される
  
  - デコレータファクトリを使用するとデコレータをカスタマイズできる
  - 以下のようにすると、html の app に対してDOM を生成することができる
  
'''TypeScript
function WithTemplate(template: string, hookId: string) {
    return function(_: Function) {
      const hookEl = document.getElementById(hookId);
      if (hookEl) {
        hookEl.innerHTML = template;
      }
    };
  }
  
// @Logger('ログ出力中 - PERSON')
@WithTemplate('<h1>Personオブジェクト</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Personオブジェクトを作成中...');
    }
}

```
