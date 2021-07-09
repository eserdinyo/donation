const state = () => ({
  cart: false,
  auth: true
});

const mutations = {
  SET_CART(state, visibility) {
    state.cart = visibility;
  },
  SET_AUTH(state, visibility) {
    state.auth = visibility
  }
};

export default {
  namespaced: true,
  state,
  mutations,
};
