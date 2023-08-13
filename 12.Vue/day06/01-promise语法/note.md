### promise三种状态

* pending：等待状态，正在网络请求
* fullfill：满足状态，成功后主动回调resolve
* reject：拒绝状态，失败后主动回调reject

### Promise的all方法

* 可以监听多个promise对象，都完成才会执行之后的then

```
// 普通链式写法
new Promise((resolve,reject) => {
  resolve(data);
  reject(err)
}).then(data => {
  return new Promise(resolve,reject) => {
    resolve(data);
    reject(err)
  }
}).then(data => {
  return new Promise(resolve,reject) => {
    resolve(data);
    reject(err)
  }
})

// 简化链式写法1
new Promise((resolve,reject) => {
  resolve(data);
  reject(err)
}).then(data => {
  Promise.resolve(data)
}).then(data => {
  Promise.resolve(data)
}).catch(err) {

}

// 简化链式写法2
new Promise((resolve,reject) => {
  resolve(data);
  reject(err)
}).then(data => {
  return data
}).then(data => {
  return data
}).catch(err) {
  
}
```