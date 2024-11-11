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
    this.socket = io('http://localhost:3000');  // Stelle sicher, dass der Server-URL korrekt ist

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
          user: 'Benutzer', // Dein Benutzername, wenn dynamisch, anpassen
          text: this.newMessage,
        };
        this.socket.emit('sendMessage', message); // Sende Nachricht an Server
        this.newMessage = ''; // Eingabefeld leeren
      }
    },
  },
};
