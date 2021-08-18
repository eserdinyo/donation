<template>
  <a-modal
    v-model:visible="store.state.ui.login"
    :title="$t('SIGN_IN')"
    :footer="null"
    class="auth-modal"
  >
    <Form @submit="onSubmit" :validation-schema="schema">
      <TextInput
        name="email"
        type="email"
        label="Email"
        value=""
        placeholder="Email"
        data-test="email-input"
      />
      <TextInput
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
        data-test="password-input"
        value=""
      />
      <button
        :disabled="false"
        type="submit"
        data-test="login-button"
        class="btn btn-info my-4 w-full normal-case"
        :class="{ ' cursor-not-allowed': false }"
      >
        Giriş Yap
      </button>
    </Form>
    <div class="divider">veya</div>
    <button class="btn w-full my-4">
      <IconGoogle class="h-6 mr-2" />
      <span class="normal-case">Google İle Giriş Yap</span>
    </button>
    <a
      @click="
        store.commit('ui/SET_LOGIN', false);
        store.commit('ui/SET_REGISTER', true);
      "
      class="link link-hover text-gray-400 block text-center my-2"
      href="#"
      >Henüz hesabın yok mu? Kayıt Ol!</a
    >
    <a class="link link-hover text-gray-400 block text-center my-2" href="#"
      >Şifreni mi unuttun?</a
    >
  </a-modal>
</template>

<script setup>
import * as Yup from "yup";
import { useStore } from "vuex";
import { useField, Form } from "vee-validate";

const store = useStore();

const schema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

const onSubmit = (values) => {
  store.commit("auth/SET_LOGGED_IN", true);
  store.commit("ui/SET_LOGIN", false);
};
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
