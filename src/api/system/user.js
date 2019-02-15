import request from '@/router/axios';
export const resetPassword = (userIds) => {
  return request({
    url: 'api/blade-user/reset-password',
    method: 'post',
    data: userIds
  })
}
export const getList = (current, size, params) => {
  return request({
    url: 'api/blade-user/list',
    method: 'get',
    params: Object.assign(params, {
      current,
      size
    })
  })
}
export const remove = (ids) => {
  return request({
    url: 'api/blade-system/user/remove',
    method: 'post',
    data: {
      ids,
    },
    meta: {
      isSerialize: true,
    }
  })
}

export const add = (row) => {
  return request({
    url: 'api/blade-user/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: 'api/blade-user/submit',
    method: 'post',
    data: row
  })
}

export const getUser = (id) => {
  return request({
    url: 'api/blade-user/detail',
    method: 'get',
    params: {
      id,
    }
  })
}