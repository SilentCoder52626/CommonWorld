<script>
import { RouterLink, RouterView } from 'vue-router'
import OfflinePage from './components/offline.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    OfflinePage
  },
  computed: {
    isOnline() {
      return this.$store.getters['isOnline']
    }
  }
}
</script>

<template>
  <RouterView v-if="isOnline" />
  <OfflinePage v-else />
</template>




