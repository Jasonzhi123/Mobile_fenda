import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Login from '@/view/login'
import Ask from '@/view/ask'
import Expert from '@/view/ask/expert_page'
import start from '@/view/start'
import smalltalk from '@/view/small_talk/small_talk'
import listen from '@/view/listen/listen'
import lisDetailQue from '@/view/listen/detailQue'
import bought from '@/view/bought'
import my from '@/view/my'
import answerPage from '@/view/answerPage'
import ansPageSearch from '@/view/ansPageSearch'
import kuaiwen from '@/view/kuaiwen/kuaiwen'
import kuaiwenOne from '@/view/kuaiwen/kuaiwenOne'
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
          path: 'listen',
          component: listen
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
          path: '/my',
          component: my
        },
        {
          path: '/kuaiwen',
          component: kuaiwen
        },
        {
          path: '/kuaiwenOne',
          component: kuaiwenOne
        }
      ]
    },
    {
      path: '/smalltalk',
      component: smalltalk
    },
    {
      path: '/lisDetailQue',
      component: lisDetailQue
    },
    {
      path: '/bought',
      component: bought
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/answerPage',
      component: answerPage
    },
    {
      path: '/ansPageSearch',
      component: ansPageSearch
    }
  ]
})
