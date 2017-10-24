// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import Axios from 'axios'
import store from './vuex/store'
import ElementUI from 'element-ui'
import iView from 'iview'
import VueLazyload from 'vue-lazyload'
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-default/index.css'
import VueTimeago from 'vue-timeago'

Axios.defaults.baseURL = 'http://localhost/zoo/fd01/Mobile_fenda_server/public'

// const accessUrl = 'http://localhost/20170918/Mobile_fenda_server/public'
// Axios.defaults.baseURL = accessUrl

// const accessUrl = 'http://192.168.20.40/group/fenda/public/'
// Axios.defaults.baseURL = accessUrl

Axios.defaults.withCredentials = true

Vue.use(MintUI)
Vue.use(ElementUI)
Vue.prototype.$http = Axios

// Vue.prototype.$accessUrl = 'http://localhost/07180206/php/lesson_5/Mobile_fenda_server/public/'
//Vue.prototype.$accessUrl = 'http://localhost/zoo/fd01/Mobile_fenda_server/public'
Vue.prototype.$accessUrl = accessUrl
Vue.use(iView)

Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'zh-CN',
  locales: {
    'zh-CN': require('vue-timeago/locales/zh-CN.json')
  }
})

Vue.use(VueLazyload, {
  loading: require('./assets/image/loading.gif')
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
