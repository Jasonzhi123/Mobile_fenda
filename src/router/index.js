import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Login from '@/view/login'
import Find from '@/view/find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/Find',
      component: Find
    },
    {
      path: '/Login',
      component: Login
    }
  ]
})
