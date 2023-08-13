//typescript中的数据类型
// boolean：布尔类型
// number：数字类型
// string：字符串类型
// array：数组类型
// tuple：元组类型
// enum：枚举类型
// any：任意类型
// null和undefined
// void类型
// never类型
//增加了类型校验，必须指定类型
//boolean
var flag = true;
//number
var num = 123;
//string
var str = "123";
//array
//定义方式1
var array = [1, 2, 3];
//定义方式2
var numArray = ['1', '2', '3'];
//tuple  规定数组指定位置的数据类型
var Tuple = [1, '1'];
//enum
// enum 枚举名 {
//     标识符[=整形常量],
//     标识符[=整形常量],
//     ...
// }
var flag1;
(function (flag1) {
    flag1[flag1["success"] = 1] = "success";
    flag1[flag1["error"] = 0] = "error";
})(flag1 || (flag1 = {}));
var a = flag1.success;
console.log(a); // 1
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 3] = "blue";
    Color[Color["green"] = 4] = "green";
})(Color || (Color = {}));
var color = Color.red;
console.log(color); // 0 返回在枚举列表中的下标位置
var green = Color.green;
console.log(green); // 4 因为blue下标为3，1-2自动补全
//any
var Any = 123;
Any = "123";
Any = true;
//用处： 
// var Box:any = document.getElementById("box");
// Box.style.color = 'red';
// null、undefined
var num;
console.log(num); // undefined 报错
var num1;
console.log(num1); // undefined 正确
var num2;
console.log(num2);
// var Null:null;
// Null = 123;     //报错
var num3;
//void
function returnNumber() {
    return 1;
}
function test() {
    console.log("无返回值");
}
//never 不常用  其他类型（包括null和undefined）的子类型，表示从不会出现的值
//意味着声明never的变量只能被never类型所赋值
var aa;
aa = (function () {
    throw new Error("错误");
})();
