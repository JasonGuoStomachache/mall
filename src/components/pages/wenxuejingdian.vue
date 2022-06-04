<template>
  <div style="padding: 0; margin: 0">
    <h2>文学经典</h2>
    <hr />
    <div class="mainContainer">
      <div v-for="item in pageLists" :key="item.id">
        <details-page :bookdata="item"></details-page>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100"
      v-model:current-page.sync="currentpage"
      @current-change="pagechange"
    />
  </div>
</template>
<script>
import detailsPage from "../detailsPage";
export default {
  name: "wenxuejingdian",
  mounted() {
    this.lists = this.$store.state.booksinfo;
  },
  data() {
    return {
      currentpage: 1,
      listsDataNumber: 0,
      pageLists: [],
      lists: [],
    };
  },
  methods: {
    pagechange(val) {
      this.pageLists = this.lists.slice((val - 1) * 10, val * 10);
    },
    initPageLists() {
      this.pageLists = this.lists.slice(0, 10);
    },
  },
  watch: {
    lists: function name(params) {
      this.listsDataNumber = this.lists.length;
      this.initPageLists();
    },
  },
  components: {
    detailsPage,
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
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
