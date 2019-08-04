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
               :before-open="beforeOpen"
               :page="page"
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
                   plain
                   v-if="permission.user_delete"
                   @click="handleDelete">删 除
        </el-button>
        <el-button type="primary"
                   size="small"
                   plain
                   v-if="permission.user_reset"
                   icon="el-icon-refresh"
                   @click="handleReset">密码重置
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
    getUser,
    remove,
    update,
    add,
    resetPassword
  } from "@/api/system/user";
  import {getDeptTree} from "@/api/system/dept";
  import {getRoleTree} from "@/api/system/role";
  import {mapGetters} from "vuex";
  import website from '@/config/website';

  export default {
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {},
        selectionList: [],
        query: {},
        page: {
          pageSize: 10,
          currentPage: 1,
          total: 0
        },
        init: {
          roleTree: [],
          deptTree: [],
        },
        option: {
          tip: false,
          border: true,
          index: true,
          selection: true,
          viewBtn: true,
          dialogHeight: 450,
          column: [
            {
              label: "登录账号",
              prop: "account",
              search: true,
              rules: [{
                required: true,
                message: "请输入登录账号",
                trigger: "blur"
              }],
              span: website.tenantMode ? 12 : 24,
            },
            {
              label: "所属租户",
              prop: "tenantId",
              type: "tree",
              dicUrl: "/api/blade-system/tenant/select",
              props: {
                label: "tenantName",
                value: "tenantId"
              },
              hide: !website.tenantMode,
              addDisplay: website.tenantMode,
              editDisplay: website.tenantMode,
              viewDisplay: website.tenantMode,
              search: website.tenantMode,
              rules: [{
                required: true,
                message: "请输入所属租户",
                trigger: "click"
              }]
            },
            {
              label: '密码',
              prop: 'password',
              hide: true,
              editDisplay: false,
              viewDisplay: false,
              rules: [{required: true, validator: validatePass, trigger: 'blur'}]
            },
            {
              label: '确认密码',
              prop: 'password2',
              hide: true,
              editDisplay: false,
              viewDisplay: false,
              rules: [{required: true, validator: validatePass2, trigger: 'blur'}]
            },
            {
              label: "用户昵称",
              prop: "name",
              search: true,
              rules: [{
                required: true,
                message: "请输入用户昵称",
                trigger: "blur"
              }]
            },
            {
              label: "用户姓名",
              prop: "realName",
              rules: [{
                required: true,
                message: "请输入用户姓名",
                trigger: "blur"
              }]
            },
            {
              label: "所属角色",
              prop: "roleId",
              multiple: true,
              type: "tree",
              dicData: [],
              props: {
                label: "title"
              },
              slot: true,
              rules: [{
                required: true,
                message: "请选择所属角色",
                trigger: "click"
              }]
            },
            {
              label: "所属部门",
              prop: "deptId",
              type: "tree",
              multiple: true,
              dicData: [],
              props: {
                label: "title"
              },
              slot: true,
              rules: [{
                required: true,
                message: "请选择所属部门",
                trigger: "click"
              }]
            },
            {
              label: "手机号码",
              prop: "phone",
              overHidden: true
            },
            {
              label: "电子邮箱",
              prop: "email",
              hide: true,
              overHidden: true
            },
            {
              label: "用户性别",
              prop: "sex",
              type: "select",
              dicData: [
                {
                  label: "男",
                  value: 1
                },
                {
                  label: "女",
                  value: 2
                },
                {
                  label: "未知",
                  value: 3
                }
              ],
              hide: true
            },
            {
              label: "用户生日",
              type: "date",
              prop: "birthday",
              format: "yyyy-MM-dd hh:mm:ss",
              valueFormat: "yyyy-MM-dd hh:mm:ss",
              hide: true
            },
            {
              label: "账号状态",
              prop: "statusName",
              hide: true,
              display: false
            }
          ]
        },
        data: []
      };
    },
    watch: {
      'form.tenantId'() {
        if (this.form.tenantId !== '') {
          getDeptTree(this.form.tenantId).then(res => {
            const index = this.$refs.crud.findColumnIndex("deptId");
            this.option.column[index].dicData = res.data.data;
          });
          getRoleTree(this.form.tenantId).then(res => {
            const index = this.$refs.crud.findColumnIndex("roleId");
            this.option.column[index].dicData = res.data.data;
          });
        }
      }
    },
    computed: {
      ...mapGetters(["permission"]),
      permissionList() {
        return {
          addBtn: this.vaildData(this.permission.user_add, false),
          viewBtn: this.vaildData(this.permission.user_view, false),
          delBtn: this.vaildData(this.permission.user_delete, false),
          editBtn: this.vaildData(this.permission.user_edit, false)
        };
      },
      ids() {
        let ids = [];
        this.selectionList.forEach(ele => {
          ids.push(ele.id);
        });
        return ids.join(",");
      },
    },
    methods: {
      rowSave(row, loading, done) {
        row.deptId = row.deptId.join(",");
        row.roleId = row.roleId.join(",");
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
        row.deptId = row.deptId.join(",");
        row.roleId = row.roleId.join(",");
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
            this.form.deptId = this.form.deptId.split(",");
            this.form.deptId.forEach((ele, index) => {
              this.form.deptId[index] = Number(ele);
            });
            this.form.roleId = this.form.roleId.split(",");
            this.form.roleId.forEach((ele, index) => {
              this.form.roleId[index] = Number(ele);
            });
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
          const data = res.data.data;
          this.page.total = data.total;
          this.data = data.records;
        });
        getDeptTree(this.form.tenantId).then(res => {
          const index = this.$refs.crud.findColumnIndex("deptId");
          this.option.column[index].dicData = res.data.data;
        });
        getRoleTree(this.form.tenantId).then(res => {
          const index = this.$refs.crud.findColumnIndex("roleId");
          this.option.column[index].dicData = res.data.data;
        });
      }
    }
  };
</script>

<style>
</style>
