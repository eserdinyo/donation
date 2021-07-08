const state = () => ({
  cart: false,
});

const mutations = {
  SET_CART(state, visibility) {
    state.cart = visibility;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
