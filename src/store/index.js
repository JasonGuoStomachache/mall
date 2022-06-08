import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "",
      sex: "请完善信息",
      phone: ["请完善信息"],
      address: ["请完善信息"],
      description: "请完善信息",
      cards: [{ bank: "请完善信息", id: "请完善信息" }],
    },
    orderlist: [],
    banner: [
      "/lunboimg/01.png",
      "/lunboimg/02.png",
      "/lunboimg/03.png",
      "/lunboimg/04.png",
      "/lunboimg/05.png",
      "/lunboimg/06.png",
    ],
    booksinfo: [
      {
        id: "01",
        name: "三国演义",
        price: "21",
        url: "/image/sanguoyanyi01.png",
        urls: ["/image/sanguoyanyi01.png", "/image/sanguoyanyi02.png"],
        description: "sanguoyanyi",
      },
      {
        id: "02",
        name: "水浒传",
        price: "22",
        url: "/image/shuihuzhuan01.png",
        urls: ["/image/shuihuzhuan01.png", "/image/shuihuzhuan02.png"],
        description: "shuihuzhuan",
      },
      {
        id: "03",
        name: "西游记",
        price: "23",
        url: "/image/xiyouji01.png",
        urls: ["/image/xiyouji01.png", "/image/xiyouji02.png"],
        description: "xiyouji",
      },
      {
        id: "04",
        name: "红楼梦",
        price: "24",
        url: "/image/hongloumeng01.png",
        urls: ["/image/hongloumeng01.png", "/image/hongloumeng02.png"],
        description: "hongloumeng",
      },
      {
        id: "05",
        name: "战争与和平",
        price: "25",
        url: "/image/zhanzhengyuheping01.png",
        urls: [
          "/image/zhanzhengyuheping01.png",
          "/image/zhanzhengyuheping02.png",
        ],
        description: "zhanzhengyuheping",
      },
      {
        id: "06",
        name: "人性的弱点",
        price: "26",
        url: "/image/renxingderuodian01.png",
        urls: [
          "/image/renxingderuodian01.png",
          "/image/renxingderuodian02.png",
        ],
        description: "renxingderuodian",
      },
      {
        id: "07",
        name: "方与圆",
        price: "27",
        url: "/image/fangyuyuan01.png",
        urls: ["/image/fangyuyuan01.png", "/image/fangyuyuan02.png"],
        description: "fangyuyuan",
      },
      {
        id: "08",
        name: "乌合之众",
        price: "28",
        url: "/image/wuhezhizhong01.png",
        urls: ["/image/wuhezhizhong01.png", "/image/wuhezhizhong02.png"],
        description: "wuhezhizhong",
      },
      {
        id: "09",
        name: "平凡的世界",
        price: "29",
        url: "/image/pingfandeshijie01.png",
        urls: ["/image/pingfandeshijie01.png", "/image/pingfandeshijie02.png"],
        description: "pingfandeshijie",
      },
      {
        id: "10",
        name: "百年孤独",
        price: "30",
        url: "/image/bainiangudu01.png",
        urls: ["/image/bainiangudu01.png", "/image/bainiangudu02.png"],
        description: "bainiangudu",
      },
      {
        id: "11",
        name: "肖申克的救赎",
        price: "31",
        url: "/image/xiaoshenkedejiushu01.png",
        urls: [
          "/image/xiaoshenkedejiushu01.png",
          "/image/xiaoshenkedejiushu02.png",
        ],
        description: "xiaoshenkedejiushu",
      },
    ],
  },
  getters: {},
  mutations: {
    setusername(state, username) {
      state.user.name = username;
    },
    addgoods(state, payload) {
      for (let item of state.orderlist) {
        if (item.name == payload.name) {
          item.count++;
          return;
        }
      }
      state.orderlist.push(payload);
    },
    delgoods(state, payload) {
      for (let item of state.orderlist) {
        if (item.name == payload.name && item.count !== 1) {
          item.count--;
          return;
        }
      }
      let result = state.orderlist.findIndex(
        (item) => item.name === payload.name
      );
      console.log(result);
      this.commit("rmvgoods", result);
    },
    rmvgoods(state, payload) {
      state.orderlist.splice(payload, 1);
    },
  },
  actions: {},
  modules: {},
});
