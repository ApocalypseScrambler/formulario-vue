<template>
  <div class="contenedor-nombre">

    <!-- Al importar el ícono SVG como un componente
      el markup es mucho más claro 🙂️ -->

    <i class="icono">
      <usuarioIcono />
    </i>

    <input class="input-nombre" type="text" v-model="nombre" placeholder="Nombre(s)" />
    <span>*</span>

    <componente-tooltip v-show="error" :error="error" />

    <pre>{{ formularioStore.form.nombre }}</pre>
  </div>
</template>
  
<script>
import usuarioIcono from '../icons/UsuarioIcono.vue'
import formularioStore from '@/stores/FormularioStore'
import ComponenteTooltip from '../ComponenteTooltip.vue'

export default {

  name: 'ComponenteNombre',

  components: {
    usuarioIcono,
    ComponenteTooltip
  },

  data: () => ({
    formularioStore
  }),
  computed: {
    error() {
      return (
        this.formularioStore.emptyField() ||
        this.formularioStore.tooShort() ||
        this.formularioStore.tooLong() ||
        this.formularioStore.invalidChars()
      )
    },
    nombre: {
      get() {
        return this.formularioStore.form.nombre
      },
      set(nuevoValor) {
        this.formularioStore.setNewValue('nombre', nuevoValor)
      }
    }
  }
}
</script>

<style scoped>
.contenedor-nombre {
  position: relative;
  margin: 2rem 2rem 0.4rem;
  width: 80%;
}

.input-nombre {
  border-radius: 5px;
  width: 100%;
  line-height: 1rem;
  padding: 0.5rem 1rem 0.5rem 3rem;
  outline: none;
  font-size: 1rem;
  border: 1px solid lightgrey;
}

.icono {
  position: absolute;
  z-index: 1;
  border-right: 1px solid lightgrey;
  border-radius: 5px 0 0 5px;
  padding: 0.3rem 0.5rem 0.4rem;
}

span {
  position: absolute;
  margin: 0.5rem;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 700;
}
</style>