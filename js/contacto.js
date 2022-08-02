"use strict"
const form = document.getElementById("contacto");
const button = document.getElementById("button");

const Name = document.getElementById("name"),
      phone = document.getElementById("phoneNumber"),
      email = document.getElementById("email"),
      coments = document.getElementById("coments");
  
const validateName = /^([A-Z a-zá-úÁ-Ú]{3,100})+$/,
      validateEmail = /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/,
      validatePhone = /^\d{10}$/,
      validateComents = /^([A-Z a-zá-úÁ-Ú\W\d]{10,1000})+$/;

      form.addEventListener("submit", e =>{
        e.preventDefault();

        if (validateName.test(Name.value) && Name.value.trim()) {
            Name.classList.remove("border-danger");
            Name.classList.add("border-success");
    }   else {
            Name.classList.add("border-danger");
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

        if (validateComents.test(coments.value) && coments.value.trim()) {
            coments.classList.remove("border-danger");
            coments.classList.add("border-success");
    }   else{
            coments.classList.add("border-danger");

            }//if

            if (validateName.test(Name.value) && validatePhone.test(phone.value) && validateEmail.test(email.value) 
            && validateComents.test(coments.value) && Name.value.trim() && coments.value.trim()) {
                
                //Alerta de registro exitoso            
        Swal.fire(
            '¡Tu mensaje se envió con éxito!',
            '',
            'success')
        
        form.action="https://formsubmit.co/turriscontreras@gmail.com"
        console.log(form);
        //resetear formulario
        form.reset();

        //Quitar bordes verdes 
        Name.classList.remove("border-success"), phone.classList.remove("border-success"), email.classList.remove("border-success"), 
        coments.classList.remove("border-success");
            
    // Si no se cumple con las validaciones mandara la siguiente alerta
            }   else{
                        swal.fire( "" ,  "¡Ingresa bien tus datos!" ,  "error" )
                    }//if
            
      })//addEventListener