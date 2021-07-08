<template>
  <div class="payment-item">
    <img
      :src="item.image"
      :alt="item.name"
      class="h-20 w-20 rounded-xl mr-4 object-cover drop-shadow-xl"
    />
    <p class="mb-0 font-bold text-base">{{ item.name }}</p>
    <div class="ml-auto mr-12 space-x-2">
      <button class="btn btn-ghost btn-sm w-[30px] h-[30px] font-bold text-xl">+</button>
      <input
        type="number"
        value="1"
        class="input input-bordered text-black max-w-[30px] h-[30px] p-1 text-center"
      />
      <button class="btn btn-ghost btn-sm w-[30px] h-[30px] font-bold text-xl">-</button>
    </div>
    <span class="text-black font-bold text-xl"
      >{{ item.price * item.quantity }}₺</span
    >
    <div
      @click="$store.commit('cart/deleteFromCart', item.id)"
      class="p-4 cursor-pointer"
    >
      <IconTrash class="h-7 text-gray-300 transition hover:text-red-600" />
    </div>
  </div>
</template>

<script setup>
import { IconTrash } from "@/components/icons";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>

.payment-item {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  @apply mb-5 rounded-xl p-4 flex items-center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
