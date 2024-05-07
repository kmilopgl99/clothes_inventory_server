const mysql = require('mysql');
const db = mysql.createConnection({
      host: 'localhost', //URL del servidor
      user: 'root', //El nombre del dueño de la BD
      password: 'root1234',
      database: 'db_clothes_inventory'
});

db.connect(function(err) {
      if (err) throw err;
      console.log('Base de datos conectada');
});

module.exports = db;
      