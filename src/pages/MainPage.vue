<template>
  <div>
    <NavigationBrewery />
    <div class="d-flex justify-content-between">

      <div class="wrapper-brewery">
        <BreweryListItem
          :brewery="brewery"
          v-for="(brewery, index) in getBreweriesList"
          :key="index"
        />
      </div>

      <div class="wrapper-details">
        <BreweryDetails :breweryDetails="getDetailsBrewery"/>
      </div>

    </div>
  </div>
</template>

<script>
import NavigationBrewery from '@/components/NavigationBrewery';
import BreweryListItem from '@/components/BreweryListItem';
import BreweryDetails from '@/components/BreweryDetails';

import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'MainPage',
  components: {
    NavigationBrewery,
    BreweryListItem,
    BreweryDetails,
  },
  computed: {
    ...mapGetters('breweries', ['getBreweriesList','getDetailsBrewery']),
  },
  methods: {
    ...mapActions('breweries', ['fetchBreweriesList']),
  },
  mounted() {
    this.fetchBreweriesList();
  },
};
</script>

<style scoped>
.wrapper-brewery {
  width: calc(50% - 75px);
}
.wrapper-details {
  width: calc(50% - 75px);
}
</style>
