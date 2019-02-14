<template>
  <basic-container>
    <avue-crud :option="option"
               :data="data"
               :page="page"
               @row-del="rowDel"
               @selection-change="selectionChange"
               @row-update="rowUpdate"
               @row-save="rowSave"
               @on-load="onLoad">
      <template slot="menuLeft">
        <el-button type="danger"
                   size="small"
                   icon="el-icon-delete"
                   plain
                   @click="handleDelete">删 除</el-button>
      </template>
      <template slot-scope="{row}"
                slot="categoryId">
        <el-tag>{{row.categoryName}}</el-tag>
      </template>
    </avue-crud>
  </basic-container>
</template>

<script>
import { getList, remove, update, add } from "@/api/dept/notice";
export default {
  data() {
    return {
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      selectionList: [],
      option: {
        border: true,
        index: true,
        viewBtn: true,
        selection: true,
        column: [
          {
            label: "通知标题",
            prop: "title",
            row: true,
            search: true
          },
          {
            label: "通知类型",
            type: "select",
            row: true,
            dicUrl: "/api/blade-system/dict/dictionary?code=notice",
            props: {
              label: "dictValue",
              value: "dictKey"
            },
            slot: true,
            prop: "categoryId",
            search: true
          },
          {
            label: "通知内容",
            prop: "content",
            span: 24,
            minRows: 6,
            type: "textarea"
          },
          {
            label: "通知日期",
            type: "date",
            prop: "date",
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss"
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
