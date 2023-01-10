export default {
  getBreweriesList(state) {
    let result = state.breweriesList;
    if (state.selectedState) {
      result = state.breweriesList.filter(
        (item) => item.state === state.selectedState
      );
    }
    return result;
  },
  getDetailsBrewery(state) {
    return state.activeBrewery;
  },
  getCitiesList({ breweriesList }) {
    const arrayCity = breweriesList.map((item) => item.city);
    return arrayCity
      .filter((item,pos) => arrayCity.indexOf(item) === pos)
      .sort();
  },
  getStatesList({ breweriesList }) {
    const arrayState = breweriesList.map((item) => item.state);
    return arrayState
      .filter((item,pos) => arrayState.indexOf(item) === pos)
      .sort();
  },
  getMap({ activeBrewery }) {
    return activeBrewery;
  },
};


function addLength(str) { 
 return str.split(' ').map( item => item +' '+ item.length);
}


console.log(addLength('you will win'));
