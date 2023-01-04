const API_URL = 'https://api.openbrewerydb.org/breweries';

/*
function mock(breweries) {
  console.log('>>>', breweries);
  const arrayCity = breweries.map((item) => item.city);
  console.log('+++++++', arrayCity);

  const arrayCityFilter = arrayCity.filter((item, pos) => arrayCity.indexOf(item) === pos);

  console.log('Res ---> ', arrayCityFilter);
}

function mock2(breweries) {
  const result = new Set();
  breweries.forEach(brewery => result.add(brewery.city));
  return Array.from(result);
}

function mock3(breweries) {
  const result = breweries.reduce((acc, brewery) => {
    const city = brewery.city;
    if (!acc.includes(city)) {
      acc.push(city);
    }
    return acc;
  }, []);
  return result;
}
*/

export default {
  async fetchBreweriesList(ctx) {
    const breweries = await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => data);

    ctx.commit('SET_BREWERIES_LIST', breweries);
  },

  async fetchBreweryBuId({ commit }, id) {
    const itemBrewery = await fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => data);
    commit('SET_ACTIVE_BREWERY', itemBrewery);
    console.log(itemBrewery);
  },
};
