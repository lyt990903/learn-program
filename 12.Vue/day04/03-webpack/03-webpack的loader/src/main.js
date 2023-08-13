// commonjs规范
const {
  add,
  mul
} = require('./js/mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

// es6规范
import * as person from './js/info.js'

console.log(person.name);
console.log(person.age);
console.log(person.height);

// 依赖css
require('./css/style.css');
require('./css/special.less');
document.writeln("<h2>你好啊</h2>")