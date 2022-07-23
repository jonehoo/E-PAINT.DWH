import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/api/user/login',
    method: 'get',
    params
  })
}

export function getInfo() {
  return request({
    url: '/api/user/userInfo',
    method: 'get',
   
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
