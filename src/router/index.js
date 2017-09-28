import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Login from '@/view/login'
import Ask from '@/view/ask'
import start from '@/view/start'
import smalltalk from '@/view/small_talk/small_talk'
import listen from '@/view/listen/listen'
import lisDetailQue from '@/view/listen/detailQue'
import bought from '@/view/bought'
import my from '@/view/my'
import expert from '@/view/expert/expert'
import workplace from '@/view/expert/workplace'
import polularScience from '@/view/expert/polular_Science'
import health from '@/view/expert/health'
import all from '@/view/expert/all'
import headlines from '@/view/headlines'
import openandanswer from '@/view/my/openandanswer'
import cents from '@/view/my/cents'
import setup from '@/view/my/set/setup'
import validate from '@/view/my/set/validate'
import binding from '@/view/my/set/binding'
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
      path: '/lisDetailQue',
      component: lisDetailQue
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
    },
    {
      path: '/workplace',
      component: workplace
    },
    {
      path: '/polularScience',
      component: polularScience
    },
    {
      path: '/health',
      component: health
    },
    {
      path: '/all',
      component: all
    },
    {
      path: '/openandanswer',
      component: openandanswer
    },
    {
      path: '/cents',
      component: cents
    },
    {
      path: '/setup',
      component: setup
    },
    {
      path: '/validate',
      component: validate
    },
    {
      path: '/binding',
      component: binding
    }
  ]
})
