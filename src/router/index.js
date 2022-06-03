import { createRouter, createWebHashHistory } from "vue-router";

const Login = () => import("../views/Login.vue");
const Home = () => import("../views/Home.vue");
const lunbotu = () => import("../components/lunbotu.vue");
const wenxuejingdian01 = () =>
  import("../components/pages/wenxuejingdian01.vue");

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
    redirect: "/lunbotu",
    component: Home,
    children: [
      {
        path: "/lunbotu",
        name: "lunbotu",
        component: lunbotu,
      },
      {
        path: "/wenxuejingdian01",
        name: "wenxuejingdian01",
        component: wenxuejingdian01,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: history,
});

export default router;
