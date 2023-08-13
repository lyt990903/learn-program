const path = require('path');

module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        /*publicPath:'js/', // 设置为html提供资源的地址（不推荐使用，带有强制性）*/
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/, // 正则匹配以.css结尾的文件
            use: [ // 使用对应loader
                'style-loader', // 处理html中的css
                'css-loader' // 处理js中的css
            ]
        }, {
            test: /\.(png|jpg|gif)$/, // 图片格式
            use: [{
                loader:'url-loader',
                options:{
                    limit:8192, // 将图片转为base64字符串，限制图片大小为8kb，8192b
                }
            }]
        }]
    }
};