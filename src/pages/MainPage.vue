<template>
  <div>
    <NavigationBrewery />
    <div class="d-flex justify-content-between">


      <div class="wrapper-brewery" v-if="getBreweriesList.length">
        <BreweryListItem v-for="(brewery, index) in getBreweriesList" :brewery="brewery" :key="index"  />
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
    <div class="map-google"><iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059669857!2d-74.25986773739226!3d40.697149413874705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1672910965114!5m2!1sru!2sua"
      width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe></div>
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
