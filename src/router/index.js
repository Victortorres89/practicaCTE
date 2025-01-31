import { createRouter, createWebHistory } from 'vue-router'
import menuView from '../views/menuView.vue'
import calView from '../views/calView.vue'
import fonView from '../views/fonView.vue'
import tes1View from '../views/tes1View.vue'
import tes2View from '../views/tes2View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: menuView
  },
  {
    path: '/cal',
    name: 'cal',
    component: calView
  },
  {
    path: '/fon',
    name: 'fon',
    component: fonView
  },
  {
    path: '/tes1',
    name: 'tes1',
    component: tes1View
  },
  {
    path: '/tes2',
    name: 'tes2',
    component: tes2View
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
