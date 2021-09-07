const state = () => ({
  items: [],
});

const getters = {
  totalPrice: (state, getters) => {
    return state.items.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },
  totalItems: (state) => state.items.length,
};

const mutations = {
  pushToCart(state, product) {
    state.items.push(product);
  },
  deleteFromCart(state, payload) {
    state.items = [...state.items.filter((el) => el.uid !== payload)];
  },
  incQuantity(state, payload) {
    const item = state.items.find((item) => item.uid === payload.uid);
    item.quantity++;
    console.log(item);
  },
  decQuantity(state, payload) {
    const item = state.items.find((item) => item.uid === payload.uid);
    item.quantity--;
  },
  updateQuantity(state, payload) {
    const item = state.items.find((item) => item.uid === payload.uid);
    item.quantity = payload.newQuantity;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
