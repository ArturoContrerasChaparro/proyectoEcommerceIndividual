const totalPagar = document.getElementById("precioTotal");


//función que Agrrega los productos desde la pagína de productos a carrito mediante el localstorage
function agregarProductos(div_Productos) {
  let products =JSON.parse(localStorage.getItem("elementosCarrito"));
        products.forEach(element => {
            console.log(element);
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
let button = document.querySelectorAll(".remove");
button.forEach(element =>{
    element.addEventListener("click",(e) =>{
        let transactionObjArr = JSON.parse(localStorage.getItem("elementosCarrito"))
        console.log(transactionObjArr);
        let deleteRow = e.target.parentNode.parentNode;
        console.log(deleteRow);
        let transactionid = deleteRow.getAttribute("id");
        console.log(transactionid);
        deleteRow.remove();
        transactionObjArr.splice(transactionid,1)
        console.log(transactionObjArr);
        let transactionArrayJson = JSON.stringify(transactionObjArr);
        console.log(transactionArrayJson);
        localStorage.setItem("elementosCarrito", transactionArrayJson);
        
        
    
})//addEventListener
})//forEach

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
