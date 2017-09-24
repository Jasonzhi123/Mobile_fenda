import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    askContent: ''
  },
  mutations: {
    setAskContent: function (state, content) {
      state.askContent = content
    }
  }
})
export default Store
