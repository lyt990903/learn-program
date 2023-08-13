// // 通过module对象暴露
// console.log(module);
// var a = 'aaa';

// module.exports.a = a;

// console.log(module);

// module.exports.func = () => {
//     console.log('func');
// }

// console.log(module);

// // 在node中exports = module.exports
// exports.b = 'b'; 

// console.log(module);

// // 如果给exports重新赋值。则exports不再和module.exports指向同一个对象

// exports = {};

// // 改变引用后为exports添加属性，module不再发生改变
// exports.newfunc = () => {
//     console.log('newfunc');
// }

// console.log(module)

// slice原理
Array.prototype.mySlice = function () {
  let start = 0;
  let end = this.length
  console.log(`test:${arguments[0]}`);
  if (this.length === 1) {
    start = this[0];
  } else if (this.length === 2) {
    start = this[0];
    end = this[1];
  }
  var tmp = [];
  for (let i = start; i < end; i++) {
    console.log(i);
    tmp.push(this[i]);
  }
  return tmp;
}

var Arr = {
  0: '123',
  1: '456',
  length: 2
}

var newArr = [].mySlice.call(Arr);
console.log(newArr);
// console.log(Arr.mySlice());