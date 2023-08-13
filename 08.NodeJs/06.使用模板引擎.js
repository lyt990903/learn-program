// art-template不仅可以在浏览器使用，也可以在node中使用

// 安装：npm install art-template
// 默认下载到node_module中

// 1.安装

// 2。引用加载

// 3.查文档

const template = require('art-template');

let ret = template.render(`Hello {{name}}`, {
    name:'jack'
})

console.log(ret);

let tplstr = `
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
        <p>{{name}}</p>
        <p>{{age}}</p>
        <p>{{hobby}}</p>
    </body>
    </html>
`

let html = template.render(tplstr,{
    name:'zhangsan',
    age:18,
    hobby:'singing'
})

console.log(html); 

