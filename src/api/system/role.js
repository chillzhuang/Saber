import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: 'api/blade-system/role/list',
    method: 'get',
    params: Object.assign(params, {
      current,
      size
    })
  })
}
export const getTree = () => {
  return request({
    url: 'api/blade-system/menu/grant-tree',
    method: 'get',
  })
}

export const grant = (roleIds, menuIds) => {
  return request({
    url: 'api/blade-system/role/grant',
    method: 'post',
    data: {
      roleIds,
      menuIds
    },
    meta: {
      isSerialize: true,
    }
  })
}

export const remove = (ids) => {
  return request({
    url: 'api/blade-system/role/remove',
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
    url: 'api/blade-system/role/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: 'api/blade-system/role/submit',
    method: 'post',
    data: row
  })
}


export const getRole = (roleIds) => {
  return request({
    url: 'api/blade-system/menu/role-tree-keys',
    method: 'get',
    params: {
      roleIds,
    }
  })
}

export const getRoleTree = () => {
  return request({
    url: 'api/blade-system/role/tree',
    method: 'get'
  })
}
