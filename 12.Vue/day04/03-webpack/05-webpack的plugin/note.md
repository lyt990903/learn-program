* webpack.BannerPlugin(''); —— 版权标识
* HtmlWebpackPlugin插件
  * 自动生成一个index.html文件（可以指定模板）
  * 将打包的js文件，自动通过script标签插入到body中
  * 安装：`npm i html-webpack-plugin --save-dev`

* uglifyjs插件
  * 对打包的js文件进行压缩
  * 安装：npm i uglifyjs-webpack-plugin@1.1.1 --save-dev