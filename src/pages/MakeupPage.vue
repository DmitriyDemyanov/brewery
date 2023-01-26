<template>
  <div class="main-page">
    <div class="makeup-background">
      <img
        src="@/assets/makeup/element5-digital-ooPx1bxmTc4-unsplash.jpg"
        alt="makeup"
      />
    </div>

    <div class="main-bg">
      <router-link class="p-2" to="/"> To back </router-link>
      <router-link class="p-2" to="/Product"> product link </router-link>
      <nav class="d-flex justify-content-around">
        <label class="product-text" for="product-type">
          <span class="title">hello fashion</span>
        </label>
        <select
          v-model="selected"
          name="product-type"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>All</option>
          <option
            class="text-option"
            v-for="(option, ind) in options"
            :value="option.value"
            :key="ind"
          >
            {{ option.text }}
          </option>
        </select>

        <div class="select-test" @click="openCart()">
          <div class="cart position-relative">
            <img src="@/assets/header-icon-cart.svg" alt="icon" />
            <div class="header-icon-cart">{{ getCartQuantity }}</div>
          </div>
          <CartModal />
        </div>
      </nav>

      <div
        class="spinner d-flex justify-content-center"
        v-if="!products.length"
      >
        <b-spinner variant="primary" label="LOADING"></b-spinner>
      </div>

      <div class="d-flex flex-wrap justify-content-between p-4" v-else>
        <MakeUpItem
          :product="product"
          v-for="(product, index) in products"
          :key="index"
        />
      </div>

      <div class="overflow-auto pagination">
        <b-pagination
          v-model="currentPage"
          @click="onSwitchPage"
          :total-rows="rows"
          :per-page="getNumberPages"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </div>
    <GlobalSpinner/>
  </div>
</template>

<script>
import MakeUpItem from '@/components/MakeupItem';
import CartModal from '@/components/CartModal';
import GlobalSpinner from '@/components/GlobalSpinner.vue'

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MakeupPage',
  components: {
    MakeUpItem,
    CartModal,
    GlobalSpinner,
  },
  data() {
    return {
      selected: 'All',
      options: [
        { text: 'Blush', value: 'A' },
        { text: 'bronzer', value: 'B' },
        { text: 'eyebrow', value: 'C' },
        { text: 'eyeliner', value: 'D' },
        { text: 'eyeshadow', value: 'E' },
        { text: 'foundation', value: 'F' },
        { text: 'lip_liner', value: 'G' },
        { text: 'lipstick', value: 'H' },
        { text: 'mascara', value: 'I' },
        { text: 'nail_polish', value: 'J' },
      ],
    };
  },
  computed: {
    ...mapGetters('makeup', [
      'getAllProducts',
      'products',
      'getNumberPages',
      'getCurrentPage',
      'getAllLength',
      'getCartQuantity',
    ]),
    rows() {
      return this.getAllProducts.length;
    },
    currentPage: {
      get() {
        return this.getCurrentPage;
      },
      set(page) {
        this.changePage(page);
        console.log('Set Page: ', page);
      },
    },
  },
  methods: {
    ...mapActions('makeup', ['fetchMakeupList', 'changePage']),
    onSwitchPage(val) {
      console.log('On Switch Page', val);
    },
    openCart() {
      this.$bvModal.show('cart-modal');
    },
  },
  mounted() {
    if (!this.getAllProducts.length) {
      this.fetchMakeupList();
    }
  },
};
</script>

<style lang="scss" scoped>
.makeup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -5;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.form-select {
  width: 20%;
  background: linear-gradient(45deg, gold, #1613a9);
  &:focus {
    box-shadow: none;
  }
}
.select-test {
  color: #fff;
}
.text-option {
  text-transform: capitalize;
}
.pagination {
  margin: 30px auto;
}
.color-text {
  color: #fff;
}
.spinner {
  margin-top: 100px;
}
.cart {
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
</style>
