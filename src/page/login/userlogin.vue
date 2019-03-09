<template>
  <el-form class="login-form"
           status-icon
           :rules="loginRules"
           ref="loginForm"
           :model="loginForm"
           label-width="0">
    <el-form-item prop="tenantCode">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                v-model="loginForm.tenantCode"
                auto-complete="off"
                :placeholder="$t('login.tenantCode')">
        <i slot="prefix"
           class="icon-quanxian"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="username">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                v-model="loginForm.username"
                auto-complete="off"
                :placeholder="$t('login.username')">
        <i slot="prefix"
           class="icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                :type="passwordType"
                v-model="loginForm.password"
                auto-complete="off"
                :placeholder="$t('login.password')">
        <i class="el-icon-view el-input__icon"
           slot="suffix"
           @click="showPassword"></i>
        <i slot="prefix"
           class="icon-mima"></i>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 size="small"
                 @click.native.prevent="handleLogin"
                 class="login-submit">{{$t('login.submit')}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "userlogin",
  data() {
    return {
      loginForm: {
        tenantCode: "000000",
        username: "admin",
        password: "admin",
        type: "account"
      },
      loginRules: {
        tenantCode: [
          { required: true, message: "请输入租户编号", trigger: "blur" }
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, message: "密码长度最少为6位", trigger: "blur" }
        ]
      },
      passwordType: "password"
    };
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(["tagWel"])
  },
  props: [],
  methods: {
    showPassword() {
      this.passwordType == ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch("LoginByUsername", this.loginForm).then(() => {
            this.$router.push({ path: this.tagWel.value });
          });
        }
      });
    }
  }
};
</script>

<style>
</style>
