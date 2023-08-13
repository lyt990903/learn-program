// 0.安装
// 1。引包
var express = require('express');

// 2.创建你的服务器应用程序   等同于http.createServer();
var app = express();

// 3.创建访问事件
app.get('/',function(req,res){
    console.log(req.query);
    res.send('首页！');
})

// 没过路径一个方法，不用在函数内判断
app.get('/about',(req,res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Examples</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        
        </head>
        <body>
            <h1>Hello Express!</h1>
        </body>
        </html>
    `)
})

// 4.设置公开访问目录 ，目录下的资源公开访问
app.use('/public',express.static('./public/'));

// 5.创建监听事件
app.listen(3000,() => {
    console.log("Express Start on 3000");
})