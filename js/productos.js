function addItem(item){
    const itemHTML = `<div class="col-xxl-3 col-lg-4 col-md-6">
    <div class="card text-center">
      <div class="card-img-top">
        <img src="${item.img}"  alt="..." width="100%">
      </div>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <h2>$${item.price}.MXN</h2>
          <a href="#" class="btn btn-primary">Comprar</a>
          <a href="#" class="btn btn-success">Añadir al carrito</a>
        </div>
     </div>
    </div>`;
    const itemsContainer = document.getElementById("listProducts");
    itemsContainer.innerHTML += itemHTML;
}
addItem({'name':'Fifa 2022',
    'img':'./img/producto1.webp',
    'description':'Juego de carreras Need For speed Rivals para PlayStation 4',
    'price': 800});

    addItem({'name':'Dark Souls III',
    'img':'./img/producto2.webp',
    'description':'Juego de carreras Need For speed Rivals para PlayStation 4',
    'price': 500});

    addItem({'name':'COD Black Ops III',
    'img':'./img/producto3.webp',
    'description':'Juego de carreras Need For speed Rivals para PlayStation 4',
    'price': 300});

    addItem({'name':'The witcher Wild Hunt',
    'img':'./img/producto4.webp',
    'description':'Juego de carreras Need For speed Rivals para PlayStation 4',
    'price': 600});

    addItem({'name':'Red Dead Redemption II',
    'img':'./img/producto5.webp',
    'description':'Página para dar soluciones a problemas, incluye 6 meses de soporte, instalación, plugins, tienda online.',
    'price': 400});

    addItem({'name':'Batman Arkham Knight',
    'img':'./img/producto6.webp',
    'description':'Página para dar soluciones a problemas, incluye 6 meses de soporte, instalación, plugins, tienda online.',
    'price': 400});

    addItem({'name':'Dead by Daylight',
    'img':'./img/producto7.webp',
    'description':'Página para dar soluciones a problemas, incluye 6 meses de soporte, instalación, plugins, tienda online.',
    'price': 290});

    addItem({'name':'Doom Eternal',
    'img':'./img/producto8.webp',
    'description':'Página para dar soluciones a problemas, incluye 6 meses de soporte, instalación, plugins, tienda online.',
    'price': 140});

    addItem({'name':'Resident Evil 3',
    'img':'./img/producto9.webp',
    'description':'Página para dar soluciones a problemas, incluye 6 meses de soporte, instalación, plugins, tienda online.',
    'price': 190});

    addItem({"name":"No Man's Sky",
    'img':'./img/producto10.webp',
    'description':'Página para dar soluciones a problemas, incluye 6 meses de soporte, instalación, plugins, tienda online.',
    'price': 600}); 

    addItem({'name':'HotWheels Unleashed',
    'img':'./img/producto11.webp',
    'description':'Página para dar soluciones a problemas, incluye 6 meses de soporte, instalación, plugins, tienda online.',
    'price': 110}); 

    addItem({'name':'Skyrim',
    'img':'./img/producto12.webp',
    'description':'Página para dar soluciones a problemas, incluye 6 meses de soporte, instalación, plugins, tienda online.',
    'price': 1000}); 