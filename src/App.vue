<template>
  <v-app>
    <!-- Deine anderen Layouts -->

    <!-- Hier wird die Chat-Komponente eingebunden -->
    <Chat />

    <!-- Deine anderen Komponenten hier -->
  </v-app>
</template>

<script>
// Importiere die Chat-Komponente
import Chat from './components/Chat.vue';

export default {
  name: 'App',
  components: {
    Chat, // Registriere die Chat-Komponente
  },
};
</script>

<style>
/* Deine Styles hier */
</style>
