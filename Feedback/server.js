// server.js
const express = require("express"); //express ermöglicht es, einen Webserver zu erstellen, der HTTP Anfragen bearbeiten kann
const bodyParser = require("body-parser"); //bodyParser ist die Middleware, die die im HTTP-Request Body gesendeten Daten verarbeiten kann
const nodemailer = require("nodemailer"); //nodemailer ist ein Modul, dass für den Versand von E-Mails verwendet wird
require("dotenv").config(); // Für Umgebungsvariablen

const app = express(); // erstellt eine neue Express-Anwendung
const PORT = 3000; // Port, auf dem der Server läuft

// Middleware zum Verarbeiten von JSON-Daten
app.use(bodyParser.json());

// POST-Route für Feedback
app.post("/send-feedback", async (req, res) => {
  const { positiveFeedback, improvementFeedback } = req.body;

  if (!positiveFeedback || !improvementFeedback) {
    return res.status(400).send("Bitte fülle beide Felder aus.");
  }

  // Transporter für den E-Mail-Versand einrichten
  const transporter = nodemailer.createTransport({
    service: "gmail", // Hier kannst du deinen E-Mail-Anbieter angeben (z. B. Gmail)
    auth: {
      user: process.env.EMAIL_USER, // E-Mail-Adresse aus Umgebungsvariablen
      pass: process.env.EMAIL_PASS, // Passwort aus Umgebungsvariablen
    },
  });

  // E-Mail-Optionen festlegen
  const mailOptions = {
    from: process.env.EMAIL_USER, // Absender-E-Mail-Adresse
    to: "admin-email@example.com", // Empfänger-E-Mail-Adresse
    subject: "Neues Feedback zur App",
    text: `Positives Feedback:\n${positiveFeedback}\n\nVerbesserungsvorschläge:\n${improvementFeedback}`,
  };

  try {
    // E-Mail senden
    await transporter.sendMail(mailOptions);
    res.status(200).send("Feedback erfolgreich gesendet!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Es gab ein Problem beim Versenden des Feedbacks.");
  }
});

// Startet Server
app.listen(PORT, () => {// bindet Sever an Port, sobald dieser läuft, wird eine Nachricht im Terminal ausgegeben
  console.log(`Server läuft auf http://localhost:${PORT}`);
});