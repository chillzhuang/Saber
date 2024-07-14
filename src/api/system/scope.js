import request from '@/axios';

export const getListDataScope = (current, size, params) => {
  return request({
    url: '/blade-system/data-scope/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}

export const removeDataScope = (ids) => {
  return request({
    url: '/blade-system/data-scope/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const addDataScope = (row) => {
  return request({
    url: '/blade-system/data-scope/submit',
    method: 'post',
    data: row
  })
}

export const updateDataScope = (row) => {
  return request({
    url: '/blade-system/data-scope/submit',
    method: 'post',
    data: row
  })
}

export const getMenuDataScope = (id) => {
  return request({
    url: '/blade-system/data-scope/detail',
    method: 'get',
    params: {
      id,
    }
  })
}

