import { createStore } from 'vuex'
import {judgePlatform} from "@/utils/index.js"
export default createStore({
  state: {
    isPc:judgePlatform()
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
