<template>
  <v-app>
    <v-main>
      <v-container>
        <MapComponent />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MapComponent from "./components/MapComponent.vue";

export default {
  name: "App",
  components: {
    MapComponent,
  },
};
</script>
