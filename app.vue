<template>
  <div>
    <NuxtLayout></NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const route = useRoute
console.log(route)
const isHome = ref(true)
</script>

<style>
html body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
}
.app-enter-active,
.app-leave-active {
  transition: all 0.4s;
}
.app-enter-from,
.app-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
  transform: translateX(50px);
}
</style>
