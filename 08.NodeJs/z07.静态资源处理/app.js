// 为了方便统一处理静态资源，把静态资源统一放在public文件夹
// 哪些资源能被用户访问，哪些资源不能被用户访问，我们可以通过灵活的判断决定
// /public  整个public目录中的资源都允许被访问

const http = require('http');
const fs = require('fs');

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
                res.end(data);
            })
        }
        // 请求静态资源时，打开public中的文件
        else if(url.indexOf('/public/') === 0){
            console.log(url);
            fs.readFile(`.${url}`, (error, data) => {
                if (error) {
                    return res.end(error);
                }
                res.end(data);
            })
        }
    })
    .listen(3000, () => {
        console.log("服务启动！");
    })