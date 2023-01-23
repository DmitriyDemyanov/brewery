<template>
  <div class="cart-item_wrapper d-flex align-items-center">
    <div class="product-image">
      <img src="@/assets/makeup/image-test.png" alt="" />
    </div>

    <div class="cart-item-text">
      <div class="item-title">Flor amaniast Hand Creatinin Hello</div>
      <div class="item-description">
        Best aroma in the world and lot of time title
      </div>
    </div>

    <div class="quantity-wrapper d-flex align-items-center">
      <div class="quantity-items">{{ 5 }}</div>
      <div class="arrows-wrapper">
        <div class="arrow-top">
          <img src="@/assets/makeup/arrow-top.svg" alt="" />
        </div>
        <div class="arrow-bottom">
          <img src="@/assets/makeup/arrow-bottom.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="item-price">$ 56768</div>
    <div class="trash-can">
      <img src="@/assets/makeup/trash-can.svg" alt="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MakeupCartItem',
};
</script>

<style lang="scss" scoped>
.cart-item_wrapper {
  width: 100%;
  height: 100px;
  padding: 10px 22px 10px 9px;
  box-shadow: 0px 1px 4px rgba(150, 55, 195, 0.25);
  border-radius: 15px;
}
.product-image {
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.cart-item-text {
  width: 242px;
  height: 54px;
  margin-left: 18px;
  .item-description,
  .item-title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
  .item-description {
    font-family: 'Nunito';
    font-size: 14px;
    line-height: 19px;
  }
}
.quantity-items {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 100%;
  color: #393939;
  margin-right: 6px;
  margin-left: 30px;
}
.arrow-top {
  cursor: pointer;
}
.arrow-bottom {
  cursor: pointer;
  img {
    margin-top: -8px;
  }
}
.item-price {
  margin-left: auto;
}
.trash-can {
  margin-left: 32px;
  cursor: pointer;
}
</style>
