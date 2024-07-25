import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/', 
    name: 'home',
    component: () => import('@/views/CultureSectionView.vue') 
  },

  {
    path: '/culture', 
    name: 'culture',
    component: () => import('@/views/CultureSectionView.vue') 
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router