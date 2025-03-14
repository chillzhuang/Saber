import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/blade-system/user/list',
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
    url: '/api/blade-system/user/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/blade-system/user/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/blade-system/user/update',
    method: 'post',
    data: row
  })
}

export const grant = (userIds, roleIds) => {
  return request({
    url: '/api/blade-system/user/grant',
    method: 'post',
    params: {
      userIds,
      roleIds,
    }
  })
}

export const getUser = (id) => {
  return request({
    url: '/api/blade-system/user/detail',
    method: 'get',
    params: {
      id,
    }
  })
}

export const getUserInfo = () => {
  return request({
    url: '/api/blade-system/user/info',
    method: 'get',
  })
}

export const resetPassword = (userIds) => {
  return request({
    url: '/api/blade-system/user/reset-password',
    method: 'post',
    params: {
      userIds,
    }
  })
}

export const updatePassword = (oldPassword, newPassword, newPassword1) => {
  return request({
    url: '/api/blade-system/user/update-password',
    method: 'post',
    params: {
      oldPassword,
      newPassword,
      newPassword1,
    }
  })
}

export const unlock = (userIds) => {
  return request({
    url: '/api/blade-system/user/unlock',
    method: 'post',
    params: {
      userIds,
    }
  })
}
