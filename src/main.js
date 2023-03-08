import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@/assets/scss/index.scss'
import App from '@/App.vue'
import Home from '@/pages/home'

// configure the router
const routes = [
  {
    path: '/',
    component: Home,
  }
];

const Router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(Router).mount('#app')
