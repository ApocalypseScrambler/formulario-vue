<template>
  <form @submit.prevent="formularioStore.submitForm()">

    <h1>Formulario</h1>

    <componente-nombre />

    <button type="submit">Enviar</button>

  </form>
</template>

<script>

import componenteNombre from './inputs/ComponenteNombre.vue';
import formularioStore from '@/stores/FormularioStore'

export default {

  name: 'ComponenteFormulario',

  components: {
    componenteNombre
  },

  data: () => ({
    formularioStore // Insertamos el objeto formStore en data
  })
}

</script>

<style scoped>
button {
  margin: 1rem;
  width: 90%;
  border: none;
  background-color: #101010;
  color: snow;
  font-weight: 700;
  border-radius: 8px;
  padding: 1rem 2rem;
}
</style>