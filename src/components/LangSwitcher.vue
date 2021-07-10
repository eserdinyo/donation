<template>
  <div
    @click="locale = locale === 'tr' ? 'en' : 'tr'"
    class="font-bold px-4 cursor-pointer select-none grid place-items-center pt-2"
  >
    <IconLanguage class="h-4 mb-1" />
    <span v-if="locale === 'en'"> TR</span>
    <span v-else> EN</span>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
</script>
