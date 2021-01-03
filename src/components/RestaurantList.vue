<template>
  <OrderList v-model="restaurants" dataKey="id">
    <template #item="slotProps">
      <span data-testid="restaurant">
        {{ slotProps.item.name }}
      </span>
    </template>
  </OrderList>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import OrderList from 'primevue/orderlist';

export default {
  name: 'RestaurantList',
  components: {
    OrderList,
  },

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
