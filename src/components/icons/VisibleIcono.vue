<template>
    <svg viewBox="2 0 20.423 16.903" width="20.423" height="16.903" fill="none">
   <path d="M12 7C7.60743 7 4.49054 10.5081 3.41345 11.9208C3.15417 12.2609 3.17881 12.7211 3.4696 13.0347C4.66556 14.3243 8.01521 17.5 12 17.5C15.9848 17.5 19.3344 14.3243 20.5304 13.0347C20.8212 12.7211 20.8458 12.2609 20.5865 11.9208C19.5095 10.5081 16.3926 7 12 7Z" 
     stroke="#555" stroke-width="2"></path>
   <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#555"></path>
   <line :style="{ stroke: lineShadow }" style="stroke-linecap: round; stroke-width: 2px; paint-order: stroke;" x1="4.636" y1="6.095" x2="18.284" y2="19.83"></line>
   <line :style="{ stroke: lineStyle }" style="stroke-linecap: round; stroke-width: 2.5px;" x1="5.995" y1="4.657" x2="19.643" y2="18.392"></line>
  </svg>
  </template>
  
  <script>
  
  export default {
  
   props: {
     visible: Boolean
   },
  
   computed: {
     lineShadow() {
       return this.visible ? 'snow' : 'transparent'
     },
     lineStyle() {
       return this.visible ? '#555' : 'transparent'
     }
   }
  }
  </script>
  
  <style scoped>
    svg {
      fill: rgba(0,0,0,0);
      width: 1.5rem;
      height: 1.6rem;
    }
  </style>