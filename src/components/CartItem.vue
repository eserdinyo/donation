<template>
  <div class="payment-item">
    <img
      :src="item.image"
      :alt="item.name"
      class="h-16 w-16 object-cover mr-4 drop-shadow-xl mask mask-squircle"
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
      @click="$store.commit('cart/deleteFromCart', item.uid)"
      class="p-4 cursor-pointer"
    >
      <IconTrash class="h-5 text-gray-300 transition hover:text-red-600" />
    </div>
  </div>
</template>

<script setup>
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
</style>
