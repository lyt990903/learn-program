import Vue from "vue";
import App from "./App";
// 会自动找router文件夹下的index
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
