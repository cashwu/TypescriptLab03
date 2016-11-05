//// 練習 var, let, const
var a = 1;
var b = 2;
var c = 1000;
for (var i = 0; i < 10; i++) {
    var c_1 = i;
}
console.log(c);
//// 練習匿名函式
function Hello() {
    var _this = this;
    this.name = "cash";
    this.say = function () {
        console.log("hello , " + _this.name);
    };
}
//// 練習 if/else, do/while, for/of
var d = "string";
if (d) {
    console.log(d);
}
var count = 0;
do {
    count += 10;
} while (count < 100);
var dataList = ["a", "b", "c"];
for (var _i = 0, dataList_1 = dataList; _i < dataList_1.length; _i++) {
    var data = dataList_1[_i];
    console.log(data);
}
//# sourceMappingURL=app.js.map