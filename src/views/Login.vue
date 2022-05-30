<template>
  <div class="login_container">
    <div class="login_box">
      <avatar></avatar>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!-- <taobaoshangcheng content="淘宝商城"></taobaoshangcheng> -->
        </div>
        <el-tabs v-model="currentIndex" stretch>
          <el-tab-pane label="登陆" name="login">
            <signin></signin>
            <!-- <signup></signup> -->
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <signup></signup>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>
<script>
import avatar from "../components/avatar";
import signin from "../components/signin";
import signup from "../components/signup";

export default {
  name: "Login",
  components: {
    avatar,
    signin,
    signup,
  },
  data() {
    return {
      currentIndex: "login",
    };
  },
};
</script>
<style scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.box-card {
  /* width: 500px; */
  margin: 20px auto;
}
</style>
