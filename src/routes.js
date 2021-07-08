import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";

export default [
  { path: "/", component: Home },
  {
    path: "/payment",
    component: () => import("@/pages/Payment.vue"),

    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: "/:path(.*)", component: NotFound },
];
