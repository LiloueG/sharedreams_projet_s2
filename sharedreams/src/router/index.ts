import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import Nuage from '@/pages/nuage.vue'; 

const routes = [
  { path: '/Nuage', 
  component: Nuage }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

createApp(App).use(router).mount('#app');