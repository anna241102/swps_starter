<template>
    <v-container>
      <v-form>
        <!-- Spracheinstellung -->
        <v-select
          v-model="settings.language"
          :items="languages"
          label="Sprache"
          @change="updateSettings"
        ></v-select>
  
        <!-- Theme-Auswahl -->
        <v-select
          v-model="settings.theme"
          :items="themes"
          label="Theme"
          @change="updateSettings"
        ></v-select>
  
        <!-- Benachrichtigungen -->
        <v-switch
          v-model="settings.notifications"
          label="Benachrichtigungen aktivieren"
          @change="updateSettings"
        ></v-switch>
  
        <!-- Standortfreigabe -->
        <v-switch
          v-model="settings.locationAccess"
          label="Standortfreigabe"
          @change="updateSettings"
        ></v-switch>
  
        <!-- Datenschutz-Einstellungen -->
        <v-switch
          v-model="settings.dataTracking"
          label="Personalisierte Werbung"
          @change="updateSettings"
        ></v-switch>
  
        <!-- Schaltfläche zum Zurücksetzen der Einstellungen -->
        <v-btn color="red" @click="resetSettings">Einstellungen zurücksetzen</v-btn>
      </v-form>
  
      <!-- Erfolgsmeldung -->
      <v-alert v-if="successMessage" type="success">{{ successMessage }}</v-alert>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        settings: {
          language: localStorage.getItem("language") || "Deutsch",
          theme: localStorage.getItem("theme") || "Hell",
          notifications: JSON.parse(localStorage.getItem("notifications")) || false,
          locationAccess: JSON.parse(localStorage.getItem("locationAccess")) || false,
          dataTracking: JSON.parse(localStorage.getItem("dataTracking")) || false,
        },
        languages: ["Deutsch", "Englisch", "Französisch", "Spanisch"],
        themes: ["Hell", "Dunkel"],
        successMessage: "",
      };
    },
    methods: {
      updateSettings() {
        // Speichern der Einstellungen im localStorage
        localStorage.setItem("language", this.settings.language);
        localStorage.setItem("theme", this.settings.theme);
        localStorage.setItem("notifications", JSON.stringify(this.settings.notifications));
        localStorage.setItem("locationAccess", JSON.stringify(this.settings.locationAccess));
        localStorage.setItem("dataTracking", JSON.stringify(this.settings.dataTracking));
        
        // Erfolgsmeldung anzeigen
        this.successMessage = "Einstellungen gespeichert!";
        setTimeout(() => {
          this.successMessage = "";
        }, 2000);
      },
      resetSettings() {
        // Einstellungen zurücksetzen
        localStorage.clear();
        this.settings = {
          language: "Deutsch",
          theme: "Hell",
          notifications: false,
          locationAccess: false,
          dataTracking: false,
        };
        this.successMessage = "Einstellungen wurden zurückgesetzt!";
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optionales CSS für Anpassungen */
  </style>
  