<template>
  <basic-container>
    <avue-crud :option="option"
               :data="data"
               ref="crud"
               v-model="form"
               :permission="permissionList"
               :before-open="beforeOpen"
               @row-del="rowDel"
               @row-update="rowUpdate"
               @row-save="rowSave"
               @search-change="searchChange"
               @search-reset="searchReset"
               @selection-change="selectionChange"
               @on-load="onLoad">
      <template slot="menuLeft">
        <el-button type="danger"
                   size="small"
                   icon="el-icon-delete"
                   v-if="permission.dept_delete"
                   plain
                   @click="handleDelete">删 除
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
  import {
    getList,
    remove,
    update,
    add,
    getDept,
    getDeptTree
  } from "@/api/system/dept";
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
          tree: true,
          border: true,
          index: true,
          selection: true,
          viewBtn: true,
          column: [
            {
              label: "部门名称",
              prop: "deptName",
              search: true,
              rules: [{
                required: true,
                message: "请输入部门名称",
                trigger: "blur"
              }]
            },
            {
              label: "部门全称",
              prop: "fullName",
              search: true,
              rules: [{
                required: true,
                message: "请输入部门全称",
                trigger: "blur"
              }]
            },
            {
              label: "上级部门",
              prop: "parentId",
              dicData: [],
              type: "tree",
              hide: true,
              props: {
                label: "title"
              },
              rules: [{
                required: false,
                message: "请选择上级部门",
                trigger: "blur"
              }]
            },

            {
              label: "排序",
              prop: "sort",
              type: "number",
              rules: [{
                required: true,
                message: "请输入排序",
                trigger: "blur"
              }]
            },

            {
              label: "备注",
              prop: "remark",
              span: 24,
              rules: [{
                required: false,
                message: "请输入备注",
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
          addBtn: this.permission.dept_add,
          viewBtn: this.permission.dept_view,
          delBtn: this.permission.dept_delete,
          editBtn: this.permission.dept_edit
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
      searchReset() {
        this.onLoad(this.page);
      },
      searchChange(params) {
        this.onLoad(this.page, params);
      },
      selectionChange(list) {
        this.selectionList = list;
      },
      beforeOpen(done, type) {
        if (["edit", "view"].includes(type)) {
          getDept(this.form.id).then(res => {
            this.form = res.data.data;
          });
        }
        done();
      },
      onLoad(page, params = {}) {
        getList(page.currentPage, page.pageSize, params).then(res => {
          const data = res.data.data;
          this.data = data;
          getDeptTree().then(res => {
            const data = res.data.data;
            const index = this.$refs.crud.findColumnIndex("parentId");
            this.option.column[index].dicData = data;
          });
        });
      }
    }
  };
</script>

<style>
</style>
