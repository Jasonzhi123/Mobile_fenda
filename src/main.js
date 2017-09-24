// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import Axios from 'axios'
import store from './vuex/store'
Axios.defaults.baseURL = 'http://localhost/20170918/thinkphp5/public'

Vue.use(MintUI)
Vue.prototype.$http = Axios

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
