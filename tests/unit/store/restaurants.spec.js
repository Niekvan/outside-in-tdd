import { createStore } from 'vuex';
import restaurants from '@/store/restaurants';

describe('restaurants', () => {
  describe('initially', () => {
    let store;

    beforeEach(() => {
      store = createStore({
        modules: {
          restaurants: restaurants(),
        },
      });
    });

    it('does not have the loading flag set', () => {
      expect(store.state.restaurants.loading).toEqual(false);
    });

    it('does not have the error flag set', () => {
      expect(store.state.restaurants.loadError).toEqual(false);
    });
  });

  describe('Load action', () => {
    describe('while loading', () => {
      let store;

      beforeEach(() => {
        const api = {
          loadRestaurants: () => new Promise(() => { }),
        };

        store = createStore({
          modules: { restaurants: restaurants(api, { loadError: true }) },
        });
        store.dispatch('restaurants/load');
      });

      it('sets a loading flag', () => {
        expect(store.state.restaurants.loading).toEqual(true);
      });

      it('clears the error flag', () => {
        expect(store.state.restaurants.loadError).toEqual(false);
      });
    });

    describe('when loading succeeds', () => {
      const records = [
        { id: 1, name: 'Sushi Place' },
        { id: 2, name: 'Pizza Place' },
      ];

      let store;

      beforeEach(() => {
        const api = {
          loadRestaurants: () => Promise.resolve(records),
        };

        store = createStore({
          modules: { restaurants: restaurants(api) },
        });

        return store.dispatch('restaurants/load');
      });

      it('stores the restaurants', () => {
        expect(store.state.restaurants.records).toEqual(records);
      });

      it('clears the loading flag', () => {
        expect(store.state.restaurants.loading).toEqual(false);
      });
    });

    describe('when loading fails', () => {
      let store;

      beforeEach(() => {
        const api = {
          loadRestaurants: () => Promise.reject(),
        };
        store = createStore({
          modules: {
            restaurants: restaurants(api),
          },
        });

        return store.dispatch('restaurants/load');
      });

      it('sets an error flag', () => {
        expect(store.state.restaurants.loadError).toEqual(true);
      });
    });
  });
});
