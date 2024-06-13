        // Esta función añade un event listener que escucha los cambios en los elementos
        // del formulario identificado por 'form'. Cuando ocurre un cambio, se ejecuta una
        // función anónima que recibe el objeto de evento como parámetro.

document.getElementById("form").addEventListener('change', function (event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value; // inicia la variable nombre y le da el valor ingresado en el id nombre.
  let resultadoNombre = document.getElementById("resultadoNombre");
  let apellido = document.getElementById("apellido").value;
  let resultadoApellido = document.getElementById("resultadoApellido");
  let telefono = document.getElementById('telefono').value;
  let resultadoTelefono = document.getElementById('resultadoTelefono');
  let submitButton = document.getElementById('submitButton');

  let inputValueNombre = nombre.trim(); // toma el valor de la variable nombre y le quita todos los espacios que pueda tener
  let soloLetras = /^[a-zA-Z\s]*$/; // Esta es una expresión regular que valida que la cadena contenga sólamente texto

  let inputValueApellido = apellido.trim();
  let soloLetrasApellido = /^[a-zA-Z\s]*$/;

  let nombreValido = soloLetras.test(inputValueNombre); // realiza la comprobación si la cadena de texto en inputValueNombre es una cadena de solo texto
  let apellidoValido = soloLetrasApellido.test(inputValueApellido);

  // Validacion del nombre
  if (!nombreValido) {
    resultadoNombre.textContent = 'Por favor, ingrese un nombre válido';
    resultadoNombre.style.color = 'red';
    resultadoApellido.style.fontSize = '1.5em';
  } else {
    resultadoNombre.textContent = '';
  }

  // Validación del apellido
  if (!apellidoValido) {
    resultadoApellido.textContent = 'Por favor, ingrese un apellido válido';
    resultadoApellido.style.color = 'red';
    resultadoApellido.style.fontSize = '1.5em';
  } else {
    resultadoApellido.textContent = '';
  }
  // validación del teléfono
  if (telefono.length < 10) {
    resultadoTelefono.textContent = 'Ingrese un numero valido';
    resultadoTelefono.style.color = 'red';
    resultadoTelefono.style.fontSize = '1.5em';
  } else {
    resultadoTelefono.textContent = '';
  }
  // Desabilita wl botón de enviar en caso que el nombre, el apellido o el teléfono no sean validos 
  submitButton.disabled = !(nombreValido && apellidoValido && !telefono.length < 10);
});


