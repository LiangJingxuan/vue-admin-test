import cookie from 'js-cookie'
import {
  SELECT_MENU,
  SELECT_TAB,
  CLOSE_TAB,
  ACTIVE_PATH,
  CLOSE_MENU,
  SET_MENU,
  CLEAR_MENU,
  ADD_MENU
} from './types'

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
    [ACTIVE_PATH](state, payload) {
      state.tabsList = payload[0].path === '/' ? state.tabsList : [...state.tabsList, ...payload]
    },
    [CLOSE_MENU](state) {
      state.isCollapse = !state.isCollapse
    },
    [SET_MENU](state, payload) {
      console.log(payload)
      state.menu = payload
      cookie.set('menu', JSON.stringify(payload))
    },
    [CLEAR_MENU](state) {
      state.menu = []
      cookie.remove('menu')
    },
    [ADD_MENU](state, router) {
      if(!cookie.get('menu')) return
      let meun = JSON.parse(cookie.get('menu'))
      state.menu = meun
      let currentMenu = [
        {
          path: '/',
          component: () => import(`views/Main`),
          children: []
        }
      ]
      meun.forEach(item => {
        if(item.children){
          item.children = item.children.map(item => {
            item.component = () => import(`views/${item.url}`)
            return item
          })
          currentMenu[0].children.push(...item.children)
        }else{
          item.component = () => import(`views/${item.url}`)
          currentMenu[0].children.push(item)
        }
      })
      router.addRoutes(currentMenu)
    }
  }
}