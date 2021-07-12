<template>
  <div
    class="grid grid-cols-1 gap-6 xl:grid-cols-payment max-w-6xl mx-auto mt-20"
  >
    <div>
      <div class="pb-4 border-b border-gray-200 mb-8">
        <router-link to="/" class="flex items-center text-primary-black">
          <IconArrowLeft class="mr-2 w-4" />
          <span class="font-medium">Bağış Sayfasına Dön</span>
        </router-link>
      </div>
      <div class="mb-8">
        <h1 class="font-bold text-xl">Bağış Sepetiniz</h1>
        <h3 class="font-medium">
          Sepetinizde toplam {{ totalItems }} adet bağış var!
        </h3>
      </div>
      <PaymentItem v-for="item in cartItems" :key="item.uid" :item="item" />
    </div>
    <div class="rounded-2xl bg-[#575CBA] p-8">
      <div
        class="
          text-gray-200
          font-bold
          mb-8
          text-2xl
          flex
          items-center
          justify-between
        "
      >
        <span>Ödeme Bilgileri</span>
        <button
          class="btn btn-sm btn-ghost text-white text-sm normal-case"
          @click="fillCard"
        >
          {{ $t("FILL_THE_CARD") }}
        </button>
      </div>
      <form action="#">
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text text-gray-200 font-semibold"
              >Kart Üzerindeki İsim</span
            >
          </label>
          <input
            type="text"
            v-model="ccname"
            placeholder="Kart sahibinin adı ve soyadı"
            class="
              input input-ghost
              font-semibold
              text-white
              focus:text-primary-black
            "
          />
        </div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text text-gray-200 font-semibold"
              >Kart Numarası</span
            >
          </label>
          <input
            type="text"
            v-model="ccnumber"
            v-maska="'#### #### #### ####'"
            placeholder="&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;"
            class="
              input input-ghost
              font-semibold
              text-white
              focus:text-primary-black
            "
          />
        </div>
        <div class="flex items-center space-x-8">
          <div class="form-control flex-1">
            <label class="label">
              <span class="label-text text-gray-200 font-semibold"
                >Son Kullanma Tarihi</span
              >
            </label>
            <input
              type="text"
              placeholder="Ay / Yıl"
              v-maska="'##/##'"
              v-model="ccdate"
              class="
                input input-ghost
                font-semibold
                text-white
                focus:text-primary-black
              "
            />
          </div>
          <div class="form-control flex-1">
            <label class="label">
              <span class="label-text text-gray-200 font-semibold"
                >Güvenlik kodu</span
              >
            </label>
            <input
              type="text"
              placeholder="CVC/CVV"
              v-maska="['###', '####']"
              v-model="cvv"
              class="
                input input-ghost
                font-semibold
                text-white
                focus:text-primary-black
              "
            />
          </div>
        </div>
      </form>
      <button
        :disabled="isPaying"
        @click="pay"
        class="btn btn-success mt-12 w-full"
        :class="[{ 'loading text-white': isPaying }]"
      >
        <span class="normal-case">Ödeme Yap</span>
        <IconArrowLeft class="ml-2 w-4 transform rotate-180" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const ccname = ref("");
const ccnumber = ref("");
const ccdate = ref("");
const cvv = ref("");

const isPaying = ref(false);

const cartItems = computed(() => store.state.cart.items);
const totalItems = computed(() => store.getters["cart/totalItems"]);

const pay = () => {
  isPaying.value = true;
  setTimeout(() => {
    isPaying.value = false;
    alert("Payment completed");
  }, 1000);
};

const fillCard = () => {
  ccname.value = "John Doe";
  ccnumber.value = "4987490000000002";
  ccdate.value = "12/24";
  cvv.value = "232";
};
</script>

<style lang="scss" scoped></style>
