<template>
  <div class="banner">
    <el-image
      style="width: 200px; height: 250px"
      :src="bookdata.url"
      hide-on-click-modal
      :preview-src-list="bookdata.urls"
    />
    <!-- <img :src="bookdata.url" style="width: 200px; height: 250px" /> -->
    <hr style="width: 250px" />
    <div class="goodsinfo">
      <div class="goodsdescription">
        <h4 class="goodsname">
          <abbr :title="bookdata.name">{{ bookdata.name }} </abbr>
        </h4>
        <h6 class="introduction">
          <abbr :title="bookdata.description">{{ bookdata.description }}</abbr>
        </h6>
      </div>

      <div class="process">
        <p style="font-size: 25px; padding: 0; margin: 0">
          ￥ {{ bookdata.price }}
        </p>
        <div style="text-align: center">
          <el-button size="small" circle type="primary" @click="delcount"
            ><el-icon><Minus /></el-icon
          ></el-button>
          <el-button size="small" circle type="primary" @click="addcount"
            ><el-icon><Plus /></el-icon
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bookdata: {
      type: Object,
      default() {
        return {
          id: "01",
          name: "三国演义",
          price: "21",
          url: "/image/sanguoyanyi01.png",
          urls: ["/image/sanguoyanyi01.png", "/image/sanguoyanyi02.png"],
          description: "sanguoyanyi",
        };
      },
    },
  },
  methods: {
    addcount() {
      this.$store.commit("addgoods", {
        name: this.bookdata.name,
        price: this.bookdata.price,
        count: 1,
      });
      this.$message.success(this.bookdata.name + " 已经在购物车等你啦！");
    },
    delcount() {
      this.$store.commit("delgoods", {
        name: this.bookdata.name,
        price: this.bookdata.price,
        count: 1,
      });
    },
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
