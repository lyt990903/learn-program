/**
 * 中间件是一个通用函数
 * 讲一整个流程划分成一个一个小板块
 * 将板块功能封装成函数，方便调用
 */
const http = require('http');

// 引入中间件
const query = require('./middlewares/query');
const body = require('./middlewares/body');
const cookie = require('./middlewares/cookie');
const session = require('./middlewares/session');

const server = http.createServer(function (req, res) {

    // 中间件将这些方法封装在文件中，使用的时候直接调用。

    // 解析表单get请求体
    // let urlObj = url.parse(req.url, true);
    // req.query = urlObj.query;
    query(req, res);
    // 解析表单post请求体
    req.body = {
        foo: 'bar'
    }
    body(req, res);
    // 解析cookie
    // req.cookie = {
    //     sessionId: "dasdfajhnfkjsbdkf"
    // }
    cookie(req, res);
    // 处理session
    // req.session = {
    //     isLogin: true
    // }
    session(req, res);
    // 使用模板引擎
    res.render = function () {};

    // console.log(req.query);
    // console.log(req.body);
    // console.log(req.cookie);
    // console.log(req.session);
})

server.listen(3000, function () {
    console.log("Start 3000");
})