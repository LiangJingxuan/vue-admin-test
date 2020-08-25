import mock from 'mockjs'
import homeApi from './home'

// 设置随机延时 200-2000毫秒
mock.setup({
  timeout: '200-2000'
})
// 首页请求
mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)