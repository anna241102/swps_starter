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
  import "leaflet-control-geocoder/dist/Control.Geocoder.js";
  import "leaflet-control-geocoder/dist/Control.Geocoder.css";
  
  export default {
    name: "MapComponent",
    data() {
      return {
        map: null,
        liveMarker: null,
        liveCircle: null,
      };
    },
    mounted() {
      // Initialisierung der Karte
      this.map = L.map("map").setView([49.945639, 11.571331], 10);
  
      // Hinzufügen von OpenStreetMap-Kartenlayer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "© OpenStreetMap contributors",
      }).addTo(this.map);
  
      // Suchfunktion oben rechts
      L.Control.geocoder({
        defaultMarkGeocode: false,
      })
        .on("markgeocode", (e) => {
          const center = e.geocode.center;
          L.marker(center).addTo(this.map).bindPopup(e.geocode.name).openPopup();
          this.map.setView(center, 14);
        })
        .addTo(this.map);
  
      // Live-Standort aktivieren
      this.enableLiveLocation();
    },
    methods: {
      enableLiveLocation() {
        if (!navigator.geolocation) {
          console.error("Geolocation wird von diesem Browser nicht unterstützt.");
          return;
        }
  
        // Live-Standort und Radius verfolgen
        navigator.geolocation.watchPosition(
          (position) => {
            const { latitude, longitude, accuracy } = position.coords;
  
            if (!this.map) return;
  
            // Wenn der Marker noch nicht existiert, erstellen wir ihn
            if (!this.liveMarker) {
              this.liveMarker = L.circleMarker([latitude, longitude], {
                radius: 8,
                color: "blue",
                fillColor: "blue",
                fillOpacity: 0.6,
              }).addTo(this.map);
  
              // Radius anzeigen
              this.liveCircle = L.circle([latitude, longitude], {
                radius: accuracy, // Genauigkeitsradius des Standorts
                color: "blue",
                fillColor: "blue",
                fillOpacity: 0.2,
              }).addTo(this.map);
  
              this.map.setView([latitude, longitude], 14);
            } else {
              // Aktualisiere Position von Marker und Radius
              this.liveMarker.setLatLng([latitude, longitude]);
              this.liveCircle.setLatLng([latitude, longitude]).setRadius(accuracy);
            }
          },
          (error) => {
            console.error("Fehler beim Abrufen des Standorts:", error);
          },
          { enableHighAccuracy: true }
        );
      },
    },
    beforeUnmount() {
      // Bereinige die Karte bei Zerstörung der Komponente
      if (this.map) {
        this.map.off();
        this.map.remove();
        this.map = null;
      }
    },
  };
  </script>
  
  <style>
  .map {
    height: 500px;
    width: 100%;
  }
  </style>
  