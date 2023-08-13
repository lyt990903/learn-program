## 模块化

* 内置模块：可直接用的
* 第三方模块：下载后使用
* 自定义模块
  1. 创建
  2. 导出
  3. 引用

## 文件操作

```javascript
// 读取目录文件
const fs =require('fs');

// 同步读取
try {
    let dirs = fs.readdirSync('./')
	console.log(dirs);
} catch (err) {
    console.log(err);
}


// 异步读取
fs.readdir('./',(err, data) => {
    if(err){
    	console.log(err);
    }
    console.log(data);
    // 错误的回调优先，一般在回调中第一个参数是错误参数。默认为null
})
```

```javascript
const fs = require('fs');

// 创建文件夹
fs.mikdir('./test',(err) => {
    if(err){
        console.log(err);
    } esle {
        console.log('success');
    }
})

// 更改文件夹
fs.rename('./test','./test01',(err) => {
    if(err){
        console.log(err);
    } esle {
        console.log('success');
    }
})

// 删除(空文件夹)
fs.rmdir('./test01',(err) => {
    if(err){
        console.log(err);
    } esle {
        console.log('success');
    }
})
```

```javascript
// 文件的增删改查
const fs = require('fs');

// 创建文件
fs.writeFile('name.txt','content',(err) => {
    if(err){
        console.log(err);
    } esle {
        console.log('success');
    }
})
// 读取文件
fs.readFile('name.txt','utf-8',(err,data) => {
    if(err){
        console.log(err);
    } esle {
        // console.log(data.toString('utf-8'));
        console.log(data);
    }
})
// 写入文件
fs.appendFile('name.txt','appendcontent',(err) => {
    if(err){
        console.log(err);
    } esle {
        console.log('success');
    }
})
// 删除文件
fs.unlink('name.txt',(err) => {
    if(err){
        console.log(err);
    } esle {
        console.log('success');
    }
})
```

```javascript
// 检查文件或文件夹
const fs = require('fs');
fs.stat('name.txt',(err,data) => {
    if(stats.isFile()){
        console.log('is file');
    } else {
        console.log('is dir');
    }
})
```

## url解析

<table style="text-align:center">
    <tr>
    	<td colspan=7>href</td>
    </tr>
    <tr>
    	<td rowspan=3>protocol</td>
    	<td rowspan=3>auth</td>
    	<td colspan=2>host</td>
    	<td colspan=2>path</td>
    	<td rowspan=3>hash</td>
    </tr>
    <tr>
    	<td rowspan=2>hostname</td>
    	<td rowspan=2>port</td>
        <td rowspan=2>pathname</td>
        <td>search</td>
    </tr>
    <tr>
        <td>query</td>
    </tr>
    <tr>
    	<td>http://</td>
    	<td>user : pass</td>
    	<td>@sub.host.com</td>
    	<td>:8080</td>
        <td>/p/a/t/h</td>
        <td>?query=string</td>
        <td>#hash</td>
    </tr>
</table>

例子：

`http:localhost.com:80/hello?query=hello#nihao`

```javascript
// URL解析
const url = require('url');
let urlString = 'http:localhost.com:80/hello?query=hello#nihao';
// url-string转obj
let urlObj = url.parse(urlString);
console.log(urlObj)
// url-obj转string
let string = url.format(urlObj);
console.log(string)
```

## 字符串处理

```javascript
cosnt qs = require('querystring');

// 将query字符串转对象
let string = 'name=zhangsan&age=18';
(字符串，以哪个符号区分键，以哪个符号区分键值)
let obj = qs.parse(string, '&','=');
console.log(obj); // {name:'zhangsan', age:18}

// 将query对象转字符串
let obj = {
    name: 'zhangsan',
    age: 18
}
let string = qs.stringify(obj,'&','=')
console.log(obj); // name=zhangsan&age=18

// 编码与解码
let string = 'name=zhangsan&age=18';
let result = qs.escape(string) // 编码

let escape = 'AJFs%dsajif\Dsjg%SKFID\dBar';
let result = qs.unescape(excape) // 解码
```

## nodemailer 第三方模块

实现发送邮件

```javascript
npm i nodemailer // 安装
```

 `createTransport对象`的属性设置：在下载的包中-->lib文件夹-->well-known-->services.json文件中有

`mtp验证码`：通过邮箱的设置-->账户中获取

```javascript
"use strict";
const nodemailer = require("nodemailer");

// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com", // 发送发邮箱类型
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: '761476102@qq.com', // 发送方邮箱地址
    pass: 'oimaaoqnzjvlbdaj' // mtp验证码
  }
});

// 邮件信息
let mailObj = {
  from: '"Fred Foo 👻" <761476102@qq.com>', // sender address
  to: "76176102@qq.com", // list of receivers
  subject: "Hello", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>" // html body
}

// 发送邮件
transporter.sendMail(mailObj);
```

```javascript
transporter.sendMail(mailObj, (err,data) => {
    console.log(err);
    console.log(data);
})
// 通过回调检查发送成功与否
```

## node简易爬虫

<u>爬虫案例</u>：

1. 获取目标网站 -- http.get()
2. 分析网站内容 -- cheerio第三方模块 可以使用jq中的选择器
3. 获取有效信息 下载或者其他操作

### `获取网站信息并写入文件`

```javascript
/**
 * 1. 请求网络数据
 * 2. 将数据保存本地文件
 */

const http = require('http');
const https = require('https');
const fs = require('fs');

let url = 'https://nodejs.org/zh-cn/';
https.get(url, (res) => {

  let rowData = '';

  // 数据分段，只要接受数据就会触发data事件，chunk每次接受的数据片段
  res.on('data', (chunk) => {
    rowData += chunk.toString('utf-8');
    console.log('-----传输分段-----');
    console.log(chunk.toString('utf-8'));
  })
  // 数据流传输完毕
  res.on('end', () => {
    console.log('传输完毕');
    fs.writeFile('./nodejs.html', rowData, (err) => {
      if (err) {
        console.log(err);
      }
    })
  })
}).on('error', (err) => {
  console.log('请求错误');
})
```

### `判断返回数据的状态码和类型`

```javascript
const http = require('http');
const https = require('https');
const fs = require('fs');

let url = 'https://nodejs.org/zh-cn/';
https.get(url, (res) => {

  // 判断返回数据的正确性
  const {
    statusCode // 从res中获取状态码
  } = res;
  const contentType = res.headers['content-type']; // 获取返回数据类型

  let error = null;
  if (statusCode != 200) {
    error = new Error('数据状态码错误');
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error('数据类型错误');
  }
  if(error) {
    console.log(error);
    res.resume(); // 重置缓存
    return false;
  }

  let rowData = '';
  res.on('data', (chunk) => {
    rowData += chunk.toString('utf-8');
    console.log('-----传输分段-----');
    console.log(chunk.toString('utf-8'));
  })
  res.on('end', () => {
    console.log('传输完毕');
    fs.writeFile('./nodejs.html', rowData, (err) => {
      if (err) {
        console.log(err);
      }
    })
  })
}).on('error', (err) => {
  console.log('请求错误');
})
```

### `爬取网页图片并下载到本地`

```javascript
/**
 * 1. 请求网络数据
 * 2. 将数据保存本地文件
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');

let url = 'https://www.bootcss.com/';
https.get(url, (res) => {

  // 判断返回数据的正确性
  const {
    statusCode
  } = res;
  const contentType = res.headers['content-type'];

  let error = null;
  if (statusCode != 200) {
    error = new Error('数据状态码错误');
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error('数据类型错误');
  }
  if (error) {
    console.log(error);
    res.resume(); // 重置缓存
    return false;
  }

  let rowData = '';

  // 数据分段，只要接受数据就会触发data事件，chunk每次接受的数据片段
  res.on('data', (chunk) => {
    rowData += chunk.toString('utf-8');
  })
  // 数据流传输完毕
  res.on('end', () => {
    console.log('传输完毕');
    const $ = cheerio.load(rowData);
    $('img').each((index, el) => {
      // console.log($(el).attr('src'));
      let urlString = $(el).attr('src').split('/');
      let imgName = urlString[urlString.length - 1];
      let imgUrl = $(el).attr('src');
      https.get(imgUrl, (res) => {
        res.setEncoding("binary");
        let imgData = "";
        res.on('data', (chunk) => {
          imgData += chunk;
        })
        res.on('end', () => {
          fs.writeFile(`./images/${imgName}`, imgData, 'binary', (err) => {
            if (err) {
              console.log(err);
            }
          })
        })
      })
    })
  })
}).on('error', (err) => {
  console.log('请求错误');
})
```

## express的使用

参考[express官方网站](https://www.expressjs.com.cn/)教程

`npm i express -S` 安装

`const express = require('express')` 初始化

`const app = express()` 实例化

`app.use()` 中间件

`app.listen(port,() => {})` 开启端口监听

`app.get(url,(req,res) => {})/app.post(url,(req,res) => {})` get/post路由控制

`req.query` 获取get方法参数

通过body-parser第三方模块使用`req.body` 获取post方法参数

`app.send()` 向客户端返回数据、`app.end()` 表示结束返回

`app.rend('.html',{})` 利用express-art-template模板引擎模块直接渲染页面

`const router = express.Router()`、`router.get()/router.post()`、`exports = router` 路由模块化

## middlewear -- 中间件

链式传递执行，从上至下，get、post也属于中间件( 自带next() )，不符合条件就像下一个中间件传递，直至符合条件，或者被某个中间件截止

分类：

- 内置中间件 (static)
- 自定义中间件 (全局 局部)
- 第三方中间件 (body-parser) (拦截器)

### 全局自定义中间件

```javascript
app.use('/',(req,res,next) => {
    let {
        token
    } = req.query;
    if(token) {
        // 如果token存在，向下一个get/post传递执行
        console.log('传递')
        next();
    } else {
        // token不存在，不执行之后的get/post
        console.log('没有token')
    }
})

app.get('/test1',(req,res) => {
    console.log('test1:' + req.query.token);
})

app.get('/test2',(req,res) => {
    console.log('test2:' + req.query.token);
})

/*
	请求实例：
	1.
	地址：/test1?
	输出：没有token
	2.
	地址：/test1?token=123
	输出：传递
		 test1:123
	3.
	地址：/test2?token=123
	输出：传递
		 test2:123
*/
```

当中间件地址为`'/'`时，方法可简写成`app.use((req,res,next) => {})`

---

### 局部自定义中间件

```javascript
app.use('/',(req,res,next) => {
    console.log('mw1');
    next();
},(req,res) => {
    console.log('mw2');
})

app.get('/',fun,fun,fun,fun,...)
app.post('/',fun,fun,fun,fun,...)
app.use('/',fun,fun,fun,fun,...)
// 一般fun有两级
        
        
/*
	请求实例：

	地址：/
	输出：mw1
		 mw2
*/
```

---

### 内置中间件

静态资源目录：指定一个目录，这个目录可以直接被访问  -- 等同于apache服务器中的www目录

```javascript
const path = require('path');

// 将同目录的static文件夹设为静态资源目录,路径为/public
app.use('/public',express.static(path.join(__dirname,'./static'))) // 使用绝对路径
```

## 路由管理

一级路由：www.example.com/level-1

二级路由：www.example.com/level-1/level-2

......

利用中间件管理一级路由，js文件放置二级路由

下级路由文件：juniorRouter.js

```javascript
const router = app.Router();

router.get('/level-2',(req,res) => {
    res.send(res);
})

exports = router;
```

上级路由管理：seniorRouter.js

```javascript
// 引用下级路由
const userRouter = require('./router/juniorRouter.js');
// 为下级路由添加上级管理
app.use('/level-1',userRouter);
```

`访问www.example.com/level-1/level-2`

## module.exports与exports

`exports`是`module.exports`的引用，exports指向的对象可以发生改变，利用语句`exports = Object`。

基本用法：

```javascript
module.exports = ...;
exports.xxx = ...
```

`node`中`require`引用时只会检查`module.exports`，用`module.exports`导出对象，用`exports`为对象添加属性。

## Promise写法

```javascript
// 原始写法
fs.stat('./name.txt',(err,data) => {
    if(err){
        console.log(err);
    } 
    if(data){
        fs.unlink('./name.txt',(err) => {
            if(err){
                console.log(err);
            } else {
                // ....回调地狱
            }
        })
    }
})

// promise写法
function isExiting(file) {
    return new Promise((resolve,reject) => {
        fs.stat(file,(err,data) => {
            if(err) {
                reject(err);
            }
            if(data) {
                resolve(file)
            }
        })
    })
}
function deleteFile(file) {
    return new Promise((resolve,reject) => {
        fs.unlink(file,(err) => {
            if(err) {
                reject(err);
            } else {
                resolve();
            }
        })
    })
}

isExiting('./name.txt')
	.then((file) => {
    	return deleteFile(file);
	})
	.then(() => {
    	console.log('删除成功');
	})
	.catch((err) => { // 一个链式调用中只需要一个catch，只有一个reject出口
    	console.log(err);
	})
```

<u>**非Promise对象也可以使用.then()方法**</u>

<u>**链式调用中想要手动停止使用`throw new Error()`跳至catch**</u>

## 实现分页查询

```javascript
router.post('/getInfoPage',(req,res) => {
    let pageSize = req.body.pageSize || 5; // 每页数据个数
    let page = req.body.page || 1; // 请求页数
    Model.find().limit(Number(pageSize)).skip(Number(page-1)*PageSize)
    	查找--前pageSize条数据--跳过前(page-1)*PageSize条数据
        .then((data) => {
        	// ...返回数据
    	})
})
```

## 跨域原理

浏览器的同源策略 -- <u>不详述</u>

解决方案：

1. 使 协议 域名 端口号 保持一致

2. cors -- `express中的cors中间件`

   ```javascript
   npm i cors
   
   const cors = require('cors')
   app.use(cors())
   ```

   ```javascript
   // 使用app.all设置允许跨域列表解决跨域
   // app.all：所有请求都会执行
   app.all("*", (req,res,next) => {
       // 设置允许跨域的域名，*代表允许任意域名跨域
       res.header("Access-Control-Allow-Orign","*");
   	/*
       设置指定域名
       res.header("Access-Control-Allow-Orign","http://www.example.com");
       */
       // 允许的header类型
       res.header("Access-Control-Allow-Headers","content-type");
       // 允许跨域的请求方式
       res.header("Access-Control-Allow-Methods","DELETE,PUT,GET,OPTIONS")；
       if(req.method.toLowerCase() == 'options') {
           res.send(200); // 让options尝试请求快速结果
       } else {
       	next()
       }
   })
   ```

3. jsonp

4. 代理 -- 通过代理服务器（前端处理不需要后端配合）

   `原理`：服务器请求没有跨域

   <img src="F:\学习\编程学习\前端\08.NodeJs\node二次学习笔记.assets\image-20200306222503933.png" alt="image-20200306222503933" style="zoom: 67%;" />

   `request内置模块`：内置http模块的封装

   ```html
   <script>
       // 前端请求至本地的node服务器
       $.get('http://localhost:3000/cors',{},(data) => {
           console.log(data);
       })
   </script>
   ```

   ```javascript
   const request = require('request');
   app.get('/cors',(req,res) => {
       // GET请求   
   	request('http://www.example.com?query=string',(err,response,data) => {
           if(!err) {
               console.log(response);
               res.send(data);
           }
       })
       
       
       // POST请求
       request({
           url: 'http://www.example.com',
           method: 'POST',
           json: true,
           headers: {
               'content-type': 'application/json',
           },
           body: JSON.stringify({
               query: string
           },(err,response,data) => {
               if(!err) {
               console.log(response);
               res.send(data);
           }
           })
       })
   })
   ```




## 图片上传 API

1. **安装 multer 模块**

   ```javascript
   npm i multer
   ```

2. **引用模块**

   multer是一个基于express的模块

   ```javascript
   var multer = require('multer')
   ```

3. **配置**

   设置保存文件的地方，并根据上传的文件名添加后缀

   可以通过`filename`属性定制文件保存的格式

   | 属性值        | 用途                                                         |
   | ------------- | ------------------------------------------------------------ |
   | `destination` | 设置资源的保存路径。注意：默认保存在`/tmp/uploads`下。路径有时需要自己创建(需要权限时) |
   | `filename`    | 设置资源保存在本地的文件名                                   |

   ```javascript
   var storage = multer.diskStorage({
     // 设置上传后文件路径，uploads文件夹会自动创建
     destination: function (req, file, cb) {
       cb(null, './uploads')
     },
     // 给上传文件重命名，获取添加后缀名
     filename: function (req, file, cb) {
       var fileFormat = (file.originalname).split(".");
       // 给图片加上时间戳格式防止重名
       // 比如把abc.jpg图片切割为数组{abc,jpg}，然后获取后缀名
       cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1]);
     }
   })
    
   var upload = multer({ 
     storage: storage 
   })
   ```

4. **上传限制**

   ```javascript
   // 文件上传限制
   const limits = {
     fields: 10, //非文件字段的数量
     fileSize: 500 * 1024, //文件大小 单位 b
     files: 1 //文件数量
   }
   
   // 文件格式限制
   const fileFilter = function (req, file, cb) {
    // 限制文件上传类型，仅可上传png格式图片
     const types = ['jpg', 'jpeg', 'png', 'gif'];
     const tmpType = file.mimetype.split('/')[1];
     if (types.indexOf(tmpType) != -1) {
       cb(null, true)
     } else {
       cb(null, false)
     }
   }
   
   // 为upload添加配置
   const upload = multer({
     storage,
     limits,
     fileFilter
   })
   ```
   
5. **接受文件**

   * `mimetype`：文件类型
   * `originalname`：原始文件名
   * `size`：文件大小
   * `path`：文件保存路径

   ```javascript
   router.post('/upload',upload.single('imgKey'),(req,res) => {
     /* 
     imgKey:图片数据的key值
     {
     	imgKey: 图片数据
     }
     */
     console.log(req.file);
     res.send('上传成功');
   })
   ```

   ```javascript
   
   router.post('/upload',upload.single('imgKey'),(req,res) => {
     let {
       size,
       mimetype,
       path
     } = req.file;
     // 规定允许的文件格式
     let types = ['jpg', 'jpeg', 'png', 'gif'];
     // 获取当前文件格式
     let tmpType = mimetype.split('/')[1];
     if (types.indexOf(tmpType) == -1) { // 文件要符合格式要求
       return  res.send({
         err: -1,
         msg: '文件格式错误'
       })
     } else if (size > 500000) { // 文件不能大于500kb
       return  res.send({
         err: -2,
         msg: '图片大小过大'
       })
     } else {
       return  res.send({
         err: 0,
         msg: '上传成功'
       })
     }
   })
   ```


## socket

长连接（socket）			短连接（ajax）

`无跨域问题`

实现socket的方式：

1. net   express内置模块
2. socket.io   麻烦   兼容性最好
3. websocket   h5新增   低版本浏览器不兼容   使用方法简单

流程：

1. 安装模块`npm install ws`
2. 搭建socket服务器`new WebSocket.Server({port:xxxx},()=>{})`
3. 前端进行连接`new WebSocket('ws://地址')`
4. 前端连接主动发送数据`ws.onopen()`
5. 后端连接主动发送数据`ws.on('connection',(client) => {})`
6. 进行交互`ws.send() -- ws.onmessage(),ws.on('message',(msg) => {})`
7. 断开连接`wx.onclose(),ws.on('close',() => {})`

```html
<script>
	/*------------------客户端------------------*/
	const ws = new WebSocket('ws://localhost:9077');
  
    ws.onopen = () => {
      alert("前端连接服务器成功");
    }

    xxx.addEventListener("click", () => {
      ws.send(xxx);
    })

    ws.onmessage = (msg) => {
      alert("后台->前端：" + msg.data);
    }

    ws.onclose = () => {
      alert('后台服务器关闭');
    }
</script>
```

```javascript
/*-----------------服务器端-----------------*/
const WebSocket = require('ws');

const ws = new WebSocket.Server({port:9077},() => {
  console.log('websocket服务器开启-9077');
})

ws.on("connection",(ws) => {
  
  ws.on("message",(msg) => {
    console.log('前端->后台：' + msg);
    
    ws.send(msg);
  })
  
  ws.on("close",() => {
    console.log('后台服务器关闭');
  })
})
```

```javascript
/*-----------------服务器端为所有用户发送-----------------*/
const WebSocket = require('ws');

const ws = new WebSocket.Server({
  port: 9077
}, () => {
  console.log('websocket服务器开启-9077');
})

let wses = [];
ws.on("connection", (ws) => {

  wses.push(ws);

  ws.on("message", (msg) => {
    console.log('前端->后台：' + msg);
    if (msg.indexOf('广播') != -1) {
      wses.forEach((ws) => {
        ws.send(msg);
      })
    } else {
      ws.send(msg);
    }
  })

  ws.on("close", () => {
    console.log('前端断开连接');
  })
})
```

### 什么时候采用长连接

1. 实时刷新(轮询 、 长连接)
2. 服务器主动发起数据

## sokect.io

安装模块：`npm  i socket.io`

```javascript
/*-----------------服务器端-----------------*/
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on("connection",(io) => {
  
  io.emit('hehe','后台->前端');
  
  io.on('haha',(msg) => {
    console.log(msg);
  })
  
})

// 0.0.0.0 表示允许所有访问
app.listen('8888', '0.0.0.0');
```

```html
<head>
  <!-- /module/socket.io-client/dist/socket.io.js -->
  <script src="socket.io.js"></script>
  <body>
    ...
    <script>
    	const socket = io.connect('http://localhost:8888');
      
      socket.on('hehe',(msg) => {
        alert(msg);
      })
      
      socket.emit('haha','前端->后台');
      
    </script>
  </body>
</head>
```

## 身份验证

http请求的无状态性

### session + cookie

1. 登陆时 发布一个加密字符串(用户相关信息) 给前端 (自动放在cookie)
2. 调用其他接口 将加密字符串 作为参数传递给服务器 (cookie自动传递)
3. 根据权限进行验证

安装插件`npm i cookie-parser`、`express-session`

<font color="red">一定要注意session和cookie在跨域时无法使用</font>

```javascript
const session = require('express=-session')
// session总体配置
app.use(session({
  secret: 'hubwizApp', // 为了安全性的考虑设置secret属性(私钥)
  cookie: {maxAge: 60 * 1000 * 30}, // 设置过期时间
  resave: true, // 即使session没有被修改，也保存session值，默认为true
  saveUninitialized: false // 无论有没有session cookie，每次请求都设置个session cookie，默认给个标识为connect.sid
}))
```

```js
// 获取session
app.use('/user',(req,res,next) => { // 上级路由
  console.log(req.body);
  console.log(req.session);
  next();
},userRouter)

// 设置session
req.session.login = true;
req.session.name = us;

// 注销session
app.get('/out',(req,res) => {
  req.session.destory();
  res.redirect('/');
})
```



### JWT （JSON Web Token）

安装`npm i jsonwebtoken`

* 用户登录 服务器端产生一个token(加密字符串)发送给前端
* 前端将token进行保存
* 前端发起数据请求的时候携带token
* 服务端 验证token是否合法 如果合法继续操作 不合法种植操作
* token的使用场景 无状态请求 保持用户的登录状态 第三方登录 (token+auth2.0)

#### 非对称加密 通过私钥产生token 通过公钥解密token

```js
/* 
  1.产生公钥和私钥
  产生私钥 openssl genrsa -out ./private_key.pem 1024(私钥长度)
  产生公钥 openssl rsa -in ./private_key.pem -pubout -out ./public_key.pem
*/ 

let private_key = fs.readFileSync(path.join(__dirname,'./private_key.pem'))
let private_key = fs.readFileSync(path.join(__dirname,'./public_key.pem'))
var token = jwt.sign(playload,private_key,{algorithm: 'RS256'});// 加密方法
console.log(token);
// 验证是否合法
var decoded = jwt.verify(token,public_key);
```

#### 对称方式加密

```js
const jwt = require('jsonwebtoken');

// 私钥
let secret = 'dasjdahsjfasnkjfhaskf'; // 越乱越好 // 签名
// 载荷
let palyload = {
  us:123,
  ps:456
}
// 传递的数据
// 产生一个token
let token = jwt.sign(palyload,secret); // hs256加密 数据 载荷 secret
console.log(token);
// 验证token的合法性
jwt.verify(token,secret,(err,data) => {
  console.log(err);
  console.log(data);
})
```

```js
// 封装
const jwt = require('jsonwebtoken');
const scrict = 'dasfjsfndsjkbvds';

function createToken(palyload) {
  // 产生token
  palyload.ctime = Date.now(); // 创建时间
  palyload.exp = 1000 * 60 * 24 * 7; // 超时时间
  return jwt.sign(palyload,scrict);
}

function checkToken(token) {
  return new Promise((resolve,reject) => {
    jwt.verify(token,scrict,(err,data) => {
      if(err) {
        reject('token 验证失败');
      } else if() {
        reject('token 验证过期');
      }
      resolve(data);
    })
  })
}

module.exports = {
  createToken,
  checkToken
}
```





