const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let rides = [
  {
    rideId: '12345',
    driverId: '6789',
    passengerId: '9876',
    status: 'active',
    cancellationReason: null,
    cancelledAt: null
  }
];

app.post('/cancel-ride', (req, res) => {
  const { rideId, userId, reason } = req.body;

  let ride = rides.find(r => r.rideId === rideId);

  if (!ride) {
    return res.status(404).send('Fahrt nicht gefunden');
  }

  if (ride.driverId !== userId && ride.passengerId !== userId) {
    return res.status(403).send('Sie sind nicht berechtigt, diese Fahrt zu stornieren');
  }

  ride.status = 'cancelled';
  ride.cancellationReason = reason;
  ride.cancelledAt = new Date().toISOString();

  res.status(200).send('Fahrt erfolgreich storniert');
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
