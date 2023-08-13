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

import Vue from 'vue';

// app这个变量很少用到，可以不赋值
// const app = 

/* ------------------------------------- 版本一 ------------------------------------- */
// new Vue({
//   el: '#app',
//   // html中app空标签，使用template为其添加内容
//   template: `
//     <h2>{{message}}</h2>
//   `,
//   data: {
//     message: 'Hello Vue',
//     name: 'LYT'
//   }
// })

/* ------------------------------------- 版本二 ------------------------------------- */
// const App = {
//   template: `
//     <div>
//       <h2>{{message}}</h2>
//       <h2>{{name}}</h2>
//       <button @click="btnClick">按钮</button>
//     </div>
//   `,
//   data() {
//     return {
//       message: "Hello Vue",
//       name: "LYT"
//     }
//   },
//   methods: {
//     btnClick() {
//       console.log('btn is clicked');
//     }
//   }
// }

// new Vue({
//   el: '#app',
//   template: `<App />`,
//   components: {
//     App
//   }
// })

/* ------------------------------------- 版本三 ------------------------------------- */
// import App from './vue/app.js';

// new Vue({
//   el: '#app',
//   template: `<App />`,
//   components: {
//     App
//   }
// })

/* ------------------------------------- 版本四 ------------------------------------- */
import App from './vue/App.vue'; // 如果不想加.vue拓展名，可以在webpack.config文件resolve属性中添加extensions: ['.vue']

new Vue({
  el: '#app',
  template: `<App />`,
  components: {
    App
  }
})