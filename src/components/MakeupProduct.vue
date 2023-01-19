<template>
  <div>
    <router-link class="p-2" to="/makeup"> Back to makeup </router-link>

    <header class="d-flex justify-content-between header">
      <div class="name-product">{{ getOneProduct.category }}</div>
      <div class="basket position-relative">
        <img src="@/assets/header-icon-cart.svg" alt="icon" />
        <div class="header-icon-cart">3</div>
      </div>
    </header>

    <div class="container">
      <div
        class="wrapper-product d-flex justify-content-between"
        v-if="Object.keys(getOneProduct).length"
      >
        <div class="photo-product">
          <img :src="getOneProduct.image_link" alt="photo" />
        </div>

        <div class="about-product">
          <div class="brand">{{ getOneProduct.category }}</div>
          <div class="name">{{ getOneProduct.name }}</div>
          <div class="description">{{ getOneProduct.description }}</div>

          <div class="all-price d-flex align-items-center">
            {{ currentPrice }} <span class="sale">50%</span>
          </div>

          <div class="old-price">
            {{ getOneProduct.price_sign }}{{ oldPrice }}
          </div>

          <div class="wrapper-btn d-flex align-items-center">
            <div class="d-flex wrapper-quantity">
              <div class="cursor" @click="changeQuantity">
                <img src="@/assets/makeup/minus.svg" alt="-" />
              </div>
              <span class="quantity">{{ quantity }}</span>
              <div class="cursor" @click="changeQuantity">
                <img src="@/assets/makeup/plus.svg" alt="+" />
              </div>
            </div>

            <MakeupButton title="Add to cart">
              <template v-slot:prepend>
                <img src="@/assets/basket.svg" alt="icon" />
              </template>
            </MakeupButton>
          </div>
        </div>
      </div>

      <div v-else>No Product</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MakeupButton from './MakeupButton.vue';

const discount = 50;
export default {
  name: 'MakeupProduct',
  components: {
    MakeupButton,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters('makeup', ['getOneProduct']),
    currentPrice() {
      return `${this.getOneProduct.price_sign}${this.getOneProduct.price}`;
    },
    oldPrice() {
      return (
        (this.getOneProduct.price * discount) / 100 +
        Number(this.getOneProduct.price)
      );
    },
  },
  methods: {
    changeQuantity() {
      console.log('---');
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@500;700&display=swap');

.container {
  width: 1036px;
  margin: 0 auto;
  font-family: 'Kumbh Sans', sans-serif;
}
.wrapper-product {
  margin-bottom: 70px;
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
  width: calc(50% - 46px);
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
  margin-right: 20px;
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
.wrapper-quantity {
  align-items: center;
  width: 157px;
  height: 55px;
  background-color: #f7f8fd;
  border-radius: 10px;
  padding: 0 21px 0 16px;
}
.quantity {
  margin: 0 45px;
  font-size: 16px;
}
.cursor {
  cursor: pointer;
  user-select: none;
}
</style>
