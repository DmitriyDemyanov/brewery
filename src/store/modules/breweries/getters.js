export default {
  getBreweriesList(state) {
    return state.breweriesList;
  },
  getDetailsBrewery(state) {
    return state.activeBrewery;
  },
  getCitiesList({breweriesList}) {
    const arrayCity = breweriesList.map((item) => item.city);
    return arrayCity
      .filter((item, pos) => arrayCity.indexOf(item) === pos)
      .sort();
  },
  getStatesList({breweriesList}) {
    const arrayState = breweriesList.map((item) => item.state);
    return arrayState
      .filter((item, pos) => arrayState.indexOf(item) === pos)
      .sort();
  }
}