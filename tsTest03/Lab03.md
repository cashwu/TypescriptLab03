# Lab 03

## 練習步驟

1. 練習 var, let, const, 並觀察產生出來的程式碼

    ``` typescript
    var a = 1;

    const b = 2;
    // b = 3; 取消註解這行

    var c = 100;
    for (var i = 0; i < 10; i++) {
        let c = i;
    }
    console.log(c);
    ```

1. 練習匿名函式，並練習使用 this 和觀察差別

    ``` typescript
    function Hello() {
        this.name = 'John';
        this.Say = () => {
            console.log(`Hello, ${this.name}`);
        }
    }
    ```

1. 練習 if/else, do/while, for/of, 比較 for/in 和 for/off 的差別

   ``` typescript
    var d = "String";
    if (d) {
        console.log(d);
    }

    var count = 0;
    do {
        count += 10;
    } while (count < 100);

    var dataList = ['a', 'b', 'c'];
    for (var data of dataList) {
        console.log(data);
    }
   ```


