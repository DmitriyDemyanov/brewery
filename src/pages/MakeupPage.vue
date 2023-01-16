<template>
  <div class="main-page">
    <div class="main-bg">
      
      <router-link class="p-2" to="/"> Main Page </router-link>

      <nav class="d-flex justify-content-around">
        <label class="product-text" for="product-type"
          ><span class="title">hello fashion</span></label
        >
        <select
          name="product-type"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>All</option>
          <option value="blush">Blush</option>
          <option value="bronzer">Bronzer</option>
          <option value="eyebrow">Eyebrow</option>
          <option value="eyeliner">Eyeliner</option>
          <option value="eyeshadow">Eyeshadow</option>
          <option value="foundation">Foundation</option>
          <option value="lip_liner">Lip liner</option>
          <option value="lipstick">Lipstick</option>
          <option value="mascara">Mascara</option>
          <option value="nail_polish">Nail polish</option>
        </select>
      </nav>
      <MakeUpItem />
    </div>
  </div>
</template>

<script>
import MakeUpItem from '@/components/MakeupItem';

export default {
  name: 'MakeupPage',
  components: {
    MakeUpItem,
  },
};
</script>

<style lang="scss" scoped>
.form-select {
  width: 20%;
  background: linear-gradient(45deg, gold, #1613a9);
  &:focus {
    box-shadow: none;
  }
}
.main-bg {
  height: 100vw;

  background-image: url("https://thumbs.dreamstime.com/z/gold-woman-skin-beauty-fashion-model-girl-golden-makeup-hair-jewellery-black-background-87310205.jpg");
  background-repeat: no-repeat;
}
</style>
