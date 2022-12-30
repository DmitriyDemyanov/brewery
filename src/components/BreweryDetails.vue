<template>
  <div class="wrapp">
    <div class="brewery-details" v-if="Object.keys(getDetailsBrewery).length">
      <div class="country">country - {{ country }}</div>
      <div class="state">state - {{ getDetailsBrewery.state }}</div>
      <div class="city">city - {{ getDetailsBrewery.city }}</div>
      <div class="street">street - {{ getDetailsBrewery.street }}</div>
      <div class="name">name - {{ getDetailsBrewery.name }}</div>
      <div class="phone">phone - {{ getDetailsBrewery.phone }}</div>
      <div class="brewery-type">Type - {{ getDetailsBrewery.brewery_type }}</div>
    </div>
    <div class="brewery-empty" v-else>
      <h1>Empty</h1>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BreweryDetails',
  computed: {
    ...mapGetters('breweries', ['getDetailsBrewery']),
    country() {
      return this.getDetailsBrewery.country || 'USA';
    }
  }
};
</script>

<style scoped>
.wrapp {
  width: 100%;
  text-transform: capitalize;
  font-size: 24px;
  background-color: rgb(41, 38, 73);
  padding: 25px;
  border-radius: 24px;
  color: yellow;
}
</style>
