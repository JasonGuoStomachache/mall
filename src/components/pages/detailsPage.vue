<template>
  <div class="banner">
    <el-image
      style="width: 200px; height: 250px"
      :src="url"
      :fit="fit"
      hide-on-click-modal
      :preview-src-list="srcList"
    />
    <hr style="width: 250px" />
    <div class="goodsinfo">
      <div class="goodsdescription">
        <h4 class="goodsname">
          <abbr :title="name">{{ name }} </abbr>
        </h4>
        <h6 class="introduction">
          <abbr :title="discription">{{ discription }}</abbr>
        </h6>
      </div>

      <div class="process">
        <p style="font-size: 25px; padding: 0; margin: 0">￥ {{ prices }}</p>
        <div style="text-align: center">
          <el-button size="small" circle type="primary"
            ><el-icon><Minus /></el-icon
          ></el-button>
          <el-button size="small" circle type="primary"
            ><el-icon><Plus /></el-icon
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      ],
      name: "水仙花",
      prices: 20.0,
      discription: "miaoshuuisfasfafasfasfasdqa",
    };
  },
};
</script>
<style>
.banner {
  width: 280px;
  height: 390px;
  background-color: white;
  margin: 15px;
  border-radius: 0 30px 0 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px;
}
.el-image {
  border: 1px solid;
  margin: 6px;
  padding: 10px;
}
.goodsinfo {
  width: 250px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.goodsdescription {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 60%;
  height: 100%;
}
.goodsname {
  padding: 0;
  margin: 0;
  font-size: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 170px;
  height: 50%;
}
.introduction {
  height: 40%;
  font-size: 10px;
  padding: 0;
  margin: 5px 0 0 0;
  word-wrap: break-word;
}
.process {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 40%;
}
</style>
