<template>
  <b-modal
    id="global-spinner"
    centered
    ok-only
    no-close-on-backdrop
    modal-class="modal-info"
    content-class="modal-content-info"
    style="background-color: brown"
  >
    <div class="text-center">
      <b-spinner variant="white"></b-spinner>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'GlobalSpinner',
};
</script>

<style lang="scss" scoped>
::v-deep .modal-info {
  background-color: rgba(0, 0, 0, 0.8);
  .modal-dialog {
    max-width: 100vw;

    .modal-content {
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }
  }
  .modal-footer {
    display: none;
  }
  .modal-header {
    display: none;
  }
}
</style>
