import { createStore } from 'vuex';
import api from '@/api';

import restaurants from './restaurants';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { restaurants: restaurants(api) },
});
