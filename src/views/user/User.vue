<template>
<div class="manage">
  <el-dialog title="" :visible.sync="isShow">
    <common-form :formLabel="operateFormLabel" :form="operateForm"></common-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="isShow = false">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </span>
  </el-dialog>
  <div class="manage-header">
    <el-button type="primary">+ 新增</el-button>
    <common-form inline :formLabel="formLabel" :form="searchForm">
      <el-button type="primary">搜索</el-button>
    </common-form>
  </div>
  <div class="manage-content">
    <common-table :tableData="newTableData" :tableLabel="tableLabel" :config="config" @changePage="getList" @handleEdit="handleEdit" @handleDelete="handleDelete"></common-table>
  </div>
</div>
</template>

<script>
import CommonForm from "components/common/form/CommonForm";
import CommonTable from "components/common/table/CommonTable";

import {
  getUserdata,
  editUserdata,
  deleteUserdata
} from 'network/user'

export default {
  name: "User",
  components: {
    CommonForm,
    CommonTable,
  },
  data() {
    return {
      tableData: [],
      tableLabel: [{
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: 'sex',
          label: '性别'
        },
        {
          prop: 'birth',
          label: '生日'
        },
        {
          prop: 'addr',
          label: '地址'
        }
      ],
      config: {
        page: 1,
        total: 5,
        loading: false
      },
      searchForm: {
        keyword: "",
      },
      formLabel: [{
        model: "keyword",
        label: "",
      }, ],
      operateForm: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: ''
      },
      operateFormLabel: [{
          model: 'name',
          label: '姓名'
        },
        {
          model: 'age',
          label: '年龄'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          options: [{
              label: '男',
              value: 0
            },
            {
              label: '女',
              value: 1
            }
          ]
        },
        {
          model: 'birth',
          label: '生日',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址'
        },
      ],
      isShow: false
    };
  },
  methods: {
    // 用户列表数据查询
    getList() {
      this.config.loading = true;
      getUserdata(this.config.page).then(res => {
        this.tableData = res.list
        this.config.total = res.count
        this.config.loading = false
      })
    },
    // 编辑
    handleEdit(row) {
      this.isShow = true
      this.operateForm = row
    },
    confirm() {
      editUserdata(this.operateForm).then(res => {
        this.isShow = false
        this.getList()
        this.$message({
          message: res.data.message,
          type: 'success'
        });
      })
    },
    // 删除
    handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteUserdata(row.id).then(res => {
          this.$message({
            type: 'success',
            message: res.message
          });
          this.getList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  computed: {
    newTableData() {
      return this.tableData.filter(item => item.sex === 1 ? item.sex = '女' : item.sex = '男')
    }
  },
  created() {
    this.getList()
  },
};
</script>

<style lang="scss" scoped>
@import url("~assets/scss/common.scss");
</style>
