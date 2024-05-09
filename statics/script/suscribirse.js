document.getElementById("form").addEventListener('change',function(event){
  event.preventDefault();

  var nombre = (document.getElementById("nombre").value);
  var resultadoNombre = document.getElementById ("resultadoNombre");

  let inputValue = nombre.trim();
  let soloLetras = /^[a-zA-Z\s]*$/;

  if(!soloLetras.test(inputValue)){
    resultadoNombre.textContent = 'Por favor, ingrese un nombre válido';
    resultadoNombre.style.color = 'red';
  }
});


