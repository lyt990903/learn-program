import Vue from "vue";
import Vuex from "vuex";
import { INCREMENT } from "./mutations-types";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 100,
    info: {
      name: "lyt",
      age: 18
    }
  },
  mutations: {
    [INCREMENT](state, count) {
      state.counter += count;
    },
    decrement(state) {
      state.counter--;
    },
    updateInfo(state) {
      state.info.name = "liuyutong";
    }
  },
  actions: {
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(payload);
          context.commit('updateInfo');
          resolve("修改完成");
        }, 1000)
      })
    }
  },
  getters: {},
  modules: {}
});

export default store;
