<template>
  <div class="container">
    <div class="leftcon">
      <avatar></avatar>
      <span class="title">桃宝商城</span>
    </div>
    <div class="search">
      <el-input
        v-model="searchInput"
        placeholder="搜索一下"
        prefix-icon="el-icon-search"
        style="width: 100%"
      />
    </div>
    <div class="rightcon">
      <el-avatar :size="50">User</el-avatar>
      <span v-if="islogin" class="userfont">Welcome ! ! ! {{ username }}</span>
      <span v-else>
        Hello, 请先<router-link to="/Login">登录</router-link></span
      >
    </div>
  </div>
</template>
<script>
import avatar from "./avatar.vue";
export default {
  name: "homeHeader",
  components: {
    avatar,
  },
  data() {
    return {
      username: this.$store.state.user.name,
      searchInput: "",
      islogin: window.sessionStorage.getItem("token"),
    };
  },
};
</script>
<style scoped>
div.avatar_box {
  width: 40px;
  height: 40px;
  position: static;
  transform: translate(0, 0);
}
.container {
  display: flex;
  justify-content: space-between;
}
div.leftcon {
  display: flex;
  align-items: center;
  padding: 5px;
}
.title {
  font-size: 20px;
  padding: 0px 5px;
}
div.rightcon {
  display: flex;
  align-items: center;
  padding: 5px;
}
.userfont {
  font-size: 15px;
  padding: 0 5px;
}
div.search {
  width: 600px;
  display: flex;
  align-items: center;
}
</style>
