import Vue from 'vue'
import VueRouter from 'vue-router'
import Contatos from '../views/contatos/Contatos.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/contatos',
    component: Contatos
  },
  {
    path: '/',
    component: Home
  },

]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
