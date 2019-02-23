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
                   v-if="permission.dict_delete"
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
    getDict,
    getDictTree
  } from "@/api/system/dict";
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
              label: "字典名称",
              prop: "dictValue",
              search: true,
              rules: [{
                required: true,
                message: "请输入字典名称",
                trigger: "blur"
              }]
            },
            {
              label: "字典编号",
              prop: "code",
              search: true,
              rules: [{
                required: true,
                message: "请输入字典编号",
                trigger: "blur"
              }]
            },
            {
              label: "上级字典",
              prop: "parentId",
              type: "tree",
              dicData: [],
              hide: true,
              props: {
                label: "title"
              },
              rules: [{
                required: false,
                message: "请选择上级字典",
                trigger: "blur"
              }]
            },
            {
              label: "字典键值",
              prop: "dictKey",
              type: "number",
              rules: [{
                required: true,
                message: "请输入字典键值",
                trigger: "blur"
              }]
            },
            {
              label: "字典排序",
              prop: "sort",
              type: "number",
              rules: [{
                required: true,
                message: "请输入字典排序",
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
          addBtn: this.permission.dict_add,
          viewBtn: this.permission.dict_view,
          delBtn: this.permission.dict_delete,
          editBtn: this.permission.dict_edit
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
      beforeOpen(done, type) {
        if (["edit", "view"].includes(type)) {
          getDict(this.form.id).then(res => {
            this.form = res.data.data;
          });
        }
        done();
      },
      onLoad(page, params = {}) {
        getList(page.currentPage, page.pageSize, params).then(res => {
          const data = res.data.data;
          this.data = data;
          getDictTree().then(res => {
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
