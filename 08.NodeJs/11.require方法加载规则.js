// 路径模块，通过路径加载
// require('./文件')


// 核心模块本质也是文件
// 核心模块文件已经被编译到了二进制文件中了，我们只需要按照名字来加载就可以了
// require('http')


// 第三方模块
// 凡是第三方模块都必须通过npm来下载
// 使用的时候通过require('包名')的方法来进行加载才可以使用
// 不可能用任何一个第三方包和核心模块的名字是一样的
// 既不是核心模块，也不是路径形式的模块
//      先找到当前文件夹所在目录中的node_modules目录
//      node_modules/art-template文件夹
//      node_modules/art-template/package.json文件
//      node_modules/art-template/package.json文件中的main属性
//      main属性中记录的当前模块的入口文件（入口模块）


// 如果package.json文件不存在或者 main 指定的入口模块也没有
// 则 node 会自动找该目录下的index.js
// 也就是说index.js会作为一个默认备选项
// 如果说以上所有条件都不成立，则会进入上一级目录中的node_modules目录查找
// 如果上一级还没有，则继续往上上一级查找

// 如果直到磁盘根目录还找不到，最后报错：
//      can not find module xxx


/*
模块查找机制
    优先从缓存加载
    核心模块
    路径形式的文件模块
    第三方模块
        node_modules/art-template
        ode_modules/art-template/package.json
        node_modules/art-template/package.json main
        index.js备选项
        进入上一级目录找node_modules
        那招这个规则一次往上找，直到磁盘根目录还找不到，最后报错：Can not fund module xxx
        一个项目有且仅有一个node_modules而且是存放到项目的根目录
*/