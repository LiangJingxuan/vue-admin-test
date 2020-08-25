<template>
  <div id="header">
    <el-row :gutter="24">
      <el-col :span="3">
        <div class="grid-content left-content">
          <i class="el-icon-s-fold" @click="collapseMenu"></i>
          <span>兴商 TS系统</span>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{path: '/'}">
              <a>首页</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="current.path" v-if="current">
              <a>{{current.label}}</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              用户名
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
              <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { CLOSE_MENU } from 'store/types'
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
  methods: {
    collapseMenu(){
      this.$store.commit(CLOSE_MENU)
    }
  },
};
</script>

<style lang="scss" scoped>
#header {
  i {
    font-size: 25px;
    vertical-align: sub;
    margin-right: 5px;
  }
  .left-content,
  .el-dropdown {
    cursor: pointer;
    color: #fff;
  }
  .el-breadcrumb {
    margin-left: 20px;
    line-height: 60px;
  }
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    color: #fff;
    font-weight: normal;
    cursor: pointer;
  }
}
</style>