let tabla= document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");



function addItems(div_Productos) {
  let products =JSON.parse(localStorage.getItem("elementosTabla"));
        products.forEach(element => {
            console.log(element);
            div_Productos.innerHTML +=`
            <tr>
            <th scope="row">${element.nombre}</th>
            <td>${element.price}</td>
            <td><img class="img" src="${element.img}"  alt="..." width="20%"></td>
            <td></td>
            </tr>`
        });//forEach



    };//addItems

window.addEventListener("load", function () {
let table = document.getElementById("table");
addItems(table);
});
