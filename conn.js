var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mahasiswa"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;