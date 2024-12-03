<!-- Logo.vue -->
<template>
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Grüner Kreis -->
      <circle cx="100" cy="100" r="95" stroke="green" stroke-width="10" fill="none" />
  
      <!-- Auto -->
      <g fill="white" stroke="black" stroke-width="4">
        <rect x="60" y="80" width="80" height="40" rx="10" ry="10"/>
        <rect x="70" y="70" width="60" height="30" rx="5" ry="5"/>
        <!-- Fenster -->
        <rect x="75" y="75" width="20" height="15" fill="black" />
        <rect x="105" y="75" width="20" height="15" fill="black" />
        <!-- Räder -->
        <circle cx="75" cy="130" r="10" fill="white" />
        <circle cx="125" cy="130" r="10" fill="white" />
      </g>
  
      <!-- Straße -->
      <path d="M40 160 C80 120, 120 120, 160 160" fill="none" stroke="darkgreen" stroke-width="15" />
      <!-- Mittelstreifen der Straße -->
      <path d="M45 160 C80 125, 120 125, 155 160" fill="none" stroke="white" stroke-width="5" stroke-dasharray="10,10" />
    </svg>
  </template>
  
  <script>
  export default {
    name: 'LogoPendlr'
  }
  </script>
  
  <style scoped>
  /* Optional: Styles nur für das Logo */
  </style>