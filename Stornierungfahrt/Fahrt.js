// Beispiel einer API zum Stornieren einer Fahrt
app.post('/cancel-ride', (req, res) => {
    const { rideId, userId, reason } = req.body;
  
    // Suchen der Fahrt in der Datenbank
    let ride = database.find(ride => ride.rideId === rideId);
  
    if (!ride) {
      return res.status(404).send("Fahrt nicht gefunden");
    }
  
    // Überprüfen, ob der Benutzer berechtigt ist, die Fahrt zu stornieren
    if (ride.driverId !== userId && ride.passengerId !== userId) {
      return res.status(403).send("Sie sind nicht berechtigt, diese Fahrt zu stornieren");
    }
  
    // Fahrt stornieren
    ride.status = "cancelled";
    ride.cancellationReason = reason;
    ride.cancelledAt = new Date().toISOString();
  
    // Hier können Benachrichtigungen an Fahrer und Passagier gesendet werden
    sendNotification(ride.driverId, "Ihre Fahrt wurde storniert.");
    sendNotification(ride.passengerId, "Ihre Fahrt wurde storniert.");
  
    // Antwort zurückgeben
    res.status(200).send("Fahrt erfolgreich storniert");
  });
  
  // Beispiel für Benachrichtigungsfunktion
  function sendNotification(userId, message) {
    // Benachrichtigung an den Benutzer senden (z. B. per E-Mail, Push-Benachrichtigung oder Nachricht im System)
    console.log(`Benachrichtigung an Benutzer ${userId}: ${message}`);
  }
  