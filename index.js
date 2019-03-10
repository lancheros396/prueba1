var mysql = require('mysql');

var con = mysql.createConnection({
  host: "199.79.62.144",
  user: "ingnovat_stiven",
  password: "#Ing2017",
  database: "ingnovat_prueba",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("conexion exitosa");
  var sql = "INSERT INTO Personas (Codigo_Persona, Nombre_Persona) VALUES (100010182, 'Omar lancheros')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Dato insertado");
  });
});