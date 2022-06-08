<template>
  <div style="padding: 0; margin: 0">
    <h2>我的购物车</h2>
    <hr />

    <div class="container">
      <div v-if="pagelists.length != 0">
        <table
          class="table table-bordered table-striped table-hover table-condensed"
          style="width: 100%"
        >
          <thead>
            <th>序号</th>
            <th>商品名称</th>
            <th>单价</th>
            <th>购买数量</th>
            <th>操作</th>
          </thead>
          <tbody>
            <tr v-for="(book, index) in pagelists">
              <td style="width: 20%">
                {{ (currentpage - 1) * 10 + index + 1 }}
              </td>
              <td style="width: 20%">{{ book.name }}</td>
              <td style="width: 20%">{{ book.price }}</td>
              <td style="width: 20%">
                <button @click="delcount(book)" :disabled="book.count <= 1">
                  -
                </button>
                {{ book.count }}
                <button @click="addcount(book)">+</button>
              </td>
              <td style="width: 20%">
                <el-button type="primary" @click="removeitem(index)"
                  >移除</el-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <h2>购物车为空</h2>
      </div>
    </div>
    <hr />
    <el-pagination
      background
      layout="prev, pager, next"
      :total="listsDataNumber"
      v-model:current-page.sync="currentpage"
      @current-change="pagechange"
    />
  </div>
  <div
    class="bottom"
    style="
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0 120px 0 0;
    "
  >
    <h2 style="font-size: 30px; padding: 0 100px 0 0">
      总价格：{{ totalPrice }}
    </h2>
    <el-button type="primary" @click="bill" size="large">结算</el-button>
  </div>
</template>
<script>
export default {
  name: "chuanyueshikong",
  mounted() {
    this.lists = this.$store.state.orderlist;
  },
  data() {
    return {
      currentpage: 1,
      listsDataNumber: 0,
      pagelists: [],
      lists: [],
    };
  },
  methods: {
    pagechange(val) {
      this.pagelists = this.lists.slice((val - 1) * 10, val * 10);
    },
    initPageLists() {
      this.pagelists = this.lists.slice(0, 10);
    },
    addcount(book) {
      this.$store.commit("addgoods", {
        name: book.name,
        price: book.price,
        count: 1,
      });
    },
    delcount(book) {
      this.$store.commit("delgoods", {
        name: book.name,
        price: book.price,
        count: 1,
      });
    },
    removeitem(index) {
      this.$store.commit("rmvgoods", index);
      this.$router.replace("/Redirect");
    },
    bill() {
      const tokenStr = window.sessionStorage.getItem("token");
      if (!tokenStr) {
        return this.$router.push("/Login");
      } else {
        this.$message.success("暂时没有开放支付功能哟！");
      }
    },
  },
  watch: {
    lists: function name(params) {
      this.listsDataNumber = this.lists.length;
      this.initPageLists();
    },
  },
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2);
    },
  },
  computed: {
    totalPrice() {
      let result = 0;
      for (let item of this.pagelists) {
        result += Number(item.price) * Number(item.count);
      }
      return result;
    },
  },
};
</script>
<style scoped>
.el-pagination {
  text-align: center;
  margin: 20px 0 0 0;
}
.mainContainer {
  width: 100%;
  height: 850px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.container {
  width: 100%;
  height: 500px;
  text-align: center;
}
</style>
