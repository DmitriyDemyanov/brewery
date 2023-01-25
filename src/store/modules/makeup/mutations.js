function saveToLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export default {
  SET_MAKEUP_LIST(state, payload) {
    state.makeup = payload;
  },
  SET_CURRENT_PAGE(state, payload) {
    state.pageNumber = payload;
  },
  SET_CART(state, payload) {
    state.cart = payload;
    saveToLocalStorage('makeupCart', payload);
  },
  CHANGE_QUANTITY(state, payload) {
    if (payload.quantity > 0) {
      state.cart = state.cart.map((product) => {
        if (product.id === payload.id) {
          product.quantity = payload.quantity;
        }
        return product;
      });
    }
    saveToLocalStorage('makeupCart', state.cart);
  },
};
