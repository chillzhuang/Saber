<template>
  <el-menu class="top-menu"
           :default-active="activeIndex"
           mode="horizontal"
           text-color="#333">
    <template v-for="(item,index) in items"
              :key="index">
      <el-menu-item :index="item.parentId+''"
                    @click="openMenu(item)">
        <template #title>
          <i class="icon-caidan"></i>
          <span>{{generateTitle(item)}}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "top-menu",
  data () {
    return {
      activeIndex: "0",
      items: []
    };
  },
  inject: ["index"],
  created () {
    // this.getMenu();
  },
  computed: {
    ...mapGetters(["tagCurrent", "menu"])
  },
  methods: {
    openMenu (item) {
      this.index.openMenu(item)
    },
    getMenu () {
      this.$store.dispatch("GetTopMenu").then(res => {
        this.items = res;
      });
    },
    generateTitle (item) {
      return this.$router.$avueRouter.generateTitle(item);
    }
  }
};
</script>