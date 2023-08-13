/*
内部模块：命名空间
外部模块：模块
模块在其自身的作用域中执行，而不是在全局的作用域中执行
在一个模块内变量，函数，类等在模块外是看不见的，除非用export形式之一导出他们
相反，如果想使用其他模块导出的变量，函数，类，接口等，你必须要导入他们，可以使用import形式之一
*/

//导入对应导出三种方法
import getName from './modules/db';//export default导出
import {prop, getData, getDate as get} from './modules/db';
console.log(prop);
getData();
get();//getDate改名
getName();
