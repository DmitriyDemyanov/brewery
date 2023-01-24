const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

export default {
  async fetchMakeupList(ctx) {
    const makeup = await fetch(API_URL)
      .then((response) => {
        console.log('R: ', response);
        return response.json();
      })
      .then((data) => data);
    ctx.commit('SET_MAKEUP_LIST', makeup);
    console.log('>>>>>>><<<<<<', makeup);
  },
  changePage({ commit }, pageNumber) {
    commit('SET_CURRENT_PAGE', pageNumber);
  },
  addToCart({ commit, getters }, product) {
    const cart = [...getters.getCart];

    console.log('Cart: ', cart);
    console.log('Product: ', product);

    const res = cart.find((el) => el.id === product.id);
    if (res) {
      res.quantity += product.quantity;
    } else {
      cart.push(product);
    }

    commit('SET_CART', cart);

    localStorage.setItem('makeupCart', JSON.stringify(cart));
  },
};
