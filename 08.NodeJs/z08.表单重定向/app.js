const http = require('http');
const fs = require('fs');
const arttemplate = require('art-template');
const URL = require('url');
const date = require('silly-datetime');


let comments = [
    {
        name: "张三1",
        message: "第一条评论",
        dateTime: '2017-8-19'
    },
    {
        name: "张三2",
        message: "第二条评论",
        dateTime: '2018-8-19'
    },
    {
        name: "张三3",
        message: "第三条评论",
        dateTime: '2019-8-19'
    }
]

http
    .createServer((req, res) => {
        // 获取请求地址
        let url = req.url;

        if (url === '/') {
            console.log(url);
            // 进入localhost:3000，打开index.html
            fs.readFile('./views/index.html', (error, data) => {
                if (error) {
                    return res.end(error);
                }
                let htmlStr = arttemplate.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr);
            })
        }
        // 打开提交表单页面
        else if (url === '/form') {
            fs.readFile('./views/form.html', (error, data) => {
                if (error) {
                    return res.end(error);
                }
                res.end(data);
            })
        }
        // 处理表单信息
        else if (url.indexOf('/pinglun?') === 0) {
            // 将get请求url转换为对象
            let parseObj = URL.parse(url, true);
            console.log(parseObj);
            let comment = {};
            comment.name = parseObj.query.name;
            comment.message = parseObj.query.message;
            comment.dateTime = date.format(new Date(), 'YYYY-MM-DD');
            comments.push(comment);
            // 重定向，statusCode = 302或301；setHeader Location
            /* 
            301： 永久重定向，浏览器会记住
                下载在访问a.com不再向a.com发请求，而是直接向b.com发请求
            302： 临时重定向，浏览器不记
                下次再访问a.com还是要向a.com发请求
            */
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        }
        // 404
        else {
            fs.readFile('./views/404.html', (err, data) => {
                if (err) {
                    res.end(err);
                }
                res.end(data);
            })
        }
    })
    .listen(3000, () => {
        console.log("服务启动！");
    })