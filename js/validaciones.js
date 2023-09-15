export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

}

const validadores = {
    name : (input) => validarNacimiento (input)
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];
  
  const mensajesDeError = {
    name: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    phone: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch:
          "El formato requerido es XXXXXXXXXX (10 dígitos)",
      },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    asunto: {
      valueMissing: "Este campo no puede estar vacío",
      atternMismatch:
          "El asunto debe tener entre 10 y 40 caracteres",
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacío",
      }
  };