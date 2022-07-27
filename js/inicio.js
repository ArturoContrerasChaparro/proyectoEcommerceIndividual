const form = document.getElementById('inicio');

const email = document.getElementById('email'),
      password = document.getElementById('password');

const button = document.getElementById('button');

function addUser() {
    let newUser = {
        uEmail : email.value,
        uPassword : password.value
    };

    console.log(newUser);
}

button.addEventListener("click", e =>{
    addUser();
    Swal.fire(
        '¡bienvenido!',
        '',
        'success'
      )
    form.reset();
})