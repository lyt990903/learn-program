const aa = require('./10.a');
console.log('---------')

// 这个require b不会执行，b已经在a中加载执行过了
// 优先从缓存加载
// 再次require b只会赋值，不会再次运行。
const bb = require('./10.b');