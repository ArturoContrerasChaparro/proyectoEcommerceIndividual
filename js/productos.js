let productos;
let arrayProducts = []
const URL_MAIN = 'http://localhost:8080/api/products/';
//Esta función nos trae los productos desde la base de datos y los manda a la página productos como cartas de productos.
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
        <img class="img" src="${p.imagen1}"  alt="..." width="100%">
      </div>
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text">${p.descripcion1}</p>
          <h2 class="card-price">$${p.precio}.MXN</h2>
          <a href="#" class="btn btn-primary" id="${p.id}">Comprar</a>
          <a href="#" class="btn carrito btn-success" id="${p.id}">Añadir al carrito</a>
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


//Tomar todos los botones de cada producto esperando 2 segundos para que termine de cargar la base de datos
setTimeout(function(){
const buttons = document.querySelectorAll(".carrito")
      buttons.forEach(separeteButtons =>{
        separeteButtons.addEventListener('click', e => {
          e.preventDefault();

          Swal.fire(
            '¡Se añadio el producto al carrito',
            '',
            'success'
          )
          
  const button = e.target;
  const card = button.closest(".card")
  
  const cardTitle = card.querySelector(".card-title").textContent;
  const cardPrice = card.querySelector(".card-price").textContent;
  const cardImg = card.querySelector(".img").src;

  let elemento= {
    "nombre" : cardTitle,
    "price"  : cardPrice,
    "img"    : cardImg 
  };
                   
      
      arrayProducts.push((elemento));
      localStorage.setItem("elementosTabla", JSON.stringify(arrayProducts));
      console.log(arrayProducts);
      
      
      
      
        });
        
      });
    
},2000);

  



