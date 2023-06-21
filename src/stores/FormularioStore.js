import validacionClase, { ValidacionMail, ValidacionPassword, ValidacionTelefono } from './validacionesClase'

export default {
  formulario: {
    nombre: "",
    apellido: "",
    telefono: "",
    mail: "",
    password: "",
  },

  submitted: false,

  usuarios: [],
 
  erroresNombre() {
    return new validacionClase(this.formulario.nombre, this.submitted)
  },
  erroresApellido() {
    return new validacionClase(this.formulario.apellido, this.submitted)
  },
  erroresMail() {
    return new ValidacionMail(this.formulario.mail, this.submitted)
  },
  erroresPassword() {
    return new ValidacionPassword(this.formulario.password, this.submitted)
  },
  erroresTelefono() {
    return new ValidacionTelefono(this.formulario.telefono, this.submitted)
  },
  
  controloCampos() {
    return (
      this.erroresNombre().sinErrores() &&
      this.erroresApellido().sinErrores() &&
      this.erroresMail().mailSinErrores() &&
      this.erroresPassword().sinErroresPassword() &&
      this.erroresTelefono().telefonoSinErrores()
    );
  },

  submitFormulario() {
    this.submitted = true
    if (this.controloCampos()) {
      this.usuarios.push({ ...this.formulario })
      this.resetFormulario()
    } else {
      window.scroll(0, 0)
    }
  },

  nuevoValor(campo, nuevoValor) {
    this.formulario[campo] = nuevoValor;
  },

  resetFormulario() {
    Object.keys(this.formulario).forEach((key) => (this.formulario[key] = ""));
    this.submitted = false;
  },
};
