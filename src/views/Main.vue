<template>
  <el-container>
    <el-aside width="auto"><common-aside /></el-aside>
    <el-container>
      <el-header><common-header /></el-header>
      <common-tab />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from 'components/common/header/Header'
import CommonAside from 'components/common/aside/Aside'
import CommonTab from 'components/common/tab/Tab'

export default {
  name: "Main",
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #8175c7;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
