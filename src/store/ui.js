const state = () => ({
  cart: false,
  login: false,
  register: false,
});

const mutations = {
  SET_CART(state, visibility) {
    state.cart = visibility;
  },
  SET_LOGIN(state, visibility) {
    state.login = visibility;
  },
  SET_REGISTER(state, visibility) {
    state.register = visibility;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
