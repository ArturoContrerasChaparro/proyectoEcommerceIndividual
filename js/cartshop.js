const totalPagar = document.getElementById("precioTotal");
const buttonPagar = document.getElementById("btnPagar");
let products =JSON.parse(localStorage.getItem("elementosCarrito"));

//función que Agrrega los productos desde la pagína de productos a carrito mediante el localstorage
function agregarProductos(div_Productos) {
  
        products.forEach(element => {
            div_Productos.innerHTML +=`
            <tr class="shoppingCartItem" id="${element.identificador}">
            <th scope="row">${element.nombre}</th>
            <td class="precio">${element.price}</td>
            <td><img class="img" src="${element.img}"  alt="..." width="20%"></td>
            <td><button type="button" class="remove btn btn-danger">X</button></td>
            </tr>`
            
           
        });//forEach

        

    };//función addItems


    

//Aqui carga la funcion addItems
window.addEventListener("load", function () {
let table = document.getElementById("table");
agregarProductos(table);
});


//Función para borrar producto por producto
function BorrarProductos() {
setTimeout(function(){
    let deleteRow = document.getElementsByClassName("shoppingCartItem");
    for (let index = 0; index < deleteRow.length; index++) {
        const rowList = deleteRow[index];
        rowList.addEventListener("click", e =>{
           let attribute = rowList.getAttribute("id")
            products.splice(attribute,1)
        let transactionArrayJson = JSON.stringify(products);
        console.log(transactionArrayJson);
        localStorage.setItem("elementosCarrito", transactionArrayJson);
        location.reload();
        })
        
    }

     
        
    


},300)//timeOut
};//funciónBorrarProductos
BorrarProductos();

//función y for para sacar el precio final de los productos
function precioTotal() {
let total = 0;
setTimeout(function(){
let precio = document.getElementsByClassName("precio");
for (let index = 0; index < precio.length; ++index) {
    const precioNumbers = Number(precio[index].innerHTML.replace("$", "").replace(".MXN", ""));
    total += precioNumbers;
    
}//ciclo For 
totalPagar.innerHTML= "$"+total+".MXN";

},300);//timeOut
}//función borrarProductos
precioTotal();

buttonPagar.addEventListener("click", e =>{
    
    Swal.fire(
        `Felicitaciones por su compra! se hizo el cobro de ${totalPagar.innerHTML}!`,
        '',
        'success'
      )
      setTimeout(function(){
        localStorage.removeItem("elementosCarrito")
        location.reload();
      },5000)
      
})