import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './el'
import './mock'
import { ADD_MENU } from './store/types'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit(ADD_MENU, router)
  },
}).$mount('#app')