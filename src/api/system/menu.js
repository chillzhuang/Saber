import request from '@/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/blade-system/menu/list',
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
    url: '/blade-system/menu/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/blade-system/menu/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/blade-system/menu/submit',
    method: 'post',
    data: row
  })
}

export const getMenu = (id) => {
  return request({
    url: '/blade-system/menu/detail',
    method: 'get',
    params: {
      id,
    }
  })
}

export const getLazyMenuList = (parentId, params) => {
  return request({
    url: '/blade-system/menu/lazy-menu-list',
    method: 'get',
    params: {
      ...params,
      parentId
    }
  })
}

export const getTopMenu = () =>
  request({
    url: '/blade-system/menu/top-menu',
    method: 'get',
  });

export const getRoutes = topMenuId =>
  request({
    url: '/blade-system/menu/routes',
    method: 'get',
    params: {
      topMenuId,
    },
  });
