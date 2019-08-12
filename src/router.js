import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Home from './views/Home.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index",
      name: "Index",
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home
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
      redirect: "/index"
    }
  ]
})
