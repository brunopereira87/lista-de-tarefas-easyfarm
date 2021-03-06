import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tasks',
    redirect:'/'
  },
  {
    path: '/',
    name: 'Tasks',
    component: () => import(/* webpackChunkName: "tasks" */ '../views/Tasks.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
