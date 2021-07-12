import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";

import Donations from  "@/pages/me/Donations.vue"

export default [
  { path: "/", component: Home },
  {
    path: "/payment",
    component: () => import("@/pages/Payment.vue"),
  },
  {
    path: "/bagislarim",
    name: "donations",
    component: Donations,
    meta: {
      layout: "auth",
    },
  },
  { path: "/:path(.*)", component: NotFound },
];
