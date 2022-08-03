"use strict"
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
                addPerson();
    //Alerta de registro exitoso            
    Swal.fire(
        '¡Registro Exitoso!',
        '',
        'success'
      )
    //resetear formulario
    form.reset();

    //Quitar bordes verdes 
    Name.classList.remove("border-success"), lastName.classList.remove("border-success"), 
    phone.classList.remove("border-success"), email.classList.remove("border-success"), 
    password.classList.remove("border-success");
            
    // Si no se cumple con las validaciones mandara lo siguiente 
    }    else{
                swal.fire( "" ,  "¡Ingresa bien tus datos!" ,  "error" )
            }//if
    
    
    
})//addEventListener

//Json del formulario
function addPerson () {
    let newPerson= {
    pName : Name.value,
    pLastName : lastName.value,
    pPhone : phone.value,
    pEmail : email.value,
    pPassword : password.value
};

console.log(newPerson);

}//functionAddPerson

