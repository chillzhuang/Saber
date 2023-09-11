import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/blade-desk/notice/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    },
    cryptoToken: true,
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/blade-desk/notice/remove',
    method: 'post',
    params: {
      ids,
    },
    cryptoToken: true,
  })
}

export const add = (row) => {
  return request({
    url: '/api/blade-desk/notice/submit',
    method: 'post',
    data: row,
    cryptoToken: true,
  })
}

export const update = (row) => {
  return request({
    url: '/api/blade-desk/notice/submit',
    method: 'post',
    data: row,
    cryptoToken: true,
  })
}

export const getNotice = (id) => {
  return request({
    url: '/api/blade-desk/notice/detail',
    method: 'get',
    params: {
      id
    },
    cryptoToken: true,
  })
}

