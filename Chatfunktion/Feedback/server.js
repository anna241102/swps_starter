const mongoose = require("mongoose"); // Falls noch nicht hinzugefügt
const express = require("express");
const app = express();
app.use(express.json()); // Erlaubt JSON-Parsing

// Feedback-Schema und -Modell
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// Endpunkt für das Absenden von Feedback
app.post("/feedback", async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.status(201).send(feedback);
});

// Endpunkt für das Abrufen aller Feedbacks
app.get("/feedback", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.send(feedbacks);
});

app.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});
