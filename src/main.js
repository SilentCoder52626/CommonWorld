import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './stores'

import AOS from 'aos'

import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.use({
  install: () => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  },
});
router.beforeEach(function offlineCatcher(to, from, next) {
  const isOnline = navigator?.onLine ?? true

  if (isOnline) {
    next()
  } else {
    store.dispatch('setupOfflineMode', /*targetPath*/ to.fullPath)
  }
})
app.mount('#app')
