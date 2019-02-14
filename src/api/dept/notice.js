import request from '@/router/axios';
export const getList = (current, size, dateRange, begin_date, end_date, ) => {
  return request({
    url: 'api/blade-desk/notice/list',
    method: 'get',
    params: {
      current,
      size,
      dateRange,
      begin_date,
      end_date,
    }
  })
}

export const remove = (ids) => {
  return request({
    url: 'api/blade-system/dept/remove',
    method: 'post',
    data: {
      ids,
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
