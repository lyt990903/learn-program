* 创建webpack.config.js文件进行webpack的配置

* 使用npm init对项目文件夹进行初始化

* 安装该项目的webpack，全局webpack和项目webpack可能不一致

* 使用项目安装的webpack方法（默认是使用全局的）

  * 在package.json中配置scripts脚本命令，执行脚本时会使用项目webpack,使用npm run 。。。的命令

  * 直接执行./node_module/webpack

* 开发时依赖：只有在开发时使用的模块，比如webpack打包
* npm i webpack[@版本号] --save-dev
* 运行时依赖：项目运行后还需要的模块 --save