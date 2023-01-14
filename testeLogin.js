const mysql = require('mysql2');

const username = 'gaybi'
const password = 1122334454

// criando a conexão
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
      console.log("ENtrou")
      else 
          console.log("erro")
    console.log(results);
  console.log(results.length)
  }
);
connection.end();