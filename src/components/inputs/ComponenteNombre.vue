<template>
    <div>
  
      <!-- Al importar el ícono SVG como un componente
      el markup es mucho más claro 🙂️ -->
  
      <i><UserIcon/></i>
  
      <input
        type="text" 
        v-model="formStore.form.firstname" 
        placeholder="Nombre(s)"
      />
      <span>*</span>
  
      <pre>{{ formStore.form.firstname }}</pre>
  
    </div>
  </template>
  
  <script>
  import UserIcon from '../icons/UserIcon.vue'
  import formStore from '@/stores/formStore'
  
  export default {
  
    name: 'FirstNameInput',
  
    components: {
      UserIcon
    },
  
    data: () => ({
      formStore
    })
  }
  </script>