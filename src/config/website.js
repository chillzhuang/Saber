/**
 * 全局配置文件
 */
export default {
  title: "saber",
  logo: "A",
  key: 'saber',//配置主键,目前用于存储
  indexTitle: 'Saber Admin',
  clientId: 'saber', // 客户端id
  clientSecret: 'saber_secret', // 客户端密钥
  tenantMode: true, // 是否开启租户模式
  captchaMode: true, // 是否开启验证码模式
  tokenTime: 3000,//token过期时间
  Authorization: 'Blade-Auth',
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [],
  //配置首页不可关闭
  setting: {
    sidebar: 'vertical',
    tag: true,
    debug: true,
    collapse: true,
    search: true,
    lock: true,
    screenshot: true,
    fullscren: true,
    theme: true,
    menu: true
  },
  fistPage: {
    name: "首页",
    path: "/wel/index"
  },
  //配置菜单的属性
  menu: {
    iconDefault: 'icon-caidan',
    label: 'name',
    path: 'path',
    icon: 'source',
    children: 'children',
    query: 'query',
    href: 'path',
    meta: 'meta'
  },
  //auth配置
  auth: {
    // 使用后端工程 @org.springblade.test.Sm2KeyGenerator 获取
    publicKey: '048ecaec81db406275b5fd8a18164c4a58cc8575159b89d3cb61871cab34bd267fe0a7543277d4c9cfd13c946c507c3e8dfe0121b845ba968221eaf64a242cf7f0',
  },
  // 授权地址
  authUrl: 'http://localhost/blade-auth/oauth/render',
  // 报表设计器地址(cloud端口为8108,boot端口为80)
  reportUrl: 'http://localhost:8108/ureport',
}
