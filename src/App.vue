<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navc from './components/Navigation.vue';
import Foot from './components/Footer.vue';



</script>

<template>
  <Navc/>
  <div class="MainContent">
    <RouterView/>
  </div>

  <Foot/>
</template>

<style>
.MainContent{
  min-height: 83vh;
}
</style>

