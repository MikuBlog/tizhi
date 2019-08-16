import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Answer from './views/answer.vue'
import Result from './views/result.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: '/answer',
      name: 'answer',
      component: Answer
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
})

export default router
