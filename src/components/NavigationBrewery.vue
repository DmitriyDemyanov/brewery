<template>
  <BContainer class="d-flex justify-content-between">
    <div class="image-logo"><img src="@/assets/beer.svg" alt="logo" /></div>
    <div class="drop-down">
      <div>
        <b-dropdown id="dropdown-left" :text="stateText" variant="primary" class="m-2"
          :disabled="!getStatesList.length">
          <b-dropdown-item class="my-class" v-for="(state, index) in getStatesList" :key="index"  @click="setStateFilter(state)">{{ state
}}</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="" :text="cityText" variant="primary" class="m-2 my-class"
          :disabled="!getCitiesList.length">
          <b-dropdown-item
            v-for="(city, index) in getCitiesList"
            :key="index"
            @click="setCityFilter(city)"
          >
            {{ city }}
          </b-dropdown-item>
        </b-dropdown>
        <b-button @click="setStateFilter('')">Clear state</b-button>
      </div>
    </div>
  </BContainer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NavigationBrewery',
  data() {
    return {
      city: '',
      state: '',
    }
  },
  computed: {
    ...mapGetters('breweries', ['getCitiesList', 'getStatesList']),
    cityText() {
      return this.city || 'Select City';
    },
    stateText() {
      return this.state || 'Select State';
    }
  },
  methods: {
    ...mapActions('breweries',['setBreweryState']),
    setCityFilter(city) {
      this.city = city;
    },
    setStateFilter(state) {
      this.state = state;
      this.setBreweryState(state);
    },
  }
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


