<template>
    <v-container>
      <v-form v-model="isFormValid" @submit.prevent="createUser">
        <v-text-field v-model="user.name" label="Name" required></v-text-field>
        <v-text-field v-model="user.email" label="Email" required></v-text-field>
        <v-select
          v-model="user.role"
          :items="['Student', 'Mitarbeiter']"
          label="Tätigkeit"
          required
        ></v-select>
        <v-select 
         v-model="user.university"
         :items="['Bayreuth', 'Kulmbach']"
         label="Universität"
         required ></v-select>

        <v-text-field v-model="user.auto" label="Auto" required></v-text-field>
        <v-text-field v-model="user.musikauswahl" label="Musikauswahl" required></v-text-field>

        <v-btn :disabled="!isFormValid" color="primary" @click="createUser">Speichern</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        isFormValid: false,
        user: {
          name: '',
          email: '',
          role: '',
          university: '',
          auto: '',
          musikauswahl: '',
        }
      };
    },
    methods: {
      async createUser() {
        try {
          await axios.post("http://localhost:3000/users", this.user);
          alert("Profil erfolgreich erstellt!");
          this.user = { name: '', email: '', role: '', university: '', auto: '', musikauswahl: '' }; // Formular zurücksetzen
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  