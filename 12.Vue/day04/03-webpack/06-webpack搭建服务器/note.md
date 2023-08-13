* 基于node，使用express框架
  先将dist放在内存中（因为存取快），直到run build才存到硬盘中
* 安装：`npm i webpack-dev-server@2.9.3 --save-dev`
* devServer本身也是webpack中一个选项，有属性：
  * contentBase：为哪个文件夹提供本地服务
  * port：端口号
  * inline：页面实时刷新，是否实时监听
  * historyApiiFallback：在SPA页面中，依赖html5的history模式
  * 再配置另一个scripts `--open`表示打开浏览器