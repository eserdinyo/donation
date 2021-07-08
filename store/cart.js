const state = () => ({
  items: [
    {
      description: "1 kase çorba ile bir insanın içini ısıtın.",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1591090820777-2966ef650555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      name: "Bi Çorba",
      price: 10,
      quantity: 1,
    },
    {
      description: "1 kase çorba ile bir insanın içini ısıtın.",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1591090820777-2966ef650555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      name: "Bi Çorba",
      price: 10,
      quantity: 1,
    },
  ],
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
  pushToCart(state, payload) {
    const obj = {
      ...payload.product,
      quantity: payload.quantity,
    };
    const foo = state.items.push(obj);

    console.log(obj);
  },
  deleteFromCart(state, payload) {
    state.items = [...state.items.filter((el) => el.id !== payload)];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
