const express = require('express');

const app = express();

// 中间件：处理请求的，本质是函数

// 在Express中，对中间件有几种分类

// 不关心请求路径和请求方法的中间件
// 也就是说任何请求都会进入这个中间件
// 中间件本身是一个函数，该方法接收三个参数
// request 请求对象
// response 响应对象
// next() 下一个中间件
// 当请求进入下一个中间件之后，如果不调用next则请求会停留在这个中间件
// 所以next是一个方法，用来调用下一个中间件的
app.use(function (req, res, next) {
    console.log("1:没有限制的中间件" + req.url);
    next();
})
app.use(function (req, res, next) {
    console.log("2:没有限制的中间件" + req.url);
    next();
})

// 中间件开始顺序执行时是有匹配机制的，只进入符合匹配贵的的中间件，若不符合规则则进入下一个中间件，知道条件匹配为止
// next()不是直接调用下一个最邻近的中间件，也是需要匹配的
/**
 * 当请求进来，会进入第一个中间件开始进行匹配
 *     如果匹配，则进来
 *         如果请求进入中间件之后，没有调用next则代码会停在当前中间件
 *         如果调用next，则继续向后找到第一个匹配的中间件
 *     如果不匹配，则继续匹配下一个中间件
 *         
 */

// 关心请求路径的中间件
// 以/xxx（/xxx/开头）开头为路径的请求的中间件
app.use('/a', function (req, res, next) {
    // http://localhost:3000/a/abc
    console.log("3:有/a路径限制的中间件" + req.url);
    next();
})
app.use('/b', function (req, res, next) {
    // http://localhost:3000/b/abc
    console.log("3:有/b路径限制的中间件" + req.url);
    next();
})


// 除以上中间件，还有一种最常用的
// 严格匹配请求方法和请求路径的中间件
// app.get      app.post 
app.get('/a/a',function(req,res,next){
    console.log("4:有/a/a路径限制和get方法限制的中间件" + req.url);
    next();
})
app.post('/a/a', function (req, res, next) {
    console.log("5:有/a/a路径限制和post方法限制的中间件" + req.url);
    next();
})

// 如果没有中间件匹配了，则Express会默认返回 Cannot GET 路径 或者 Cannot POST 路径
// 处理404可在所有中间件后加上
// app.use(function(req,res){
//     res.render('404.html');
// })

app.get('/', (req, res) => {
    res.send("text");
})

app.listen(3000, () => {
    console.log("3000");
})