
/*
const hogarproductos = [
    {
        id:"indumentaria-01",
        producto:"CALZA TERMICA DAMA NEGRA",
        imagen: "../statics/img/Indumentaria/CALZA TERMICA DAMA NEGRA.png",
        descripcion: "Calzas Dama, Frizadas en el interior, reforzadas con doble costura, calce perfecto. De poliéster con elastano.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 9999

    },

    {
        id:"indumentaria-02",
        producto:"CALZA TERMICA HOMBRE NEGRA",
        imagen: "../statics/img/Indumentaria/CALZA TERMICA HOMBRE NEGRA.png",
        descripcion: "Calzas hombre con botón en bragueta. Frizadas en el interior, reforzadas con doble costura, calce perfecto. De poliéster con elastano. ",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 12599

    },

    {
        id:"indumentaria-03",
        producto:"CALZA TERMICA INFANTIL NEGRO",
        imagen: "../statics/img/Indumentaria/CALZA TERMICA INFANTIL NEGRO.png",
        descripcion: "Calzas infantil. Frizadas en el interior, reforzadas con doble costura, calce perfecto. De poliéster con elastano.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 9199

    },

    {
        id:"indumentaria-04",
        producto:"CALZA TERMICA NIÑO NEGRO",
        imagen: "../statics/img/Indumentaria/CALZA TERMICA NIÑO NEGRO.png",
        descripcion: "Calzas niño con botón en bragueta. Frizadas en el interior, reforzadas con doble costura, calce perfecto. De poliéster con elastano. ",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 9999

    },

    {
        id:"indumentaria-05",
        producto:"CAMISETA TERMICA HOMBRE AZUL",
        imagen: "../statics/img/Indumentaria/CAMISETA TERMICA HOMBRE AZUL.png",
        descripcion: "Camiseta Térmica de Hombre con Cuello Redondo. Frizada por dentro, super abrigada! Poliester con elastano.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 14299

    },

    {
        id:"indumentaria-06",
        producto:"CAMISETA TERMICA HOMBRE BLANCO",
        imagen: "../statics/img/Indumentaria/CAMISETA TERMICA HOMBRE BLANCO.png",
        descripcion: "Camiseta Térmica de Hombre con Cuello Redondo. Frizada por dentro, super abrigada! Poliester con elastano.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 12799

    },

    {
        id:"indumentaria-07",
        producto:"CAMISETA TERMICA INFANTIL AZUL",
        imagen: "../statics/img/Indumentaria/CAMISETA TERMICA INFANTIL AZUL.png",
        descripcion: "Camiseta Térmica Infantil con Cuello Redondo. Frizada por dentro, super abrigada! Poliester con elastano.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 10699

    },

    {
        id:"indumentaria-08",
        producto:"CAMPERA MUJER 2 EN 1",
        imagen: "../statics/img/Indumentaria/CAMPERA MUJER 2 EN 1.jpg",
        descripcion: "Innovadora campera 2 en 1, diseñada para adaptarse a todas tus necesidades de estilo y funcionalidad! Material: Poliéster. Colores: NEGRO AZUL OSCURO TERRACOTA BEIGE VERDE ROJO",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 74999

    },

    {
        id:"indumentaria-09",
        producto:"CAMPERA PUFFER MUJER",
        imagen: "../statics/img/Indumentaria/CAMPERA PUFFER MUJER.jpg",
        descripcion: "Super abrigadas!! Camperas de nylon puffer (tela acolchada). Capucha con peluche. Tiene 2 Bolsillos frontales con cierre y un cierre para desprender la capucha.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 67999

    },

    {
        id:"indumentaria-10",
        producto:"CAMPERA ROMPEVIENTO REVERSIBLE",
        imagen: "../statics/img/Indumentaria/CAMPERA ROMPEVIENTO REVERSIBLE.jpg",
        descripcion: "Campera bomber reversible importada . Tela rompeviento. Ideal para salir y para el día a día.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 74999

    },

    {
        id:"indumentaria-11",
        producto:"CAMPERA UNISEX 2 EN 1",
        imagen: "../statics/img/Indumentaria/CAMPERA UNISEX 2 EN 1.jpg",
        descripcion: "Innovadora campera 2 en 1, diseñada para adaptarse a todas tus necesidades de estilo y funcionalidad!",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 74999

    },

    {
        id:"indumentaria-12",
        producto:"PANTUMEDIA CORDERITO HOMBRE",
        imagen: "../statics/img/Indumentaria/PANTUMEDIA CORDERITO HOMBRE.png",
        descripcion: "Interior de corderito sintético, Térmicas, Muy cómodas, Base antideslizante, 50% Corderito, 40% Algodón , 7% Poliamida, 3% Elastano.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 4999

    },

    {
        id:"indumentaria-13",
        producto:"PANTUMEDIA CORDERITO INFANTIL",
        imagen: "../statics/img/Indumentaria/PANTUMEDIA CORDERITO INFANTIL.png",
        descripcion: "Interior de corderito sintético, Térmicas, Muy cómodas, Base antideslizante, 50% Corderito, 40% Algodón , 7% Poliamida, 3% Elastano.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 4499

    },

    {
        id:"indumentaria-14",
        producto:"PIJAMA INFANTIL MESSI",
        imagen: "../statics/img/Indumentaria/PIJAMA INFANTIL MESSI.jpg",
        descripcion: "Pijamas para niños manga larga. Super suaves!. Talles amplios. Excelente calidad, diseño y terminación. Con los personajes preferidos de los peques! 100% algodón.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 15999

    },

    {
        id:"indumentaria-15",
        producto:"POLERA TERMICA HOMBRE AZUL",
        imagen: "../statics/img/Indumentaria/POLERA TERMICA HOMBRE AZUL.png",
        descripcion: "Polera Térmica de Hombre. Frizada por dentro, super abrigada! Poliester con elastano.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 14299

    },

    {
        id:"indumentaria-16",
        producto:"POLERA TERMICA HOMBRE GRIS",
        imagen: "../statics/img/Indumentaria/POLERA TERMICA HOMBRE GRIS.png",
        descripcion: "Polera Térmica de Hombre. Frizada por dentro, super abrigada! Poliester con elastano.",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 14299

    },

    {
        id:"indumentaria-17",
        producto:"REMERON BORDADO",
        imagen: "../statics/img/Indumentaria/REMERON BORDADO.jpeg",
        descripcion: "Remeron - vestido bambula bordada con detalles en broderie. Colores: BLANCO CREMA ROSA VIOLETA ROJO AQUA CORAL",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 22999

    },

    {
        id:"indumentaria-18",
        producto:"RUANA DE DOBLE HILO",
        imagen: "../statics/img/Indumentaria/RUANA DE DOBLE HILO.jpg",
        descripcion: "Confortable, abrigada y elegante! Ruana abierta de doble hilo con botones en los costados y uno de repuesto. Detalles bordados. ",
        categoria: {
            nombre: "Indumentaria",
            id:"ind"
        },
        precio: 34999

    }
];
*/
function obtenerDatosDeAPI() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:5000/productos', false); // false para modo sincrónico
    xhr.send();
  
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        // Filtrar los productos que tienen categoría "Indumentaria"
        const arrayDeObjetos = data
            .filter(item => item.categoria === 'indumentaria')
            .map(item => ({
                id: item.id,
                producto: item.producto,
                imagen: item.imagen,
                descripcion: item.descripcion,
                categoria: item.categoria,
                precio: item.precio
            }));

        return arrayDeObjetos;
    } else {
        console.error('Hubo un problema con la solicitud XMLHttpRequest:', xhr.statusText);
        return [];
    }
}

// Usar los datos obtenidos de la API
const hogarproductos = obtenerDatosDeAPI();
console.log(hogarproductos);


const contenedorProductos = document.querySelector("#contenedorProductos");
let botonCarrito = document.querySelectorAll("#boton-carrito");
const numero = document.querySelector("#numero");   

function cargarProductos(){

    hogarproductos.forEach(hogarproducto => {

        const div = document.createElement("div");
        div.classList.add("hogar-items");
        div.innerHTML = `   
        <img  class="img-hogar"  src="${hogarproducto.imagen}" alt="${hogarproducto.producto}">
        <h3 class="producto">${hogarproducto.producto}</h3>
        <p  class="descripcion">${hogarproducto.descripcion}</p>
        <h5 class="precio">$${hogarproducto.precio}</h5>
        <button class="boton-carrito" id="${hogarproducto.id}">Agregar </button>
        
        `
        ;
        contenedorProductos.append(div);

    })

    actualizarBotonesCarrito();

} ;
cargarProductos();

function actualizarBotonesCarrito(){
    botonCarrito = document.querySelectorAll(".boton-carrito");

    botonCarrito.forEach(boton => {
        boton.addEventListener("click",agregarAlCarrito);

    })

};
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e){

    const idBoton = Number(e.currentTarget.id);
    const productoAgregado = hogarproductos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index =    productosEnCarrito.findIndex(producto => producto.id ===idBoton);
        productosEnCarrito[index].cantidad++;
    
    } else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
        
    }

    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}
function actualizarNumero() {
    let numeroJS = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad,0);
    numero.innerHTML = numeroJS;

}




