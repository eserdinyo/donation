<template>
  <div class="py-2 border-b shadow-sm">
    <div class="container mx-auto">
      <div class="navbar text-gray-800">
        <router-link to="/" class="px-2 mx-2 navbar-start">
          <span class="text-2xl font-bold text-primary-black"> Donate </span>
        </router-link>
        <div class="navbar-end">
          <ProfilMenu v-if="store.state.auth.loggedIn" />
          <button
            v-else
            @click="store.commit('ui/SET_LOGIN', true)"
            class="btn btn-outline mr-4 normal-case"
          >
            {{ $t("SIGN_IN") }}
          </button>
          <Cart />
          <LangSwitcher />
        </div>
      </div>
    </div>
    <LoginModal />
    <RegisterModal />
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>
