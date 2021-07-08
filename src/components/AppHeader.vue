<template>
  <div class="mb-10 py-2 border-b shadow-sm">
    <div class="container mx-auto">
      <div class="navbar text-gray-800">
        <router-link to="/" class="px-2 mx-2 navbar-start">
          <span class="text-lg font-bold text-primary-black"> DaisyUI </span>
        </router-link>
        <div class="navbar-center hidden px-2 mx-2 lg:flex">
          <div class="flex items-stretch">
            <a class="btn btn-ghost btn-sm rounded-btn"> Home </a>
            <a class="btn btn-ghost btn-sm rounded-btn"> Portfolio </a>
            <a class="btn btn-ghost btn-sm rounded-btn"> About </a>
            <a class="btn btn-ghost btn-sm rounded-btn"> Contact </a>
          </div>
        </div>
        <div class="navbar-end">
          <button class="btn btn-outline mr-4">Giriş Yap</button>
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Cart from "@/components/Cart.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
</script>

<style lang="scss" scoped></style>
