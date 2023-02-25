import { createRouter, createWebHistory } from 'vue-router'

import Config from "/config.json"
var SelectedTheme = Config[0].Theme;

// dynamic Link for import vue

var Current = null;
if(SelectedTheme == "Theme1"){
  Current = "HomeView";
}else if(SelectedTheme == "Theme2"){
  Current = "Theme2";
}else{
  Current = "HomeView";
}



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(`../views/Themes/${Current}.vue`)
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
