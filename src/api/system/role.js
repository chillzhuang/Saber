import request from '@/router/axios';

export const getList = (current, size) => {
  return request({
    url: 'api/blade-system/role/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}
export const getTree = () => {
  return request({
    url: 'api/blade-system/menu/grant-tree',
    method: 'get',
  })
}
export const remove = (ids) => {
  return request({
    url: 'api/blade-system/role/remove',
    method: 'post',
    data: {
      ids,
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

