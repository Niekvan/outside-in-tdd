const restaurants = (api, stateOverwrites) => ({
  namespaced: true,
  state: {
    records: [],
    loading: false,
    loadError: false,
    ...stateOverwrites,
  },
  actions: {
    load({ commit }) {
      commit('startLoading');
      api
        .loadRestaurants()
        .then(records => {
          commit('storeRecords', records);
        })
        .catch(() => {
          commit('recordLoadingError');
        });
    },
    create({ commit }, newRestaurantName) {
      return api.createRestaurant(newRestaurantName).then(record => {
        commit('addRecord', record);
      });
    },
  },
  mutations: {
    startLoading(state) {
      state.loadError = false;
      state.loading = true;
    },
    recordLoadingError(state) {
      state.loadError = true;
    },
    storeRecords(state, records) {
      state.records = records;
      state.loading = false;
    },
    addRecord(state, record) {
      state.records.push(record);
    },
  },
});

export default restaurants;
