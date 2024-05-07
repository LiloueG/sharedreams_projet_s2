import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)


const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
  ],
})

app.use(router)
app.mount('#app')