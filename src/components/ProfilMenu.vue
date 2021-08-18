<template>
  <div class="dropdown mr-4 dropdown-end dropdown-hover">
    <div tabindex="0" class="btn btn-outline w-auto flex-nowrap">
      <IconUser class="md:mr-2 h-5 w-5 min-w-[20px]" />
      <span
        data-test="fullname"
        class="normal-case hidden md:block whitespace-nowrap"
        >John Doe</span
      >
    </div>
    <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
      <router-link
        to="/bagislarim"
        class="
          group
          flex
          items-center
          px-4
          py-3
          cursor-pointer
          transition
          text-primary-black
          hover:text-green-700 hover:bg-gray-100
        "
      >
        <IconDonation class="w-4 mr-2" />
        <span class="font-medium">Donations</span>
      </router-link>
      <div
        @click="store.commit('auth/LOGOUT')"
        class="
          flex
          items-center
          px-4
          py-3
          cursor-pointer
          transition
          hover:text-green-700 hover:bg-gray-100
        "
      >
        <IconSettings class="w-4 mr-2" />
        <span class="font-medium">Settings</span>
      </div>
      <div
        @click="store.commit('auth/LOGOUT')"
        class="
          flex
          items-center
          px-4
          py-3
          cursor-pointer
          transition
          hover:text-green-700 hover:bg-gray-100
        "
      >
        <IconLogout class="w-4 mr-2" />
        <span class="font-medium">Logout</span>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>
