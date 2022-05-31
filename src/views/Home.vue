<template>
  <el-container class="home-container">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <home-menu></home-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
import homeMenu from "../components/homeMenu.vue";
export default {
  name: "Home",
  components: {
    homeMenu,
  },
};
</script>
<style scoped>
.el-header {
  background-color: #a498cb;
}
.el-aside {
  background-color: #a7bba9;
}
.el-main {
  background-color: #fbc451;
}
.home-container {
  width: 100%;
  height: 100%;
}
</style>
