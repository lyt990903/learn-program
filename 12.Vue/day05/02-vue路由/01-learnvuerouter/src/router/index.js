// 引入模块
import VueRouter from "vue-router";
import Vue from "vue";

// 普通加载方式
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

// 路由懒加载（推荐）
const Home = () => import("../components/Home");
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");

const About = () => import("../components/About");
const User = () => import("../components/User");
const Profile = () => import("../components/Profile");

// 1.通过vue.use()，安装挂载插件
Vue.use(VueRouter);

// 2. 创建VueRouter对象
const routes = [
  {
    // 首页重定向
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    meta: {
      title: "首页"
    },
    component: Home,
    // 路由嵌套，首页内部的路由
    // router-link和router-view加在Home.vue中
    children: [
      {
        // 子路由初始重定向
        path: "",
        redirect: "news"
      },
      {
        // 子路由前不能加/，路由前必须加/
        path: "news",
        component: HomeNews
      },
      {
        path: "message",
        component: HomeMessage
      }
    ]
  },
  {
    path: "/about",
    meta: {
      title: "关于"
    },
    component: About
  },
  {
    // 配置动态路由
    path: "/user/:userId",
    meta: {
      title: "用户"
    },
    component: User
  },
  {
    path: "/profile",
    meta: {
      title: "档案"
    },
    component: Profile
  }
];

const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  // 模式默认为hash模式，可以改为history模式
  mode: "history",
  // 修改router激活后的属性名
  linkActiveClass: "active"
});


// 前置钩子/守卫 —— 跳转前回调
router.beforeEach((to, from, next) => {
  // 导航守卫，监听导航变化 ——> 实现title显示为导航信息
  // 使用meta属性为导航添加title
  // 从from跳转到to
  // console.log(to);
  document.title = to.matched[0].meta.title;
  next();
});
/*
  后置钩子/守卫 —— 跳转后回调 faterEach(to,from) {}
*/

// 3. 将router对象传入到vue实例中
export default router;
