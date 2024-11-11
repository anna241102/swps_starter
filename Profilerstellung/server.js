const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MongoDB-Verbindung herstellen
mongoose.connect("mongodb://localhost:27017/pendlerapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Benutzerschema und -modell
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String, // "Student" oder "Mitarbeiter"
  university: String,
});

const User = mongoose.model("User", userSchema);

// Endpunkt für das Erstellen eines neuen Benutzers
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

// Endpunkt für das Abrufen aller Benutzer
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});
