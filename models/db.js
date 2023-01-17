const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('connectada', 'ada', '1122334455', {
    host: 'connectada.made4it.com.br',
    dialect: 'mysql'
  });

sequelize.authenticate()
.then(function(){
    console.log("Conexão banco de dados feita com sucesso")
}).catch(function(){
    console.log("Erro Conexão banco de dados ")
})

  module.exports = sequelize;