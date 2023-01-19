<template>
  <button class="makeup-btn">
    <slot name="prepend"></slot>
    {{ title }}
    <slot name="append"></slot>
  </button>
</template>

<script>
export default {
  name: 'MakeupButton',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.makeup-btn {
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
