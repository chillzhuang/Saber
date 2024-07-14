import request from '@/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/blade-report/report/rest/list',
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
    url: '/blade-report/report/rest/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}
