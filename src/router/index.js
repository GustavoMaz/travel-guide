import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/', 
    redirect: 'culture'
  },
  {
    path: '/', 
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    children: [
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
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/:title',
    name: 'article',
    component: () => import('@/views/CardArticleView.vue'),
    props: route => ({ title: route.params.title })
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router;