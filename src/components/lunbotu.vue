<template>
  <div class="fangsheng">精品推荐</div>
  <hr style="background-color: black" />
  <el-carousel :interval="4000" type="card" height="600px">
    <el-carousel-item v-for="(item, index) in imagelist" :key="index">
      <el-image :src="item" hide-on-click-modal />
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
      imagelist: this.$store.state.banner,
    };
  },
};
</script>

<style scoped>
/* 头部样式 */
.wenzi {
  text-align: center;
  margin: 20px 0;
  font-size: 80px;
  font-weight: 800;
  font-family: "华文彩云";
  color: #a7bba9;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px;
}

.fangsheng {
  /* 要把阴影与大小配合好，一般来说大小都是偏大时采用 */
  font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
  text-transform: uppercase;
  font-size: 92px;
  text-align: center;
  color: #f1ebe5;
  text-shadow: 0 8px 9px #c4b59d, 0px -2px 1px #fff;
  font-weight: bold;
  letter-spacing: -4px;
  background: linear-gradient(to bottom, #ece4d9 0%, #e9dfd1 100%);
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
