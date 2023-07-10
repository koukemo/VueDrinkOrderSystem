import { createRouter, createWebHistory } from 'vue-router';
import DrinkMenu from '@/components/DrinkMenu.vue';
import DrinkOrder from '@/components/DrinkOrder.vue';

const routes = [
  { path: '/', component: DrinkMenu },
  { path: '/order', component: DrinkOrder }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;