<template>
  <div  class='map'>
    Долгота: {{ address.longitude }}
     Широта: {{ address.latitude }}
    <div class="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.69580912762!2d-81.48275126759144!3d28.48110141837837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2z0J7RgNC70LDQvdC00L4sINCk0LvQvtGA0LjQtNCwLCDQodCo0JA!5e0!3m2!1sru!2sua!4v1672916158783!5m2!1sru!2sua"
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  }
};
</script>

<style scoped>
.map {
  margin-bottom: 150px;
}
</style>