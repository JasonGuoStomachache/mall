<template>
  <div style="padding: 0; margin: 0">
    <h2>专业技能</h2>
    <hr />
    <div class="mainContainer">
      <detailsPage v-for="item in 10"></detailsPage>
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
  name: "zhuanyejineng",
  data() {
    return {
      currentpage: 1,
      listsDataNumber: 0,
      pagelist: [],
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
      this.listsDataNumber = lists.length;
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
