import { sendRequestOnServer } from '@/server/makeup';

const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

export default {
  async fetchMakeupList(ctx) {
    let url = API_URL;
    if (ctx.state.selectedType) {
      url += `?product_type=${ctx.state.selectedType}`;
    }

    const makeup = await fetch(url)
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
  },
  removeFromCard({ commit, getters }, id) {
    const cart = [...getters.getCart];
    const changedCart = cart.filter((product) => product.id !== id);
    commit('SET_CART', changedCart);
  },
  // changeQuantity2({ commit, getters }, payload) {
  //   const { id, quantity } = payload;
  //   const cart = [...getters.getCart];
  //   const idx = cart.findIndex((el) => el.id === id);
  //   const newProduct = cart[idx];
  //   newProduct.quantity = quantity;
  //   cart.splice(idx, 1, newProduct);
  //   commit('SET_CART', cart);
  // },
  changeQuantity({ commit }, payload) {
    commit('CHANGE_QUANTITY', payload);
  },
  async sendOrder(ctx, payload) {
    const result = await sendRequestOnServer(payload);
    console.log(result);
    return result;
  },
  cleanOutCart({ commit }) {
    commit('CLEAN_CART');
  },
  changeSelectedType({ commit, dispatch }, payload) {
    commit('SET_TYPE', payload);
    dispatch('fetchMakeupList');
  },
};
