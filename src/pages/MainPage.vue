<template>
  <div>
    <h1>Hello World {{ getBreweriesList }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MainPage',
  computed: {
    ...mapGetters('breweries',['getBreweriesList']),
  }
}
</script>

<style scoped>

</style>