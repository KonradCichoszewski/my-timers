import axios from "axios";

const actions = {
  addTimer({ commit }, { date, title, token }) {
    axios
      .post(
        "http://localhost:8000/timer/",
        { title, timestamp: date },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        let timer = res.data.timer;
        commit("addTimer", {
          date: timer.timestamp,
          title: timer.title,
          id: timer._id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateTime({ commit }, time) {
    commit("updateTime", time);
  },
  deleteTimer({ commit }, { timerId, token }) {
    axios
      .post(
        "http://localhost:8000/timer/delete",
        { id: timerId },
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((res) => {
        commit("deleteTimer", res.data.timer._id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateTheme({ commit }, colorTheme) {
    commit("updateTheme", colorTheme);
  },
  setToken({ commit }, token) {
    commit("setToken", token);
  },
  removeToken({ commit }) {
    commit("removeToken");
  },
  login({ commit }, { email, password }) {
    axios
      .post("http://localhost:8000/user/login/", { email, password })
      .then((res) => {
        commit("setToken", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  logout({ commit }) {
    commit("logout");
  },
  fetchTimers({ commit }, token) {
    axios
      .get("http://localhost:8000/timer/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        let timers = [];
        for (let timer of res.data.timers) {
          if (timer.timestamp > Math.floor(Date.now() / 1000))
            timers.push({
              date: timer.timestamp,
              title: timer.title,
              id: timer._id,
            });
        }
        commit("setTimers", timers);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default actions;
