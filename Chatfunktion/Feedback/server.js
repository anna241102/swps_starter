const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Wenn ein Client verbunden ist
io.on('connection', (socket) => {
  console.log('Ein Benutzer ist verbunden.');

  // Wenn der Client eine Nachricht sendet
  socket.on('sendMessage', (message) => {
    console.log('Nachricht empfangen:', message);
    io.emit('receiveMessage', message); // Sende Nachricht an alle Clients
  });

  // Wenn ein Client die Verbindung trennt
  socket.on('disconnect', () => {
    console.log('Benutzer hat sich getrennt');
  });
});

server.listen(3000, () => {
  console.log('Server läuft auf http://localhost:3000');
});
