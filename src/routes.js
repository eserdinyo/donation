import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";

export default [
  { path: "/", component: Home },
  {
    path: "/payment",
    component: () => import("@/pages/Payment.vue"),
  },
  {
    path: "/bagislarim",
    name: "donations",
    component: import("@/pages/me/Donations.vue"),
    meta: {
      layout: "auth",
    },
  },
  { path: "/:path(.*)", component: NotFound },
];
