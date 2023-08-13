### 想要使url改变但是整个页面不刷新（即不重新请求资源）
1. 改变hash
`location.hash='...'`:会多一个#/
2. 使用html5的history模式
`history.pushState({data},'title','url')`
push是将url压入栈中
`history.back()`:将栈顶的url移除掉，会多一个#/
`history.replaceState({data},'title','url')`:用新url替换旧栈顶url（无法返回）
`history.go(-1)`:等同于`back()`，参数可正可负
`history.forward()`:等同于`history.go(1)`


### vuecli打包机制

不会打包到一个bundle.js中，会分包打包
* app：当前应用程序开发的所有代码（业务代码）
* manifest：为打包的代码做底层支撑的，比如模块化
* vendor：第三方供应商提供的代码

路由懒加载：按路由将js打包至不同的js文件，用到时才会请求


### 路由守卫有很多种，官网可搜

### keep-alive与vue-router

keep-alive用于解决vue-router跳转路由没法保存当前状态
* 要配合守卫beaforeRouteLeave
* 只有在keep-alive中的组件才有activated、deactivated生命周期
* 在keep-alive中的组件跳转时不会destroyed，而是会deactivated
