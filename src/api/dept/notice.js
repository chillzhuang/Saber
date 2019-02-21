import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: 'api/blade-desk/notice/list',
    method: 'get',
    params: Object.assign(params, {
      current,
      size,
    })
  })
}

export const remove = (ids) => {
  return request({
    url: 'api/blade-desk/notice/remove',
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
    url: 'api/blade-desk/notice/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: 'api/blade-desk/notice/submit',
    method: 'post',
    data: row
  })
}

export const getNotice = (id) => {
  return request({
    url: 'api/blade-desk/notice/detail',
    method: 'get',
    params: {
      id
    }
  })
}

