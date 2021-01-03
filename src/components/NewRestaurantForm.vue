<template>
  <form @submit.prevent="handleSave">
    <Message
      v-if="validationError"
      severity="error"
      data-testid="new-restaurant-name-error"
      :closable="false"
      >Name is required</Message
    >
    <Message
      v-if="serverError"
      severity="error"
      data-testid="new-restaurant-server-error"
      :closable="false"
      >The restaurant could not be saved. Please try again.</Message
    >
    <InputText
      placeholder="Add Restaurant"
      data-testid="new-restaurant-name-field"
      v-model="name"
    />
    <p-button
      label="Add"
      data-testid="new-restaurant-submit-button"
      type="submit"
    />
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';

export default {
  name: 'NewRestaurantForm',
  components: {
    InputText,
    'p-button': Button,
    Message,
  },

  setup() {
    const store = useStore();

    const name = ref('');
    const validationError = ref(false);
    const serverError = ref(false);

    const handleSave = async () => {
      if (name.value) {
        validationError.value = false;
        serverError.value = false;

        try {
          await store.dispatch('restaurants/create', name.value);
          name.value = '';
        } catch (error) {
          serverError.value = true;
        }
      } else {
        validationError.value = true;
      }
    };

    return {
      handleSave,
      name,
      validationError,
      serverError,
    };
  },
};
</script>
