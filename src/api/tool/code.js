import request from '@/router/axios';

export const getList = (current, size) => {
  return request({
    url: 'api/blade-develop/code/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}

export const build = (ids) => {
  return request({
    url: 'api/blade-develop/code/gen-code',
    method: 'post',
    data: {
      ids,
    }
  })
}
export const remove = (ids) => {
  return request({
    url: 'api/blade-develop/code/remove',
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
    url: 'api/blade-develop/code/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/blade-develop/code/submit',
    method: 'post',
    data: row
  })
}

export const getCode = (id) => {
  return request({
    url: 'api/blade-develop/code/detail',
    method: 'get',
    params: {
      id,
    }
  })
}
