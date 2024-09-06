<template>
  <basic-container>
    <avue-crud :option="option"
               :table-loading="loading"
               :data="data"
               ref="crud"
               v-model="form"
               v-model:page="page"
               :permission="permissionList"
               @row-del="rowDel"
               @search-change="searchChange"
               @search-reset="searchReset"
               @selection-change="selectionChange"
               @current-change="currentChange"
               @size-change="sizeChange"
               @refresh-change="refreshChange"
               @on-load="onLoad">
      <template #menu-left>
        <el-button type="danger"
                   icon="el-icon-delete"
                   plain
                   @click="handleDelete">删 除
        </el-button>
      </template>
      <template #menu="scope">
        <el-button text
                   type="primary"
                   icon="el-icon-edit"
                   @click.stop="handleDesign(scope.row.name)">设计
        </el-button>
        <el-button text
                   type="primary"
                   icon="el-icon-view"
                   @click.stop="handlePreview(scope.row.name)">预览
        </el-button>
      </template>
      <template #name="{row}">
        <el-tag style="cursor:pointer"
                @click="handlePreview(row.name)">{{ row.name }}</el-tag>
      </template>
    </avue-crud>
  </basic-container>
</template>

<script>
import { getList, remove } from "@/api/report/report";
import { mapGetters } from "vuex";
import website from '@/config/website';

export default {
  data () {
    return {
      form: {},
      selectionList: [],
      query: {},
      loading: true,
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      option: {
        height: 'auto',
        calcHeight: 210,
        tip: false,
        searchShow: true,
        searchMenuSpan: 6,
        border: true,
        index: true,
        selection: true,
        viewBtn: true,
        dialogClickModal: false,
        column: [
          {
            label: "文件名",
            prop: "name",
            search: true,
            slot: true,
          },
          {
            label: "创建时间",
            prop: "createTime",
          },
          {
            label: "更新时间",
            prop: "updateTime",
          }
        ]
      },
      data: []
    };
  },
  computed: {
    ...mapGetters(["userInfo", "permission"]),
    permissionList () {
      return {
        addBtn: false,
        viewBtn: false,
        delBtn: true,
        editBtn: false
      };
    },
    ids () {
      let ids = [];
      this.selectionList.forEach(ele => {
        ids.push(ele.id);
      });
      return ids.join(",");
    }
  },
  methods: {
    handlePreview(name) {
      window.open(`${this.website.reportUrl}/preview?_u=blade-${name}`);
    },
    handleDesign(name) {
      window.open(`${this.website.reportUrl}/designer?_u=blade-${name}`);
    },
    rowDel (row) {
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
    searchReset () {
      this.query = {};
      this.onLoad(this.page);
    },
    searchChange (params, done) {
      this.query = params;
      this.page.currentPage = 1;
      this.onLoad(this.page, params);
      done();
    },
    selectionChange (list) {
      this.selectionList = list;
    },
    selectionClear () {
      this.selectionList = [];
      this.$refs.crud.toggleSelection();
    },
    handleDelete () {
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
    currentChange (currentPage) {
      this.page.currentPage = currentPage;
    },
    sizeChange (pageSize) {
      this.page.pageSize = pageSize;
    },
    refreshChange () {
      this.onLoad(this.page, this.query);
    },
    onLoad (page, params = {}) {
      this.loading = true;
      getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
        const data = res.data.data;
        this.page.total = data.total;
        this.data = data.records;
        this.loading = false;
        this.selectionClear();
      });
    }
  }
};
</script>

<style>
</style>
