import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import ui from "./ui";
import cart from "./cart";
import auth from "./auth";

const store = createStore({
  modules: {
    ui,
    auth,
    cart,
  },
  plugins: [createPersistedState()],
});

export default store;
