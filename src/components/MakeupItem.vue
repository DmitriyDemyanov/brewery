<template>
  <div class="wrapper-item d-flex justify-content-around">
    <div class="card" style="width: 18rem">
      <img :src="renderImage" class="card-img-top" :alt="product.name" />
      <div class="card-body">
        <h5 class="card-title">{{ product.brand }}</h5>
        <p class="card-text">
          {{ product.description }}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ product.name }}</li>
        <li class="list-group-item">{{ category}}</li>
        <li class="list-group-item">{{ price }}</li>
      </ul>
      <div class="card-body">
        <a :href="product.product_link" class="card-link">{{ product.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
const defaultImage = require('@/assets/makeup/makeup-test.jpg');

export default {
  name: 'MakeUpItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    renderImage() {
      return defaultImage; //this.product.image_link || "@/assets/makeup/makeup-test.jpg";
    },
    price() {
      return `${this.product.price} ${
        this.product.price_sign || this.product.currency
      }`;
    },
    category() {
      return this.product.category || 'makeup';
    }
  },
};
</script>

<style lang="scss" scoped>
// overflow
.card-title {
  text-transform: capitalize;
}
.wrapper-item {
  margin-top: 50px;
  // height: 500px;
}
.card-text {
  height: 200px;
  overflow: auto;
}
</style>
