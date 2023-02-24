import { createRouter, createWebHistory } from 'vue-router'
var Themes = ["Theme1","Theme2"];

import Config from "/config.json"
var SelectedTheme = Config[0].Theme;

// dynamic Link for import vue

if(Themes.includes(SelectedTheme)){

}else{

}
import Current from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Current
    },
    {
      path: '/quote',
      name: 'quote',
      component: () => import('../components/Quote.vue')
    },
    {
      path: '/word-counter',
      name: 'word-counter',
      component: () => import('../components/WordCounter.vue')
    }
  ]
})

export default router
