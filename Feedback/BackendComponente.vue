// server.js
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// POST-Route für Feedback
app.post("/send-feedback", async (req, res) => {
  const { positiveFeedback, improvementFeedback } = req.body;

  // E-Mail-Konfiguration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com", // Deine E-Mail-Adresse
      pass: "your-email-password", // Dein E-Mail-Passwort
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "admin-email@example.com", // Verwaltungsemail
    subject: "Neues Feedback zur App",
    text: `Positives Feedback:\n${positiveFeedback}\n\nVerbesserungsvorschläge:\n${improvementFeedback}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Feedback erfolgreich gesendet!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Es gab ein Problem beim Versenden des Feedbacks.");
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});