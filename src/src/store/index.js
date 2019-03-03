const state = require('./state');
const actions = require('./actions');
const mutations = require('./mutations');
const getters = require('./getters');

import Vue from 'vue';
import Vuex from 'vuex'; // 引入对应模块

Vue.use(Vuex);  // 调用store模块

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});