import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/brazil',
      name: 'brazil',
      component: () => import('../views/BrazilView.vue')
    },
    {
      path: '/hawaii',
      name: 'hawaii',
      component: () => import('../views/HawaiiView.vue')
    },
    {
      path: '/panama',
      name: 'panama',
      component: () => import('../views/PanamaView.vue')
    },
    {
      path: '/jamaica',
      name: 'jamaica',
      component: () => import('../views/JamaicaView.vue')
    }
  ]
})

export default router
