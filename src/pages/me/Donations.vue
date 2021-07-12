<template>
  <div class="pb-10">
    <div class="donation-header">
      <div class="container mx-auto px-4">
        <span class="font-medium text-xl">Merhaba</span> <br />
        <span class="text-5xl font-semibold mt-4 block">John Doe</span>
      </div>
    </div>
    <div class="container mx-auto px-4 -mt-10">
      <div class="flex items-start space-x-10">
        <div class="rounded-md p-6 w-1/4 bg-white custom-shadow">
          <router-link
            to="/bagislarim"
            class="font-medium btn btn-outline hover:text-white w-full mb-4 justify-start px-10"
            :class="{
              'border-green-700 text-green-700': route.path === '/bagislarim',
            }"
          >
            <IconDonation class="h-4 mr-2" />
            <span>Bağışlarım</span>
          </router-link>
          <router-link
            to="/ayarlarim"
            class="font-medium btn btn-outline hover:text-white w-full mb-4 justify-start px-10"
            :class="{
              'border-green-700 text-green-700': route.path === '/ayarlarim',
            }"
          >
            <IconSettings class="h-4 mr-2" />
            <span>Ayarlarım</span>
          </router-link>
          <button
            @click="store.commit('auth/LOGOUT')"
            class="font-medium btn btn-outline hover:text-white w-full text-left justify-start px-10"
          >
            <IconLogout class="h-4 mr-2" />
            <span>Çıkış</span>
          </button>
        </div>
        <div class="bg-white rounded-md w-full custom-shadow">
          <div class="font-semibold text-2xl border-b border-gray-100 p-8 mb-8">
            Bağışlarım
          </div>
          <div class="px-8">
            <MyDonationItem />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
</script>

<style lang="scss" scoped>
.donation-header {
  @apply text-white py-28;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.421)
    ),
    url("https://images.unsplash.com/photo-1612729875065-1385f02852ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2366&q=80");
  background-size: cover;
  background-position: center;
}
</style>
