import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tabStore'

// 安装插件
Vue.use(Vuex)

// 创建Store对象
const store = new Vuex.Store({
  modules: {
    tab
  }
})

// 挂载Vue实例上
export default store