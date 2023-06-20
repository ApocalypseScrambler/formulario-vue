const letrasRegEx = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;

export default class Validacion {

  constructor (input, submitted) {
    this.input = input
    this.submitted = submitted
  }

  campoVacio() {
    if (this.submitted && !this.input) return 'Este campo es obligatorio.'
    else return ''
  }
  
  demasiadoCorto() {
    if (
      this.submitted && 
      this.input && 
      this.input.length < 2
    ) return 'Este campo debe contener al menos 2 letras.'
    else return ''
  }

  demasiadoLargo() {
    if (
      this.submitted && 
      this.input && 
      this.input.length > 20
    ) return 'Este campo no debe tener más de 20 letras.'
    else return ''
  }

  caracteresInvalidos() {
    if (
      this.submitted && 
      this.input && 
      !letrasRegEx.test(this.input)
    ) return 'Este campo sólo debe contener letras.'
    else return ''
  }
  
  sinErrores() {
    return !this.campoVacio() && !this.demasiadoCorto() && !this.demasiadoLargo() 
            && !this.caracteresInvalidos()
  }
}

const emailRegEx = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/;

export class ValidacionMail extends Validacion {
  
  constructor (input, submitted) {
    super(input, submitted)
  }
  
  mailInvalido() {
    return this.input && !emailRegEx.test(this.input) ? 
      'Formato de e-mail inválido.' : 
      '';
  }

  mailSinErrores() {
    return !this.campoVacio() && !this.mailInvalido()
  }
}

// Solo letras y números, con al menos un número y no menos de 6 caracteres
const passwordRegEx = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;

export class ValidacionPassword extends Validacion {
  
  constructor (input, submitted) {
    super(input, submitted)
  }
  
  passwordInvalido() {
    if (
      this.input && 
      !passwordRegEx.test(this.input)
    ) return 'La clave debe contener no menos de 6 caracteres y al menos un número' 
    else return ''
  }

  sinErroresPassword() {
    return !this.campoVacio() && !this.passwordInvalido()
  }
}

const telefonoRegEx = /^[0-9]+$/;

export class ValidacionTelefono extends Validacion {
  
  constructor (input, submitted) {
    super(input, submitted)
  }
  
  telefonoInvalido() {
    return this.input && !telefonoRegEx.test(this.input) ? 
      'Solo números permitidos.' : 
      '';
  }

  telefonoSinErrores() {
    return !this.campoVacio() && !this.telefonoInvalido() &&!this.demasiadoCorto()
  }
}