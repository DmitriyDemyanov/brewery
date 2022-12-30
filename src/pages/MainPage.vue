<template>
  <div>
    <NavigationBrewery />
    <div class="d-flex justify-content-between">


      <div class="wrapper-brewery" v-if="getBreweriesList.length">
        <BreweryListItem v-for="(brewery, index) in getBreweriesList" :brewery="brewery" :key="index" />
      </div>
      <div class="spinner" v-else>
        <div class="text-center">
          <b-spinner variant="primary" type="grow"></b-spinner>
        </div>
      </div>

      <div class="wrapper-details">
        <BreweryDetails />
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
    ...mapGetters('breweries', ['getBreweriesList'])
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
  max-height: 500px;
  overflow-y: auto;
}

.wrapper-details {
  width: calc(50% - 75px);
}
</style>
