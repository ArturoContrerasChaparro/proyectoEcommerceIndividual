let productos;

const URL_MAIN = 'http://localhost:8080/api/products/';

function addItems(div_Productos) {
    fetch(URL_MAIN, {
        method: 'get'
    }).then(function (response) {
        response.json().then(function (json) {
            console.log(json);
            console.log(json.length);
            productos = json;
            Array.from(json).forEach((p) => {
                div_Productos.innerHTML += `<div class="col-xxl-3 col-lg-4 col-md-6">
    <div class="card text-center">
      <div class="card-img-top">
        <img src="${p.imagen1}"  alt="..." width="100%">
      </div>
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text">${p.descripcion1}</p>
          <h2>$${p.precio}.MXN</h2>
          <a href="#" class="btn btn-primary" id="${p.id}">Comprar</a>
          <a href="#" class="btn btn-success" id="${p.id}">Añadir al carrito</a>
        </div>
     </div>
    </div>`;
  }); // foreach
});//then
}).catch(function (err) {
console.log(err);
});



}// addItems

window.addEventListener("load", function () {
let div = document.getElementById("listProducts");
addItems(div);
});
