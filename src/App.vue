<template>
  <v-app :dark="isDarkTheme">
    <SettingsMenu />
    <!-- Weitere Komponenten -->
  </v-app>
</template>

<script>
import SettingsMenu from './components/SettingsMenü.vue';

export default {
  components: {
    SettingsMenu,
  },
  data() {
    return {
      isDarkTheme: localStorage.getItem("theme") === "Dunkel",
    };
  },
  watch: {
    // Überwachung des Themes für automatische Aktualisierung
    isDarkTheme(newValue) {
      this.$vuetify.theme.dark = newValue;
    },
  },
  created() {
    // Theme initialisieren
    this.isDarkTheme = localStorage.getItem("theme") === "Dunkel";
  },
};
</script>
