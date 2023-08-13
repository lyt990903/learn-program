* 真正使用中还有很多要实现的功能，如将ES6转为ES5，将TypeScript转为ES5，将scss、less转为css，将.jsx、.vue文件转为js文件等
* 这就需要给webpack拓展相对应的loader

* webpack只会打包入口文件中依赖的文件，所以要想打包css文件的话需要在main.js中加一行依赖require('./css/...') —— 会报错

* 需要loader，可在官方文档查看安装与配置

* css-loader只负责加载css文件
  style-loader负责将样式添加到DOM中

* webpack使用多个loader时，按从右到左的顺序加载

* 加载图片时图片过大需要配置publicPath以及hash名