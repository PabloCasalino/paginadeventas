document.getElementById("form").addEventListener('change', function (event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let resultadoNombre = document.getElementById("resultadoNombre");
  let apellido = document.getElementById("apellido").value;
  let resultadoApellido = document.getElementById("resultadoApellido");
  let telefono = document.getElementById('telefono').value;
  let resultadoTelefono = document.getElementById('resultadoTelefono');
  let submitButton = document.getElementById('submitButton');

  let inputValueNombre = nombre.trim();
  let soloLetras = /^[a-zA-Z\s]*$/;

  let inputValueApellido = apellido.trim();
  let soloLetrasApellido = /^[a-zA-Z\s]*$/;

  let nombreValido = soloLetras.test(inputValueNombre);
  let apellidoValido = soloLetrasApellido.test(inputValueApellido);

  if (!nombreValido) {
    resultadoNombre.textContent = 'Por favor, ingrese un nombre válido';
    resultadoNombre.style.color = 'red';
    resultadoApellido.style.fontSize = '1.5em';
  } else {
    resultadoNombre.textContent = '';
  }

  if (!apellidoValido) {
    resultadoApellido.textContent = 'Por favor, ingrese un apellido válido';
    resultadoApellido.style.color = 'red';
    resultadoApellido.style.fontSize = '1.5em';
  } else {
    resultadoApellido.textContent = '';
  }
  if (telefono.length < 10) {
    resultadoTelefono.textContent = 'Ingrese un numero valido';
    resultadoTelefono.style.color = 'red';
    resultadoTelefono.style.fontSize = '1.5em';
  } else {
    resultadoTelefono.textContent = '';
  }

  submitButton.disabled = !(nombreValido && apellidoValido && !telefono.length < 10);
});


