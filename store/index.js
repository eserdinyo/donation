import { createStore } from "vuex";
import ui from "./ui";
import cart from "./cart";
import auth from "./auth";

const store = createStore({
  modules: {
    ui,
    auth,
    cart,
  },
});

export default store;
