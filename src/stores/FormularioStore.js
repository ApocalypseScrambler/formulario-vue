export default {

    // STATE
    form: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
  
    // Booleano para mostrar mensajes de error
    // si el usuario cliqueó en enviar pero no lo completó bien
    submitted: false,
  
    // Array para guardar los formularios completados
    users: [],
  
    // ACTIONS
    submitForm() {
      this.submitted = true
    },
  
    resetForm() {
      // Para resetear el formulario hay que hacer 
      // que todos los keys del objeto this.form 
      Object.keys(this.form).forEach(key => this.form[key] = '')
      this.submitted = false
    }
  }