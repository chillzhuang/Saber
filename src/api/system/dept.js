import request from '@/router/axios';

export const getList = (current, size) => {
  return request({
    url: 'api/blade-system/dept/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}
export const remove = (ids) => {
  return request({
    url: 'api/blade-system/dept/remove',
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
    url: 'api/blade-system/dept/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: 'api/blade-system/dept/submit',
    method: 'post',
    data: row
  })
}

export const getDept = (id) => {
  return request({
    url: 'api/blade-system/dept/detail',
    method: 'get',
    params: {
      id,
    }
  })
}
