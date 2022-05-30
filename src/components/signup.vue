<template>
  <div>
    <el-form
      label-width="0px"
      class="signup_form"
      status-icon
      :model="signupForm"
      :rules="rules"
      ref="signupRef"
    >
      <el-form-item prop="username">
        <el-input
          type="text"
          prefix-icon="el-icon-user"
          v-model="signupForm.username"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          prefix-icon="el-icon-key"
          v-model="signupForm.password"
        />
      </el-form-item>
      <el-form-item prop="insureword">
        <el-input
          type="password"
          prefix-icon="el-icon-lock"
          v-model="signupForm.insureword"
        />
      </el-form-item>
      <el-form-item>
        <div class="btns">
          <el-button type="primary" @click="submitForm">注册</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "signup",
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名。"));
      } else if (value.length <= 5) {
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
    let validateInsureword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次验证密码呢。"));
      } else if (this.signupForm.password !== this.signupForm.insureword) {
        callback(new Error(" 输入的两次密码不同呢！"));
      }
    };
    return {
      signupForm: {
        username: "",
        password: "",
        insureword: "",
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
        insureword: [
          {
            validator: validateInsureword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetForm() {
      this.$refs.signupRef.resetFields();
    },
    submitForm() {
      this.$refs.signupRef.validate((valid) => {
        if (valid) {
          console.log(this.signupForm);
        } else {
          return;
        }
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
