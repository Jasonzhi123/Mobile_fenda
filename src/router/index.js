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
import myLogin from '@/view/myLogin'
import answerPage from '@/view/answerPage'
import ansPageSearch from '@/view/ansPageSearch'
import answerAsk from '@/view/answerAsk'
import kuaiwen from '@/view/kuaiwen/kuaiwen'
import kuaiwenTopic from '@/view/kuaiwen/kuaiwenTopic'
import kwenDetail from '@/view/kuaiwen/kwenDetail'
import kwenAsk from '@/view/kuaiwen/kwenAsk'
import expert from '@/view/expert/expert'
import workplace from '@/view/expert/workplace'
import polularScience from '@/view/expert/polular_Science'
import health from '@/view/expert/health'
import all from '@/view/expert/all'
import headlines from '@/view/headlines'
import openandanswer from '@/view/my/openandanswer'
import openmyanswer from '@/view/my/myAnswer'
import readyAnswer from '@/view/readyAnswer'
import cents from '@/view/my/cents'
import setup from '@/view/my/set/setup'
import validate from '@/view/my/set/validate'
import binding from '@/view/my/set/binding'
import top from '@/view/expert/top'
import newlist from '@/view/expert/newlist'
import talent from '@/view/expert/talent'
import onetoone from '@/view/expert/onetoone'
import strength from '@/view/expert/strength'
import search from '@/view/search/search'
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
        },
        {
          path: '/myLogin',
          component: myLogin
        },
        {
          path: '/kuaiwen',
          component: kuaiwen
        },
        {
          path: '/kuaiwenTopic/:id',
          component: kuaiwenTopic
        },
        {
          path: '/kwenDetail/:id',
          component: kwenDetail
        },
        {
          path: '/kwenAsk/:id',
          component: kwenAsk
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
      path: '/topic/:id',
      name: 'topic',
      component: topic
    },
    {
      path: '/alllist',
      component: alllist
    },
    {
      path: '/lisDetailQue/:id',
      component: lisDetailQue
    },
    {
      path: '/newcourse/:id',
      name: 'newcourse',
      component: newcourse
    },
    {
      path: '/player/:id/:courseID',
      name: 'player',
      component: player
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/answerPage/:id',
      component: answerPage
    },
    {
      path: '/ansPageSearch',
      component: ansPageSearch
    },
    {
      path: '/answerAsk/:id',
      component: answerAsk
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
      path: '/myAnswer',
      component: openmyanswer
    },
    {
      path: '/readyAnswer/:id',
      component: readyAnswer
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
    },
    {
      path: '/top',
      component: top
    },
    {
      path: '/newlist',
      component: newlist
    },
    {
      path: '/talent',
      component: talent
    },
    {
      path: '/onetoone',
      component: onetoone
    },
    {
      path: '/strength',
      component: strength
    },
    {
      path: '/search',
      component: search
    }
  ]
})
