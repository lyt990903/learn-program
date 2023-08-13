// 1.加载http模块
const http = require('http');

// 2.使用http.createServer()创建一个Web服务器
// 返回一个Server实例
const server = http.createServer();

//  3.为server绑定request请求事件
// 请求对象，响应对象
server.on('request', function (request, response) {
  console.log("收到客户端请求！请求路径为" + request.url);

  // write方法为客户端响应，可以有多个，但必须用end方法结束
  response.write('Hello');
  response.write('nodejs');
  response.end();
})

// 4。绑定端口号，启动服务器
server.listen(3000, function () {
  console.log("服务器启动成功了！可以通过3000端口访问");
});