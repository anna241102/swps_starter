<template>
  <v-app>
    <FeedbackForm />
  </v-app>
</template>

<script>
import Chat from './components/Chat.vue';

export default {
  name: 'App',
  components: {
    Chat // Hier wird die Chat-Komponente registriert
  },
};

</script>
