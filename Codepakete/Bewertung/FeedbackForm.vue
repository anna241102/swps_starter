<template>
    <v-container>
      <v-form v-model="isFormValid" @submit.prevent="submitFeedback">
        <v-text-field v-model="feedback.name" label="Name" required></v-text-field>
        <v-text-field v-model="feedback.email" label="Email" required></v-text-field>
        <v-textarea v-model="feedback.message" label="Feedback" required></v-textarea>
  
        <v-btn :disabled="!isFormValid" color="primary" @click="submitFeedback">Feedback absenden</v-btn>
      </v-form>
  
      <v-alert v-if="successMessage" type="success">{{ successMessage }}</v-alert>
      <v-alert v-if="errorMessage" type="error">{{ errorMessage }}</v-alert>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        isFormValid: false,
        feedback: {
          name: '',
          email: '',
          message: ''
        },
        successMessage: '',
        errorMessage: ''
      };
    },
    methods: {
      async submitFeedback() {
        try {
          await axios.post("http://localhost:3000/feedback", this.feedback);
          this.successMessage = "Feedback erfolgreich gesendet!";
          this.errorMessage = '';
          this.feedback = { name: '', email: '', message: '' }; // Formular zurücksetzen
        } catch (error) {
          this.errorMessage = "Fehler beim Absenden des Feedbacks.";
          this.successMessage = '';
        }
      }
    }
  };
  </script>