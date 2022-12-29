const breweries = [
  {
      "id": "10-56-brewing-company-knox",
      "name": "10-56 Brewing Company",
      "brewery_type": "micro",
      "street": "400 Brown Cir",
      "address_2": null,
      "address_3": null,
      "city": "Knox",
      "state": "Indiana",
      "county_province": null,
      "postal_code": "46534",
      "country": "United States",
      "longitude": "-86.627954",
      "latitude": "41.289715",
      "phone": "6308165790",
      "website_url": null,
      "updated_at": "2022-11-11T05:07:58.723Z",
      "created_at": "2022-11-11T05:07:58.723Z"
  },
  {
      "id": "10-barrel-brewing-co-bend-1",
      "name": "10 Barrel Brewing Co",
      "brewery_type": "large",
      "street": "62970 18th St",
      "address_2": null,
      "address_3": null,
      "city": "Bend",
      "state": "Oregon",
      "county_province": null,
      "postal_code": "97701-9847",
      "country": "United States",
      "longitude": "-121.28170597038259",
      "latitude": "44.08683530625218",
      "phone": "5415851007",
      "website_url": "http://www.10barrel.com",
      "updated_at": "2022-11-11T05:07:58.723Z",
      "created_at": "2022-11-11T05:07:58.723Z"
  },
  {
      "id": "10-barrel-brewing-co-bend-2",
      "name": "10 Barrel Brewing Co",
      "brewery_type": "large",
      "street": "1135 NW Galveston Ave Ste B",
      "address_2": null,
      "address_3": null,
      "city": "Bend",
      "state": "Oregon",
      "county_province": null,
      "postal_code": "97703-2465",
      "country": "United States",
      "longitude": "-121.32880209261799",
      "latitude": "44.057564901366796",
      "phone": "5415851007",
      "website_url": null,
      "updated_at": "2022-11-11T05:07:58.723Z",
      "created_at": "2022-11-11T05:07:58.723Z"
  }
];

function fetchBreweries() {
  return breweries;
}

function fetchBreweryByIdFromServer(id) {
  const brewery = breweries.find(item => item.id === id);
  return brewery;
}

// ========================

export default {
  fetchBreweriesList(ctx) {
    const breweries = fetchBreweries();
    console.log(breweries);
    console.log("-->", ctx);
    console.log("List Before ", ctx.getters.getBreweriesList);
    ctx.commit('SET_BREWERIES_LIST', breweries);
    console.log("List After ", ctx.getters.getBreweriesList);
  },
  fetchBreweryBuId({commit}, id) {
    const itemBrewery =  fetchBreweryByIdFromServer(id)
    commit('SET_ACTIVE_BREWERY',itemBrewery);
  },
};