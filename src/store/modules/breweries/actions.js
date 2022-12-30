const API_URL = "https://api.openbrewerydb.org/breweries";

export default {
  async fetchBreweriesList(ctx) {
    const breweries = await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => data);

    console.log(breweries);
    console.log("-->", ctx);
    console.log("List Before ", ctx.getters.getBreweriesList);
    ctx.commit('SET_BREWERIES_LIST', breweries);
    console.log("List After ", ctx.getters.getBreweriesList);
  },

  async fetchBreweryBuId({commit}, id) {
    const itemBrewery = await fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => data);
    commit('SET_ACTIVE_BREWERY', itemBrewery);
    console.log(itemBrewery);
  },
};