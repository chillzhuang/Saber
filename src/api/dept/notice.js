import request from '@/router/axios';
export const getList = (current, size, dateRange, begin_date, end_date, params) => {
  return request({
    url: 'api/blade-desk/notice/list',
    method: 'get',
    params: Object.assign(params, {
      current,
      size,
      dateRange,
      begin_date,
      end_date,
    })
  })
}

export const remove = (ids) => {
  return request({
    url: 'api/blade-system/notice/remove',
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

