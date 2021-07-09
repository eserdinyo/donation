<template>
  <div class="mb-10 py-2 border-b shadow-sm">
    <div class="container mx-auto">
      <div class="navbar text-gray-800">
        <router-link to="/" class="px-2 mx-2 navbar-start">
          <span class="text-2xl font-bold text-primary-black"> Donate </span>
        </router-link>
        <div class="navbar-end">
          <button @click="store.commit('ui/SET_AUTH', true)" class="btn btn-outline mr-4">Giriş Yap</button>
          <Cart />
        </div>
      </div>
    </div>
    <AuthModal />
  </div>
</template>

<script setup>
import Cart from "@/components/Cart.vue";
import AuthModal from "@/components/AuthModal.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
</script>

<style lang="scss" scoped></style>
