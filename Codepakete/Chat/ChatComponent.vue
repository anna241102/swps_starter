<template>
  <v-container>
    <v-row>
      <v-col>
        <v-textarea
          label="Nachricht"
          v-model="newMessage"
          outlined
          rows="3"
        ></v-textarea>
        <v-btn @click="sendMessage">Senden</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(message, index) in messages" :key="index">
        <v-card class="mb-2" outlined>
          <v-card-text>{{ message }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ChatComponent',  // Mehrwortiger Name
  data() {
    return {
      newMessage: "",
      messages: []
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push(this.newMessage);
        this.newMessage = ""; // Eingabefeld zurücksetzen
      }
    }
  }
};
</script>

<style scoped>
/* Deine Chat-Komponenten-Stile */
</style>
