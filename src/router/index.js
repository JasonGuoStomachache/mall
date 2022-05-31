import { createRouter, createWebHashHistory } from "vue-router";

const Login = () => import("../views/Login.vue");
const Home = () => import("../views/Home.vue");

const routes = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: history,
});

export default router;
