import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timers: [],
    currentTime: Date.now(),
    token: null,
    user: null,
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
  mutations,
  actions,
  modules: {},
});
