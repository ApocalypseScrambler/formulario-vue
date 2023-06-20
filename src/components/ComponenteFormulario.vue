<template>
  <form @submit.prevent="formularioStore.submitFormulario()">

    <h1>Formulario</h1>

    <componente-nombre />
    <componente-apellido />
    <componente-telefono />
    <componente-mail />
    <componente-pasword />
    
    <p>* Estos campos son obligatorios.</p>
    <button type="submit">Enviar</button>

  </form>
</template>

<script>

import componenteNombre from './inputs/ComponenteNombre.vue';
import formularioStore from '@/stores/FormularioStore'
import ComponenteApellido from './inputs/ComponenteApellido.vue';
import ComponenteMail from './inputs/ComponenteMail.vue';
import ComponentePasword from './inputs/ComponentePasword.vue';
import ComponenteTelefono from './inputs/ComponenteTelefono.vue';

export default {

  name: 'ComponenteFormulario',

  components: {
    componenteNombre,
    ComponenteApellido,
    ComponenteMail,
    ComponentePasword,
    ComponenteTelefono
  },

  data: () => ({
    formularioStore
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

h1, p {
  text-align: center;
}
</style>