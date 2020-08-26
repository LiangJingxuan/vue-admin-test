import { request } from 'network/request.js'

// 列表
export function getHomedata() {
  return request({
    url: '/user/getUser',
    params: {

    }
  })
}