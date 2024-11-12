<template>
  <v-app>
    <!-- Deine anderen Layouts und Komponenten hier -->

    <!-- Hier wird die Stornierungs-Komponente eingebunden -->
    <CancelRide />

    <!-- Deine anderen Komponenten hier -->
  </v-app>
</template>

<script>
// Importiere die CancelRide-Komponente
import CancelRide from './components/CancelRide.vue';

export default {
  name: 'App',
  components: {
    CancelRide, // Registriere die Komponente für die Verwendung
  },
};
</script>

<style>
/* Deine bestehenden Styles */
</style>
