import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import notify from "./plugins/notify";

import ui from "./ui";
import cart from "./cart";
import auth from "./auth";

const store = createStore({
  modules: {
    ui,
    auth,
    cart,
  },
  plugins: [createPersistedState(), notify],
});

export default store;
