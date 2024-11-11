<template>
  <v-container fluid>
    <v-card>
      <v-card-title class="headline">Karte von Bayreuth</v-card-title>
      <v-card-text>
        <div id="map" class="map"></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "MapComponent",
  mounted() {
    // Initialisierung der Karte
    this.map = L.map("map").setView([49.945639, 11.571331], 10);

    // Hinzufügen von OpenStreetMap-Kartenlayer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap contributors"
    }).addTo(this.map);

    // Setze einen Marker auf den Startort Bayreuth
    L.marker([49.945639, 11.571331]).addTo(this.map)
      .bindPopup("Bayreuth")
      .openPopup();
  },
  data() {
    return {
      map: null
    };
  }
};
</script>

<style>
.map {
  height: 500px;
  width: 100%;
}
</style>
