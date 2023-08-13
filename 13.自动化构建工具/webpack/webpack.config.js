// webpack语法和node相同
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: { // 开发服务器的配置
        port: 3000, // 端口
        progress: true, // 显示打包进度条
        contentBase: './build' // 指定静态文件夹
    },
    mode: 'development', // 模式 默认两种 production、development
    entry: './src/index.js', // 入口
    output: {
        filename: 'build.js', // 打包后的文件名
        /*filename: 'build.[hash].js', // 为打包后的文件名添加hash标识*/
        path: path.join(__dirname,'./build') // 路径需要是一个绝对路径
    },
    plugins:[ // 数组 存放所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html', // 模板html
            filename: 'index.html', // 指定文件名
            minify: { // 压缩选项
                removeAttributeQuotes: true, // 去除双引号
                collapseWhitespace: true, // 去除空格
            },
            /*hash: true // 为引用增加hash标识*/
        })
    ]
}