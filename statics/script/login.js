const loginform = document.querySelector("#loginform");
loginform.addEventListener("submit",(e)=>{
    e.preventDefault()
    const usuario = document.querySelector("#usuario").value
    const password = document.querySelector("#contraseña").value
    const validuser = (usuario==="admin" && password==="admin")
    if(!validuser){
        return alert("Usuario y/o contraseña incorrectos")
    }
    alert("Bienvenido")
    window.location.href = "tabla_productos.html"
})