import { setStore, getStore } from 'utils/store'
import website from '@/config/website'
const tagWel = website.fistPage;
const navs = {
  state: {
    tagList: getStore({ name: 'tagList' }) || [],
    tag: getStore({ name: 'tag' }) || {},
    tagWel: tagWel
  },
  mutations: {
    ADD_TAG: (state, action) => {
      if (typeof action.name == 'function') action.name = action.name(action.query)
      state.tag = action;
      setStore({ name: 'tag', content: state.tag })
      if (state.tagList.some(ele => ele.fullPath == action.fullPath)) return
      state.tagList.push(action)
      setStore({ name: 'tagList', content: state.tagList })
    },
    DEL_TAG: (state, action) => {
      state.tagList = state.tagList.filter(item => {
        return item.fullPath !== action.fullPath
      })
      setStore({ name: 'tagList', content: state.tagList })
    },
    DEL_ALL_TAG: (state, tagList = []) => {
      state.tagList = tagList
      setStore({ name: 'tagList', content: state.tagList })
    },
    DEL_TAG_OTHER: (state) => {
      state.tagList = state.tagList.filter(item => {
        return [state.tag.fullPath, website.fistPage.path].includes(item.fullPath)
      })
      setStore({ name: 'tagList', content: state.tagList })
    }
  }
}
export default navs