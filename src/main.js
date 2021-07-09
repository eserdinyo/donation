import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import store from "../store";
import routes from "@/routes.js";
import { createRouter, createWebHistory } from "vue-router";

import { Drawer, Modal } from "ant-design-vue";

import "sweetalert2/src/sweetalert2.scss";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(Drawer);
app.use(Modal);
app.use(router);
app.use(store).mount("#app");
