<template>
  <el-container class="home-container">
    <el-header>
      <home-header></home-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <home-menu></home-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import homeMenu from "../components/homeMenu.vue";
import homeHeader from "../components/homeHeader";
export default {
  name: "Home",
  components: {
    homeMenu,
    homeHeader,
  },
};
</script>
<style scoped>
.el-header {
  background-color: #a498cb;
  height: 70px;
}
.el-aside {
  background-color: #545c64;
}
.el-main {
  background-color: #fbc451;
}
.home-container {
  width: 100%;
  height: 100%;
}
</style>
