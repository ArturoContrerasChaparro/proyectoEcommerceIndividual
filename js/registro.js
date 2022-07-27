"use strict"
const form = document.getElementById('form');
const Name= document.getElementById('name'),
      lastName= document.getElementById('lastName'),
      phone= document.getElementById('phoneNumber'),
      email= document.getElementById('email'),
      password= document.getElementById('password');
const button = document.getElementById("boton");

const validateName = /^([A-Z a-zá-úÁ-Ú]{3,})+$/,
      validateLastName = /^([A-Z a-zá-úÁ-Ú]{3,})+$/,
      validateEmail =   /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/,
      validatePassword = /(?=^.{8,30}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      validatePhone = /^\d{10}$/;



button.addEventListener("click", e =>{
    e.preventDefault()
    if (validateName.test(Name.value)) {
        console.log("yes");
    }   else {console.log("no");
             }//if

    if (validateLastName.test(lastName.value)) {
        console.log("Yes");
    }   else {console.log("no");
             }//if

    if (validatePhone.test(phone.value)) {
        console.log("yes");
    }   else {console.log("no");
             }//if
    if (validateEmail.test(email.value)) {
        console.log("yes");
    }   else{console.log("no");
            }//if
    if (validatePassword.test(password.value)) {
        console.log("yes");
    }   else{console.log("no");
            }//if

            if (validateName.test(Name.value) && validateLastName.test(lastName.value) && validatePhone.test(phone.value) && validateEmail.test(email.value) && validatePassword.test(password.value)) {
                addPerson();
    Swal.fire(
        '¡Registro Exitoso!',
        '',
        'success'
      )
    form.reset();
            } else {
                swal.fire( "" ,  "¡Ingresa bien tus datos!" ,  "error" )
            }
    
    
    
})

function addPerson () {
    let newPerson= {
    pName : Name.value,
    pLastName : lastName.value,
    pPhone : phone.value,
    pEmail : email.value,
    pPassword : password.value
};

console.log(newPerson);

}

