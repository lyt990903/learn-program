"use strict";
/*
内部模块：命名空间
外部模块：模块
模块在其自身的作用域中执行，而不是在全局的作用域中执行
在一个模块内变量，函数，类等在模块外是看不见的，除非用export形式之一导出他们
相反，如果想使用其他模块导出的变量，函数，类，接口等，你必须要导入他们，可以使用import形式之一
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//导入对应导出三种方法
var db_1 = __importDefault(require("./modules/db")); //export default导出
var db_2 = require("./modules/db");
console.log(db_2.prop);
db_2.getData();
db_2.getDate(); //getDate改名
db_1.default();
