<template>
  <div>
    <el-form
      label-width="0px"
      class="signin_form"
      status-icon
      :model="signinForm"
      :rules="rules"
      ref="signinRef"
    >
      <el-form-item prop="username">
        <el-input
          type="text"
          prefix-icon="el-icon-user"
          v-model="signinForm.username"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          prefix-icon="el-icon-key"
          v-model="signinForm.password"
        />
      </el-form-item>
      <el-form-item>
        <div class="btns">
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { post } from "../network/request.js";
export default {
  name: "signin",
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名。"));
      } else if (value.length <= 4) {
        callback(new Error("用户名长度不对呀！"));
      } else {
        callback();
      }
    };
    let validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码呢。"));
      } else {
        callback();
      }
    };
    return {
      signinForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            validator: validateUsername,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validatePassword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetForm() {
      this.$refs.signinRef.resetFields();
    },
    submitForm() {
      this.$refs.signinRef.validate(async (valid) => {
        if (!valid) return;
        await post("login", this.signinForm)
          .then((res) => {
            if (res.data.meta.status !== 200)
              return this.$message.error("登陆失败！");
            this.$message.success("登陆成功！");
            window.sessionStorage.setItem("token", res.data.data.token);
            this.$router.push("/Home");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
  },
};
</script>
<style scoped>
.login_form {
  position: absolute;
  /* bottom: 0; */
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
