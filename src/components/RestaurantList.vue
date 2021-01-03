<template>
  <ul>
    <li
      :key="restaurant.id"
      v-for="restaurant in restaurants"
      data-testid="restaurant"
    >
      {{ restaurant.name }}
    </li>
  </ul>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'RestaurantList',

  setup() {
    const store = useStore();

    const loadRestaurants = () => store.dispatch('restaurants/load');
    const restaurants = computed(() => store.state.restaurants.records);

    onMounted(() => {
      loadRestaurants();
    });

    return {
      restaurants,
    };
  },
};
</script>
