import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CalcView from '@/views/CalcView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    alias: '/',
    component: HomeView
  },
  {
    path: '/calc',
    name: 'calc',
    component: CalcView
  },
  { path: '/:notFound(.*)', redirect: '/home' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
