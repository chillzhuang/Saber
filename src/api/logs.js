import request from '@/router/axios';
export const getUsualList = (current, size) => {
  return request({
    url: 'api/blade-log/usual/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}

export const getApiList = (current, size) => {
  return request({
    url: 'api/blade-log/api/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}

export const getErrorList = (current, size) => {
  return request({
    url: 'api/blade-log/error/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}


export const getLogs = (id) => {
  return request({
    url: 'api/blade-log/usual/detail',
    method: 'get',
    params: {
      id,
    }
  })
}
