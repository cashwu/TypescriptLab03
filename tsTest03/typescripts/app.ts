//// 練習 var, let, const

var a = 1;
const b = 2;

var c = 1000;
for (var i = 0; i < 10; i++) {
    let c = i;
}
console.log(c);

//// 練習匿名函式

function Hello() {
    this.name = "cash";
    this.say = () => {
        console.log(`hello , ${this.name}`);
    }
}

//// 練習 if/else, do/while, for/of
var d = "string";
if (d) {
    console.log(d);
}

var count = 0;
do {
    count += 10;
} while (count < 100)

var dataList = ["a", "b", "c"];
for (var data of dataList) {
    console.log(data);
} 