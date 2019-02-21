<template>
  <div>
    <basic-container>
      <avue-tabs :option="option"
                 v-model="form"
                 @change="handleChange"
                 @submit="handleSubmit"></avue-tabs>
    </basic-container>
  </div>
</template>

<script>
  import option from "@/const/user/info";

  export default {
    data() {
      return {
        type: "info",
        option: option,
        form: {}
      };
    },
    created() {
      this.handleWitch();
    },
    methods: {
      handleSubmit() {
        this.$message({
          message: this.form,
          type: "success"
        });
      },
      handleWitch() {
        if (this.type === "info") {
          this.form = {
            username: "smallwei",
            name: "smallwei",
            phone: "1888888888888",
            detail: "这是一个个性签名"
          };
        } else if (this.type === "password") {
          this.form = {
            oldpassword: 11111111,
            newpassword: 22222222,
            newpasswords: 22222222
          };
        }
      },
      handleChange(item) {
        this.type = item.prop;
        this.handleWitch();
      }
    }
  };
</script>

<style>
</style>
