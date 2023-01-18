export default {
  getAllProducts(state) {
    return state.makeup;
  },
  // itemCount = 12
  // from 0 to 11
  products(state) {
    const start = (state.pageNumber - 1) * state.productsOnPage;
    const end = state.pageNumber * state.productsOnPage;
    const test = state.makeup.slice(start, end);
    console.log('P', state.pageNumber); // 1 - 2 - 3
    console.log('POP', state.productsOnPage); // 12 (0-12) (12-24) (24-36)
    console.log('TEST:::::::', test);
    console.log('length:+++++++++++', state.makeup.length);
    // 0 to 11 - page 1
    // 12 to 23 - page 2
    return test;
  },
  getNumberPages(state) {
    return state.productsOnPage;
  },
  getCurrencyPage(state) {
    return state.pageNumber;
  },
  getAllLength(state) {
    return state.makeup.length / state.productsOnPage;
  },
};