<template>
<div class="common-table">
  <el-table :data="tableData" height="100%" stripe v-loading="config.loading">
    <el-table-column label="序号" width="85">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{(config.page-1) * 20 + scope.$index +1}}</span>
      </template>
    </el-table-column>
    <el-table-column show-overflow-tooltip v-for="item in tableLabel" :key="item.prop" :label="item.label">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{scope.row[item.prop]}}</span>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="config.total" :current-page.sync="config.page" @current-change="changePage">
  </el-pagination>
</div>
</template>

<script>
export default {
  name: 'CommonTable',
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    },
    tableLabel: {
      type: Array,
      default () {
        return []
      }
    },
    config: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    // 分页查询
    changePage(page) {
      this.$emit('changePage', page)
    },
    // 编辑
    handleEdit(row) {
      this.$emit('handleEdit', row)
    },
    // 删除
    handleDelete(row) {
      this.$emit('handleDelete', row)
    }
  },
}
</script>

<style lang="scss" scoped>
.common-table {
  height: 500px;
  position: relative;

  .pager {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
}
</style>
