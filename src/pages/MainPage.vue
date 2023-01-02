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
  padding-right: 10px;
  width: calc(50% - 75px);
  max-height: 500px;
  overflow-y: auto;

}
::-webkit-scrollbar {
    width: 15px;
    border-radius:20px;

}
::-webkit-scrollbar-track {
  background:linear-gradient(to bottom, yellow, rgb(4, 125, 155));
  border-radius:20px;
  box-shadow:2px 2px rgba(233, 3, 3, 0.938)inset;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, rgb(4, 125, 155),yellow);
  height: 10px;
  border-radius:20px;

}


.wrapper-details {
  width: calc(50% - 75px);
}
</style>
