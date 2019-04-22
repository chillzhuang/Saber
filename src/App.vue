<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  watch: {},
  created() {
    this.$notify.success({
      title: "前端脚手架讲解文档",
      dangerouslyUseHTMLString: true,
      message:
        '<a target="_blank" href="https://www.kancloud.cn/smallwei/avue">点击查看</a>',
      duration: 3000,
      type: "success"
    });
    setTimeout(()=>{
      this.$notify.success({
        title: "bladex授权",
        dangerouslyUseHTMLString: true,
        message:
          '感谢您对bladex的支持，本系统后端采用了bladex开发，如果想使用bladex的授权请<a target="_blank" href="https://bladex.vip/#/vip">点击授权</a>',
        duration: 3000,
        type: "success"
      });
    },500);
    setTimeout(()=>{
      this.$notify.success({
        title: "avuex授权",
        dangerouslyUseHTMLString: true,
        message:
          '感谢您对avuex的支持，本系统后端采用了avuex开发，如果想使用avuex的授权请<a target="_blank" href="https://avuex.avue.top/#/vip">点击授权</a>',
        duration: 3000,
        type: "success"
      });
    },500);
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
