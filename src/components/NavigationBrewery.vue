<template>
  <BContainer class="d-flex justify-content-between">
    <div class="image-logo"><img src="@/assets/beer.svg" alt="logo" /></div>
    <div class="drop-down">
      <div>
        <b-dropdown id="dropdown-left" text="Select State" variant="primary" class="m-2"
          :disabled="!getBreweriesList.length">
          <b-dropdown-item class="my-class" v-for="(item, index) in getBreweriesList" :key="index">{{ item.state
}}</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="" text="Select City" variant="primary" class="m-2 my-class"
          :disabled="!getBreweriesList.length">
          <b-dropdown-item v-for="(item, index) in getBreweriesList" :key="index">{{ item.city }}</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </BContainer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavigationBrewery',
  computed: {
    ...mapGetters('breweries', ['getBreweriesList']),
  },
};
</script>

<style lang="scss" scoped>
.image-logo {
  width: 55px;
  height: 55px;

  img {
    width: 100%;
    height: 100%;
  }
}

:deep .dropdown-menu {
  height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 3px;

  }

  &::-webkit-scrollbar-track {
    background: gray;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: darkgoldenrod;
    border-radius: 3px;
  }
}
</style>


