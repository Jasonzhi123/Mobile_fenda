import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    login: false,
    askContent: '',
    joincoursestatus: ''
  },
  mutations: {
    setAskContent: function (state, content) {
      state.askContent = content
    },
    setJoinstatus: function (state, content) {
      state.joincoursestatus = content
    },
    setLogin: function (state, content) {
      state.login = content
    },
    setLogout: function (state) {
      state.login = false
    }
  }
})
export default Store
