<script lang="ts" setup>
import { onMounted, ref, computed, PropType } from "vue";
import Swal from "sweetalert2";
import { useStore } from "vuex";
import type ProductType from "@/types/ProductType";

interface Props {
  product: ProductType;
}

const props = defineProps<Props>();

/* const props = withDefaults(defineProps<Props>(), {
   textColor: 'primary',
   bordered: false
}); */

const store = useStore();

const quantity = ref(1);

onMounted(() => {
  // console.log(props.product.price);
});

const totalPrice = computed((): string => {
  return `${props.product.price * quantity.value} ₺`;
});

const addToBasket = (): void => {
  const uid = Math.random();
  store.commit("cart/pushToCart", {
    ...props.product,
    uid,
    quantity: quantity.value,
  });

  Swal.fire({
    title: "Sepete Eklendi!",
    text: "Bağışınız sepetinize eklendi.",
    icon: "success",
    confirmButtonText: "Tamam",
  });
  store.commit("ui/SET_CART", true);
};
</script>

<template>
  <div class="card text-center shadow border border-black">
    <figure class="border-b border-black">
      <img
        :src="product.image"
        class="rounded-xl rounded-b-none h-[240px] object-cover"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ product.name }}</h2>
      <p class="mb-4">{{ product.description }}</p>
      <div class="flex items-center justify-center space-x-4 mt-auto">
        <select v-model="quantity" class="select select-bordered max-w-xs">
          <option v-for="n in 30" :value="n" :key="n">{{ n }} Adet</option>
        </select>
        <p
          v-text="totalPrice"
          class="text-black font-medium text-3xl whitespace-nowrap mb-0"
        />
      </div>
      <div class="justify-center card-actions">
        <button
          @click="addToBasket"
          class="donate-btn btn btn-outline btn-accent btn-primary"
        >
          {{ $t("DONATE") }}
        </button>
      </div>
    </div>
  </div>
</template>
