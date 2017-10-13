import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    login: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false,
    askContent: '',
    joincoursestatus: '',
    nextPage: '/my',
    changePhone: false
  },
  mutations: {
    setAskContent: function (state, content) {
      state.askContent = content
    },
    setJoinstatus: function (state, content) {
      state.joincoursestatus = content
    },
    setLogin: function (state, $http) {
      $http.request({
        url: '/api/login'
      }).then((response) => {
        if (response.data) {
          state.login = response.data
          localStorage.setItem('user', JSON.stringify(state.login))
        } else {
          state.login = false
          localStorage.setItem('user', JSON.stringify(state.login))
        }
      }).catch(() => {
        state.login = false
        localStorage.setItem('user', JSON.stringify(state.login))
      })
    },
    setLogout: function (state) {
      state.login = false
      localStorage.setItem('user', JSON.stringify(state.login))
    },
    setNextPage: function (state, content) {
      state.nextPage = content
    }
  }
})
export default Store
