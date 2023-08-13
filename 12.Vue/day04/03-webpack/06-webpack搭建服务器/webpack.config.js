const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// 入口：字符串、数组、对象
	entry: "./src/main.js",
	// 出口：对象，包含两个属性path和filename
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		// 配置此项，url相关的都会在路径前加上dist/
		// publicPath: "dist/",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				// loader加载按从右到左的顺序，所以css在右，style在左
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader", // creates style nodes from JS strings
					},
					{
						loader: "css-loader", // translates CSS into CommonJS
					},
					{
						loader: "less-loader", // compiles Less to CSS
					},
				],
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							// 图片小于limit时，编码成base64格式
							// 图片大于limit时，将文件转换，生成名称为32为hash值的图片，需要file-loader
							limit: 15000,
							// []表示动态获取，非静态的字符串；ext：extention拓展名
							name: "img/[name].[hash:8].[ext]",
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						// babel-preset的版本
						presets: ["es2015"],
					},
				},
			},
			{
				test: /\.vue$/,
				use: ["vue-loader"],
			},
		],
	},
	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js",
		},
	},
	plugins: [
		new webpack.BannerPlugin("最终版权归lyt所有"),
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
  ],
  devServer: {
    contentBase: './dist',
    inline: true
  }
};
