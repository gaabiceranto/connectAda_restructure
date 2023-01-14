

function logar(event){
  event.preventDefault();
  const mysql = require('mysql2'); 

    
  
    const username = document.getElementById("login").value;
    const password = document.getElementById("password").value;
  

    const connection = mysql.createConnection({
      host: 'connectada.made4it.com.br',
      user: 'ada',
      password: '1122334455',
      database: 'connectada'
    });
    
    
    connection.query(
      'SELECT * FROM `adacheck` WHERE `username` = ? AND `password` = ?',
      [username, password],
      function(err, results) {
        if (results.length > 0)
          alert("Entrou")
          else 
          alert("erro")
      }
    );
    connection.end();
  
  };
  
  
   
  const buttonLogin = document.getElementById('buttonLogin')
  buttonLogin.addEventListener("click", function(event){logar(event)});
  

  