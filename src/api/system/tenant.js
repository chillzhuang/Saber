import request from '@/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/blade-system/tenant/list',
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
    url: '/blade-system/tenant/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/blade-system/tenant/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/blade-system/tenant/submit',
    method: 'post',
    data: row
  })
}

export const info = (domain) => {
  return request({
    url: '/blade-system/tenant/info',
    method: 'get',
    params: {
      domain
    }
  })
}
