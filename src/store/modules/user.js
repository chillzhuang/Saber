import { setToken, setRefreshToken, removeToken, removeRefreshToken } from '@/utils/auth';
import { setStore, getStore } from '@/utils/store'
import { deepClone } from '@/utils/util'
import { loginByUsername, loginBySocial, getUserInfo, getMenu, getTopMenu, logout, refreshToken, getButtons } from '@/api/user'
import { formatPath } from '@/router/avue-router'
import { ElMessage } from 'element-plus'
import { encrypt } from '@/utils/sm2'

const user = {
  state: {
    userInfo: getStore({ name: 'userInfo' }) || [],
    permission: getStore({ name: 'permission' }) || {},
    roles: [],
    menuId: {},
    menu: getStore({ name: 'menu' }) || [],
    menuAll: getStore({ name: 'menuAll' }) || [],
    token: getStore({ name: 'token' }) || '',
    refreshToken: getStore({ name: 'refreshToken' }) || '',
  },
  actions: {
    //根据用户名登录
    LoginByUsername ({ commit }, userInfo = {}) {
      return new Promise((resolve, reject) => {
        loginByUsername(userInfo.tenantId, userInfo.username, encrypt(userInfo.password), userInfo.type, userInfo.key, userInfo.code).then(res => {
          const data = res.data;
          if (data.success) {
            commit('SET_TOKEN', data.data.accessToken);
            commit('SET_REFRESH_TOKEN', data.data.refreshToken);
            commit('SET_USER_INFO', data.data);
            commit('DEL_ALL_TAG');
            commit('CLEAR_LOCK');
          } else {
            ElMessage({
              message: data.msg,
              type: 'error'
            })
          }
          resolve();
        }).catch(err => {
          reject(err)
        })
      })
    },
    //根据第三方信息登录
    LoginBySocial ({ commit }, userInfo) {
      return new Promise((resolve) => {
        loginBySocial(userInfo.tenantId, userInfo.source, userInfo.code, userInfo.state).then(res => {
          const data = res.data;
          if (data.success) {
            commit('SET_TOKEN', data.data.accessToken);
            commit('SET_REFRESH_TOKEN', data.data.refreshToken);
            commit('SET_USER_INFO', data.data);
            commit('DEL_ALL_TAG');
            commit('CLEAR_LOCK');
          } else {
            Message({
              message: data.msg,
              type: 'error'
            })
          }
          resolve();
        })
      })
    },
    //根据手机号登录
    LoginByPhone ({ commit }, userInfo) {
      return new Promise((resolve) => {
        loginByUsername(userInfo.phone, userInfo.code).then(res => {
          const data = res.data.data;
          commit('SET_TOKEN', data);
          commit('DEL_ALL_TAG', []);
          commit('CLEAR_LOCK');
          resolve();
        })
      })
    },
    GetUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          const data = res.data.data;
          commit('SET_ROLES', data.roles);
          resolve(data);
        }).catch(err => {
          reject(err);
        })
      })
    },
    //刷新token
    RefreshToken ({ state, commit }) {
      return new Promise((resolve, reject) => {
        refreshToken(state.refreshToken).then(res => {
          const data = res.data;
          commit('SET_TOKEN', data.data.accessToken);
          commit('SET_REFRESH_TOKEN', data.data.refreshToken);
          commit('SET_USER_INFO', data.data);
          resolve(data);
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut ({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '');
          commit('SET_REFRESH_TOKEN', '');
          commit('SET_MENUALL_NULL', []);
          commit('SET_MENU', [])
          commit('SET_ROLES', [])
          commit('DEL_ALL_TAG', []);
          commit('CLEAR_LOCK');
          removeToken()
          removeRefreshToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    //注销session
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_REFRESH_TOKEN', '');
        commit('SET_MENUALL_NULL', []);
        commit('SET_MENU', [])
        commit('SET_ROLES', [])
        commit('DEL_ALL_TAG', []);
        commit('CLEAR_LOCK');
        removeToken()
        removeRefreshToken()
        resolve()
      })
    },
    GetTopMenu () {
      return new Promise(resolve => {
        getTopMenu().then((res) => {
          const data = res.data.data || []
          resolve(data)
        })
      })
    },
    GetMenu ({ commit, dispatch }, parentId) {
      return new Promise(resolve => {
        getMenu(parentId).then((res) => {
          const data = res.data.data
          let menu = deepClone(data);
          menu.forEach(ele => formatPath(ele, true));
          console.log(menu)
          commit('SET_MENU', menu);
          commit('SET_MENU_ALL', menu);
          dispatch('GetButtons');
          resolve(menu)
        })
      })
    },
    GetButtons ({ commit }) {
      return new Promise((resolve) => {
        getButtons().then(res => {
          const data = res.data.data;
          commit('SET_PERMISSION', data);
          resolve();
        })
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token;
      setStore({ name: 'token', content: state.token })
    },
    SET_REFRESH_TOKEN: (state, refreshToken) => {
      setRefreshToken(refreshToken);
      state.refreshToken = refreshToken;
      setStore({ name: 'refreshToken', content: state.refreshToken })
    },
    SET_MENU_ID (state, menuId) {
      state.menuId = menuId;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({ name: 'userInfo', content: state.userInfo })
    },
    SET_MENU_ALL: (state, menuAll) => {
      let menu = state.menuAll;
      menuAll.forEach(ele => {
        let index = menu.findIndex(item => item.path === ele.path)
        if (index === -1) {
          menu.push(ele);
        } else {
          menu[index] = ele;
        }
      })
      state.menuAll = menu
      setStore({ name: 'menuAll', content: state.menuAll })
    },
    SET_MENUALL_NULL: (state) => {
      state.menuAll = []
      setStore({ name: 'menuAll', content: state.menuAll })
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
      setStore({ name: 'menu', content: state.menu })
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSION: (state, permission) => {
      let result = [];
      function getCode (list) {
        list.forEach(ele => {
          if (typeof (ele) === 'object') {
            const chiildren = ele.children;
            const code = ele.code;
            if (chiildren) {
              getCode(chiildren)
            } else {
              result.push(code);
            }
          }

        })
      }
      getCode(permission);
      state.permission = {};
      result.forEach(ele => {
        state.permission[ele] = true;
      });
      setStore({ name: 'permission', content: state.permission, type: 'session' })
    }
  }

}
export default user
