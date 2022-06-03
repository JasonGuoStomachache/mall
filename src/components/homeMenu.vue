<template>
  <div class="toggle-button" @click="isCollapse = !isCollapse">
    <span>|||</span>
  </div>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    unique-opened
    :collapse="isCollapse"
    :collapse-transition="false"
    :router="true"
  >
    <el-menu-item index="/lunbotu">
      <el-icon><Apple /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>分类</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-submenu>
    <el-menu-item index="3">
      <el-icon><ShoppingCart /></el-icon>
      <span>购物车</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>用户中心</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "homeMenu",
  data() {
    return {
      isCollapse: false,
    };
  },
};
</script>
<style scoped>
.el-icon {
  padding: 0 8px 0 0;
}
.toggle-button {
  background-color: #f49a71;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
