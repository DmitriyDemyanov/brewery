import Vue from 'vue';
import Vuex from 'vuex';

import breweries from './modules/breweries';
import news from './modules/news';
import makeup from './modules/makeup';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    breweries,
    news,
    makeup,
  },
});
