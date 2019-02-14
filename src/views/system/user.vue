<template>
  <basic-container>
    <avue-crud :option="option"
               :data="data"
               ref="crud"
               v-model="form"
               @row-del="rowDel"
               @row-update="rowUpdate"
               @row-save="rowSave"
               :before-open="beforeOpen"
               :page="page"
               @selection-change="selectionChange"
               @on-load="onLoad">
      <template slot="menuLeft">
        <el-button type="danger"
                   size="small"
                   icon="el-icon-delete"
                   plain
                   @click="handleDelete">删 除</el-button>
        <el-button type="primary"
                   size="small"
                   plain
                   icon="el-icon-refresh"
                   @click="handleReset">密码重置</el-button>
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
  getUser,
  remove,
  update,
  add,
  resetPassword
} from "@/api/system/user";
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
        border: true,
        index: true,
        selection: true,
        viewBtn: true,
        column: [
          {
            label: "登录账号",
            prop: "account",
            search: true
          },
          {
            label: "用户昵称",
            prop: "name",
            search: true
          },
          {
            label: "用户姓名",
            prop: "realName"
          },
          {
            label: "所属角色",
            prop: "roleId",
            multiple: true,
            type: "tree",
            dicUrl: "/api/blade-system/role/tree",
            props: {
              label: "title"
            },
            slot: true
          },
          {
            label: "所属部门",
            prop: "deptId",
            type: "tree",
            multiple: true,
            dicUrl: "/api/blade-system/dept/tree",
            props: {
              label: "title"
            },
            slot: true
          },
          {
            label: "手机号码",
            prop: "phone",
            overHidden: true
          },
          {
            label: "电子邮箱",
            prop: "email",
            overHidden: true
          },
          {
            label: "账号状态",
            prop: "statusName",
            display: false
          }
        ]
      },
      data: []
    };
  },
  computed: {
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
        this.$message({
          type: "success",
          message: "操作成功!"
        });
      });
    },
    rowUpdate(row, index, loading) {
      update(row).then(() => {
        loading();
        this.$message({
          type: "success",
          message: "操作成功!"
        });
      });
    },
    rowDel(row) {
      remove(row.id).then(() => {
        this.$message({
          type: "success",
          message: "操作成功!"
        });
      });
    },
    selectionChange(list) {
      this.selectionList = list;
    },
    handleDelete() {
      if (this.selectionList.length === 0) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      this.$confirm("确定将选择账号删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return remove(this.ids);
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          this.$refs.crud.toggleSelection();
        });
    },
    handleReset() {
      if (this.selectionList.length === 0) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      this.$confirm("确定将选择账号密码重置为123456?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return resetPassword(this.ids);
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          this.$refs.crud.toggleSelection();
        });
    },
    beforeOpen(done, type) {
      if (["edit", "view"].includes(type)) {
        getUser(this.form.id).then(res => {
          this.form = res.data.data;
          this.form.deptId = this.form.deptId + "";
          this.form.roleId = this.form.roleId + "";
        });
      }
      done();
    },
    onLoad(page) {
      getList(page.currentPage, page.pageSize).then(res => {
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
