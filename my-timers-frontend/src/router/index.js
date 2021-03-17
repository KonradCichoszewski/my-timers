import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import Dashboard from "../views/Dashboard.vue";
import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
    beforeEnter: (to, from, next) => {
      if (store.state.token) {
        next({ name: "Dashboard" });
      } else next();
    },
  },
  {
    path: "*",
    redirect: { name: "Dashboard" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!store.state.token && to.name !== "LoginView") {
    next({ name: "LoginView" });
  } else next();
});

export default router;
