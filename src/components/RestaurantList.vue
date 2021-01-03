<template>
  <Message
    v-if="loadError"
    severity="error"
    :closable="false"
    data-testid="loading-error"
    >Restaurants could not be loaded</Message
  >
  <ProgressSpinner v-if="loading" data-testid="loading-indicator" />
  <OrderList v-else v-model="restaurants" dataKey="id">
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

import Message from 'primevue/message';
import OrderList from 'primevue/orderlist';
import ProgressSpinner from 'primevue/progressspinner';

export default {
  name: 'RestaurantList',
  components: {
    Message,
    OrderList,
    ProgressSpinner,
  },

  setup() {
    const store = useStore();

    const loading = computed(() => store.state.restaurants.loading);
    const loadError = computed(() => store.state.restaurants.loadError);
    const restaurants = computed(() => store.state.restaurants.records);

    const loadRestaurants = () => store.dispatch('restaurants/load');

    onMounted(() => {
      loadRestaurants();
    });

    return {
      restaurants,
      loading,
      loadError,
    };
  },
};
</script>
