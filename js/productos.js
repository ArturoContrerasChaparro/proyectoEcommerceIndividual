let productos;
let arrayProducts = []
let articulo = []
let transactionid = -1;
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
          <a href="#" class="information btn btn-secondary" id="${p.id}">información</a>
          <a href="#" class="card-id btn carrito btn-primary " id="${p.id}">Añadir al carrito</a>
          <p class="card-description d-none">${p.descripcion2}</p>
          <img class="img-2 d-none" src="${p.imagen2}"  alt="..." width="100%">
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
          
  let button = e.target;
  let card = button.closest(".card")
  
  let cardTitle = card.querySelector(".card-title").textContent;
  let cardPrice = card.querySelector(".card-price").textContent;
  let cardImg = card.querySelector(".img").src;
  let cardId = card.querySelector(".card-id").id;

  transactionid++;
  


  let elemento= { 
    "identificador" : transactionid,
    "nombre" : cardTitle,
    "price"  : cardPrice,
    "img"    : cardImg,
    "id"     : cardId,
  
};
         
      
      arrayProducts.push((elemento));
      localStorage.setItem("elementosCarrito", JSON.stringify(arrayProducts));
      console.log(arrayProducts);
      
      
      
      
        });
        
      });
    
},2000);




setTimeout(function(){
  const information = document.querySelectorAll(".information")
        information.forEach(separeteButtons =>{
          separeteButtons.addEventListener('click', e => {
            e.preventDefault();

            window.open("http://127.0.0.1:5501/articulo.html","_self")
  
            
    let button = e.target;
    let card = button.closest(".card")
    let cardTitle = card.querySelector(".card-title").textContent;
    let cardPrice = card.querySelector(".card-price").textContent;
    let cardImg = card.querySelector(".img").src;
    let cardId = card.querySelector(".card-id").id;
    let cardDescription = card.querySelector(".card-text").textContent;
    let cardDescription2 = card.querySelector(".card-description").textContent;
    let cardImg2 = card.querySelector(".img-2").src;
    
    console.log(cardId);
    
  
  
    let elemento= {
      "nombre" : cardTitle,
      "price"  : cardPrice,
      "img"    : cardImg,
      "id"     : cardId,
      "description" : cardDescription,
      "description2": cardDescription2,
      "cardImg2"    : cardImg2 
  
    };
                     
        
        articulo.push((elemento));
        localStorage.setItem("elementosArticulo", JSON.stringify(articulo));
        console.log(articulo);
        
        
        
        
          });
          
        });
      
  },2000);

  



