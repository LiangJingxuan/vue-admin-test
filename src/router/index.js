import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const Home = () => import('views/home/Home')
// const Category = () => import('views/category/Category')
// const Cart = () => import('views/cart/Cart')
// const Profile = () => import('views/profile/Profile')
// const Detail = () => import('views/detail/Detail')
// const routes = [
//     { path: '', redirect: '/home' },
//     { path: '/home', component: Home },
//     { path: '/category', component: Category },
//     { path: '/cart', component: Cart },
//     { path: '/profile', component: Profile },
//     { path: '/detail/:id', component: Detail }
// ]
const routes = [
  // { 
  //   path: '/', 
  //   component: ()=>import('views/Main'),
  //   children: [
  //     { path: '/', component: ()=>import('views/home/Home') },
  //     { path: '/video', component: ()=>import('views/video/Video') },
  //     { path: '/user', component: ()=>import('views/user/User') },
  //     { path: '/page1', component: ()=>import('views/other/Other') },
  //   ]
    
  // },
  {
    path: '/login',
    component: () => import('views/login/Login')
  }
]
const router = new VueRouter({
  routes,
  mode: 'hash'
})
// 解决重复点报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router