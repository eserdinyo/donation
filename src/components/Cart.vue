<template>
  <button @click="store.commit('ui/SET_CART', true)" class="btn btn-success">
    <IconHandHeart class="h-8 mr-1 md:mr-3" />
    <span class="font-semibold mt-1 normal-case hidden md:block">{{
      $t("DONATION_BASKET")
    }}</span>
    <div class="bg-gray-800 text-white rounded h-6 w-6 ml-2">
      {{ totalItems }}
    </div>
  </button>

  <a-drawer
    :width="mdAndSmaller ? '100%' : '480px'"
    title="Bağış Sepetiniz"
    placement="right"
    :closable="mdAndSmaller"
    v-model:visible="store.state.ui.cart"
    :after-visible-change="afterVisibleChange"
  >
    <CartItem v-for="item in cartItems" :key="item.uid" :item="item" />
    <div v-if="totalItems === 0" class="text-center pt-10">
      <IconEmptyCart class="h-20 text-[#009485] mb-3 mx-auto" />
      <p class="font-medium text-base text-primary-black">
        Sepetinize henüz bir bağış eklemediniz.
      </p>
    </div>
    <div
      class="
        absolute
        bottom-0
        left-0
        p-6
        w-full
        border-t border-gray-900
        flex
        items-center
        justify-between
      "
    >
      <div class="text-2xl font-medium text-primary-black">
        Toplam: {{ cartTotal }}₺
      </div>
      <button
        :disabled="totalItems === 0"
        @click="
          $router.push('/payment');
          store.commit('ui/SET_CART', false);
        "
        class="btn btn-accent btn-success"
      >
        <IconPayment class="h-4 mr-2" />
        <span>Ödeme Yap</span>
      </button>
    </div>
  </a-drawer>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";

const store = useStore();

const breakpoints = useBreakpoints(breakpointsTailwind);
const mdAndSmaller = breakpoints.smaller("md");

const afterVisibleChange = (bool) => {
  // console.log(store.state.ui.cart);
};

const totalItems = computed(() => store.getters["cart/totalItems"]);
const cartItems = computed(() => store.state.cart.items);
const cartTotal = computed(() => store.getters["cart/totalPrice"]);
</script>

<style lang="scss" scoped></style>
