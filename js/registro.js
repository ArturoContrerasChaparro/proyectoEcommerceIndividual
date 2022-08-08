"use strict"
const url = 'http://localhost:8080/api/users/';
const form = document.getElementById('form');
const Name= document.getElementById('name'),
      lastName= document.getElementById('lastName'),
      phone= document.getElementById('phoneNumber'),
      email= document.getElementById('email'),
      password= document.getElementById('password'),
      Checkbox= document.getElementById("flexCheckDefault") ;
const button = document.getElementById("boton");

const message = document.getElementById("message");

const validateName = /^([A-Z a-zá-úÁ-Ú]{3,})+$/,
      validateLastName = /^([A-Z a-zá-úÁ-Ú]{3,})+$/,
      validateEmail =   /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/,
      validatePassword = /(?=^.{8,30}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      validatePhone = /^\d{10}$/;



button.addEventListener("click", e =>{
    //Validaciones de las expresiones regulares 
    if (validateName.test(Name.value) && Name.value.trim()) {
            Name.classList.remove("border-danger");
            Name.classList.add("border-success");
    }   else {
            Name.classList.add("border-danger");
             }//if

    if (validateLastName.test(lastName.value) && lastName.value.trim()) {
            lastName.classList.remove("border-danger");
            lastName.classList.add("border-success");
    }   else {
            lastName.classList.add("border-danger");
             }//if

    if (validatePhone.test(phone.value)) {
            phone.classList.remove("border-danger");
            phone.classList.add("border-success");
    }   else {
            phone.classList.add("border-danger");
             }//if

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
    if (Checkbox.checked)  {
            message.classList.add("d-none")
    }   else{    
            message.classList.remove("d-none")
            
    }


            if (validateName.test(Name.value) && validateLastName.test(lastName.value) && validatePhone.test(phone.value) 
            && validateEmail.test(email.value) && validatePassword.test(password.value) && Name.value.trim()
            && lastName.value.trim() && Checkbox.checked) {

                //Si todos los datos cumplen con las validaciones hara todo lo siguiente
                
                //Aqui entra la función donde comprueba si el usuario ya existe, si no existe entonces entra a la función de post que esta en la linea 97, ya que postUser() esta dentro de esta misma función comprobarUsuario();
                comprobarUsuario();
    

    //Quitar bordes verdes 
    Name.classList.remove("border-success"), lastName.classList.remove("border-success"), 
    phone.classList.remove("border-success"), email.classList.remove("border-success"), 
    password.classList.remove("border-success");
            
    // Si no se cumple con las validaciones mandara lo siguiente 
    }    else{
                swal.fire( "" ,  "¡Ingresa bien tus datos!" ,  "error" )
            }//if
    
    
    
})//addEventListener

//Post [para subuir al usuario a la base de datos en MySql
function postUser () {
    
  
    let newPerson = {
    nombre : Name.value,
    apellido : lastName.value,
    numero : phone.value,
    correo : email.value,
    contraseña : password.value
};

fetch(url, {
        method: 'POST',
        body: JSON.stringify(newPerson),
        headers:{
           'content-Type' : 'application/json'
        },
        body: JSON.stringify(newPerson),

})
.then(response => response.json())
.then(newPerson =>{
        newPerson, console.log("El usuario se envió en la base de datos");
})
.catch((error) => {console.log('Error al enviar datos', error);
});



}//functionAddPerson
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
                    console.log("comprobando si el correo "+ email.value + " o si el número de teléfono -" + phone.value + "- Ya existe");
                    for (let index = 0; index < json.length; index++) {
                        if (json[index].correo==email.value || json[index].numero == phone.value) {
                            console.log("usuario encontrado en la posición "+ index+ " con el id "+ json[index].id)
                               Swal.fire(
                                  '¡El correo o teléfono ya existe!',
                                  '',
                                  'error'
                                );
                                
                                return;         
                        } 
                    }
                   if (!existe){

                    //Si no se encuentra el correo o número de teléfono entonces se agregara a la base de datos el nuevo usuario, aparecerá una alerta y se reseteara el formulario.
                     postUser();

                     Swal.fire(
                        `¡Bienvenido a nuestra página ${Name.value} ${lastName.value}!`,
                        '',
                        'success'
                      )

                     form.reset();
                      
                   }
                        
                      
                }
    });//then
    }).catch(function(err) {
    console.log("el error es"+err);
    });
    }// comprobarUsuario

    