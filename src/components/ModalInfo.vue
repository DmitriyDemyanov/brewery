<template>
  <b-modal
    id="info-modal"
    centered
    ok-only
    no-close-on-backdrop
    modal-class="modal-info"
    content-class="modal-content-info"
    style="background-color: brown"
  >
    {{ message }}!
  </b-modal>
</template>

<script>
export default {
  name: 'ModalInfo',
  props: {
    message: {
      type: String,
      default: 'Hi!',
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .modal-info {
  background-color: rgba(0, 0, 0, 0.5);
  .modal-dialog {
    max-width: 33%;
    height: 300px;
    .modal-content {
      background-color: #4de1c1;
    }
  }
  .modal-body {
    padding: 50px 100px 50px 42px;
    text-align: center;
    font-size: 30px;
    text-transform: capitalize;
  }
  .modal-footer {
    border: none;
    justify-content: center;
    & .btn {
      width: 30%;
    }
  }
  .modal-header {
    display: none;
  }
}
</style>
