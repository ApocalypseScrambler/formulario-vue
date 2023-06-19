// Regular expression para letras con tildes y eñe:
const letrasRegEx = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;

export default {
  // STATE
  form: {
    nombre: "",
    apellido: "",
    mail: "",
    password: "",
  },

  // Booleano para mostrar mensajes de error
  // si el usuario cliqueó en enviar pero no lo completó bien
  submitted: false,

  // Array para guardar los formularios completados
  usuarios: [],

  // Validaciones

  emptyField() {
    // Si el usuario cliqueó en enviar pero no ingresó el nombre
    // retornar un mensaje de error
    if (this.submitted && !this.form.nombre)
      return "Este campo es obligatorio.";
    else return "";
  },

  tooShort() {
    // Si son menos de dos letras, mostrar error
    if (this.submitted && this.form.nombre && this.form.nombre.length < 2)
      return "El nombre debe contener al menos 2 letras.";
    else return "";
  },

  tooLong() {
    // Si son más de 20 letras, mostrar error
    if (
      this.submitted &&
      this.form.nombre &&
      this.form.nombre.length > 20
    )
      return "El nombre no debe contener más de 20 letras.";
    else return "";
  },

  invalidChars() {
    if (
      this.submitted &&
      this.form.nombre &&
      !letrasRegEx.test(this.form.nombre)
    )
      return "El nombre sólo debe contener letras.";
    else return "";
  },

  checkFields() {
    // Si no hay errores, retorna true
    return (
      !this.emptyField() &&
      !this.tooShort() &&
      !this.tooLong() &&
      !this.invalidChars()
    );
  },

  // ACTIONS
  submitForm() {
    this.submitted = true
    // Si no hay errores checkFields() retorna true
    // y se agrega el contenido del formulario al array de usuarios
    if (this.checkFields()) {
      this.usuarios.push({ ...this.form })
      this.resetForm()
    } else {
      // Si hay errores hace un scroll hacia arriba
      // para que el usuario vea los mensajes de error
      window.scroll(0, 0)
    }
  },

  // Setter para v-model
  setNewValue(field, newValue) {
    this.form[field] = newValue;
  },

  resetForm() {
    // Para resetear el formulario hay que hacer
    // que todos los keys del objeto this.form
    Object.keys(this.form).forEach((key) => (this.form[key] = ""));
    this.submitted = false;
  },
};
