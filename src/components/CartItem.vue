<template>
  <div
    class="flex items-center border border-gray-900 p-4 pr-0 rounded-md mb-4"
  >
    <img
      :src="item.image"
      :alt="item.name"
      class="h-16 w-16 rounded-full object-cover mr-4"
    />
    <div class="font-medium">
      {{ item.name }}
    </div>
    <div class="ml-auto text-right">
      <span class="font-bold text-xl"> {{ item.price }} ₺ </span>
      <div v-if="item.quantity > 1" class="text-xs text-gray-600">
        {{ item.price }}₺ &times; {{ item.quantity }} =
        <span>{{ item.quantity * item.price }} ₺</span>
      </div>
    </div>
    <div
      @click="$store.commit('cart/deleteFromCart', item.id)"
      class="p-4 cursor-pointer"
    >
      <IconTrash class="h-5 text-gray-300 transition hover:text-red-600" />
    </div>
  </div>
</template>

<script setup>
import { IconTrash } from "./icons";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
