<template>
  <div v-if="state.loading">loading</div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    <Product
      v-for="product in state.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import Product from "@/components/Product.vue";

import supabase from "@/api";

import { reactive } from "vue";

const state = reactive({
  products: [],
  loading: true,
});

supabase
  .from("products")
  .select("*")
  .then((res) => {
    state.loading = false;
    state.products = res.data;
  });
</script>
