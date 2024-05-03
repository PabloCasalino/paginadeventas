var accesorios = [{
  "id": 1,
  "descripcion": "billetera",
  "imagen": "statics\img\Acc\billetera.jpg",
  "precio": 700,
},
{
  "id": 2,
  "descripcion": "boinas",
  "imagen": "../statics/img/Acc/boinas.jpg",
  "precio": 1500,
},
{
  "id": 3,
  "descripcion": "bufandas",
  "imagen": "../statics/img/Acc/bufandas.jpg",
  "precio": 200,
},
{
  "id": 4,
  "descripcion": "cartera",
  "imagen": "../statics/img/Acc/cartera.jpg",
  "precio": 140,
},
{
  "id": 5,
  "descripcion": "cartuchera",
  "imagen": "../statics/img/Acc/cartucheras.jpg",
  "precio": 500,
},
{
  "id": 6,
  "descripcion": "cinto caballero",
  "imagen": "../statics/img/Acc/cinto_caballero.jpg",
  "precio": 500,
},
{
  "id": 7,
  "descripcion": "cinto dama",
  "imagen": "../statics/img/Acc/cinto_dama.jpg",
  "precio": 600,
},
{
  "id": 8,
  "descripcion": "cintos",
  "imagen": "../statics/img/Acc/cintos.jpg",
  "precio": 500,
}, {
  "id": 9,
  "descripcion": "cuellos",
  "imagen": "../statics/img/Acc/cuellos.jpg",
  "precio": 500,
},
{
  "id": 10,
  "descripcion": "gorra",
  "imagen": "../statics/img/Acc/mochilas.jpg",
  "precio": 500,
}]

let cad = (document.getElementById("accesorios-tabla"))

cad = `
  <table>
   <tr>
    <th>ID</th>
    <th>Descripcion</th>
    <th>Imagen</th>
    <th>Precio</th>
  </tr>
 `
for (i = 0; i < accesorios.length; i++) {
  cad += `
  <tr>
    <td>${accesorios[i].id}</td>
    <td>${accesorios[i].descripcion}</td>
    <td>${accesorios[i].imagen}</td> 
    <td>${accesorios[i].precio}</td>
  </tr> 
  `
}
cad += `
</table>

 `

document.getElementById("accesorios-tabla").innerHTML = cad;