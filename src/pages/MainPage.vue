<template>
  <div>
    <NavigationBrewery />

    <div class="wrapper-brewery">
      <BreweryListItem :brewery="brewery" v-for="(brewery, index) in getBreweriesList" :key="index"/>
    </div>

    <div class="wrapper-brewery-details"></div>


  </div>
</template>

<script>

import NavigationBrewery from '@/components/NavigationBrewery';
import BreweryListItem from '@/components/BreweryListItem';

import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'MainPage',
  components: {
    NavigationBrewery,
    BreweryListItem,
  },
  computed: {
    ...mapGetters('breweries', ['getBreweriesList']),
  },
  methods: {
    ...mapActions('breweries', ['fetchBreweriesList']),
  },
  mounted() {
    this.fetchBreweriesList();
  },
}
</script>

<style scoped>
.wrapper-brewery {
  width: calc(50% - 75px);
}
.wrapper-brewery-details {
  width: calc(50% - 75px);
}
</style>