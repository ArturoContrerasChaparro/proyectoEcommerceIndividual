console.log("hola mundo");

function addItems(div_Productos) {
  let products =JSON.parse(localStorage.getItem("elementosArticulo"));
        products.forEach(element => {
            console.log(element);
            div_Productos.innerHTML +=`<section class="banner bg-white">
              <div class="container">
              <div class="row align-items-center justify-content-between">
                  <div class="col-lg-6 col-md-12 text-center mb-5">
                  <div class="banner-content">
                      <h1 class="text-uppercase fw-bolder">${element.nombre}</h1>
                      <p class="border-bottom border-primary border-5 pb-4"> <h5> 
                      ${element.description}</h5>
                      <h3>${element.price}</h3>
                      </p>
                      
                  </div>
                  </div>
                  <div class="col-lg-5 primera-imagen">
                  <img src="${element.img}" alt="imagen del articulo" />
                  </div>
              </div>
              </div>
          </section>
      
          <section class="bg-light">
          <div class="container">
            <div class="row mb3">
              <div class="offset-lg-3 col-lg-6 text-center">
                <h3 class="border-bottom border-primary border-2 pb-2">
                  Descripción
                </h3>
              </div>
            </div>
      
            <div class="row align-items-center">
              <div class="col-lg-4 offset-lg-2 col-md-8">
                <p>
                ${element.description2}
                </p>
              </div>
              <div class="col-lg-6 col-md-4 segunda-imagen">
                <img src="${element.cardImg2}" alt="portada de la página" width="100%" />
              </div>
              <a class="btn btn-light text-uppercase btn-outline-secondary fs-3 fw-bolder" href="./productos.html">Regresar a ver todos nuestros productos</a>
            </div>
            
          </div>
          
        </section>`
        
        });//forEach



    };//addItems

window.addEventListener("load", function () {
  const articulo = document.getElementById("html");
addItems(articulo);
});