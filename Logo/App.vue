<template>
    <div id="app">
      <!-- Hier wird nur das LogoComponent eingebunden -->
      <LogoComponent />
    </div>
  </template>
  
  <script>
  // Hier importierst du nur das LogoComponent
  import LogoComponent from './components/LogoComponent.vue';
  
  export default {
    name: 'App',
    components: {
      LogoComponent,
    },
  };
  </script>
  
  <style>
  /* Optional: Falls du der App ein wenig Styling hinzufügen möchtest */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 20px;
  }
  </style>