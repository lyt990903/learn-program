const path = require('path');

module.exports = {
  // 入口：字符串、数组、对象
  entry: "./src/main.js",
  // 出口：对象，包含两个属性path和filename
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}