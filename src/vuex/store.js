import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    askContent: '',
    joincoursestatus: ''
  },
  mutations: {
    setAskContent: function (state, content) {
      state.askContent = content
    },
    setJoinstatus: function (state, content) {
      state.joincoursestatus = content
    }
  }
})
export default Store
