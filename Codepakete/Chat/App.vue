<script>
import ChatComponent from './components/ChatComponent.vue';  // Importiere den neuen Namen

export default {
  name: 'App',
  components: {
    ChatComponent,  // Registrierung des neuen Namens
  },
};
</script>

<template>
  <v-app>
    <ChatComponent />  <!-- Verwenden der neuen Komponente -->
  </v-app>
</template>
