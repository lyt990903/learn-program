var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 加载express-art-template引擎（依赖于art-template）
app.engine('html', require('express-art-template'));

// 加载body-parser中间件，用于解析POST请求体
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

let comments = [{
    name: '张三',
    message: '妈的智障',
    dateTime: '2019-11-1'
}, {
    name: '李四',
    message: '哈哈哈',
    dateTime: '2019-11-1'
}, {
    name: '王五',
    message: '楼上都是沙雕啊？？？',
    dateTime: '2019-11-1'
}]

app.get('/', (req, res) => {
    // render路径默认为views文件夹，不需要加 ./
    res.render('index.html', {
        comments: comments
    })
})
app.get('/form', (req, res) => {
    res.render('form.html');
})
app.get('/pinglun', (req, res) => {
    console.log(req.query);
    let comment = {};
    comment.name = req.query.name;
    comment.message = req.query.message;
    comment.dateTime = Date.now;
    comments.push(comment);
    res.redirect('/');
})
app.post('/pinglun', (req, res) => {
    // console.log(req.body);
    let comment = {};
    comment.name = req.body.name;
    comment.message = req.body.message;
    comment.dateTime = Date.now;
    comments.push(comment);
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Server Start On 3000');
})