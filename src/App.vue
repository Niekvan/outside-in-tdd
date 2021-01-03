<template>
  <Menubar>
    <template #start>
      Opinion Ate
    </template>
  </Menubar>
  <RestaurantScreen />
</template>

<script>
import Menubar from 'primevue/menubar';
import RestaurantScreen from '@/components/RestaurantScreen';

export default {
  name: 'App',
  components: { RestaurantScreen, Menubar },
};
</script>
