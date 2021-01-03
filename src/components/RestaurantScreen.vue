<template>
  <Card>
    <template #title>
      Restaurants
    </template>
    <template #content>
      <NewRestaurantForm />
      <RestaurantList />
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card';

import NewRestaurantForm from '@/components/NewRestaurantForm';
import RestaurantList from '@/components/RestaurantList';

export default {
  name: 'RestaurantScreen',
  components: { Card, NewRestaurantForm, RestaurantList },
};
</script>
