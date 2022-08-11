let tabla= document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let precioTotal = document.getElementById("precioTotal").value
precioTotal = 200 + 500
console.log(precioTotal);

let productsArray =JSON.parse(localStorage.getItem("elementosCarrito"));


function addItems(div_Productos) {
  let products =JSON.parse(localStorage.getItem("elementosCarrito"));
        products.forEach(element => {
            console.log(element);
            div_Productos.innerHTML +=`
            <tr class="shoppingCartItem id="${element.id}">
            <th scope="row">${element.nombre}</th>
            <td class="precio">${element.price}</td>
            <td><img class="img" src="${element.img}"  alt="..." width="20%"></td>
            <td><button type="button" class="remove btn btn-danger">X</button></td>
            </tr>`
            
            let numero = typeof(element.id)
            console.log(numero);

            let productsArray =JSON.parse(localStorage.getItem("elementosCarrito"));
    
                    console.log(productsArray);
        
                    let productsIndex = productsArray.findIndex(element => element.id === element.id)
    
                    console.log(productsIndex);
                    
                    /* productsArray.splice(productsIndex, 1);
            
                    let productsArrayJson = JSON.stringify(productsArray);
    
                    console.log(productsArrayJson);
            
                    localStorage.setItem("elementosCarrito", productsArrayJson) */
            
        });//forEach

        setTimeout(function(){
            let button = document.querySelectorAll(".shoppingCartItem");
            button.forEach(element =>{
                element.addEventListener("click",e =>{
                    
                    let productsArray =JSON.parse(localStorage.getItem("elementosCarrito"));
    
                    console.log(productsArray);
        
                    let productsIndex = productsArray.findIndex(element => element.id === element.id)
    
                    console.log(productsIndex);
                    
                    productsArray.splice(productsIndex, 1);
            
                    let productsArrayJson = JSON.stringify(productsArray);
    
                    console.log(productsArrayJson);
            
                    localStorage.setItem("elementosCarrito", productsArrayJson)
    
                    /* location.reload(); */
                })
            },1000);
            })

        


        
    
       

    };//addItems

    

    
    


window.addEventListener("load", function () {
let table = document.getElementById("table");
addItems(table);
});







