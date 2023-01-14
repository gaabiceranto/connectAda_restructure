app.post('/auth', urlencodedParser, function(req, res) {
    var username = "'" + req.body.usernames + "'";
    var password = "'" + req.body.passwords + "'";
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "connectada.made4it.com.br",
      user: "ada",
      password: "1122334455",
      database: "connectada"
   });

    if (username && password) {
        con.connect(function(err) {
             if (err) throw err;
             con.query('SELECT * FROM Utilisateur WHERE username = ? AND password = ?', [username, password],function(err, results) {
                if (err) {
                    console.log('error running the authentication:', err);
                }
                results = JSON.parse("[{},{}]")
                if (results.length > 0) {
                    req.session.loggedin = true
                    req.session.username = username
                    res.render('home')
                }
             });  
        });
    }
});