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
// ts中的类定义
var Person = /** @class */ (function () {
    // 构造函数
    function Person(name) {
        this.name = name;
    }
    // 函数
    Person.prototype.run = function () {
        console.log(this.name + "\u5728\u8DD1\u6B65");
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    // 静态函数
    Person.eat = function () {
        console.log("\u5403\u4E1C\u897F");
    };
    // 静态属性
    Person.sex = "男";
    return Person;
}());
var person = new Person("张三");
person.run(); //输出 张三在跑步
Person.eat(); //输出 吃东西
// ts中类的继承
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        return _super.call(this, name) || this;
    }
    Child.prototype.run = function () {
        console.log("\u5B50\u7C7B" + this.name + "\u5728\u8DD1\u6B65");
    };
    return Child;
}(Person));
var child = new Child("张三孩子");
child.run(); //输出 子类张三孩子在跑步
child.setName("老王孩子");
console.log(child.name); // 访问public属性
// ts中的抽象类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
// 子类必须实现
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.eat = function () {
        console.log("\u732B\u5403\u8001\u9F20");
    };
    return Cat;
}());
var cat = new Cat();
cat.eat();
