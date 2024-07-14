import request from '@/axios';

export const getUsualList = (current, size) => {
  return request({
    url: '/blade-log/usual/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}

export const getApiList = (current, size) => {
  return request({
    url: '/blade-log/api/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}

export const getErrorList = (current, size) => {
  return request({
    url: '/blade-log/error/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}


export const getUsualLogs = (id) => {
  return request({
    url: '/blade-log/usual/detail',
    method: 'get',
    params: {
      id,
    }
  })
}
export const getApiLogs = (id) => {
  return request({
    url: '/blade-log/api/detail',
    method: 'get',
    params: {
      id,
    }
  })
}
export const getErrorLogs = (id) => {
  return request({
    url: '/blade-log/error/detail',
    method: 'get',
    params: {
      id,
    }
  })
}

