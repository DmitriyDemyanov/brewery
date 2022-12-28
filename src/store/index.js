import Vue from 'vue';
import Vuex from 'vuex';

import breweries from './modules/breweries';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    breweries
  },
});
