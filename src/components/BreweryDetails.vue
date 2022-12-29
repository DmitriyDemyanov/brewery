<template>
  <div class="wrapp">
    <div class="county">county - {{ breweryDetails.country }}</div>
    <div class="state">state - {{ breweryDetails.state }}</div>
    <div class="city">city - {{ breweryDetails.city }}</div>
    <div class="street">street - {{ breweryDetails.street }}</div>
    <div class="name">name - {{ breweryDetails.name }}</div>
    <div class="phone">phone - {{ breweryDetails.phone }}</div>
    <div class="brewery-type">Type - {{ breweryDetails.brewery_type }}</div>

  </div>
</template>
<script>
export default {
  name: 'BreweryDetails',
  props: {
    breweryDetails: {
      type: Object,
      reqired: true,
      county: 'USA',  //??????//
    },
  },
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
