import { setStore, getStore } from 'utils/store'
import dayjs from 'dayjs'
import { sendLogs } from '@/api/user'
const logs = {
  state: {
    logsList: getStore({ name: 'logsList' }) || [],
  },
  actions: {
    //发送错误日志
    SendLogs ({ state, commit }) {
      return new Promise((resolve, reject) => {
        sendLogs(state.logsList).then(() => {
          commit('CLEAR_LOGS');
          resolve();
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
  mutations: {
    ADD_LOGS: (state, { type, message, stack, info }) => {
      state.logsList.push(Object.assign({
        url: window.location.href,
        time: dayjs().format('YYYY-MM-DD HH:mm:ss')
      }, {
        type,
        message,
        stack,
        info: info.toString()
      }))
      setStore({ name: 'logsList', content: state.logsList })
    },
    CLEAR_LOGS: (state) => {
      state.logsList = [];
      setStore({ name: 'logsList', content: state.logsList })
    }
  }

};

export default logs;