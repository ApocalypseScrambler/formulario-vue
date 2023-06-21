<template>
    <div class="contenedor">

        <i class="icono">
            <celularIcono />
        </i>

        <input type="phone" v-model="telefono" placeholder="Teléfono" />
        <span>*</span>

        <componente-tooltip v-show="error" :error="error" />

    </div>
</template>
    
<script>
import celularIcono from '../icons/CelularIcono.vue'
import formularioStore from '@/stores/formularioStore'
import ComponenteTooltip from '../ComponenteTooltip.vue'

export default {

    name: 'ComponenteTelefono',

    components: {
        celularIcono,
        ComponenteTooltip
    },

    data: () => ({
        formularioStore
    }),
    computed: {
        error() {
            return (
                this.formularioStore.erroresTelefono().campoVacio() ||
                this.formularioStore.erroresTelefono().telefonoInvalido()
            )
        },
        telefono: {
            get() {
                return this.formularioStore.formulario.telefono
            },
            set(nuevoValor) {
                this.formularioStore.nuevoValor('telefono', nuevoValor)
            }
        }
    }
}
</script>
  
<style scoped>
.contenedor {
    position: relative;
    margin: 2rem 2rem 0.4rem;
    width: 80%;
}

input {
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