"use strict"
const url = 'http://localhost:8080/api/users/';
const form = document.getElementById('inicio');
const email = document.getElementById("email"),
      password = document.getElementById("password");

const button = document.getElementById("button");


const validateEmail =   /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/,
      validatePassword = /(?=^.{8,30}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

button.addEventListener("click", e=>{
    //Validaciones expresiones regulares 
    if (validateEmail.test(email.value)) {
        email.classList.remove("border-danger");
        email.classList.add("border-success");
}   else{
        email.classList.add("border-danger");

        }//if
if (validatePassword.test(password.value)) {
        password.classList.remove("border-danger");
        password.classList.add("border-success");
}   else{
        password.classList.add("border-danger");
        }//if

    if (validateEmail.test(email.value) && validatePassword.test(password.value)) {
        //Si se cumplen con todas las validaciones se hara lo siguiente 

        //Alerta de inicio sesión exitosa
        comprobarUsuario()
        
        //Quitar los colores de los bordes
        email.classList.remove("border-success"), password.classList.remove("border-success");

    }   else{
        //Si no se cumplen las validaciones mandaras la siguiente alerta. 
            Swal.fire(
                '¡Ingresa bien tus datos!',
                '',
                'error')
            
    } //if  
})//addEventListener

let existe = false;
//Función para comprobar si el usuario ya existe en la base de datos
    function comprobarUsuario() {
        fetch(url, {
            method: 'get'
        }).then(function(response) {
            response.json().then(function (json) {
               let usuarios = json;    
                if (usuarios == undefined) {
                    Swal.fire(
                                    '¡Error de servidor!',
                                    '',
                                    'error'
                                  );
                }else{
                    console.log("se encontró la base de datos con los usuarios")
                    console.log("comprobando si el correo -"+ email.value + "- y la contraseñá -" + "*********" + "- son correctas");
                    for (let index = 0; index < json.length; index++) {
                        if (json[index].correo===email.value) {
                            console.log("usuario encontrado en la posición "+ index+ " con el id "+ json[index].id)
                            if (json[index].contraseña === password.value) {
                                Swal.fire(
                                    `¡Bienvenido de vuelta ${json[index].nombre} ${json[index].apellido}!`,
                                    '',
                                    'success'
                                  )
                                  localStorage.removeItem("Nombre", `${json[index].nombre}`)
                                  localStorage.removeItem("Apellido" ,`${json[index].apellido}`);
                                  localStorage.removeItem("Correo" ,  `${json[index].correo}`);
                                  localStorage.setItem("Nombre" ,`${json[index].nombre}`);
                                  localStorage.setItem("Apellido" ,`${json[index].apellido}`);
                                  localStorage.setItem("Correo" ,  `${json[index].correo}`);
                                  form.reset();
                                  setTimeout(function(){
                                    window.open("http://127.0.0.1:5501/productos.html","_self")
                                  },3000);
                            } else {
                                Swal.fire(
                                    '¡Se encontro el correo pero la contraseña es incorrecta',
                                    '',
                                    'error'
                                  );
                                  
                                 
                                  
                            } 
                                return;         
                        } else {(!existe) 
                            Swal.fire(
                                '¡El correo no esta registrado en nuestra página!',
                                '',
                                'error'
                              );
                        }
                    }
                   
                        
                      
                }
    });//then
    }).catch(function(err) {
    console.log("el error es"+err);
    });
    }// comprobarUsuario

