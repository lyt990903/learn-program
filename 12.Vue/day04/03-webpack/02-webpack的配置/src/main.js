// commonjs规范
const {
  add,
  mul
} = require('./mathUtils');

console.log(add(20, 30));
console.log(mul(20, 30));

// es6规范
import * as person from './info'

console.log(person.name);
console.log(person.age);
console.log(person.height);