import Layout from '@/page/index/index.vue'
import Store from '@/store/'
export default [{
  path: '/wel',
  component: () => Store.getters.isMacOs ? import('@/mac/index.vue') : import('@/page/index/index.vue'),
  redirect: '/wel/index',
  children: [{
    path: 'index',
    name: '首页',
    meta: {
      i18n: 'dashboard'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/wel/index.vue')
  }, {
    path: 'more',
    name: '控制台',
    meta: {
      i18n: 'more',
      menu: false,
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/wel/dashboard.vue')
  }]
}, {
  path: '/iframe',
  component: Layout,
  redirect: '/iframe',
  children: [{
    path: '',
    name: '',
    component: () =>
      import( /* webpackChunkName: "views" */ '@/components/iframe/main.vue')
  }]
}, {
  path: '/info',
  component: Layout,
  redirect: '/info/index',
  children: [{
    path: 'index',
    name: '个人信息',
    meta: {
      i18n: 'info'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/info.vue')
  }]
}]