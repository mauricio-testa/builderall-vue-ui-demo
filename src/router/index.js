import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sites',
    name: 'Sites',
    component: () => import('../views/Sites.vue')
  },
  {
    path: '/elements',
    name: 'Elements',
    component: () => import('../views/Elements.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
