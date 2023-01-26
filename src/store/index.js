import Vue from 'vue';
import Vuex from 'vuex';

import breweries from './modules/breweries';
import news from './modules/news';
import makeup from './modules/makeup';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoModalMessage: 'Info Modal Message',
  },
  getters: {
    infoModalMessage: ({ infoModalMessage }) => infoModalMessage,
  },
  mutations: {
    SET_INFO_MESSAGE(state,payload) {
      state.infoModalMessage = payload;
    }
  },
  actions: {
    setInfoMessage({commit}, msg) {
      commit('SET_INFO_MESSAGE', msg);
    }
  },
  modules: {
    breweries,
    news,
    makeup,
  },
});
