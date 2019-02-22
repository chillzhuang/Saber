<template>
  <basic-container>
    <avue-crud :option="option"
               :data="data"
               ref="crud"
               v-model="form"
               :permission="permissionList"
               :before-open="beforeOpen"
               :page="page"
               @search-change="searchChange"
               @search-reset="searchReset"
               @on-load="onLoad">
      <template slot-scope="{row}"
                slot="roleId">
        <el-tag>{{row.roleName}}</el-tag>
      </template>
      <template slot-scope="{row}"
                slot="deptId">
        <el-tag>{{row.deptName}}</el-tag>
      </template>
    </avue-crud>
  </basic-container>
</template>

<script>
  import {getApiList, getApiLogs} from "@/api/logs";
  import {mapGetters} from "vuex";

  export default {
    data() {
      return {
        form: {},
        selectionList: [],
        page: {
          pageSize: 10,
          currentPage: 1,
          total: 0
        },
        option: {
          tip: false,
          border: true,
          index: true,
          viewBtn: true,
          editBtn: false,
          addBtn: false,
          delBtn: false,
          menuWidth: 120,
          column: [
            {
              label: "服务id",
              prop: "serviceId",
              search: true
            },
            {
              label: "服务host",
              prop: "serverHost",
              search: true
            },
            {
              label: "服务ip",
              prop: "serverIp"
            },
            {
              label: "软件环境",
              prop: "env"
            },
            {
              label: "日志名",
              prop: "title"
            },
            {
              label: "请求方法",
              prop: "method"
            },
            {
              label: "请求接口",
              prop: "requestUri"
            },
            {
              label: "日志时间",
              prop: "createTime"
            },
            {
              label: "用户代理",
              prop: "userAgent",
              span: 24,
              hide: true
            },
            {
              label: "请求数据",
              prop: "params",
              type: "textarea",
              span: 24,
              minRows: 2,
              hide: true
            }
          ]
        },
        data: []
      };
    },

    computed: {
      ...mapGetters(["permission"]),
      permissionList() {
        return {
          viewBtn: this.permission.log_api_view
        };
      }
    },
    methods: {
      searchReset() {
        this.onLoad(this.page);
      },
      searchChange(params) {
        this.onLoad(this.page, params);
      },
      beforeOpen(done, type) {
        if (["edit", "view"].includes(type)) {
          getApiLogs(this.form.strId).then(res => {
            this.form = res.data.data;
          });
        }
        done();
      },
      onLoad(page, params = {}) {
        getApiList(page.currentPage, page.pageSize, params).then(res => {
          const data = res.data.data;
          this.page.total = data.total;
          this.data = data.records;
        });
      }
    }
  };
</script>

<style>
</style>
