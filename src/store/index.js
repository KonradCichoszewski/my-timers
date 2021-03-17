import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timers: [],
    currentTime: Date.now(),
    colorTheme: [
      { name: "--bg", value: "#fff" },
      { name: "--accent", value: "yellow" },
      { name: "--font", value: "#000" },
      { name: "--nav", value: "#00000010" },
      { name: "--navHover", value: "#00000033" },
      { name: "--border", value: "#ddd" },
      { name: "--borderDelete", value: "red" },
      { name: "--bgDelete", value: "#ff00000e" },
      { name: "--timerShadow", value: "#00000022" },
      { name: "--digitBg", value: "#000" },
      { name: "--digitFont", value: "#fff" },
      { name: "--", value: "" },
    ],
  },
  plugins: [createPersistedState()],
  mutations: {
    addTimer(state, name) {
      state.timers.push(name);
    },
    updateTime(state, time) {
      state.currentTime = time;
    },
    deleteTimer(state, timerId) {
      let index = state.timers.findIndex((timer) => {
        return timer.id == timerId;
      });
      state.timers.splice(index, 1);
    },
    updateTheme(state, colorTheme) {
      state.colorTheme = colorTheme;
    },
  },
  actions: {
    addTimer({ commit }, name) {
      commit("addTimer", name);
    },
    updateTime({ commit }, time) {
      commit("updateTime", time);
    },
    deleteTimer({ commit }, timerId) {
      commit("deleteTimer", timerId);
    },
    updateTheme({ commit }, colorTheme) {
      commit("updateTheme", colorTheme);
    },
  },
  modules: {},
});
