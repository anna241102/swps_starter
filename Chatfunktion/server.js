const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Clients verwalten
let users = {};

io.on('connection', (socket) => {
  console.log('Ein Benutzer hat sich verbunden');

  // Wenn ein Benutzer eine Nachricht sendet
  socket.on('sendMessage', (message) => {
    console.log('Nachricht empfangen:', message);
    // Nachricht an alle Clients senden
    io.emit('receiveMessage', message);
  });

  // Wenn ein Benutzer sich trennt
  socket.on('disconnect', () => {
    console.log('Ein Benutzer hat sich getrennt');
  });
});

// Server starten
server.listen(3000, () => {
  console.log('Server läuft auf http://localhost:3000');
});
