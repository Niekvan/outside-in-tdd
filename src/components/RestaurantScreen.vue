<template>
  <Card>
    <template #title>
      Restaurants
    </template>
    <template #content>
      <RestaurantList />
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card';

import RestaurantList from '@/components/RestaurantList';

export default {
  name: 'RestaurantScreen',
  components: { Card, RestaurantList },
};
</script>
