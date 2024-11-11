<template>
    <v-container>
      <!-- Chat-Header -->
      <v-row>
        <v-col>
          <v-btn icon @click="toggleChat">
            <v-icon>{{ chatOpen ? 'mdi-close' : 'mdi-chat' }}</v-icon>
          </v-btn>
          <span v-if="chatOpen">Chat mit Fahrer</span>
        </v-col>
      </v-row>
  
      <!-- Chatfenster -->
      <v-dialog v-model="chatOpen" max-width="500px">
        <v-card>
          <v-card-title>
            <v-row>
              <v-col>
                <span>Chat mit Fahrer</span>
              </v-col>
              <v-col class="text-right">
                <v-btn icon @click="toggleChat">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
  
          <v-card-subtitle>
            <!-- Nachrichten anzeigen -->
            <div v-for="(msg, index) in messages" :key="index" class="message">
              <strong>{{ msg.user }}:</strong> {{ msg.text }}
            </div>
          </v-card-subtitle>
  
          <!-- Nachrichten-Eingabefeld -->
          <v-card-actions>
            <v-text-field
              v-model="newMessage"
              label="Nachricht eingeben"
              append-icon="mdi-send"
              @keyup.enter="sendMessage"
              outlined
              dense
            ></v-text-field>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  import io from 'socket.io-client';
  
  export default {
    data() {
      return {
        chatOpen: false,
        newMessage: '',
        messages: [],
        socket: null,
      };
    },
    created() {
      // Verbindung zum Server herstellen
      this.socket = io('http://localhost:3000');
  
      // Nachrichten empfangen
      this.socket.on('receiveMessage', (message) => {
        this.messages.push(message);
      });
    },
    methods: {
      toggleChat() {
        this.chatOpen = !this.chatOpen;
      },
      sendMessage() {
        if (this.newMessage.trim()) {
          const message = {
            user: 'Benutzer', // Kann dynamisch angepasst werden (z. B. Name des Benutzers)
            text: this.newMessage,
          };
          this.socket.emit('sendMessage', message);
          this.newMessage = ''; // Eingabefeld leeren
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .message {
    margin-bottom: 10px;
  }
  
  .v-btn {
    margin-right: 10px;
  }
  
  .v-card-title {
    font-weight: bold;
  }
  </style>
  