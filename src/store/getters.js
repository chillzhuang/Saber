
const getters = {
  tag: state => state.tags.tag,
  language: state => state.common.language,
  setting: state => state.common.setting,
  userInfo: state => state.user.userInfo,
  themeName: state => state.common.themeName,
  isMacOs: (state, getters) => getters.themeName == 'mac-os',
  isRefresh: state => state.common.isRefresh,
  isSearch: state => state.common.isSearch,
  isHorizontal: state => state.common.setting.sidebar === 'horizontal',
  isCollapse: state => state.common.isCollapse,
  isLock: state => state.common.isLock,
  isFullScren: state => state.common.isFullScren,
  isMenu: state => state.common.isMenu,
  lockPasswd: state => state.common.lockPasswd,
  tagList: state => state.tags.tagList,
  tagsKeep: (state, getters) => {
    return getters.tagList.filter(ele => {
      return (ele.meta || {}).keepAlive
    }).map(ele => ele.fullPath)
  },
  tagWel: state => state.tags.tagWel,
  token: state => state.user.token,
  roles: state => state.user.roles,
  permission: state => state.user.permission,
  menuId: state => state.user.menuId,
  menu: state => state.user.menu,
  menuAll: state => state.user.menuAll,
  logsList: state => state.logs.logsList,
  logsLen: state => state.logs.logsList.length || 0,
  logsFlag: (state, getters) => getters.logsLen === 0
}
export default getters