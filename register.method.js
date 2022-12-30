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

    if(confirmPassword != password){
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
