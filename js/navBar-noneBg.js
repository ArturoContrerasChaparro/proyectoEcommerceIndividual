"use strict"
let navBar = document.getElementById("navBar");
let footer = document.getElementById("footer");
navBar.innerHTML = `<nav class="navbar navbar-expand-md">
    <div class="container-fluid gx-5 fixed-top">
      <a class="navbar-brand" href="./index.html">ShopGamers</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="./productos.html">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="./nosotros.html">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="./contacto.html">Contacto</a>
          </li>
        </ul>
        <div class="d-flex justify-content-end">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <a href="./iniciosesion.html"><button type="button" class="btn mt-1 btn-primary w-30 iniciarSesion" id="iniciar">Iniciar Sesión</button></a>
          <button type="button" class="btn mt-1 btn-danger w-30 cerrarSesion d-none" id="cerrar">Cerrar Sesión</button>
          </li>
          <li class="nav-item">
          <a href="./registro.html"><button type="button" class="btn mt-1 btn-success w-30 registro" id="registro">Registrarse</button></a>
          </li>
          <li class="nav-item">
            <a href="./carrito.html"><i class="fa-solid fa-cart-shopping fa-x5"></i></a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </nav> `

  footer.innerHTML = `
<hr>
<footer class="footer">
 <nav>
   <div class="container-fluid gx-5">
     <div class="row">
       <div class="col-md-12 col-lg-3 d-flex justify-content-center ">
         <a class="navbar-brand sm-ms-5" href="./aviso.html"><ins>Avisos de privacidad</ins></a>
       </div>
       <div class="col-md-12 col-lg-1 d-flex justify-content-center ">
         <a class="navbar-brand sm-me-5" href="./terminos.html"><ins>Términos y condiciones</ins></a>
       </div>
       <div class="col-md-12 col-lg-4 d-flex justify-content-center">
         <a class="navbar-brand" href="./index.html"><ins>ShopGamers</ins></a>
       </div>
       <div class="col-md-12 col-lg-3 d-flex justify-content-center">
         <a class="navbar-brand sm-ms-5 pb-2" href="https://www.facebook.com/"> <i class="fa-brands fa-facebook"></i></a>
         <a class="navbar-brand ms-5" href="https://www.twitter.com/"> <i class="fa-brands fa-twitter"></i></a>
       </div>
   </div>
   </div>
 </div>
 </nav>
</footer> `
let span = document.getElementById("espan");
let iniciar = document.getElementById("iniciar");
let cerrar = document.getElementById("cerrar");
let user = localStorage.getItem("Nombre");
if (user = user) {
  iniciar.classList.add("d-none");
  cerrar.classList.remove("d-none");
  
  
  
} else { console.log("No hay sesión iniciada")
iniciar.classList.remove("d-none");
  cerrar.classList.add("d-none");}

  cerrar.addEventListener("click", e=>{
    Swal.fire(
      '¡Cerraste tu sesión exitosamente!',
      '',
      'success'
    );
    localStorage.clear();
    setTimeout(function(){location.reload()},3000)
  });


