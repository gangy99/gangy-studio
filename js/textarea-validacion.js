
const textarea = document.querySelector("textarea");
const textareaData = textarea.dataset.tipo;

textarea.addEventListener ('blur', (evento) =>{
    validarTextarea(evento.target);
});

function validarTextarea(textarea) {
    const mensajeTextarea = textarea.value;
    let mensaje = "";
    if (textarea.validity.valid) {
        textarea.parentElement.classList.remove("textarea-container--invalid");
        textarea.parentElement.querySelector(".textarea-mensagem-erro").innerHTML = mensaje;
    }else {
    textarea.parentElement.classList.add("textarea-container--invalid");
    textarea.parentElement.querySelector(".textarea-mensagem-erro").innerHTML =
    mostrarErrorTextarea(textareaData, textarea);
  }
};

const tiposErrores = [
    "valueMissing",
    "patternMismatch",
]

const mensajesError = {
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
    patternMismatch:
      "El mensaje debe contener entre 10 y 400 caracteres",
    },
};

function mostrarErrorTextarea(textareaData, textarea) {
    let mensajeTextarea = "";
    tiposErrores.forEach((error) =>{
        if (textarea.validity[error]) {
            console.log(textareaData, error);
            console.log(textarea.validity[error]);
            console.log(mensajesError[textareaData][error]);
            mensajeTextarea = mensajesError [textareaData][error];
        }
    });
    return mensajeTextarea;  
};


