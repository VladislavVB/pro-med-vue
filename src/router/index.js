import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../views/Catalog.vue'
import Favorite from '../views/Favorite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: Favorite
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
