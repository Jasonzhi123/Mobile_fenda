import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Login from '@/view/login'
import Ask from '@/view/ask'
import start from '@/view/start'
import smalltalk from '@/view/small_talk/small_talk'
import topic from '@/view/small_talk/topic'
import newcourse from '@/view/small_talk/newcourse'
import pay from '@/view/small_talk/pay'
import player from '@/view/small_talk/player'
import alllist from '@/view/small_talk/alllist'
import listen from '@/view/listen/listen'
import lisDetailQue from '@/view/listen/detailQue'
import bought from '@/view/bought'
import my from '@/view/my'
import expert from '@/view/expert/expert'
import headlines from '@/view/headlines'
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
          path: '/bought',
          component: bought
        },
        {
          path: '/my',
          component: my
        }
      ]
    },
    {
      path: '/smalltalk',
      component: smalltalk
    },
    {
      path: '/pay',
      component: pay
    },
    {
      path: '/topic',
      component: topic
    },
    {
      path: '/alllist',
      component: alllist
    },
    {
      path: '/lisDetailQue',
      component: lisDetailQue
    },
    {
      path: '/newcourse',
      component: newcourse
    },
    {
      path: '/player',
      component: player
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/expert',
      component: expert
    },
    {
      path: '/headlines',
      component: headlines
    }
  ]
})
