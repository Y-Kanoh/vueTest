import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TransitionTest from '../views/TransitionTest.vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'TransitionTest',
    component: TransitionTest
  }
]

const router = new VueRouter({
  routes
})

export default router
