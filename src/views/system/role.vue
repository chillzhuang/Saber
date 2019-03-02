<template>
  <basic-container>
    <avue-crud :option="option"
               :data="data"
               ref="crud"
               v-model="form"
               :permission="permissionList"
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
                   plain
                   @click="handleDelete">删 除
        </el-button>
        <el-button size="small"
                   icon="el-icon-delete"
                   @click="handleRole"
                   plain>权限设置
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
    <el-dialog title="提示"
               :visible.sync="box"
               width="40%">
      <el-tree :data="list"
               show-checkbox
               node-key="id"
               ref="tree"
               :default-checked-keys="defaultObj"
               :props="props">
      </el-tree>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="box = false">取 消</el-button>
        <el-button type="primary"
                   @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </basic-container>
</template>

<script>
import {
  getList,
  remove,
  update,
  add,
  grant,
  grantTree,
  getRole,
  getRoleTree
} from "@/api/system/role";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {},
      box: false,
      props: {
        label: "title",
        valie: "key"
      },
      list: [],
      defaultObj: [],
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
            label: "角色名称",
            prop: "roleName",
            search: true,
            rules: [
              {
                required: true,
                message: "请输入角色名称",
                trigger: "blur"
              }
            ]
          },
          {
            label: "角色别名",
            prop: "roleAlias",
            search: true,
            rules: [
              {
                required: true,
                message: "请输入角色别名",
                trigger: "blur"
              }
            ]
          },
          {
            label: "上级角色",
            prop: "parentId",
            dicData: [],
            type: "tree",
            hide: true,
            props: {
              label: "title"
            },
            rules: [
              {
                required: false,
                message: "请选择上级角色",
                trigger: "click"
              }
            ]
          },
          {
            label: "角色排序",
            prop: "sort",
            type: "number",
            rules: [
              {
                required: true,
                message: "请输入角色排序",
                trigger: "blur"
              }
            ]
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
        addBtn: this.vaildData(this.permission.role_add, false),
        viewBtn: this.vaildData(this.permission.role_view, false),
        delBtn: this.vaildData(this.permission.role_delete, false),
        editBtn: this.vaildData(this.permission.role_edit, false)
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
    submit() {
      const menuLIst = this.$refs.tree.getCheckedKeys().join(",");
      grant(this.ids[0], menuLIst).then(() => {
        this.box = false;
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        this.onLoad(this.page);
      });
    },
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
        this.onLoad(this.page);
        loading();
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
    handleRole() {
      if (this.selectionList.length !== 1) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      this.defaultObj = [];
      grantTree()
        .then(res => {
          this.list = res.data.data;
          return getRole(this.ids[0]);
        })
        .then(res => {
          this.defaultObj = res.data.data;
          this.box = true;
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
    onLoad(page, params = {}) {
      getList(page.currentPage, page.pageSize, params).then(res => {
        const data = res.data.data;
        this.data = data;
        getRoleTree().then(res => {
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
