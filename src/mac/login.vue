<template>
  <div class="mac_bg"></div>
  <div class="login animate__animated"
       :class="{'animate__bounceOut':pass}">
    <div class="head">
      <img src="https://avatar.gitee.com/uploads/61/632261_smallweigit.jpg!avatar100?1518660401"
           alt="">
    </div>
    <div class="message">Login Please</div>
    <div class="form">
      <div class="item"
           :class="isUserNameError?'error':''">
        <input class="account"
               placeholder="account here..."
               v-model="form.username"
               type="email" />
      </div>
      <div class="item"
           :class="isUserPasswordError?'error':''">
        <input class="password"
               placeholder="password here..."
               v-model="form.password"
               type="password" />
        <i class="iconfont icon-send"
           @click="handleLogin"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      pass: false,
      isUserNameError: false,
      isUserPasswordError: false,
      form: {
        username: "",
        password: ""
      }
    }
  },
  computed: {
    ...mapGetters(["tagWel"])
  },
  methods: {
    handleLogin () {
      if (this.form.username == '') {
        this.isUserNameError = true
        setTimeout(() => {
          this.isUserNameError = false
        }, 1000)
        return
        return
      } else if (this.form.password == '') {
        this.isUserPasswordError = true
        setTimeout(() => {
          this.isUserPasswordError = false
        }, 1000)
        return
      }
      this.$store.dispatch("LoginByUsername", this.loginForm).then(() => {
        this.pass = true
        setTimeout(() => {
          this.$router.push(this.tagWel);
        }, 1000)
      });
    }
  }
}
</script>
<style scoped>
@import url("./login.css");
</style>