<template>
  <a-modal
    v-model:visible="store.state.ui.auth"
    title="Giriş Yap"
    :footer="null"
    class="auth-modal"
  >
    <form action="#">
      <div class="form-control mb-4">
        <label class="label">
          <span class="label-text">E-mail</span>
        </label>
        <input type="email" placeholder="E-mail" class="input input-bordered" />
      </div>
      <div class="form-control mb-4">
        <label class="label">
          <span class="label-text">Şifre</span>
        </label>
        <input
          type="password"
          placeholder="Şifre"
          class="input input-bordered"
        />
      </div>
      <button class="btn btn-info my-4 w-full normal-case">Giriş Yap</button>
    </form>
    <div class="divider">veya</div>
    <button class="btn w-full my-4">
      <IconGoogle class="h-6 mr-2" />
      <span class="normal-case">Google İle Giriş Yap</span>
    </button>
    <a class="link link-hover text-gray-400 block text-center my-2" href="#">Henüz hesabın yok mu? Kayıt Ol!</a>
    <a class="link link-hover text-gray-400 block text-center my-2" href="#">Şifreni mi unuttun?</a>
  </a-modal>
</template>

<script setup>
import { useStore } from "vuex";
import { IconGoogle } from "./icons";

const store = useStore();
</script>

<style lang="scss">
.auth-modal {
  .ant-modal-content {
    @apply rounded-lg;
  }

  .ant-modal-header {
    @apply rounded-lg rounded-b-none;
  }

  .divider {
    @apply text-primary-black;
    &::after,
    &::before {
      @apply h-[1px] bg-gray-100;
    }
  }
}
</style>
