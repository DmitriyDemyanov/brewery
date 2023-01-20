<template>
  <div class="wrapper-item" @click="onSelectProduct">
    <div class="card">
      <img
        :src="renderImage"
        class="card-img-top product-image"
        :alt="product.name"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.brand }}</h5>
        <p class="card-text">
          {{ product.description }}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ product.name }}</li>
        <li class="list-group-item">{{ category }}</li>
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
      return this.product.image_link || defaultImage;
    },
    price() {
      return `${this.product.price} ${
        this.product.price_sign || this.product.currency || ''
      }`;
    },
    category() {
      return this.product.category || 'makeup';
    },
  },
  methods: {
    onSelectProduct() {
      console.log(this.product.id);
      this.$router.push(`/makeup/${this.product.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-item {
  margin-bottom: 50px;
  width: 24%;
}
.card:hover {
  scale: 1.05;
  transition: scale 300ms;
  cursor: pointer;
}
.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.card-title {
  text-transform: capitalize;
}
.card-text {
  height: 200px;
  overflow: auto;
}
</style>
