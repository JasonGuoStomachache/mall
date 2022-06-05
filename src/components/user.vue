<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <avatar></avatar>
    <hr width="1500px" />
    <div class="info">
      <div class="left">
        <h2>用户名称：{{ user.name }}</h2>
        <h2>用户性别：{{ user.sex }}</h2>
        <h2 v-for="item in user.phone">联系电话：{{ item }}</h2>
      </div>
      <div class="right">
        <h2 v-for="item in user.address">送货地址：{{ item }}</h2>
        <h2 v-for="item in user.cards">银行卡号：{{ item.bank }}</h2>
      </div>
    </div>
    <div
      class="bottom"
      style="width: 100%; text-align: left; padding: 0 0 0 100px"
    >
      <h2>个性签名</h2>
      <textarea style="width: 1000px; height: 200px">{{
        user.description
      }}</textarea>
    </div>
    <hr width="1500px" />
  </div>
</template>
<script>
import avatar from "../components/avatar.vue";
export default {
  data() {
    return {
      user: this.$store.state.user,
    };
  },
  components: {
    avatar,
  },
};
</script>
<style scoped>
div.avatar_box {
  width: 300px;
  height: 300px;
  position: static;
  transform: translate(0, 0);
}
div.info {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
}
div.left {
  padding: 0 0 0 50px;
  width: 50%;
  text-align: left;
}
div.right {
  width: 50%;
  text-align: left;
}
</style>
