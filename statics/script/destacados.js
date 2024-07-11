/*
const hogarproductos = [
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
        id:"accesorios-04",
        producto:"BILLETERA EVERLAST",
        imagen: "../statics/img/Acc/billetera-everlast.jpg",
        descripcion: "Material: ecocuero, incluye packaging. Medidas: 9x13x2.5cm. Colores: NEGRO SUELA.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 23999   
  
    },

    {
        id:"accesorios-22",
        producto:"MOCHILA LISA",
        imagen: "../statics/img/Acc/mochila-lisa.jpg",
        descripcion: "Mochila Urbana. 1 Bolsillo utilitario frontal - Tiras ajustables para colgar en la espalda. Medidas: 44cm x 33cm x 21cm. (Alto x Ancho x Prof). Capacidad: 17 litros. Material: 100% Poliéster.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 15999
  
    },

    {
        id:"fitness-05",
        producto:"BOTELLA DEPORTIVA",
        imagen: "../statics/img/Fitness/BOTELLA DEPORTIVA.jpeg",
        descripcion: "Botella deportiva de 1 litro, apertura por botón automático con seguro. Material PP, de grado alimenticio, Sin olor. ",
        categoria: {
            nombre: "Fitness",
            id:"fit"
        },
        precio: 10999

    },


    {
        id:"hogar-12",
        producto:"JUEGO DE SABANAS BORDADAS SUPER KING",
        imagen: "../statics/img/Hogar/sabanas.jpg",
        descripcion: "BORDADO SOLO EN LA FUNDA DE LA ALMOHADA Juego de sabanas 100% ALGODON de 4 piezas, Calidad premium.",
        categoria: {
            nombre: "Hogar",
            id:"hogares"
        },
        precio: 48999

    },

    {
        id:"accesorios-28",
        producto:"VALIJA PIERRE CARDIN CARRY ON 20 PULG RIGIDA",
        imagen: "../statics/img/Acc/valija-pierre.jpg",
        descripcion: "Marca: Pierre Cardín, Medidas: 53 x 20 x 33 cm (alto x profundidad x ancho), Material ABS.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 87999
  
    },

    {
        id:"fitness-13",
        producto:"INFLADOR DE ALUMINIO MULTIUSO",
        imagen: "../statics/img/Fitness/INFLADOR DE ALUMINIO MULTIUSO.jpg",
        descripcion: "Inflador de aluminio, con mango rebatible tipo T y pie plegables 90 grados. INCLUYE: Pico auto, pico bici común, pico para inflables y pico aguja para pelotas.",
        categoria: {
            nombre: "Fitness",
            id:"fit"
        },
        precio: 6999

    },

    {
        id:"fitness-16",
        producto:"MOCHILA CAMPING ALPINE SKATE",
        imagen: "../statics/img/Fitness/MOCHILA CAMPING ALPINE SKATE.jpg",
        descripcion: "Medidas: 54x35x16cm. Capacidad de 45+5L, espalda y tiras acolchonadas con tela mesh, tiras regulables.",
        categoria: {
            nombre: "Fitness",
            id:"fit"
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
        id:"accesorios-25",
        producto:"SET GORRO Y BUFANDA TRENDY",
        imagen: "../statics/img/Acc/set-gorro-bufanda.jpg",
        descripcion: "Material: acrílico. Medidas bufanda: 14x110cm. Medidas gorro: 18x19cm.Colores: ROSA AQUA LILA.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 24999
  
    },

    {
        id:"hogar-16",
        producto:"TERMO MEDIA MANIJA 1 LITRO",
        imagen: "../statics/img/Hogar/TERMO MEDIA MANIJA.jpg",
        descripcion: "Modelo ergonómico, ligero e irrompible. Tapa resistente con rosca antiderrame: para usar como vaso, taza o mate. 100% hermético. Conservación de líquidos hasta por 12hs aproximadamente. ",
        categoria: {
            nombre: "Hogar",
            id:"hogares"
        },
        precio: 20999

    }   
];

*/
function obtenerDatosDeAPI() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://paginadeventas.pythonanywhere.com/productos', false); // false para modo sincrónico
    xhr.send();
  
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        // Filtrar los productos que tienen categoría "Destacados"
        const arrayDeObjetos = data
            .filter(item => item.categoria === 'destacados')
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




