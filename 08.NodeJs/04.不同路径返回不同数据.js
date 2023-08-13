// 1.引用http模块
const http = require('http');
// 2.新建server实例
const server = http.createServer();
// 3.绑定端口监听
server.listen(3000, () => {
    console.log("服务器成功启动");
})
// 4.绑定事件,request,response
server.on('request', (request, response) => {
    console.log(`成功接收到请求，地址为${request.url}`);
    response.setHeader('Content-Type','text/plain; charset=utf-8');
    switch (request.url) {
        case '/login':
            response.end('登录界面');
            break;
        case '/product':
            const productions = [
                {
                    "name": '扫帚',
                    "price": 20
                },
                {
                    "name": '拖把',
                    "price": 30
                },
                {
                    "name": '电视',
                    "price": 3000
                }
            ]
            response.end(JSON.stringify(productions));
            break;
        case '/Hello':
            response.end("i'm fine!");
            break;
        default:
            response.end("no such request");
            break;
    }
})