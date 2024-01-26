import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import HomeVue from './views/Home.vue';
import SearchVue from './views/Search.vue';

const routes = [
  { path: '/', name: 'home', component: HomeVue },
  { path: '/search', name: 'search', component: SearchVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router).mount('#app');
