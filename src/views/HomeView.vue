<template>
  <Login />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Login from '../views/Login.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Login,
  },
});
</script>
