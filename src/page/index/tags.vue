<template>
  <div class="avue-tags"
       v-if="setting.tag"
       @click="contextmenuFlag=false">
    <!-- tag盒子 -->
    <div v-if="contextmenuFlag"
         class="avue-tags__contentmenu"
         :style="{left:contentmenuX+'px',top:contentmenuY+'px'}">
      <div class="item"
           @click="closeOthersTags">{{$t('tagsView.closeOthers')}}</div>
      <div class="item"
           @click="closeAllTags">{{$t('tagsView.closeAll')}}</div>
    </div>
    <div class="avue-tags__box">
      <el-tabs v-model="active"
               type="card"
               @contextmenu="handleContextmenu"
               :closable="tagLen!==1"
               @tab-click="openTag"
               @edit="menuTag">
        <el-tab-pane v-for="(item,index) in tagList"
                     :key="index"
                     :label="generateTitle(item)"
                     :name="item.fullPath">
          <template #label>
            <span>
              {{generateTitle(item)}}
              <i class="el-icon-refresh"
                 :class="{'turn':refresh}"
                 @click="handleRefresh"
                 v-if="active==item.fullPath"></i>
            </span>
          </template>

        </el-tab-pane>

      </el-tabs>
      <el-dropdown class="avue-tags__menu">
        <el-button type="primary">
          {{$t('tagsView.menu')}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="openSearch">{{$t('tagsView.search')}}</el-dropdown-item>
            <el-dropdown-item @click="closeOthersTags">{{$t('tagsView.closeOthers')}}</el-dropdown-item>
            <el-dropdown-item @click="closeAllTags">{{$t('tagsView.closeAll')}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "tags",
  data () {
    return {
      refresh: false,
      active: "",
      contentmenuX: "",
      contentmenuY: "",
      contextmenuFlag: false
    };
  },
  watch: {
    tag: {
      handler (val) {
        this.active = val.fullPath;
      },
      immediate: true,
    },
    contextmenuFlag () {
      window.addEventListener("mousedown", this.watchContextmenu);
    }
  },
  computed: {
    ...mapGetters(["tagWel", "tagList", "tag", "setting"]),
    tagLen () {
      return this.tagList.length || 0;
    }
  },
  methods: {
    openSearch () {
      this.$store.commit('SET_IS_SEARCH', true)
    },
    handleRefresh () {
      this.refresh = true;
      this.$store.commit('SET_IS_REFRESH', false);
      setTimeout(() => {
        this.$store.commit('SET_IS_REFRESH', true);
      }, 100)
      setTimeout(() => {
        this.refresh = false;
      }, 500)
    },
    generateTitle (item) {
      return this.$router.$avueRouter.generateTitle({
        ...item,
        ...{
          label: item.name
        }
      });
    },
    watchContextmenu (event) {
      if (!this.$el.contains(event.target) || event.button !== 0) {
        this.contextmenuFlag = false;
      }
      window.removeEventListener("mousedown", this.watchContextmenu);
    },
    handleContextmenu (event) {
      let target = event.target;
      let flag = false;
      if (target.className.indexOf("el-tabs__item") > -1) flag = true;
      else if (target.parentNode.className.indexOf("el-tabs__item") > -1) {
        target = target.parentNode;
        flag = true;
      }
      if (flag) {
        event.preventDefault();
        event.stopPropagation();
        this.contentmenuX = event.clientX;
        this.contentmenuY = event.clientY;
        this.tagName = target.getAttribute("aria-controls").slice(5);
        this.contextmenuFlag = true;
      }
    },
    menuTag (value, action) {
      if (action === "remove") {
        let { tag, key } = this.findTag(value);
        this.$store.commit("DEL_TAG", tag);
        if (tag.fullPath === this.tag.fullPath) {
          tag = this.tagList[key - 1]
          this.$router.push({
            path: tag.path,
            query: tag.query
          })
        }
      }
    },
    openTag (item) {
      let value = item.props.name
      let { tag } = this.findTag(value)
      this.$router.push({
        path: tag.path,
        query: tag.query
      })
    },
    findTag (fullPath) {
      let tag = this.tagList.find(item => item.fullPath === fullPath);
      let key = this.tagList.findIndex(item => item.fullPath === fullPath);
      return { tag, key }
    },
    closeOthersTags () {
      this.contextmenuFlag = false;
      this.$store.commit('DEL_TAG_OTHER')
    },
    closeAllTags () {
      this.contextmenuFlag = false;
      this.$store.commit('DEL_ALL_TAG')
      this.$router.push(this.tagWel);
    }
  }
};
</script>


