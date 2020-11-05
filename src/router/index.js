import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Programmer from '../views/Programmer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/programmer',
    name: 'Programmer',
    component: Programmer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
