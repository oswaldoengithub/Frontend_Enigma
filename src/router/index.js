import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/hojavida',
    name: 'hojavida',
    component: () => import(/* webpackChunkName: "about" */ '../views/HojaVida.vue')
  },
  ,
  {
    path: '/homeafiliadoview',
    name: 'homeafiliadoview',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeAfiliadoView.vue')
  },
  {
    path: '/homeadminview',
    name: 'homeadminview',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeAdminView.vue')
  },


  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
