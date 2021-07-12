<template>
  <component :is="layout"></component>
</template>

<script>
import DefaulyLayout from "@/layouts/default.vue";
import AuthLayout from "@/layouts/auth.vue";
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "default";
    },
  },
  components: {
    default: DefaulyLayout,
    auth: AuthLayout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
