<template>
    <div class="contenedor">
    <componente-formulario />
    <componente-tabla :users="formularioStore.usuarios"/>
</div>
</template>

<script>
import ComponenteFormulario from './components/ComponenteFormulario.vue';
import ComponenteTabla from './components/ComponenteTabla.vue';
import formularioStore from '@/stores/formularioStore'

export default {
    name: "App",
    components: {
        ComponenteFormulario,
        ComponenteTabla,
    },
    data: () => ({
        formularioStore
    })
}
</script>

<style scoped>

</style>