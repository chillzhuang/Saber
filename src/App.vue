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