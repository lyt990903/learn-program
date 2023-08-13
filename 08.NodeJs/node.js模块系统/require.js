/*
//require用于从外部获取一个模块的接口
var hello= require('./exports');
hello.world();
*/

//调用对象
var Hello = require('./exports');
hello = new Hello();
hello.setName('lyt');
hello.sayHello();