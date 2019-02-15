<template>
  <basic-container>
    <avue-crud :option="option"
               :data="data"
               ref="crud"
               v-model="form"
               @row-del="rowDel"
               @row-update="rowUpdate"
               @row-save="rowSave"
               :page="page"
               @selection-change="selectionChange"
               @on-load="onLoad">
      <template slot="menuLeft">
        <el-button type="danger"
                   size="small"
                   icon="el-icon-delete"
                   plain
                   @click="handleDelete">删 除</el-button>
        <el-button size="small"
                   icon="el-icon-delete"
                   @click="handleRole"
                   plain>权限设置</el-button>
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
               :default-expanded-keys="defaultObj"
               :default-checked-keys="defaultObj"
               :props="props">
      </el-tree>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="box = false">取 消</el-button>
        <el-button type="primary"
                   @click="box = false">确 定</el-button>
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
  getTree,
  getRole
} from "@/api/system/role";
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
        tree: true,
        border: true,
        index: true,
        selection: true,
        viewBtn: true,
        column: [
          {
            label: "角色名称",
            prop: "roleName",
            search: true
          },
          {
            label: "角色别名",
            prop: "roleAlias",
            search: true
          },
          {
            label: "排序",
            prop: "sort"
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
      this.$confirm("确定将选删除?", {
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
    selectionChange(list) {
      this.selectionList = list;
    },
    handleRole() {
      if (this.selectionList.length !== 1) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      getTree()
        .then(res => {
          this.list = res.data.data;
          this.box = true;
          return getRole(this.ids[0]);
        })
        .then(res => {
          this.defaultObj = res.data.data;
        });
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
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          this.$refs.crud.toggleSelection();
        });
    },
    onLoad(page) {
      getList(page.currentPage, page.pageSize).then(res => {
        const data = res.data.data;
        this.data = data;
      });
    }
  }
};
</script>

<style>
</style>
