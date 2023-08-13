// 属性类接口
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ts自定义单个方法传入参数对json进行约束
function returnName(name) {
    console.log(name);
}
returnName({
    "name": "张三",
});
function returnName1(name) {
    console.log(name.firstName + name.secondName);
}
// 严格约束
returnName1({
    firstName: "张",
    secondName: "三",
});
var md5 = function (key, value) {
    return key + "+" + value;
};
console.log(md5('张', '三'));
var arr = ['123', '456'];
var obj = { name: "没头脑" };
var Dogs = /** @class */ (function () {
    function Dogs() {
    }
    Dogs.prototype.eat = function () {
        console.log(this.name + "\u5403\u7CAE\u98DF");
    };
    return Dogs;
}());
var Cats = /** @class */ (function () {
    function Cats() {
    }
    Cats.prototype.eat = function (food) {
        console.log(this.name + "\u5403" + food);
    };
    return Cats;
}());
var worker = /** @class */ (function () {
    function worker(name) {
        this.name = name;
    }
    worker.prototype.eat = function () {
        console.log(this.name + "吃东西");
    };
    worker.prototype.work = function () {
        console.log(this.name + "做工作");
    };
    return worker;
}());
var porgrammer = /** @class */ (function (_super) {
    __extends(porgrammer, _super);
    function porgrammer(name) {
        return _super.call(this, name) || this;
    }
    porgrammer.prototype.codeing = function () {
        console.log(this.name + "写代码");
    };
    return porgrammer;
}(worker));
