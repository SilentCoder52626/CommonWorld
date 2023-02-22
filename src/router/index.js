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
      path: '/quote',
      name: 'quote',
      component: () => import('../components/Quote.vue')
    },
    {
      path: '/word-counter',
      name: 'word-counter',
      component: () => import('../components/WordCounter.vue')
    }
  ]
})

export default router
