<template>
  <BContainer class="d-flex justify-content-between">
    <div class="image-logo"><img src="@/assets/beer.svg" alt="logo" /></div>
    <div class="drop-down">
      <div>
        <b-dropdown
          id="dropdown-left"
          text="Select State"
          variant="primary"
          class="m-2"
        >
          <b-dropdown-item class="my-class"
            v-for="(item, index) in getBreweriesList"
            :key="index"
            >{{ item.state }}</b-dropdown-item
          >
        </b-dropdown>

        <b-dropdown
          id=""
          text="Select City"
          variant="primary"
          class="m-2 my-class"
        >
          <b-dropdown-item
            v-for="(item, index) in getBreweriesList"
            :key="index"
            >{{ item.city }}</b-dropdown-item
          >
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
#dropdown-right {
  #__BVID__10__BV_toggle_ {
    .dropdown-menu.show {
      height: 200px;
      overflow-y: auto;
    }
  }
}
.my-class {
  & button {
    &::after{
      &.dropdown-menu.show{
        height: 200px;
        overflow-y: auto;
      }
    }
  }
}

</style>


