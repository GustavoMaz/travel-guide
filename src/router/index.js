import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/culture', 
    name: 'culture',
    component: () => import('@/views/CultureSectionView.vue') 
  },
  {
    path: '/gastronomy', 
    name: 'gastronomy',
    component: () => import('@/views/GastronomySectionView.vue') 
  },
  {
    path: '/nature', 
    name: 'nature',
    component: () => import('@/views/NatureSectionView.vue') 
  },
  {
    path: '/sports', 
    name: 'sports',
    component: () => import('@/views/SportsSectionView.vue') 
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router;