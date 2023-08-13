// 核心模块：
/*
文件操作：fs(File System)
http服务模块：http
路径操作模块：path
操作系统信息模块：os(Operation System)
const xxx = require(‘xxx’);
*/
const os = require('os');
console.log(os.cpus());
console.log(os.totalmem());

const path = require('path');
console.log(path.extname());


// 自定义模块（模块化编程）
/*
require用来加载模块 1.具名的核心模块  2.用户自己编写的文件模块
require('./xxx.js') ---- 直接执行
node中没有全局作用域，只有模块作用域，外部内部不能互相访问
模块间通信需要export，export默认为空
*/