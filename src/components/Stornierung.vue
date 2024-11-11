<template>
    <v-dialog v-model="dialogVisible" max-width="400px">
      <v-card>
        <v-card-title class="headline">Fahrt stornieren</v-card-title>
        <v-card-text>
          <v-textarea
            label="Grund für die Stornierung"
            v-model="cancellationReason"
            outlined
            rows="3"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="cancelRide">Abbrechen</v-btn>
          <v-btn color="red" @click="confirmCancellation">Stornieren</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
    <!-- Button zur Anzeige der Stornierungsoptionen -->
    <v-btn color="red" @click="dialogVisible = true">Fahrt stornieren</v-btn>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialogVisible: false,
        cancellationReason: "",
      };
    },
    methods: {
      confirmCancellation() {
        if (this.cancellationReason.trim() === "") {
          this.$toast.error("Bitte geben Sie einen Grund für die Stornierung an.");
          return;
        }
  
        // API-Aufruf zur Stornierung der Fahrt
        this.$axios
          .post("/cancel-ride", {
            rideId: this.$route.params.rideId, // Fahrt-ID aus der URL oder einem anderen Zustand holen
            userId: this.$store.state.userId, // Benutzer-ID aus dem Store
            reason: this.cancellationReason,
          })
          .then(response => {
            this.$toast.success("Fahrt erfolgreich storniert");
            this.dialogVisible = false; // Dialog schließen
          })
          .catch(error => {
            this.$toast.error("Fehler beim Stornieren der Fahrt.");
          });
      },
      cancelRide() {
        this.dialogVisible = false; // Dialog schließen, ohne etwas zu tun
      }
    }
  };
  </script>
  