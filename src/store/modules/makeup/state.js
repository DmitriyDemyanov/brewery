const initialCart = JSON.parse(localStorage.getItem('makeupCart')) || [];

export default {
  makeup: [],
  productsOnPage: 12,
  pageNumber: 4,
  cart: initialCart,
};
