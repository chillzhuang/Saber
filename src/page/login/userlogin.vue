<template>
  <el-form class="login-form"
           status-icon
           :rules="loginRules"
           ref="loginForm"
           :model="loginForm"
           label-width="0">
    <el-form-item v-if="tenantMode" prop="tenantId">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                v-model="loginForm.tenantId"
                auto-complete="off"
                :placeholder="$t('login.tenantId')">
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
  import website from '@/config/website';

  export default {
    name: "userlogin",
    data() {
      return {
        tenantMode: website.tenantMode,
        loginForm: {
          tenantId: "000000",
          username: "admin",
          password: "admin",
          type: "account"
        },
        loginRules: {
          tenantId: [
            { required: false, message: "请输入租户ID", trigger: "blur" }
          ],
          username: [
            { required: true, message: "请输入用户名", trigger: "blur" }
          ],
          password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 1, message: "密码长度最少为6位", trigger: "blur" }
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
            const loading = this.$loading({
              lock: true,
              text: '登录中,请稍后。。。',
              spinner: "el-icon-loading"
            });
            this.$store.dispatch("LoginByUsername", this.loginForm).then(() => {
              this.$router.push({ path: this.tagWel.value });
              loading.close();
            }).catch(() => {
              loading.close()
            });
          }
        });
      }
    }
  };
</script>

<style>
</style>
