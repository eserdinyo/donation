<template>
  <AppHeader />
  <main class="container mx-auto px-4">
    <router-view />
  </main>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
