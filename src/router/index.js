import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Login from '@/view/login'
import Find from '@/view/find'
import Ask from '@/view/ask'
import Expert from '@/view/ask/expert_page'
import question from '@/view/ask/questions'
import start from '@/view/start'
import smalltalk from '@/view/small_talk/small_talk'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'start',
      meta: {
        keepAlive: true
      },
      component: Index,
      children: [
        {
          path: 'start',
          component: start
        },
        {
          path: 'Find',
          component: Find
        },
        {
          path: 'Ask',
          component: Ask
        },
        {
          path: 'Expert/:id',
          component: Expert
        },
        {
          path: 'question',
          component: question
        }
      ]
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/smalltalk',
      component: smalltalk
    }
  ]
})
