<template>
  <basic-container>
    <avue-form :option="option"
               v-model="form"
               @tab-click="handleTabClick"
               @submit="handleSubmit"></avue-form>
  </basic-container>
</template>

<script>
import { getUserInfo, update, updatePassword } from "@/api/system/user";
import func from "@/utils/func";
import {validatenull} from "@/utils/validate";


export default {
  data () {
    return {
      index: 0,
      option: {
        tabs: true,
        tabsActive: 1,
        group: [
          {
            label: '个人信息',
            prop: 'info',
            column: [{
              label: '头像',
              type: 'upload',
              listType: 'picture-img',
              propsHttp: {
                res: 'data',
                url: 'link',
              },
              canvasOption: {
                text: 'blade',
                ratio: 0.1
              },
              action: '/api/blade-resource/oss/endpoint/put-file',
              tip: '只能上传jpg/png用户头像，且不超过500kb',
              span: 12,
              row: true,
              prop: 'avatar'
            }, {
              label: '姓名',
              span: 12,
              row: true,
              prop: 'name'
            }, {
              label: '用户名',
              span: 12,
              row: true,
              prop: 'realName'
            }, {
              label: '手机号',
              span: 12,
              row: true,
              prop: 'phone'
            }, {
              label: '邮箱',
              prop: 'email',
              span: 12,
              row: true,
            }]
          },
          {
            label: '修改密码',
            prop: 'password',
            column: [{
              label: '原密码',
              span: 12,
              row: true,
              type: 'password',
              prop: 'oldPassword'
            }, {
              label: '新密码',
              span: 12,
              row: true,
              type: 'password',
              prop: 'newPassword'
            }, {
              label: '确认密码',
              span: 12,
              row: true,
              type: 'password',
              prop: 'newPassword1'
            }]
          }
        ],
      },
      form: {}
    };
  },
  created () {
    this.handleWitch();
  },
  methods: {
    handleSubmit (form, done) {
      if (this.index === 0) {
        update(form).then(res => {
          if (res.data.success) {
            this.$message({
              type: "success",
              message: "修改信息成功!"
            });
          } else {
            this.$message({
              type: "error",
              message: res.data.msg
            });
          }
          done();
        }, error => {
          window.console.log(error);
          done();
        })
      } else {
        updatePassword(form.oldPassword, form.newPassword, form.newPassword1).then(res => {
          if (res.data.success) {
            this.$message({
              type: "success",
              message: "修改密码成功!"
            });
          } else {
            this.$message({
              type: "error",
              message: res.data.msg
            });
          }
          done();
        }, error => {
          window.console.log(error);
          done();
        })
      }
    },
    handleWitch () {
      if (this.index === 0) {
        getUserInfo().then(res => {
          const user = res.data.data;
          this.form = {
            id: user.id,
            avatar: user.avatar,
            name: user.name,
            realName: user.realName,
            phone: user.phone,
            email: user.email,
          }
        });
      }
    },
    handleTabClick(tabs) {
      if (validatenull(tabs.index)) {
        return;
      }
      this.index = func.toInt(tabs.index, 0);
      this.handleWitch();
    },
  }
};
</script>

<style>
</style>
