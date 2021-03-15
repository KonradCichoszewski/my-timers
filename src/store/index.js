import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timers: [],
    currentTime: Date.now(),
  },
  mutations: {
    addTimer(state, name) {
      state.timers.push(name);
    },
    updateTime(state, time) {
      state.currentTime = time;
    },
  },
  actions: {
    addTimer({ commit }, name) {
      commit("addTimer", name);
    },
    updateTime({ commit }, time) {
      commit("updateTime", time);
    },
  },
  modules: {},
});
