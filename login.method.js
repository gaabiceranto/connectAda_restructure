 
function logar(event){

  

    event.preventDefault();
  
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
  
    // const index = dataBase.findIndex(item => item.email === login)
  
  
//     if(dataBase[index].password === password){
//         const thisUser = dataBase[index].email;
        
//         alert("sucesso");
//         StorageCreator(thisUser)
  
//         location.href = "../feed/feed.html";
        
//         return ;
//     } else { alert('Usuário ou senha incorretos')
//   }


    if(login == "gabi" && password == "123"){
        
        alert("sucesso");
        StorageCreator(thisUser)
  
        location.href = "./feed.html";
        
        return ;
    } else { alert('Usuário ou senha incorretos')
  }
  
  
  };
  
  
   
  const buttonLogin = document.getElementById('buttonLogin')
  buttonLogin.addEventListener("click", function(event){logar(event)});
  
  const StorageCreator = (thisUser) => {
    window.localStorage.setItem('user',JSON.stringify(thisUser) )
  }
  