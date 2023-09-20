export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
  ];
  
  const mensajesDeError = {
    name: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    phone: {
        valueMissing: "El campo teléfono no puede estar vacío",
        patternMismatch:
          "El formato requerido es XXXXXXXXXX (10 dígitos)",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido. Ejemplo: nombre@email.com",
    },
    asunto: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch:
          "El asunto debe tener entre 2 y 40 caracteres",
    },
  };

  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if(input.validity[error]){
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    })
    return mensaje;
  }

