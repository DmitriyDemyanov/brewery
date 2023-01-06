<template>
  <div class="map" v-show="address.longitude && address.latitude">
    Долгота: {{ address.longitude }} Широта: {{ address.latitude }}
    <div class="google-map">
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoogleMap',
  props: {
    address: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.map {
  margin-bottom: 150px;
}
</style>
