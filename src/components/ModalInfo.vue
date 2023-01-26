<template>
  <b-modal id="info-modal">{{ message }}</b-modal>
</template>

<script>
export default {
  name: 'ModalInfo',
  props: {
    message: {
      type: String,
      default: 'Hi'
    }
  }
}
</script>

<style lang='scss' scoped>

</style>