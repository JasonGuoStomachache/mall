import { createRouter, createWebHashHistory } from "vue-router";

const Login = () => import("../views/Login.vue");
const Home = () => import("../views/Home.vue");
const lunbotu = () => import("../components/lunbotu.vue");
const wenxuejingdian01 = () =>
  import("../components/pages/wenxuejingdian01.vue");
const ertongduwu = () => import("../components/pages/ertongduwu.vue");
const zhuanyejineng = () => import("../components/pages/zhuanyejineng.vue");
const yiwujiaoyu = () => import("../components/pages/yiwujiaoyu.vue");
const shuxueaoshu = () => import("../components/pages/shuxueaoshu.vue");
const kehuanyineng = () => import("../components/pages/kehuanyineng.vue");
const xuanhuanxiuzhen = () => import("../components/pages/xuanhuanxiuzhen.vue");
const chuanyueshikong = () => import("../components/pages/chuanyueshikong.vue");
const xiaoyuanlianai = () => import("../components/pages/xiaoyuanlianai.vue");

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
        path: "/wenxuejingdian",
        name: "wenxuejingdian",
        component: wenxuejingdian01,
      },
      {
        path: "/ertongduwu",
        name: "ertongduwu",
        component: ertongduwu,
      },
      {
        path: "/xiaoyuanlianai",
        name: "xiaoyuanlianai",
        component: xiaoyuanlianai,
      },
      {
        path: "/xuanhuanxiuzhen",
        name: "xuanhuanxiuzhen",
        component: xuanhuanxiuzhen,
      },
      {
        path: "/chuanyueshikong",
        name: "chuanyueshikong",
        component: chuanyueshikong,
      },
      {
        path: "/kehuanyineng",
        name: "kehuanyineng",
        component: kehuanyineng,
      },
      {
        path: "/yiwujiaoyu",
        name: "yiwujiaoyu",
        component: yiwujiaoyu,
      },
      {
        path: "/shuxueaoshu",
        name: "shuxueaoshu",
        component: shuxueaoshu,
      },
      {
        path: "/zhuanyejineng",
        name: "zhuanyejineng",
        component: zhuanyejineng,
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
