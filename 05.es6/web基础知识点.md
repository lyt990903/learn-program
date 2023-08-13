# web 基础知识点笔记



## js 字符串常用函数

* `concat()`：将两个或多个字符串拼接起来构成一个新的字符串
* `indexOf()`：查找某个字符在字符串中第一次出现的位置，找到结果为位置，未找到结果为-1
* `charAt()`：返回指定位置的字符
* `lastIndexOf()`：查找某个字符在字符串中最后一次出现的位置，找到结果为位置，未找到结果为-1
* `match()`：检查字符串是否匹配一个正则表达式
* `substr(start, length)`：返回从start开始长度为length的字符串，可截取末尾。本身长，截取的短
* `substring(start, end)`：返回从start开始到end结束的字符串。本身短，截取的长
* `slice(start, end)`：同substring()，可用于数组
* `replace()`：用一个新字符串代替其中符合正则表达的字符串
* `search()`：查找符合正则表达式的字符串，如果有则返回位置，没有则返回-1
* `split(separator, howmany)`：将字符串转为字符数组，separator表示分割处，howmany表示最多分为几个
* `toLowerCase()/toUpperCase()`：转为小写/大写

---

## 节点操作

1. 创建新节点

   `createDocumentFragment()`：创建一个DOM片段

   `createElement()`：创建一个具体的元素

   `createTextNode()`：创建一个文本节点

2. 操作节点

   `appendChild()`：添加节点

   `removeChild()`：移除节点

   `replaceChild()`：代替节点

   `insertBefore()`：插入节点

3. 查找

   `getElementById()、getElementsBy...()`：返回动态数组，页面每次更新都会更新

   `querySelector()、querySelectorAll()`：返回静态数组，页面更新不会对结果有影响

---

## web中this的三个典型应用

1. 在html元素事件属性中使用

   ```html
   <div>
   	onclick="showInfo(this);"
   </div>
   ```

2. js es5构造函数

   ```javascript
   function Person(name, age) {
       this.name = name;
       this.age = age;
   }
   ```

3. DOM操作中获取自身

   ```javascript
   const btn = document.querySelector(".box");
   btn.addEventListener("click",function() {
       console.log(this.innerHTML);
   })
   ```

---

## apply()、call()、bind()的使用

apply、call、bind均可以改变函数中this的指向

1. `bind()`

   js函数原型链中的方法，可获取参数绑定为函数的this对象。

   ```javascript
   var Person = {
       age: 18,
       name: '张三'
   }
   
   function getInfo(sex,address) {
       console.log(this.name + this.age + "," + sex + address);
   }
   
   getInfo.bind(Person)('男','北京'); // 张三18,男北京
   ```

2. `apply()和call()`

   apply()和call()与bind()功能相同，但可以接收参数，只是参数形式不同。且直接执行，而不是只绑定不执行。

   apply接收参数数组

   call接收一个一个参数

   ```javascript
   var Person = {
       age: 18,
       name: '张三'
   }
   
   function getInfo(sex,address) {
       console.log(this.name + this.age + "," + sex + address);
   }
   
   getInfo.call(Person,'男','北京'); // 张三18,男北京
   getInfo.apply(Person,['男','北京']); // 张三18,男北京
   ```

---

## typeof与instanceof

1. `typeof`：返回值一般有如下结果：number、boolean、string、function、object、undefined
2. `instanceof`：判断变量是否为某个对象的实例

```js
// typeof
const a = 2;
if((typeof 2) == number){
    
}

// instanceof
function Person(){}
const liu = new Person();
if(liu instanceof Person){
    
}
```

---

## js中的闭包

定义：出现于<u>**函数返回值为一个函数**</u>的情况，在<u>**内部函数中使用了函数的变量**</u>，而**<u>内部函数在外部执行时</u>**，出现闭包现象。

表现：函数内的变量被暴露在外部，导致被修改。

危机：大量使用闭包会导致内存泄漏的发生。因为闭包出现时，函数内的变量会存于内存中，大量使用会影响性能。

解决：在函数结束时关闭函数内的变量。

*将函数当作对象，将变量当作对象的属性，将返回值当作对象的方法*

现象是回调引起的

```javascript
var count = 10;
function func() {
    var count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

var fn = func(); 
// 此处fn为内部返回函数，并不是func函数。定义时执行函数，调用fn()时只执行内部返回函数，此时函数内的count会被存于内存中

fn(); // 输出1
fn(); // 输出2
```

```javascript
// 常见的闭包现象————循环回调
for(var i=0;i<10;i++) {
    setTimeout(function(){
        console.log(i);
    },500)
}

// 10个10
// 此时setTimeout中的function相当于内部函数，for循环体相当于函数，for循环体中的i变量被function带出函数执行，导致i没有及时的清除而是被存在了内存中。
// 解决方法：使用带有块作用域的let变量
```

---

## 跨域的原因和解决方法

**跨域的原因**：浏览器的同源策略(cors)，只要请求url与当前网页的协议、域名(ip)、端口三者有任何一个不同时触发。

**解决方法**：

* proxy代理：通过nginx反向代理

* jsonp：通过src(src请求是不受同源策略限制的)的原理进行获取。

  缺点：无法发送POST请求；无法确定请求的成功与否；

* CORS：后台人员添加跨域允许

---

## 垃圾回收机制和内存泄漏

1. **垃圾回收机制**

   js中使用定期回收垃圾机制。

   对于变量的回收有两种方式

   * 标记清除：当变量进入环境时，标记为“进入环境”；当变量退出环境时，标记为“退出环境”。

     回收机制会定期清除标记为退出环境的变量。

   * 引用计数：自程序运行开始统计，变量每被引用一次则计数+1。

     回收机制会定期清除计数为0的变量。

2. **内存泄漏**

   产生的原因：由于不同的垃圾回收机制(存在bug)，使用不当时会出现分配的内存既无法被使用，又无法清除直至进程结束的情况。

   解决方法：一般采用及时的进行手动回收的方式。

   * 修改或者删除DOM元素时，如果该DOM有绑定事件时，会出现内存泄漏的情况

     ```javascript
     // 例子
     const div = document.getElementById('id');
     
     div.onclick = function() {
         div.innerHTML = "new";
     }
     
     // 解决方法
     const div = document.getElementById('id');
     
     div.onclick = function() {
         div.onclick = null;
         div.innerHTML = "new";
     }
     ```

   * 内部函数暴露在函数外部使用时(闭包现象)，会出现内存泄漏的情况

     ```javascript
     // 例子
     function func() {
         var obj = document.getElementById('id');
         
         obj.onclick = function(){
             
         }
     }
     
     // 解决方法
     function func() {
         var obj = document.getElementById('id');
         
         obj.onclick = function(){
             
         }
         obj = null;
     }
     ```

     

## JS(old)面向对象 —— 继承的实现

在js中继承的方法有：

* 原型链（prototype chaining）
* call() / apply()
* 混合方式（原型链与call、apply结合）
* 对象冒充

```js
/*---------------------原型链---------------------*/
// 只能继承原型链中的属性和方法
function Person(name) {
  this.name = name;
}

Person.prototype.showName = function() {
  console.log(this.name);
}

var zhangsan = new Person('zhangsan');
zhangsan.showName(); // zhangsan

function Coder(name,tech) {
  this.name = name;
  this.tech = tech;
}

Coder.prototype = new Person();

var wangwu = new Coder('wangwu', 'react');
wangwu.showName(); // wangwu
```

```js
/*---------------------call() / apply()---------------------*/
// 只能继承类内属性与方法
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.showInfo = function () {
    console.log(`${this.name} - ${this.age}`);
  }
}

function Coder() {
  let args = arguments;
  Person.call(this,args[0],args[1]);
  // Person.apply(this, args);
}

var zhangsan = new Coder('zhangsan', 20);
zhangsan.showInfo();
```

```js
/*---------------------原型链与 call、apply结合---------------------*/
// 原型链和类内的属性和方法均可继承
function Person(name,age) {
  this.name = name;
  this.age = age;
}

Person.prototype.showName = function() {
  console.log(this.name);
}
Person.prototype.showAge = function () {
  console.log(this.age);
}

function Coder() {
  let args = arguments;
  Person.apply(this, args); // 通过call、apply接收参数
}

Coder.prototype = new Person(); // 通过原型链继承父类原型链

var zhangsan = new Coder('zhangsan', 20);

zhangsan.showName();
zhangsan.showAge();
```

```js
/*---------------------对象冒充---------------------*/
// 类内的属性和方法
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  }
}

function Coder(name, age) {
  this.coder = Person; // 将Person的构造函数赋给coder属性
  this.coder(name, age); // 通过对象冒充实现继承。Person构造函数的this变为Coder
  delete this.coder; // 移除对Person的引用
}

var zhangsan = new Coder('zhangsan', 20);
zhangsan.showName(); // zhangsan拥有Person中的所有属性和方法，但实例对象为Coder
```



## JS数据类型(7种)

**U SO NB**

==U：undefined==

==S：string symbol==

==O：object==

==N：null number==

==B：boolean==



# JS异步编程解决方案

1. 生成器函数——ES6
2. Promise对象——ES6
3. async和await语法——ES8

# es5模块化实现方法

```javascript
var moudleA = (function() {
    var obj = {};
    
    var flag = true;
    function sum(numb1, numb2) {
        return numb1 + numb2;
    }
    
    obj.flag = flag;
    obj.sum = sum;
    
    return obj;
})()
```

# JS命名规则

以`__`开头的方法表示不进行暴露，是模块中的私有方法