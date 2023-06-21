<template>
    <div class="contenedor">

        <i class="icono">
            <PassIcono />
        </i>

        <input :type="inputType" v-model="password" placeholder="Password" />

        <span>*</span>

        <visible-icono class="visible" :visible="visible" @click.native="visible = !visible" />

        <componente-tooltip v-show="error" :error="error" />
        
    </div>
</template>
  
<script>
import PassIcono from '../icons/PassIcono.vue'
import VisibleIcono from '../icons/VisibleIcono.vue'
import ComponenteTooltip from '../ComponenteTooltip.vue'

import formularioStore from '@/stores/formularioStore'

export default {
    name: 'ComponentePassword',

    components: {
        PassIcono,
        VisibleIcono,
        ComponenteTooltip,
        PassIcono
    },

    data: () => ({
        formularioStore,
        visible: false
    }),

    computed: {
        error() {
            return (
                this.formularioStore.erroresPassword().campoVacio() ||
                this.formularioStore.erroresPassword().passwordInvalido()
            )
        },
        inputType() {
            return this.visible ? 'text' : 'password'
        },
        password: {
            get() {
                return this.formularioStore.formulario.password
            },
            set(nuevoValor) {
                this.formularioStore.nuevoValor('password', nuevoValor)
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

.visible {
    position: absolute;
    right: 7px;
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