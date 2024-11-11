<template>
    <v-container>
      <v-form>
        <v-select
          v-model="settings.language"
          :items="languages"
          label="Sprache"
          @change="updateSettings"
        ></v-select>
  
        <!-- Weitere Einstellungsmöglichkeiten -->
        <v-switch
          v-model="settings.notifications"
          label="Benachrichtigungen"
          @change="updateSettings"
        ></v-switch>
      </v-form>
      <v-alert v-if="successMessage" type="success">{{ successMessage }}</v-alert>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        settings: {
          language: localStorage.getItem("language") || "Deutsch",
          notifications: JSON.parse(localStorage.getItem("notifications")) || false,
        },
        languages: ["Deutsch", "Englisch", "Chinesisch"],
        successMessage: '',
      };
    },
    methods: {
      updateSettings() {
        // Speichern der Einstellungen im localStorage
        localStorage.setItem("language", this.settings.language);
        localStorage.setItem("notifications", JSON.stringify(this.settings.notifications));
        this.successMessage = "Einstellungen gespeichert!";
        
        // Timer für die Meldung
        setTimeout(() => {
          this.successMessage = '';
        }, 2000);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optionale CSS-Anpassungen */
  </style>
  