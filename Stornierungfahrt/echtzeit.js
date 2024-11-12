// Bei der Stornierung eine Nachricht an alle relevanten Benutzer senden
io.emit('rideCancelled', {
    rideId: ride.rideId,
    message: 'Die Fahrt wurde storniert.',
  });
  