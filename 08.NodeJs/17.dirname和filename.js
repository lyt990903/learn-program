/*
    在每个模块中，除了require、exports等模块相关的API之外，还有两个特殊的成员；
    · __dirname：动态获取 可以用来获取当前文件模块所属目录的绝对路径
    · __filename：动态获取 可以用来获取当前文件的绝对路径
    __dirname和__filename是不受node命令所属路径影响的
*/
/*
    在文件操作中，使用相对路径是不可靠的，因为在node中文件操作的路径被设计为相对于
    执行node命令的路径
    为了解决这个问题，我们需要将相对路径改为绝对路径
    运用__dirname和__filename动态获取绝对路径
*/

// path模块操作
const path = require('path');

let str = "D:/a/b/c/d.js";
// 1.获取完整路径
console.log("1:" + path.basename(str));
console.log("2:" + path.basename(str, ".js"));
// 2.获取目录
console.log("3:" + path.dirname(str));
// 3.获取拓展名
console.log("4:" + path.extname(str));
// 4.判断绝对路径
console.log("5-1:" + path.isAbsolute("d:/a.js"));
console.log("5-2:" + path.isAbsolute("./a.js"));
console.log("5-3:" + path.isAbsolute("a.js"));
console.log("5-4:" + path.isAbsolute("/a.js"));
// 5.路径拼接
console.log("6:" + path.join("d:/a", "b"));
// 6.转换为对象
console.log("7:" + JSON.stringify(path.parse(str)));

// __dirname和__filename
console.log(__dirname);
console.log(__filename);
