/*
    Promise容器，容器中存放了一个异步任务
    三个状态：
    Pending（还没做，默认，异步任务）->Resolved（成功） 或者 ->Rejected（失败）
*/
// 在es6中新增promise API
// Promise是一个构造函数
const fs = require("fs");

// 创建Promise容器
// Promise一旦创建，立即开始执行里面的代码
// resolve和reject是两个回调函数
const p1 = new Promise(function (resolve, reject) {
    fs.readFile("./a.txt", function (err, data) {
        if (!err) {
            // 如果成功，将data传给resolve函数
            resolve(data)
        } else {
            // 如果失败，将err传给reject函数
            reject(err);
        }
    })
})
// Promise本身不是异步（同步），但内部往往封装一个异步任务（ .then ）

// p1.then(func(resolve), [func](reject))
// then方法有两个参数，第一个参数为p1中的resolve函数，第二个参数为p1中的reject函数
p1
    .then(function (data) {
        // 这个方法调用了p1中的 resolve(data) 。
        console.log(`then()中第一个方法输出：${data}`);

        // then的参数方法中可以有return，return返回本质是一个promise对象
        // 由于参数方法回在p1中被执行，所以整个.then()实质上返回一个Promise对象；因此可以继续使用.then()
        return `then()中第一个方法返回值`;
    }, function (err) {
        // 这个方法调用了p1中的 reject(data) 。
        console.log(`then()中第二个方法输出：${err}`)
        return `then()中第二个方法返回值`;
    })
    .then(function (data) {
        console.log(`then()-2中输出：${data}`)
    })


// 基本使用方法
const p2 = new Promise(function (resolve, reject) {
    fs.readFile('./b.txt', function (err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    })
})

const p3 = new Promise(function (resolve, reject) {
    fs.readFile('./c.txt', function (err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    })
})

p2
    .then(function (data) {
        console.log(`p2的第一个.then()输出：${data}`);
        return p3
    })
    .then(function (data) {
        console.log(`p2的第二个.then()输出：${data}`);
    })