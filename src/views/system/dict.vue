<template>
  <basic-container>
    <avue-crud :option="option"
               :data="data"
               ref="crud"
               v-model="form"
               :before-open="beforeOpen"
               :page="page"
               @row-del="rowDel"
               @row-update="rowUpdate"
               @row-save="rowSave"
               @selection-change="selectionChange"
               @on-load="onLoad">
      <template slot="menuLeft">
        <el-button type="danger"
                   size="small"
                   icon="el-icon-delete"
                   plain
                   @click="handleDelete">删 除</el-button>
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
import { getList, remove, update, add, getDict } from "@/api/system/dict";
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
        tree: true,
        border: true,
        index: true,
        selection: true,
        viewBtn: true,
        column: [
          {
            label: "字典名称",
            prop: "dictValue",
            search: true
          },
          {
            label: "字典编号",
            prop: "code",
            search: true
          },
          {
            label: "上级字典",
            prop: "parentId",
            type: "tree",
            dicUrl: "/api/blade-system/dict/tree?code=DICT",
            hide: true,
            props: {
              label: "title"
            }
          },
          {
            label: "字典键值",
            prop: "dictKey"
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
        loading();
        this.onLoad(this.page);
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
    beforeOpen(done, type) {
      if (["edit", "view"].includes(type)) {
        getDict(this.form.id).then(res => {
          this.form = res.data.data;
        });
      }
      done();
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
