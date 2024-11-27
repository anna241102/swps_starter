<!-- Feedback.vue -->
<template>
    <div class="feedback-form">
      <h2>Feedback geben</h2> <!--Überschrift-->
      <form @submit.prevent="submitFeedback">
        <div class="form-group">
          <label for="positiveFeedback">Was gefällt dir gut an der App?</label> <!--Erstes Textfeld-->
          <textarea 
            id="positiveFeedback"
            v-model="positiveFeedback"
            placeholder="Dein Feedback..."
            required 
          ></textarea> 
        </div>
        <div class="form-group">
          <label for="improvementFeedback">Was können wir verbessern?</label> <!--Zweites Textfeld-->
          <textarea
            id="improvementFeedback"
            v-model="improvementFeedback"
            placeholder="Dein Feedback..."
            required
          ></textarea>
        </div>
        <button type="submit">Abschicken</button> <!--einfacher Button, der das Formular absendet-->
      </form>
    </div>
  </template>
  
  <script> 
  import axios from 'axios'; //Javascript-Framework für HTTps-Request wid importiert für den Versand vo Daten an ein Backend
  
  export default {
    name: "Feedback",
    data() { // speichert Feedback, was dem Benutzer gut gefällt und Verbesserugsvorschläge
      return {
        positiveFeedback: "",
        improvementFeedback: "",
      };
    },
    methods: { 
      async submitFeedback() {
        try {
          // Beispiel-Backend-URL, die die Daten verarbeitet und die E-Mail sendet
          const backendUrl = "https://your-backend.com/send-feedback";
  
          // Sende Feedback-Daten an das Backend
          const response = await axios.post(backendUrl, {
            positiveFeedback: this.positiveFeedback,
            improvementFeedback: this.improvementFeedback,
          });
  
          if (response.status === 200) { // Wenn der Server erfolgreich antwotet wird eine Dankesnachricht angezeigt
            alert("Vielen Dank für dein Feedback!");
            this.positiveFeedback = "";
            this.improvementFeedback = "";
          } else {
            throw new Error("Feedback konnte nicht gesendet werden."); // sonst wird bei einem Fehler eine Fehlermeldng angezeigt
          }
        } catch (error) {
          alert("Es gab ein Problem beim Senden deines Feedbacks. Bitte versuche es später erneut."); //Fehlermeldung bei Problem (z.B. Netzwerkfehler) angezeigt
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <!--zentriet das Formular und begrenzt die Breite auf 500px-->
  <style scoped> 
  .feedback-form { 
    max-width: 500px;
    margin: 0 auto;
  }
  
  <!--Fügt Abstände zwischen den Formulafeldern hinzu-->
  .form-group { 
    margin-bottom: 20px;
  }
  
  
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>