import request from '@/router/axios';

export const getList = (current, size) => {
  return request({
    url: 'api/blade-system/dict/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}
export const remove = (ids) => {
  return request({
    url: 'api/blade-system/dict/remove',
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
    url: 'api/blade-system/dict/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: 'api/blade-system/dict/submit',
    method: 'post',
    data: row
  })
}


export const getDict = (id) => {
  return request({
    url: 'api/blade-system/dict/detail',
    method: 'get',
    params: {
      id,
    }
  })
}