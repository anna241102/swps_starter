import Chat from './components/Chat.vue';
<template>
  <v-app>
    <!-- Andere Layout-Komponenten hier -->

    <!-- Chat-Komponente hier einfügen -->
    <Chat />

    <!-- Weitere Komponenten hier -->
  </v-app>
</template>
<script>
import Chat from './components/Chat.vue';

export default {
  name: 'App',
  components: {
    Chat,  // Hier wird die Chat-Komponente registriert
  },
};
</script>
