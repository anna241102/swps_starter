<template>
    <div class="rating">
      <span
        v-for="star in 5"
        :key="star"
        :class="{ filled: star <= rating }"
        @click="setRating(star)"
      >
        ★
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: "RatingComponent",
    data() {
      return {
        rating: 0, // Die aktuelle Bewertung
      };
    },
    methods: {
      setRating(star) {
        this.rating = star; // Setzt die Bewertung basierend auf dem angeklickten Stern
      },
    },
  };
  </script>
  
  <style scoped>
  .rating {
    font-size: 2em;
    color: #ccc; /* Standardfarbe der Sterne */
    cursor: pointer;
  }
  .filled {
    color: #ffd700; /* Goldene Farbe für ausgefüllte Sterne */
  }
  </style>