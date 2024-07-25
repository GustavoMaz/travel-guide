import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@views/HomeView.vue';
import CultureSectionView from '@views/CultureSectionView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/culture', component: CultureSectionView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})