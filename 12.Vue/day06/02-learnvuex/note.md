# Vuex vue管理插件
* 目录：store/index.js
```
const store = new Vuex.Store({
  state:{}, // 共享的状态（变量）
  // 要为state添加响应式属性，要用vue.set()方法，day02中有；删除属性用vue.delete()
  mutations:{
    name(state, 参数?) {}, ...
  },
  // 推荐使用类型常量
  // 通过mutation中的方法修改state的变量，可以让devtool跟踪
  // 通过mutation更新：调用时$store.commit('方法名',参数?)
  // 推荐用同步函数,异步会使devtool发生错误；若必须进行异步改用action
  actions: {}, // 异步操作变量
  getters: {
    moreAgeStu(state) {
      return function(age) {
        return state.students.filter(s => s.age >= age)
      }
    }
    // 调用时 {{$store.getters.moreAgeStu(18)}} —— 获取students列表中年龄大于18的列表
  },
  // 类似于计算属性，也有默认参数state，可以有第二个参数getters，获取其他getter方法结果
  // 利用返回一个回调函数，进行接收参数
  modules: {
    a: {
      state:{},
      mutations: {}, ...
    }
  } // state具体分模块
})
```

# 使用方法同router
1. 安装插件
2. 创建store/index.js
3. 引用模块，安装，创建，导出
4. 在main.js中挂载

# 目录结构
|--store
    |--index.js —— 组装模块并导出
    |--actions.js —— 根级别的action
    |--mutations.js —— 根级别的mutation
    |--modules
        |--cart.js —— 某模块
        |--products.js —— 某模块
