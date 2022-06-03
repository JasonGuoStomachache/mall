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
      <el-menu-item-group title="文化海洋">
        <el-menu-item index="/wenxuejingdian">文学经典</el-menu-item>
        <el-menu-item index="/ertongduwu">儿童读物</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="小说世界">
        <el-menu-item index="/xiaoyuanlianai">校园恋爱</el-menu-item>
        <el-menu-item index="/xuanhuanxiuzhen">玄幻修真</el-menu-item>
        <el-menu-item index="/chuanyueshikong">穿越时空</el-menu-item>
        <el-menu-item index="/kehuanyineng">科幻异能</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="课本教材">
        <el-menu-item index="/yiwujiaoyu">义务教育</el-menu-item>
        <el-menu-item index="/shuxueaoshu">数学奥数</el-menu-item>
        <el-menu-item index="/zhuanyejineng">专业技能</el-menu-item>
      </el-menu-item-group>
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
