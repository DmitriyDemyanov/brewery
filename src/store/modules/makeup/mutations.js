export default {
  SET_MAKEUP_LIST(state, payload) {
    state.makeup = payload;
  },
  SET_CURRENT_PAGE(state, payload) {
    state.pageNumber = payload;
  },
  SET_CART(state, payload) {
    state.cart = payload;
  },
};
