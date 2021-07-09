import { createStore } from "vuex";
import cart from "./cart";
import ui from "./ui";

const store = createStore({
  modules: {
    cart,
    ui,
  },
});

export default store;
