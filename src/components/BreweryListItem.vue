<template>
  <div class="wrapper-item" @click="onListItemClick(brewery.id)">
    <div class="name">Name: {{ brewery.name }}</div>
    <div class="titles">
      <span class="state">State: {{ brewery.state }}</span>
      <span class="city"> City: {{ brewery.city}}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'BreweryListItem',
  props: {
    brewery: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('breweries',['fetchBreweryById']),
    onListItemClick(id) {
      console.log("Brewery: ", id);
      this.fetchBreweryById(id);
    },

  },
}
</script>

<style lang="scss" scoped>
.wrapper-item {
  min-height: 80px;
  background-color:gold;
  margin-top: 15px;
  color: green;
  text-align: center;
  border-radius: 24px;
  cursor: pointer;
}
.name {
  font-size: 30px;
  font-weight: bold;
}
.state {
  font-size: 24px;
  font-weight:600;
}
.city {
  font-size: 20px;
  font-weight: 300;
}
</style>