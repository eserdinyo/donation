<template>
  <div
    class="
      cursor-pointer
      border border-gray-200
      rounded-lg
      p-4
      mb-4
      transition
      hover:custom-shadow
    "
    :class="{ 'border-green-700': isOpen }"
  >
    <div class="flex items-center" @click="isOpen = !isOpen">
      <div class="avatar-group -space-x-6">
        <div class="avatar border-gray-200">
          <div class="w-12 h-12">
            <img
              src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
            />
          </div>
        </div>
        <div class="avatar border-gray-200">
          <div class="w-12 h-12">
            <img
              src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
            />
          </div>
        </div>
      </div>
      <div class="ml-8">
        <div class="text-gray-400 text-sm font-medium">
          Makbuz No:
          <span class="text-primary-black text-base font-bold">34324</span>
        </div>
        <div>1 Temmuz Per, 15:30</div>
      </div>
      <div class="text-green-700 text-2xl font-bold ml-auto">25,24₺</div>
      <button
        class="bg-gray-200 rounded-full h-10 w-10 grid place-items-center ml-4"
      >
        <IconArrowDown class="h-5" />
      </button>
    </div>
    <div
      class="transform scale-y-0 overflow-hidden transition h-0"
      :class="{ 'scale-y-100 h-full': isOpen }"
    >
      <div
        v-for="n in 3"
        :key="n"
        class="border border-gray-200 rounded-lg grid grid-cols-2 mt-4"
      >
        <div class="p-6 flex items-center">
          <div class="relative">
            <img
              src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
              class="
                h-16
                w-16
                object-cover
                mr-4
                drop-shadow-xl
                mask mask-squircle
              "
            />
            <div
              class="
                h-8
                w-8
                grid
                place-items-center
                absolute
                -top-2
                -left-2
                bg-gray-700
                rounded-full
                border-white border-2
                text-white
                font-medium
              "
            >
              x2
            </div>
          </div>
          <div class="font-medium">
            <div>Bi Corba</div>
            <div>24,50₺</div>
          </div>
        </div>
        <div class="bg-green-50 p-6">
          <div><b>John Doe</b> adına</div>
          <div class="font-medium">0507 887 12 12</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style lang="scss" scoped></style>
