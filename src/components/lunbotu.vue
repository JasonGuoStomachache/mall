<template>
  <div id="head">这是头部div</div>
  <el-carousel :interval="4000" type="card" height="600px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <hr style="background-color: black" />
  <div id="links">
    <h4>友情链接：</h4>
    <h4 v-for="(item, index) in Flinks" :key="index">
      <a :href="item.url">{{ item.name }}</a>
    </h4>
  </div>
</template>

<script>
export default {
  name: "lunbotu",
  props: {
    imagelist: {},
  },
  data() {
    return {
      Flinks: [
        {
          name: "百度",
          url: "https://www.baidu.com",
        },
        {
          name: "京东",
          url: "https://www.jd.com",
        },
        {
          name: "淘宝",
          url: "https://www.taobao.com",
        },
        {
          name: "哔哩哔哩",
          url: "https://www.bilibili.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 头部样式 */
#head {
  height: 100px;
  background-color: aqua;
  text-align: center;
  margin: 40px 0;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#links {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
#links h4 {
  padding: 10px;
}
</style>
