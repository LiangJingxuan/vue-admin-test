import { request } from 'network/request.js'

// 首页
export function getHomedata(){
  return request({
    url: '/home/getData'
  })
}