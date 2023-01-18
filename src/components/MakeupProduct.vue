<template>
  <div>
    <router-link class="p-2" to="/makeup"> Back to makeup </router-link>
    <header class="d-flex justify-content-between header">
      <div class="name-product">{{getOneProduct.category }}</div>
      <div class="basket position-relative">
        <img src="@/assets/header-icon-cart.svg" alt="icon" />
        <div class="header-icon-cart">3</div>
      </div>
    </header>
    <div class="container">
      <div class="wrapper-product d-flex justify-content-between">
        <div class="photo-product">
          <img :src="getOneProduct.image_link" alt="photo" />
        </div>

        <div class="about-product">
          <div class="brand">{{getOneProduct.category }}</div>
          <div class="name">{{ getOneProduct.name }}</div>
          <div class="description"> {{ getOneProduct.description }}
           
          </div>

          <div class="all-price d-flex align-items-center">
            {{ currentPrice }} <span class="sale">50%</span>
          </div>
          <div class="old-price">
            {{ getOneProduct.price_sign }}{{ oldPrice }}
          </div>
          <div class="wrapper-btn d-flex">
            <button>-</button>
            <span>number</span>
            <button>+</button>
            <button class="btn-cart">
              <img src="@/assets/basket.svg" alt="icon" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MakeupProduct',
  components: {},
  computed: {
    ...mapGetters('makeup', ['getOneProduct']),
    currentPrice() {
      return `${this.getOneProduct.price_sign}${this.getOneProduct.price}`;
    },
    oldPrice() {
      return (
        (this.getOneProduct.price * 50) / 100 + Number(this.getOneProduct.price)
      ); // 5 * 50 / 100
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1016px;
  margin: 0 auto;
}
.basket {
  margin-right: 195px;
  width: 22px;
  height: 20px;
  cursor: pointer;
}
.header-icon-cart {
  position: absolute;
  left: 10px;
  bottom: 9px;
  padding: 1px 7px;
  background: #ff7d1a;
  border-radius: 9px;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: #ffede0;
}
.header {
  margin-top: 33px;
  margin-bottom: 130px;
}
.name-product {
  margin-left: 100px;
  font-weight: 700;
  font-size: 31px;
  line-height: 39px;
}

.photo-product {
  width: calc(50% - 63px);
  height: 445px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  
}
.about-product {
  width: calc(50% - 63px);
}
.brand {
  margin-bottom: 19px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: #ff7d1a;
}
.name {
  margin-bottom: 35px;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  color: #1d2025;
}
.description {
  margin-bottom: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #68707d;
}
.all-price {
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 26px;
  color: #1d2025;
}
.sale {
  margin-left: 16px;
  padding: 10px;
  background: #ffede0;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #ff7d1a;
}
.old-price {
  margin-bottom: 51px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.03em;
  text-decoration-line: line-through;

  /* Very dark blue */

  color: #1d2025;
}
.btn-cart {
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 17px 77px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  background: #ff7d1a;
  box-shadow: 0px 8px 10px #ffede0;
  border-radius: 10px;
  border: none;
  & img {
    margin-right: 16px;
  }
}
</style>
