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
               @current-change="currentChange"
               @size-change="sizeChange"
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
    </avue-crud>
  </basic-container>
</template>

<script>
  import {add, getDept, getDeptTree, getList, remove, update} from "@/api/system/dept";
  import {mapGetters} from "vuex";
  import website from '@/config/website';

  export default {
    data() {
      return {
        form: {},
        selectionList: [],
        query: {},
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
              label: "所属租户",
              prop: "tenantId",
              type: "tree",
              dicUrl: "/api/blade-system/tenant/select",
              addDisplay: false,
              editDisplay: false,
              viewDisplay: website.tenantMode,
              span: 24,
              props: {
                label: "tenantName",
                value: "tenantId"
              },
              hide: !website.tenantMode,
              search: website.tenantMode,
              rules: [{
                required: true,
                message: "请输入所属租户",
                trigger: "click"
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
                trigger: "click"
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
          addBtn: this.vaildData(this.permission.dept_add, false),
          viewBtn: this.vaildData(this.permission.dept_view, false),
          delBtn: this.vaildData(this.permission.dept_delete, false),
          editBtn: this.vaildData(this.permission.dept_edit, false)
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
      rowSave(row, loading, done) {
        add(row).then(() => {
          loading();
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        }, error => {
          done();
          console.log(error);
        });
      },
      rowUpdate(row, index, loading, done) {
        update(row).then(() => {
          loading();
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        }, error => {
          done();
          console.log(error);
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
        this.query = {};
        this.onLoad(this.page);
      },
      searchChange(params) {
        this.query = params;
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
      currentChange(currentPage){
        this.page.currentPage = currentPage;
      },
      sizeChange(pageSize){
        this.page.pageSize = pageSize;
      },
      onLoad(page, params = {}) {
        getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
          this.data = res.data.data;
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
