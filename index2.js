var mysql = require('mysql');

var con = mysql.createConnection({
  host: "199.79.62.144",
  user: "ingnovat_stiven",
  password: "#Ing2017",
  database: "ingnovat_prueba",
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM Personas where Codigo_Persona = 100010182", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });