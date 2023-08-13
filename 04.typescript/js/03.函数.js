//es5方法
// function fun1(){
//     console.log('1');
// }
// var fun2 = function(){
//     console.log('2');
// }
//ts方法
//普通函数
function fun1() {
    return "123";
}
//匿名函数
var fun2 = function () {
    return "123";
};
//定义方法传参
function Params(name, age) {
    return "\u6211\u53EB" + name + ",\u6211\u4ECA\u5E74" + age + "\u5C81";
}
//方法可选参数（可选参数必须配置到参数列表的最后面！！！）
//es5形参和实参可以不一样，但ts中必须一样，如果不一样就需要配置可选参数
function Params1(name, age) {
    if (age) {
        return "\u6211\u53EB" + name + ",\u6211\u4ECA\u5E74" + age + "\u5C81";
    }
    else {
        return "\u6211\u53EB" + name + ",\u6211\u7684\u5E74\u9F84\u4FDD\u5BC6";
    }
}
//默认参数
//es5无法设置默认参数，es6和ts都可以设置默认参数
function Params2(name, age) {
    if (age === void 0) { age = 20; }
    return "\u6211\u53EB" + name + "\uFF0C\u6211\u4ECA\u5E74" + age + "\u5C81";
}
//alert(Params2("zahangsan"));   //输出我叫zhangsan，我今年20岁
//剩余参数
//三点运算符 接收形参传值,把参数列表传入result数组中
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
//alert(sum(1,2,3,4));  //输出10
function sum1(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = a;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
function getInfo(param) {
    if (typeof (param) === "string") {
        return "\u6211\u53EB" + param;
    }
    else if (typeof (param) === "number") {
        return "\u6211\u4ECA\u5E74" + param + "\u5C81";
    }
}
function getInfo1(name, age) {
    if (age) {
        return "\u6211\u53EB" + name + "\uFF0C\u6211\u4ECA\u5E74" + age + "\u5C81";
    }
    else {
        return "\u6211\u53EB" + name;
    }
}
//箭头函数 es6
//this指向的问题    箭头函数中的this指向上下文
//es5
setTimeout(function () {
    alert("run");
}, 1000);
//ts
setTimeout(function () {
    alert("run");
}, 100);
