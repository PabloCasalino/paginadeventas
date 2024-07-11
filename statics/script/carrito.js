let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total"); 
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarrito (){
    if (productosEnCarrito  && productosEnCarrito.length > 0){
        console.log("Productos en carrito: ", productosEnCarrito);
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(productos =>{
                    const div = document.createElement("div");
                    div.classList.add("carrito-producto");
                    div.innerHTML = `
                        <img class="carrito-producto-imagen" src="${productos.imagen}" alt="${productos.producto}">
                        <div class="carrito-producto-titulo">
                            <h2>Titulo</h2>
                            <h3>${productos.producto}</h3>
                        </div>
                        <div class="carrito-producto-cantidad">
                            <h2>Cantidad</h2>
                            <p>${productos.cantidad}</p>
                        </div>
                        <div class="carrito-producto-precio">
                            <h2>Precio</h2>
                            <p>${productos.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <h2>Subtotal</h2>
                            <p>${productos.precio * productos.cantidad}</p>
                        </div>
                        <button class="carrito-producto-eliminar" id="${productos.id}">Eliminar</button>
                    ` ;
                    
                    contenedorCarritoProductos.append(div);
    
        })
        actualizarBotonesEliminar();
        actualizarTotal();
    
    }else{
        
        console.log("Carrito vacío");
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    
};




function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click",eliminarDelCarrito);

    })

};

function eliminarDelCarrito (e) {
    const idBoton = parseInt(e.currentTarget.id, 10);
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    productosEnCarrito.splice(index,1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.length=0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal (){
    const totalCalculado = productosEnCarrito.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito(){
    productosEnCarrito.length=0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    console.log("Carrito comprado");
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}

cargarProductosCarrito();