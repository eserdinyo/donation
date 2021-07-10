const state = () => ({
  loggedIn: true,
});

const mutations = {
  SET_LOGGED_IN(state, status) {
    state.loggedIn = status;
  },
  LOGOUT(state) {
    state.loggedIn = false
  }
};

export default {
  namespaced: true,
  state,
  mutations,
};
