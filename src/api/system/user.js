import request from '@/router/axios';

export const resetPassword = (userIds) => {
  return request({
    url: '/api/blade-user/reset-password',
    method: 'post',
    params: {
      userIds,
    }
  })
}
export const getList = (current, size, params) => {
  return request({
    url: '/api/blade-user/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}
export const remove = (ids) => {
  return request({
    url: '/api/blade-user/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/blade-user/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/blade-user/update',
    method: 'post',
    data: row
  })
}

export const getUser = (id) => {
  return request({
    url: '/api/blade-user/detail',
    method: 'get',
    params: {
      id,
    }
  })
}
