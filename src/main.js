import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { Drawer, Modal } from "ant-design-vue";
import { createRouter, createWebHistory } from "vue-router";

import "./tailwind.css";
import App from "./App.vue";
import store from "../store";
import routes from "@/routes.js";

import "sweetalert2/src/sweetalert2.scss";
import "ant-design-vue/dist/antd.css";

import messages from "@intlify/vite-plugin-vue-i18n/messages";

const i18n = createI18n({
  globalInjection: true,
  locale: "en",
  messages,
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(i18n);
app.use(Drawer);
app.use(Modal);
app.use(router);
app.use(store).mount("#app");
