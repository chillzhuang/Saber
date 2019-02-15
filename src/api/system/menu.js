import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: 'api/blade-system/menu/list',
    method: 'get',
    params: Object.assign(params, {
      current,
      size
    })
  })
}
export const remove = (ids) => {
  return request({
    url: 'api/blade-system/menu/remove',
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
    url: 'api/blade-system/menu/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: 'api/blade-system/menu/submit',
    method: 'post',
    data: row
  })
}

export const getMenu = (id) => {
  return request({
    url: 'api/blade-system/menu/detail',
    method: 'get',
    params: {
      id,
    }
  })
}
