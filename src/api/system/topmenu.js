import request from '@/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/blade-system/topmenu/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    },
  });
};

export const getDetail = id => {
  return request({
    url: '/blade-system/topmenu/detail',
    method: 'get',
    params: {
      id,
    },
  });
};

export const remove = ids => {
  return request({
    url: '/blade-system/topmenu/remove',
    method: 'post',
    params: {
      ids,
    },
  });
};

export const add = row => {
  return request({
    url: '/blade-system/topmenu/submit',
    method: 'post',
    data: row,
  });
};

export const update = row => {
  return request({
    url: '/blade-system/topmenu/submit',
    method: 'post',
    data: row,
  });
};

export const grantTree = () => {
  return request({
    url: '/blade-system/menu/grant-top-tree',
    method: 'get',
  });
};

export const getTopTree = topMenuIds => {
  return request({
    url: '/blade-system/menu/top-tree-keys',
    method: 'get',
    params: {
      topMenuIds,
    },
  });
};

export const grant = (topMenuIds, menuIds) => {
  return request({
    url: '/blade-system/topmenu/grant',
    method: 'post',
    data: {
      topMenuIds,
      menuIds,
    },
  });
};
