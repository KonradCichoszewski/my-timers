const mutations = {
  addTimer(state, timer) {
    state.timers.push(timer);
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
  setToken(state, token) {
    state.token = token;
  },
  removeToken(state) {
    state.token = null;
  },
  setTimers(state, timers) {
    state.timers = timers;
  },
  logout(state) {
    state.token = null;
  },
  setLanguage(state, language) {
    state.language = language;
  },
};

export default mutations;
