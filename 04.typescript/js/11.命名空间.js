// 命名空间和模块的区别
//命名空间：内部模块，主要是用于组织代码，避免命名冲突
//模   块：ts外部模块的简称，侧重代码的复用，一个模块中可以有多个命名空间
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
var A;
(function (A) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.eat = function (name) {
        };
        ;
        return Animal;
    }());
    //在命名空间外部使用需要导出
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            return _super.call(this, name) || this;
        }
        Cat.prototype.eat = function (name) {
            console.log(this.name + "\u5403\u4E1C\u897F");
        };
        return Cat;
    }(Animal));
    A.Cat = Cat;
    //内部实例化
    var catt = new Cat("小猫");
})(A || (A = {}));
//外部实例化
var CAT = new A.Cat("小猫");
var B;
(function (B) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        // 区别于A空间中的eat方法
        Animal.prototype.eat = function (name) {
        };
        ;
        return Animal;
    }());
})(B || (B = {}));
