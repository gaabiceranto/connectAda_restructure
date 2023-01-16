var mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();


 const mysql = require('mysql2'); 
 
function logar(event){
  event.preventDefault();

  app.use(bodyparser.json());
 
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
  });// I believe this is a middleware function

  const connection = mysql.createConnection({
    host: 'connectada.made4it.com.br',
    user: 'ada',
    password: '1122334455',
    database: 'connectada'
  });
  
  
    const username = document.getElementById("login").value;
    const password = document.getElementById("password").value;
  

    
    app.get('/listings', (req, res) => {
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
    })
  };
  
  
   
  const buttonLogin = document.getElementById('buttonLogin')
  buttonLogin.addEventListener("click", function(event){logar(event)});
  

  