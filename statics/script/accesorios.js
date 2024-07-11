
/*
const hogarproductos = [
    {
        id:"accesorios-01",
        producto:"BANDOLERA HEAD",
        imagen: "../statics/img/Acc/bandolera-head.jpg",
        descripcion: "Material: microfibra. Bolsillo frontal. Medidas: 16x16x5cm. Color: NEGRO/AZUL",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 14999
  
    },
  
    {
        id:"accesorios-03",
        producto:"BANDOLERA PAÑO BLAQUE",
        imagen: "../statics/img/Acc/BANDOLERA PAÑO BLAQUE.jpeg",
        descripcion: "Confeccionado en paño gris/blanco con correa ajustable, de sintético.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 26999
  
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
  
    }
   
    ,
  
    {
        id:"accesorios-05",
        producto:"BILLETERA HEAD",
        imagen: "../statics/img/Acc/billetera-head.jpg",
        descripcion: "Material: ecocuero, incluye packaging. Medidas: 9x13x2.5cm. Color: GRIS NEGRO.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 23999
  
    }
  
    ,
  
    {
        id:"accesorios-06",
        producto:"BILLETERA PRATYS",
        imagen: "../statics/img/Acc/billetera-pratys.jpeg",
        descripcion: "Material: eco cuero, alto brillo. Medidas: 12x9x3cm. Colores: NEGRO, AZUL, GRIS, ROJO.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 9299
  
    }
  
    ,
  
    {
        id:"accesorios-07",
        producto:"BILLETERA TRENDY",
        imagen: "../statics/img/Acc/billetera-trendy.jpg",
        descripcion: "Material: Ecocuero, compartimento para tarjetas. Medidas: 10x18.5x2cm. COLORES: NEGRO ROJO.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 14999
  
    }
  
    ,
  
    {
        id:"accesorios-08",
        producto:"BOINA HOMBRE",
        imagen: "../statics/img/Acc/boina-hombre.jpeg",
        descripcion: "Material: paño. Medidas: 28x20cm. Colores: MARRON GRIS NEGRO.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 10999
  
    }   
    
    ,
  
    {
        id:"accesorios-09",
        producto:"BOINA TRENDY",
        imagen: "../statics/img/Acc/boina-trendy.jpg",
        descripcion: "Material: Acrílico, con ajuste de contorno. Medidas: 56-58cm. Talle único. Colores: NEGRO GRIS BEIGE.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 14999
  
    }   
  
    ,
  
    {
        id:"accesorios-10",
        producto:"BOLSO DE PLAYA LA CHAPELLE",
        imagen: "../statics/img/Acc/BOLSO DE PLAYA LA CHAPELLE.jpg",
        descripcion: "Medidas: 49x35cm Aprox. COLORES: AZUL, ARENA, MARRON Y NEGRO.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 25999
  
    }   
  
    ,
  
    {
        id:"accesorios-11",
        producto:"BOLSO DE VIAJE EXPANDIBLE IMPERMEABLE",
        imagen: "../statics/img/Acc/BOLSO DE VIAJE EXPANDIBLE IMPERMEABLE.jpeg",
        descripcion: "Bolso grande reforzado expansible. Tamaño: 42cm x 28cm x 22cm. Tamaño expandido: 43x40x24. NEGRO CELESTE LILA GRIS VERDE VIOLETA ROSA.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 22999
  
    }   
  
    ,
  
    {
        id:"accesorios-12",
        producto:"BOLSO EVERLAST",
        imagen: "../statics/img/Acc/BOLSO EVERLAST.jpg",
        descripcion: "Medidas: 31x49x27cm. Incluye correa desmontable y regulable. Colores: AZUL Y NEGRO.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 40999
  
    }   
  
    ,
  
    {
        id:"accesorios-13",
        producto:"BUFANDA DAMA TEJIDO ABIERTO",
        imagen: "../statics/img/Acc/bufanda-dama.jpg",
        descripcion: "Material: acrílico. Medidas: 25 x 160cm. COLOR: GRIS NEGRO FUCSIA PETROLEO CORAL.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 15999
  
    }   
  
    ,
  
    {
        id:"accesorios-14",
        producto:"BUFANDA HOMBRE CLASICA",
        imagen: "../statics/img/Acc/bufanda-hombre.jpeg",
        descripcion: "Material: sintético. Diseño escoces. Medidas: 34x90cm. COLOR: GRIS CLARO NEGRO AZUL GRIS OSCURO.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 13999
  
    }   
  
    ,
  
    {
        id:"accesorios-15",
        producto:"CAPELINA DAMA",
        imagen: "../statics/img/Acc/CAPELINADAMA.jpg",
        descripcion: "ALA LARGA CON BORDE Y LAZO NEGRO. Colores: MARRON, NEGRO Y BEIGE.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 6399
  
    }   
  
    ,
  
    {
        id:"accesorios-16",
        producto:"CARTERA DE CORDERITO",
        imagen: "../statics/img/Acc/CARTERA DE CORDERITO.jpeg",
        descripcion: "Material: corderito. Bolso correa larga. Medidas:40x30x9cm. Colores: NEGRO, BEIGE Y ROSA.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 71999
  
    }   
  
    ,
  
    {
        id:"accesorios-17",
        producto:"CARTUCHERA TRENDY",
        imagen: "../statics/img/Acc/cartuchera-trendy.jpg",
        descripcion: "Diseño tornasolado. Material 100 % nylon. Ideal para el colegio, la facultad o como portacosmetico.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 7699
  
    }   
  
    ,
  
    {
        id:"accesorios-18",
        producto:"CINTURON WPC ML",
        imagen: "../statics/img/Acc/CARTERA DE CORDERITO.jpeg",
        descripcion: "Material: 60% Ecocuero 40% Cuero. Incluye Caja de Regalo. Talles: S/M 115 cm y M/L 125 cm. Colores: GRIS, MARRON Y SUELA.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 5999
  
    }   
  
    ,
  
    {
        id:"accesorios-19",
        producto:"CARTERA DE CORDERITO",
        imagen: "../statics/img/Acc/gorro-unicross.jpg",
        descripcion: "Material: Acrílico. Medidas: 21X22cm. COLOR: GRIS MARRON NEGRO AZUL.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 10999
  
    }   
  
    ,
  
    {
        id:"accesorios-20",
        producto:"GUANTE HOMBRE BOSSI",
        imagen: "../statics/img/Acc/guante-hombre.jpg",
        descripcion: "Material: polar. Medidas: 30x16x2cm. COLOR: NEGRO.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 6499
  
    }   
  
    ,
  
    {
        id:"accesorios-21",
        producto:"GUANTE HOMBRE MOTO LISO CON PIEL INTERIOR",
        imagen: "../statics/img/Acc/guante-moto2.jpg",
        descripcion: "Material: símil cuero con tira ajustable. Medidas: 30x16x2cm.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 16999
  
    }   
  
    ,
  
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
  
    }   
  
    ,
  
    {
        id:"accesorios-23",
        producto:"ORGANIZADOR PRATYS",
        imagen: "../statics/img/Acc/organizdor.jpg",
        descripcion: "Material: cordura. Descripción: bolsillo interno tela mesh, tira elástica con velcro.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 10999
  
    }   
  
    ,
  
    {
        id:"accesorios-24",
        producto:"RIÑONERA EVERLAST",
        imagen: "../statics/img/Acc/riñonera-everlast.jpeg",
        descripcion: "Material: nylon. Tira ajustable y etiqueta reflectiva. Medidas: 14x29x6.5cm. Colores: NEGRO.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 14999
  
    }   
  
    ,
  
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
  
    }   
  
    ,
  
    {
        id:"accesorios-26",
        producto:"SET INVIERNO INFANTIL TRENDY",
        imagen: "../statics/img/Acc/set-invierno-infantil.jpg",
        descripcion: "Material: chenille. Medidas gorro: 17x18cm. Medidas bufanda: 15x120cm. Medidas guantes: 8x15cm.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 24999
  
    }   
  
    ,
  
    {
        id:"accesorios-27",
        producto:"SET GORRO, BUFANDA Y GUANTES TRENDY",
        imagen: "../statics/img/Acc/set-trendy.jpg",
        descripcion: "Material: acrílico. Medidas bufanda: 13x85cm. Medidas gorro: 18x19cm. Medidas guantes: 14x8cm.",
        categoria: {
            nombre: "Accesorio",
            id:"Accesorios"
        },
        precio: 18999
  
    }   
  
    ,
  
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
  
    }   
  ];
*/


function obtenerDatosDeAPI() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://paginadeventas.pythonanywhere.com/productos', false); // false para modo sincrónico
    xhr.send();
  
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        // Filtrar los productos que tienen categoría "Accesorios"
        const arrayDeObjetos = data
            .filter(item => item.categoria === 'accesorios')
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

function cargarProductos() {

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

};
cargarProductos();

function actualizarBotonesCarrito() {
    botonCarrito = document.querySelectorAll(".boton-carrito");

    botonCarrito.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    })

};
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {


  const idBoton = Number(e.currentTarget.id);
  const productoAgregado = hogarproductos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);

    }

    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}
function actualizarNumero() {
    let numeroJS = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerHTML = numeroJS;

}




