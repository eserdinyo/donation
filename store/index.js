import { createStore } from "vuex";
import cart from "./cart";
import drawer from "./drawer";

const store = createStore({
  modules: {
    cart,
    drawer,
  },
});

export default store;
