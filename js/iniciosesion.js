"use strict"
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
        Swal.fire(
            '¡bienvenido!',
            '',
            'success')
          
        //Limpiar el formulario 
        form.reset();
        
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

