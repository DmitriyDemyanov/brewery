const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

export default {
  async fetchMakeupList(ctx) {
    const makeup = await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => data);
    ctx.commit('SET_MAKEUP_LIST', makeup);
    console.log('>>>>>>><<<<<<', makeup);
  },
};
