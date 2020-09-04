import { request } from 'network/request.js'

export function getMenu(data) {
  return request({
    url: '/permission/getMenu',
    method: 'post',
    data
  })
}