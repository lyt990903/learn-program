const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin({ // 打包html文件
			template: path.join(__dirname, "./public/index.html"),
			filename: "index.html",
			inject: true,
		}),
		new CopyWebpackPlugin({ // 复制文件
			patterns: [
				{
					from: path.join(__dirname, "public", "favicon.ico"),
					to: path.join(__dirname, "/dist"),
				},
			],
		}),
		new CleanWebpackPlugin(), // 清空dist文件夹
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 8000,
	},
};
