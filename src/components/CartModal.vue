<template>
  <div>
    <b-modal
      id="cart-modal"
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
              @click="closeModal()"
            />
            <span class="cart-title" @click="closeModal()"
              >Continue Shopping</span
            >
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
              <img :src="changeCard" alt="pay-card" v-if="changeCard" />
            </div>
          </div>
          <div class="card-subtitle">Card type</div>
          <div class="cards-pay d-flex">
            <div
              class="mastercard-img position-relative"
              @click="selectCard('master')"
            >
              <div class="card-type">
                <img src="@/assets/makeup/card-master.svg" alt="mastercard" />
                <div :class="{ 'd-none': cardType !== 'master' }">
                  <img
                    class="img-check-mark"
                    src="@/assets/makeup/check-mark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div
              class="visacard-img position-relative"
              @click="selectCard('visa')"
            >
              <div class="card-type">
                <img src="@/assets/makeup/card-visa.svg" alt="visa" />
                <div :class="{ 'd-none': cardType !== 'visa' }">
                  <img
                    class="img-check-mark"
                    src="@/assets/makeup/check-mark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card-description">Name on card</div>
          <b-input-group class="mb-3">
            <b-form-input
              type="text"
              placeholder="Name"
              v-model="cardInfo.name"
            ></b-form-input>
          </b-input-group>

          <div class="card-description">Card Number</div>
          <b-input-group class="mb-3">
            <b-form-input
              type="number"
              placeholder="1111 2222 3333 4444"
              v-model="cardInfo.number"
            ></b-form-input>
          </b-input-group>

          <div class="d-flex align-items-center justify-content-between">
            <div>
              <div class="card-description">Expiration date</div>
              <b-input-group class="mb-3 card-data">
                <b-form-input
                  type="text"
                  placeholder="mm/yy"
                  v-model="cardInfo.expiration"
                ></b-form-input>
              </b-input-group>
            </div>

            <div>
              <div class="card-description">CVV</div>
              <b-input-group class="mb-3 card-data">
                <b-form-input
                  type="password"
                  placeholder="123"
                  v-model="cardInfo.cvv"
                ></b-form-input>
              </b-input-group>
            </div>
          </div>

          <div class="card-bar"></div>

          <div class="wrapper-price d-flex justify-content-between mb-1">
            <div class="card-name-item card-description">Subtotal</div>
            <div class="card-price card-description">
              $ {{ cartSubtotal.toFixed(2) }}
            </div>
          </div>

          <div class="wrapper-price d-flex justify-content-between mb-1">
            <div class="card-name-item card-description">Shipping</div>
            <div class="card-price card-description">
              $ {{ shipping.toFixed(2) }}
            </div>
          </div>

          <div class="wrapper-price d-flex justify-content-between mb-1">
            <div class="card-name-item card-description">Taxes</div>
            <div class="card-price card-description">
              $ {{ cartTaxes.toFixed(2) }}
            </div>
          </div>
          <div class="wrapper-price d-flex justify-content-between mb-1">
            <div class="card-name-item card-description">Total (Tax incl.)</div>
            <div class="card-price card-description">
              $ {{ cartTotal.toFixed(2) }}
            </div>
          </div>

          <div
            class="checkout-btn d-flex justify-content-between align-items-center"
            :class="{ active: isCardInfoValid }"
            @click="orderProducts"
          >
            <div class="total-btn">$ {{ cartTotal.toFixed(2) }}</div>

            <div>
              <span class="checkout-btn-text d-flex"
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

import MakeupCartItem from './MakeupCartItem';

export default {
  name: 'CartModal',
  components: {
    MakeupCartItem,
  },
  data() {
    return {
      quantity: 1,
      discount: 50,
      product: {},
      cardType: null,
      shipping: 17.5,
      taxes: 5,
      cardInfo: {
        name: '',
        number: '',
        expiration: '',
        cvv: '',
      },
      cardInfoDefault: {},
    };
  },
  computed: {
    ...mapGetters('makeup', [
      'getProductById',
      'getCart',
      'getAllProducts',
      'getCartQuantity',
      'cartSubtotal',
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
    changeCard() {
      if (this.cardType === 'visa') {
        return require('@/assets/makeup/card-visa.svg');
      }
      if (this.cardType === 'master') {
        return require('@/assets/makeup/card-master.svg');
      }
      return null;
    },
    cartTaxes() {
      return (this.cartSubtotal * this.taxes) / 100;
    },
    cartTotal() {
      return this.cartSubtotal + this.shipping + this.cartTaxes;
    },
    isCardInfoValid() {
      return true;
      /*if (
        this.cardInfo.name.length >= 3 &&
        this.cardInfo.number.length === 16 &&
        this.cardInfo.expiration &&
        this.cardInfo.cvv.length === 3
      ) {
        return true;
      }
      return false;*/
    },
  },
  methods: {
    ...mapActions(['setInfoMessage']),
    ...mapActions('makeup', [
      'addToCart',
      'fetchMakeupList',
      'sendOrder',
      'cleanOutCart',
    ]),

    changeQuantity(operation) {
      if (operation === 'minus' && this.quantity > 1) {
        this.quantity--;
      }
      if (operation === 'plus' && this.quantity < 4) {
        this.quantity++;
      }
    },
    closeModal() {
      this.$bvModal.hide('cart-modal');
    },
    onAddToCart() {
      const payload = Object.assign({}, this.product);
      payload.quantity = this.quantity;
      this.addToCart(payload);
    },
    selectCard(type) {
      this.cardType = type;
    },
    async orderProducts() {
      // ToDo - 1 - start global spinner

      this.$bvModal.show('global-spinner');
      const payload = {
        card: { ...this.cardInfo },
        products: this.getCart.map((product) => {
          console.log('P in C: ', product);
          return {
            id: product.id,
            quantity: product.quantity,
          };
        }),
      };
      console.log('payload', payload);
      const response = await this.sendOrder(payload);
      console.log('Response: ', response);
      if (response.Status === 'OK') {
        console.log('Success');
        // ToDo - 2 - show success modal message
        this.setInfoMessage('pay Success');
        this.$bvModal.show('info-modal');

        this.cardInfo = Object.assign({}, this.cardInfoDefault); ///////////////////////////////////////////
        this.cleanOutCart();

        // ToDo - 3 - hide and clear cart and card info
      } else {
        this.setInfoMessage('failed');
        this.$bvModal.show('info-modal');
        // ToDo - 2 - show failed modal message
      }
      // ToDo - 1 - stop global spinner

      this.$bvModal.hide('global-spinner');
    },
  },
  async mounted() {
    if (!this.getAllProducts.length) {
      await this.fetchMakeupList();
    }
    this.product = this.getProductById(this.$route.params.id);
  },
};

// const pr = {
//   id: 1048,
//   quantity: 5
// }
</script>

<style lang="scss" scoped>
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
  .product-list {
    height: 492px;
    overflow-y: auto;
    padding: 3px;
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
}
.wrapper-card {
  width: calc(40% - 29px);
  height: 644px;
  background-color: #565abb;
  border-radius: 20px;
  padding: 22px 18px 24px 18px;
  display: flex;
  flex-direction: column;
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
  .card-img {
    width: 75px;
    height: 55px;
  }

  .card-type {
    width: 75px;
    height: 55px;
    margin-right: 18px;
    margin-bottom: 24px;

    .img-check-mark {
      position: absolute;
      width: 18px;
      height: 18px;
      right: 21px;
      bottom: 27px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
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

.checkout-btn {
  margin-top: auto;
  width: 100%;
  padding: 15px 18px 15px 24px;
  background: #ccc;
  border-radius: 12px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fefcfc;
  cursor: pointer;

  &.active {
    background: #4de1c1;
  }

  &-text {
    img {
      margin-left: 5px;
    }
  }
}
</style>
