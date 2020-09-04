import { request } from 'network/request.js'

// 列表
export function getUserdata(page) {
  return request({
    url: '/user/getUser',
    params: {
      page
    }
  })
}
// 编辑
export function editUserdata(data) {
  return request({
    url: '/user/edit',
    method: 'post',
    data
  })
}
// 删除
export function deleteUserdata(id){
  return request({
    url: '/user/del',
    params: {
      id
    }
  })
}