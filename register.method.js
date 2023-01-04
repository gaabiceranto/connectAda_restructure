import { User } from "./user.class.js";
import { dataBase } from "./data.js";


function register(event){

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    event.preventDefault();

    if(confirmPassword != password ){
        alert ("As senhas não são idênticas.")
    } else {
        // cria um novo objeto de usuário dentro
        const addUser = new User(firstName,lastName,userName,email,password)
        // coloca o novo objeto de usuário dentro do array database
        dataBase.push(addUser)
        //coloca o "value" database dentro da key "userList" no local Storage
        localStorage.setItem('userList', JSON.stringify(dataBase))
        // console.log(dataBase)
        location.href = "./feed.html";
    }


}

const buttonRegister = document.getElementById('buttonRegister')
buttonRegister.addEventListener("click", function(event){
    register(event)
});

buttonRegister.addEventListener("click", function(event){
    register(event)
});



// Ver e esconder os campoos de senha 
let btnIconPassword = document.querySelector('#iconPassword')

btnIconPassword.addEventListener('click', () => {

  const inputPassword = document.querySelector('#password')

  if (inputPassword.getAttribute('type') == 'password'){
    inputPassword.setAttribute('type', 'text')
    btnIconPassword.setAttribute('class', 'fa-solid fa-eye')
  }

    else{
    inputPassword.setAttribute('type', 'password')
    btnIconPassword.setAttribute('class', 'fa-solid fa-eye-slash')
    }
  
})

// Ver e esconder os campoos de senha 
let btnIconConfirmPassword = document.querySelector('#iconConfirmPassword')

btnIconConfirmPassword.addEventListener('click', () => {

  const inputConfirmPassword = document.querySelector('#confirmPassword')

  if (inputConfirmPassword.getAttribute('type') == 'password'){
    inputConfirmPassword.setAttribute('type', 'text')
    btnIconConfirmPassword.setAttribute('class', 'fa-solid fa-eye')
  }

    else{
    inputConfirmPassword.setAttribute('type', 'password')
    btnIconConfirmPassword.setAttribute('class', 'fa-solid fa-eye-slash')
    }
  
})

 
    const spans = document.querySelectorAll('.span-required')
    const divRequired = document.querySelectorAll('#divRequired')
    const inputs = document.querySelectorAll('.required')
    const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;




const setError =  index => {
  spans[index].style.display = 'block'
  divRequired[index].setAttribute('style', 'border: 1px solid red !important; ')
}

const removeError =  index => {
  spans[index].style.display = 'none'
  divRequired[index].setAttribute('style', 'border: 1px solid rgb(166 247 80 / 48%);!important; ')
}

// input FistName
inputs[0].addEventListener('keyup', () => {
  if(inputs[0].value.length <= 3)
  setError(0);
  else
  removeError(0);
})

// input LastName
inputs[1].addEventListener('keyup', () => {
  if(inputs[1].value.length <= 3)
  setError(1);
  else
  removeError(1);
})

// input UserName
inputs[2].addEventListener('keyup', () => {
  if(inputs[2].value.length <= 3)
  setError(2);
  else
  removeError(2);
})

// input Email
inputs[3].addEventListener('keyup', () => {
  if (!emailRegex.test(inputs[3].value))
  setError(3);
  else 
  removeError(3);
})

// input senha
inputs[4].addEventListener('keyup', () => {
  if(inputs[4].value.length <= 8)
  setError(4);
  else
  removeError(4);
  comparePassword();
})

// input Confirmar Senha
inputs[5].addEventListener('keyup', () => {
  comparePassword();
})


function comparePassword (){
  if (inputs[4].value == inputs[5].value && inputs[5].value == inputs[4].value)
  removeError(5)
  else
  setError(5)
}

