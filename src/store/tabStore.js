import { SELECT_MENU, SELECT_TAB, CLOSE_TAB, ACTIVE_PATH, CLOSE_MENU } from './types'

export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    tabsList: [
      {
        path: "/",
        label: "首页",
        icon: "s-home",
      }
    ]
  },
  mutations: {
    [SELECT_MENU](state, payload) {
      state.currentMenu = payload.path !== '/' ? payload : null
    },
    [SELECT_TAB](state, payload) {
      const result = state.tabsList.findIndex(item => item.path === payload.path)
      result === -1 && payload.path !== '/' ? state.tabsList.push(payload) : null
    },
    [CLOSE_TAB](state, payload) {
      const result = state.tabsList.findIndex(item => item.path === payload.path)
      state.tabsList.splice(result, 1)
    },
    [ACTIVE_PATH](state, payload){
      state.tabsList = payload[0].path==='/' ? state.tabsList : [...state.tabsList, ...payload]
    },
    [CLOSE_MENU](state){
      state.isCollapse = !state.isCollapse
    }
  }
}