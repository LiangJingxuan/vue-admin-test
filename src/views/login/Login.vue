<template>
<div style="padding: 20px">
  <el-form :model="form" label-width="120">
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item align="center">
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import {
  getMenu
} from 'network/login'
import {
  SET_MENU,
  CLEAR_MENU,
  ADD_MENU
} from '../../store/types'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      getMenu(this.form).then(res => {
        // console.log(res)
        if (res.code === 20000) {
          this.$store.commit(CLEAR_MENU)
          this.$store.commit(SET_MENU, res.data.menu)
          this.$store.commit(ADD_MENU, this.$router)
          this.$router.push({
            name: 'home'
          })
        } else {
          this.$message({
            message: res.data.message,
            type: 'error'
          });
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.el-form {
  width: 50%;
  margin: auto;
  padding: 45px;
  height: 450px;
  background-color: #fff;
}
</style>
