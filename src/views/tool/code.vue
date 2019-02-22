<template>
  <basic-container>
    <avue-crud :option="option"
               :data="data"
               ref="crud"
               v-model="form"
               :permission="permissionList"
               :page="page"
               @row-del="rowDel"
               @row-update="rowUpdate"
               @row-save="rowSave"
               :before-open="beforeOpen"
               @search-change="searchChange"
               @search-reset="searchReset"
               @selection-change="selectionChange"
               @on-load="onLoad">
      <template slot="menuLeft">
        <el-button type="danger"
                   size="small"
                   icon="el-icon-delete"
                   plain
                   @click="handleDelete">删 除
        </el-button>
        <el-button type="primary"
                   size="small"
                   plain
                   icon="el-icon-refresh"
                   @click="handleBuild">代码生成
        </el-button>
      </template>
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
  import {getList, getCode, build, remove, add, update} from "@/api/tool/code";
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
          selection: true,
          labelWidth: 120,
          viewBtn: true,
          column: [
            {
              label: "模块名",
              prop: "codeName",
              search: true,
              rules: [{
                required: true,
                message: "请输入模块名",
                trigger: "blur"
              }]
            },
            {
              label: "服务名",
              prop: "serviceName",
              search: true,
              rules: [{
                required: true,
                message: "请输入服务名",
                trigger: "blur"
              }]
            },
            {
              label: "表名",
              prop: "tableName",
              rules: [{
                required: true,
                message: "请输入表名",
                trigger: "blur"
              }]
            },
            {
              label: "表前缀",
              prop: "tablePrefix",
              rules: [{
                required: true,
                message: "请输入表前缀",
                trigger: "blur"
              }]
            },
            {
              label: "主键名",
              prop: "pkName",
              rules: [{
                required: true,
                message: "请输入主键名",
                trigger: "blur"
              }]
            },
            {
              label: "包名",
              prop: "packageName",
              overHidden: true,
              rules: [{
                required: true,
                message: "请输入包名",
                trigger: "blur"
              }]
            },
            {
              label: "后端生成路径",
              prop: "apiPath",
              span: 24,
              hide: true,
              rules: [{
                required: true,
                message: "请输入后端生成路径",
                trigger: "blur"
              }]
            },
            {
              label: "前端生成路径",
              prop: "webPath",
              span: 24,
              hide: true,
              rules: [{
                required: true,
                message: "请输入前端生成路径",
                trigger: "blur"
              }]
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
          addBtn: this.permission.code_add,
          viewBtn: this.permission.code_view,
          delBtn: this.permission.code_delete,
          editBtn: this.permission.code_edit
        };
      },
      ids() {
        let ids = [];
        this.selectionList.forEach(ele => {
          ids.push(ele.id);
        });
        return ids.join(",");
      }
    },
    methods: {
      rowSave(row, loading) {
        add(row).then(() => {
          loading();
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        });
      },
      rowUpdate(row, index, loading) {
        update(row).then(() => {
          loading();
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        });
      },
      rowDel(row) {
        this.$confirm("确定将选择数据删除?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            return remove(row.id);
          })
          .then(() => {
            this.onLoad(this.page);
            this.$message({
              type: "success",
              message: "操作成功!"
            });
          });
      },

      searchReset() {
        this.onLoad(this.page);
      },
      searchChange(params) {
        this.onLoad(this.page, params);
      },
      selectionChange(list) {
        this.selectionList = list;
      },
      handleDelete() {
        if (this.selectionList.length === 0) {
          this.$message.warning("请选择至少一条数据");
          return;
        }
        this.$confirm("确定将选择数据删除?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            return remove(this.ids);
          })
          .then(() => {
            this.onLoad(this.page);
            this.$message({
              type: "success",
              message: "操作成功!"
            });
            this.$refs.crud.toggleSelection();
          });
      },
      handleBuild() {
        if (this.selectionList.length === 0) {
          this.$message.warning("请选择至少一条数据");
          return;
        }
        this.$confirm("是否生成选中模块的代码?", {
          title: "代码生成确认",
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            return build(this.ids);
          })
          .then(() => {
            this.onLoad(this.page);
            this.$message({
              type: "success",
              message: "操作成功!"
            });
            this.$refs.crud.toggleSelection();
          });
      },

      beforeOpen(done, type) {
        if (["edit", "view"].includes(type)) {
          getCode(this.form.id).then(res => {
            this.form = res.data.data;
          });
        }
        done();
      },
      onLoad(page, params = {}) {
        getList(page.currentPage, page.pageSize, params).then(res => {
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
