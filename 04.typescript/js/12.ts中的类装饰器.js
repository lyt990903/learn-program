/*
装饰器：是一种特殊类型的声明，能够附加到声明，方法，属性或参数上，可以修改类的行为。
通俗：装饰器是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能
常见：类装饰器，属性装饰器，方法装饰器，参数装饰器
写法：普通装饰器（无法传参）；装饰器工厂（可传参）
*/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//1.类装饰器：在类声明前声明（紧靠着类声明），类装饰器应用于类构造器，可以用来监视，修改或替换类定义
var A_1;
(function (A_1) {
    // 普通装饰器声明（不修改类结构的情况下，添加功能）
    function logClass(params) {
        //params即为当前装饰的类
        console.log(params);
        params.prototype.newProp = "动态生成的属性";
        params.prototype.nweMethod = function () {
            console.log("动态生成的方法");
        };
    }
    // 类声明
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
        }
        HttpClient.prototype.getDate = function () { };
        HttpClient = __decorate([
            logClass
        ], HttpClient);
        return HttpClient;
    }());
    var http = new HttpClient();
    console.log(http.newProp); //http不规定为any类型时报错
    http.nweMethod(); //http不规定为any类型时报错
    // 装饰器工厂声明
    function logClassFactory(params) {
        return function (target) {
            console.log(target); // target为修饰的类
            console.log(params); // params为传入参数
            // 使用传入的参数动态生成属性
            target.prototype.Name = params;
        };
    }
    // 类声明
    var HttpsClient = /** @class */ (function () {
        function HttpsClient() {
        }
        HttpsClient.prototype.getData = function () { };
        HttpsClient = __decorate([
            logClassFactory("张三")
        ], HttpsClient);
        return HttpsClient;
    }());
    var https = new HttpsClient();
    console.log(https.Name);
})(A_1 || (A_1 = {}));
var A_2;
(function (A_2) {
    // 装饰器重载构造方法，修改方法
    function logClass(target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.apiURL = "修改之后的数据";
                return _this;
            }
            class_1.prototype.getData = function () {
                this.apiURL += "---";
                console.log(this.apiURL);
            };
            return class_1;
        }(target));
    }
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
            this.apiURL = "www.baidu.com";
        }
        HttpClient.prototype.getData = function () {
            console.log(this.apiURL);
        };
        HttpClient = __decorate([
            logClass
        ], HttpClient);
        return HttpClient;
    }());
    var http = new HttpClient();
    http.getData();
})(A_2 || (A_2 = {}));
// 2.属性装饰器：会在运行时当作函数被调用，传入下列2个参数：
/*
        2.1对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        2.2成员的名字
*/
var B_1;
(function (B_1) {
    function logProperty(params) {
        // target为修饰类，attr为修饰属性（在谁上面修饰谁）
        return function (target, attr) {
            console.log(target);
            console.log(attr);
            target[attr] = params;
        };
    }
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
        }
        HttpClient.prototype.getData = function () {
            console.log(this.url);
        };
        __decorate([
            logProperty("xxxx")
        ], HttpClient.prototype, "url", void 0);
        return HttpClient;
    }());
    var http = new HttpClient();
    http.getData();
})(B_1 || (B_1 = {}));
// 3.方法装饰器：被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。还可以拓展属性和方法(和类装饰器一样)
/*
        传入三个参数
        3.1对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        3.2成员的名字
        3.3成员的属性描述符
*/
var C_1;
(function (C_1) {
    // 方法选择器拓展属性和方法(和类装饰器一样)
    function get(params) {
        return function (target, methodName, desc) {
            console.log(target);
            console.log(methodName);
            console.log(desc.value);
            target.url = "xxxx";
            target.run = function () {
                console.log("run");
            };
        };
    }
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
        }
        HttpClient.prototype.getData = function () {
            console.log("getData方法");
        };
        HttpClient.prototype.getDate = function () {
            console.log("替换前");
        };
        __decorate([
            get("www.baidu.com")
        ], HttpClient.prototype, "getData", null);
        return HttpClient;
    }());
})(C_1 || (C_1 = {}));
var C_2;
(function (C_2) {
    // 方法修饰器更改方法
    function change(params) {
        return function (target, methodName, desc) {
            // console.log(target);
            // console.log(methodName);
            // console.log(desc.value);
            var oldMethod = desc.value; //先保存原方法
            desc.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                args = args.map(function (value) {
                    return String(value);
                });
                console.log(args);
                oldMethod.apply(this, args); //this指新的方法，args指参数
            };
        };
    }
    // 方法修饰器替换方法
    function replace(params) {
        return function (target, methodName, desc) {
            // console.log(target);
            // console.log(methodName);
            // console.log(desc.value);
            desc.value = function () {
                console.log("替换后");
            };
        };
    }
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
        }
        HttpClient.prototype.getData = function () {
            console.log("getData方法");
        };
        HttpClient.prototype.getDate = function () {
            console.log("替换前");
        };
        __decorate([
            change("www.baidu.com")
        ], HttpClient.prototype, "getData", null);
        __decorate([
            replace("www.baidu.com")
        ], HttpClient.prototype, "getDate", null);
        return HttpClient;
    }());
    var http = new HttpClient();
    http.getData(132, "xxx");
    http.getDate();
})(C_2 || (C_2 = {}));
// 4.方法参数装饰器：运行时当作函数被调用，为类的原型增加一些元素数据（不常用）
/*
        传入3个参数
        4.1对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        4.2方法的名字
        4.3参数在函数参数列表中的索引
*/
var D_1;
(function (D_1) {
    function logParams(params) {
        return function (target, methodName, paramsIndex) {
            console.log(target);
            console.log(methodName);
            console.log(paramsIndex);
        };
    }
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
        }
        HttpClient.prototype.getData = function (uuid) {
        };
        __decorate([
            __param(0, logParams("uuid"))
        ], HttpClient.prototype, "getData", null);
        return HttpClient;
    }());
    var http = new HttpClient();
    http.getData(123);
})(D_1 || (D_1 = {}));
/*
不同类型顺序：属性装饰器->方法装饰器->方法参数装饰器->类装饰器
装饰器执行顺序：同种类型，从后往前执行
*/ 
