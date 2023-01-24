<template>
  <div>
    <router-link class="p-2" to="/makeup"> Back to makeup </router-link>

    <header class="d-flex justify-content-between header">
      <div class="name-product">{{ product.category }}</div>

      <div class="cart position-relative" @click="openModal('my-modal')">
        <img src="@/assets/header-icon-cart.svg" alt="icon" />
        <div class="header-icon-cart">{{ getCartQuantity }}</div>
      </div>
    </header>

    <div class="container">
      <div
        class="wrapper-product d-flex justify-content-between"
        v-if="Object.keys(product).length"
      >
        <div class="photo-product">
          <img :src="product.image_link" alt="photo" />
        </div>

        <div class="about-product">
          <div class="brand">{{ product.category }}</div>
          <div class="name">{{ product.name }}</div>
          <div class="description">{{ product.description }}</div>

          <div class="all-price d-flex align-items-center">
            {{ currentPrice }} <span class="sale">50%</span>
          </div>

          <div class="old-price">{{ product.price_sign }}{{ oldPrice }}</div>

          <div class="wrapper-btn d-flex align-items-center">
            <div class="d-flex wrapper-quantity">
              <div
                class="cursor"
                :class="{ disabled: quantity === 1 }"
                @click="changeQuantity('minus')"
              >
                <svg
                  width="12"
                  height="4"
                  viewBox="0 0 12 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.357 3.832C11.4414 3.83227 11.5251 3.81585 11.6031 3.78369C11.6812 3.75153 11.7522 3.70427 11.8119 3.64461C11.8717 3.58496 11.919 3.51409 11.9513 3.43607C11.9836 3.35806 12.0001 3.27443 12 3.19V1.143C12.0003 1.05849 11.9838 0.974757 11.9516 0.896626C11.9194 0.818494 11.872 0.747505 11.8123 0.687745C11.7525 0.627984 11.6815 0.580631 11.6034 0.548411C11.5252 0.51619 11.4415 0.499739 11.357 0.500003H0.643003C0.558489 0.499739 0.474757 0.51619 0.396626 0.548411C0.318494 0.580631 0.247505 0.627984 0.187745 0.687745C0.127984 0.747505 0.0806309 0.818494 0.0484107 0.896626C0.0161904 0.974757 -0.000260978 1.05849 3.13019e-06 1.143V3.189C3.13019e-06 3.546 0.287003 3.832 0.643003 3.832H11.357Z"
                  />
                </svg>
              </div>
              <span class="quantity">{{ quantity }}</span>
              <div
                class="cursor"
                :class="{ disabled: quantity === 4 }"
                @click="changeQuantity('plus')"
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 7.52301V5.47701C12.0003 5.3925 11.9838 5.30877 11.9516 5.23063C11.9194 5.1525 11.872 5.08151 11.8123 5.02175C11.7525 4.96199 11.6815 4.91464 11.6034 4.88242C11.5253 4.8502 11.4415 4.83375 11.357 4.83401H7.66701V1.14301C7.66728 1.05833 7.65076 0.974433 7.61842 0.89617C7.58607 0.817907 7.53854 0.746829 7.47857 0.687041C7.41859 0.627254 7.34737 0.579943 7.269 0.547841C7.19064 0.51574 7.10669 0.499484 7.02201 0.500013H4.97701C4.8925 0.499748 4.80877 0.5162 4.73063 0.54842C4.6525 0.58064 4.58151 0.627993 4.52175 0.687754C4.46199 0.747515 4.41464 0.818503 4.38242 0.896635C4.3502 0.974766 4.33375 1.0585 4.33401 1.14301V4.83301H0.643013C0.558329 4.83275 0.474433 4.84926 0.39617 4.88161C0.317907 4.91395 0.246829 4.96148 0.187041 5.02146C0.127254 5.08143 0.079943 5.15266 0.0478413 5.23102C0.0157396 5.30938 -0.000516362 5.39333 1.25014e-05 5.47801V7.52401C1.25014e-05 7.88001 0.287013 8.16701 0.643013 8.16701H4.33301V11.858C4.33301 12.214 4.62101 12.501 4.97701 12.501H7.02301C7.10753 12.5013 7.19126 12.4848 7.26939 12.4526C7.34752 12.4204 7.41851 12.373 7.47827 12.3133C7.53803 12.2535 7.58538 12.1825 7.6176 12.1044C7.64983 12.0263 7.66628 11.9425 7.66601 11.858V8.16801H11.357C11.4418 8.16828 11.5258 8.15173 11.6041 8.11932C11.6824 8.08692 11.7535 8.03929 11.8133 7.97921C11.8731 7.91914 11.9204 7.84779 11.9525 7.76931C11.9845 7.69083 12.0007 7.60678 12 7.52201V7.52301Z"
                  />
                </svg>
              </div>
            </div>

            <MakeupButton title="Add to cart" @buttonClicked="onAddToCart">
              <template v-slot:prepend>
                <img src="@/assets/cart.svg" alt="icon" />
              </template>
            </MakeupButton>
          </div>
        </div>
      </div>

      <div class="spinner d-flex justify-content-center" v-else>
        <b-spinner variant="primary" label=""></b-spinner>
      </div>
    </div>

    <b-modal
      id="my-modal"
      centered
      modal-class="modal-test"
      content-class="modal-content-test"
    >
      <div class="wrapper-cart d-flex justify-content-between">
        <div class="wrapper-item">
          <span
            class="item-back-product d-flex align-items-center cursor-pointer"
          >
            <img
              class="arrow-left"
              src="@/assets/makeup/arrow-left.svg"
              alt="icon"
            />
            <span class="cart-title">Continue Shopping</span>
          </span>

          <div class="cart-bar"></div>
          <div class="cart-subtitle">Shopping cart</div>
          <div class="cart-description">
            You have <span>{{ getCartQuantity }}</span> item in your cart
          </div>

          <div class="product-list">
            <MakeupCartItem
              v-for="(item, index) in getCart"
              :product="item"
              :key="index"
            />
          </div>
        </div>

        <div class="wrapper-card">
          <div class="d-flex justify-content-between align-items-center">
            <div class="card-title">Card Details</div>
            <div class="card-img">
              <img src="@/assets/makeup/card-master.svg" alt="mastercard" />
            </div>
          </div>
          <div class="card-subtitle">Card type</div>
          <div class="cards-pay d-flex">
            <div class="mastercard-img position-relative">
              <img src="@/assets/makeup/card-master.svg" alt="mastercard" />
              <div class="img-check-mark">
                <img src="@/assets/makeup/check-mark.svg" alt="" />
              </div>
            </div>
            <div class="visacard-img position-relative">
              <img src="@/assets/makeup/card-visa.svg" alt="visa" />
              <div class="img-check-mark">
                <img src="@/assets/makeup/check-mark.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="card-description">Name on card</div>

          <b-input-group class="mb-3">
            <b-form-input type="text" placeholder="Name"></b-form-input>
          </b-input-group>
          <div class="card-description">Card Number</div>
          <b-input-group class="mb-3">
            <b-form-input
              type="number"
              placeholder="1111 2222 3333 4444"
            ></b-form-input>
          </b-input-group>

          <div class="d-flex align-items-center justify-content-between">
            <div>
              <div class="card-description">Expiration date</div>
              <b-input-group class="mb-3 card-data">
                <b-form-input type="text" placeholder="mm/yy"></b-form-input>
              </b-input-group>
            </div>

            <div>
              <div class="card-description">CVV</div>
              <b-input-group class="mb-3 card-data">
                <b-form-input type="password" placeholder="123"></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="card-bar"></div>

          <div class="wrapper-price d-flex justify-content-between mb-1">
            <div class="card-name-item card-description">Subtotal</div>
            <div class="card-price card-description">$ 2,352</div>
          </div>

          <div class="wrapper-price d-flex justify-content-between mb-1">
            <div class="card-name-item card-description">Subtotal</div>
            <div class="card-price card-description">$ 2,352</div>
          </div>

          <div class="wrapper-price d-flex justify-content-between mb-1">
            <div class="card-name-item card-description">Subtotal</div>
            <div class="card-price card-description">$ 2,352</div>
          </div>
          <div class="wrapper-price d-flex justify-content-between mb-1">
            <div class="card-name-item card-description">Subtotal</div>
            <div class="card-price card-description">$ 2,352</div>
          </div>

          <div
            class="Checkout-btn d-flex justify-content-between align-items-center"
          >
            <div class="total-btn">$ total</div>

            <div>
              <span class="Checkout-btn-text d-flex"
                >Checkout
                <img src="@/assets/makeup/arrow-right.svg" alt="arrow"
              /></span>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MakeupButton from './MakeupButton.vue';
import MakeupCartItem from './MakeupCartItem';

export default {
  name: 'MakeupProduct',
  components: {
    MakeupButton,
    MakeupCartItem,
  },
  data() {
    return {
      quantity: 1,
      discount: 50,
      product: {},
    };
  },
  computed: {
    ...mapGetters('makeup', [
      'getProductById',
      'getCart',
      'getAllProducts',
      'getCartQuantity',
    ]),
    currentPrice() {
      return `${this.product.price_sign}${this.product.price}`;
    },
    oldPrice() {
      return (this.product.price * 100) / this.discount;
    },
    mockImg() {
      return '@/assets/makeup/card-master.svg';
    },
  },
  methods: {
    ...mapActions('makeup', ['addToCart', 'fetchMakeupList']),
    changeQuantity(operation) {
      if (operation === 'minus' && this.quantity > 1) {
        this.quantity--;
      }
      if (operation === 'plus' && this.quantity < 4) {
        this.quantity++;
      }
    },
    openModal(id) {
      this.$bvModal.show(id);
      console.log(id);
    },
    onAddToCart() {
      console.log('Add To Cart');
      console.log(this.product);
      const payload = Object.assign({}, this.product);
      payload.quantity = this.quantity;
      console.log(payload);
      this.addToCart(payload);
    },
  },
  async mounted() {
    console.log('getCartQuantity getter: ', this.getCartQuantity);
    if (!this.getAllProducts.length) {
      await this.fetchMakeupList();
    }
    this.product = this.getProductById(this.$route.params.id);
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
.wrapper-btn {
  height: 55px;
}
.cart {
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
  color: #1d2025;
}
.wrapper-quantity {
  align-items: center;
  height: 100%;
  background-color: #f7f8fd;
  border-radius: 10px;
}
.quantity {
  padding: 0 27px;
  font-size: 16px;
  width: 64px;
}
.cursor {
  cursor: pointer;
  user-select: none;
  padding: 16px 18px;
  border-radius: 10px;
  width: 48px;
  & svg {
    fill: #ff7d1a;
  }

  &:hover {
    background-color: #ff7d1a;
    & svg {
      fill: #f7f8fd;
    }
  }

  &.disabled {
    opacity: 0.25;
    cursor: initial;
    &:hover {
      background-color: #f7f8fd;
      & svg {
        fill: #ff7d1a;
      }
    }
  }
}
::v-deep .modal-test {
  .modal-dialog {
    max-width: 1200px;
    height: 744px;
  }
  .modal-body {
    padding: 50px 100px 50px 42px;
  }
  .modal-footer,
  .modal-header {
    display: none;
  }
}
.wrapper-item {
  width: calc(60% - 29px);
}
.wrapper-card {
  width: calc(40% - 29px);
  background-color: #565abb;
  border-radius: 20px;
  padding: 22px 18px 24px 18px;
}
.card-img {
  width: 75px;
  height: 55px;
}

.card-title {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #fefcfc;
}
.card-subtitle {
  margin-top: 2px;
  margin-bottom: 20px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #fefcfc;
}
.card-description {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #fefcfc;
}
.cards-pay {
  & img {
    width: 75px;
    height: 55px;
    margin-right: 18px;
    margin-bottom: 24px;
  }
}
.img-check-mark {
  display: none; ////////////////////////////////////////////////////////
  position: absolute;
  width: 18px;
  height: 18px;
  right: 21px;
  bottom: 8px;
  img {
    width: 100%;
    height: 100%;
  }
}
.card-data {
  width: calc(100% - 5px);
}
.card-bar {
  margin-bottom: 18px;
  width: 100%;
  height: 1px;
  background-color: #5f65c3;
}
.Checkout-btn {
  margin-top: 8px;
  width: 100%;
  padding: 15px 18px 15px 24px;
  background: #4de1c1;
  border-radius: 12px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fefcfc;
  cursor: pointer;
}
.Checkout-btn-text {
  & img {
    margin-left: 5px;
  }
}
.arrow-left {
  cursor: pointer;
}

.cart-title {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;
}
.cart-bar {
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  height: 1.5px;
  background-color: #d0cfcf;
}
.cart-subtitle {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #1e1e1e;
}
.cart-description {
  margin-bottom: 19px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #1e1e1e;
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.product-list {
  height: 515px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    width: 6px;
    border-radius: 3px;
    background-color: #bbbcd1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5f65c3;
    border-radius: 3px;
  }
}
</style>
