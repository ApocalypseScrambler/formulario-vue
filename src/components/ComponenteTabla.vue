<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Mail</th>
                <th scope="col">Contraseña</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, i) in users" :key="i">
                <td scope="row">{{ user.nombre }}</td>
                <td>{{ user.apellido }}</td>
                <td>{{ user.telefono }}</td>
                <td>{{ user.mail }}</td>
                <td>{{ user.contraseña }}</td>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
export default {
    name: 'componenteTabla',
    props: {
        users: Array
    },

}
</script>