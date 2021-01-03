<template>
  <div>RestaurantList</div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'RestaurantList',

  setup() {
    const store = useStore();

    const loadRestaurants = () => store.dispatch('restaurants/load');

    onMounted(() => {
      loadRestaurants();
    });
  },
};
</script>
