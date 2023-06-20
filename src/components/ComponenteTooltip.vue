<template>
    <div class="tooltip" v-if="error">
      <p>{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
  
    name: 'ComponenteTooltip',
  
    props: {
      error: String
    }
  }
  </script>
  
  <style scoped>
  
  .tooltip {
    min-width: 16rem; 
    top: -0.5rem;
    left: 20rem;
    transform: translate(-50%, -100%);
    padding: 0.5rem 1rem;
    background-color: #cc0000;
    border-radius: 5px;
    position: absolute;
    z-index: 100;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
  }
  
  .tooltip > p {
    color: snow;
    font-size: 1rem;
  }
  
  /* Flecha del Tooltip */
  .tooltip::after {
    content: '';
    position: absolute;
    top: 100%; /* Por debajo del Tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 0.5rem;
    border-style: solid;
    border-color: #cc0000 transparent transparent transparent;
  }
  
  </style>