export default {
  SET_BREWERIES_LIST(state, payload) {
    state.breweriesList = payload;
  },
  SET_ACTIVE_BREWERY(state, payload) {
    state.activeBrewery = payload;
  },
  SET_STATE_BREWERY(state, payload) {
    state.breweriesOnState = payload;
    console.log(payload);
  }
};
