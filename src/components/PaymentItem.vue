<template>
  <div class="payment-item">
    <img
      :src="item.image"
      :alt="item.name"
      class="h-20 w-20 mr-4 object-cover drop-shadow-xl mask mask-squircle"
    />
    <p class="mb-0 font-bold text-base">{{ item.name }}</p>
    <div class="ml-auto mr-8 space-x-2">
      <button
        @click="decQuantity"
        :disabled="item.quantity === 1"
        class="btn btn-ghost btn-sm w-[30px] h-[30px] font-bold text-xl"
      >
        -
      </button>
      <input
        type="number"
        :value="item.quantity"
        @input="handleChange($event.target.value)"
        class="
          input input-bordered
          text-black
          max-w-[30px]
          h-[30px]
          p-1
          text-center
        "
      />
      <button
        @click="incQuantity"
        class="btn btn-ghost btn-sm w-[30px] h-[30px] font-bold text-xl"
      >
        +
      </button>
    </div>
    <span class="text-black font-bold text-xl min-w-[60px] text-right"
      >{{ item.price * item.quantity }}₺</span
    >
    <div
      @click="$store.commit('cart/deleteFromCart', item.uid)"
      class="p-4 cursor-pointer"
    >
      <IconTrash class="h-7 text-gray-300 transition hover:text-red-600" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const incQuantity = () => {
  store.commit("cart/incQuantity", { ...props.item });
};

const decQuantity = () => {
  store.commit("cart/decQuantity", { ...props.item });
};

const handleChange = (val) => {
  if (val && val > 0) {
    store.commit("cart/updateQuantity", {
      ...props.item,
      newQuantity: parseInt(val),
    });
  }
};
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
