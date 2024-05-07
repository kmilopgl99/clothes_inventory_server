const db = require("../config/config");

const Entry = {};

Entry.createEntry = (entry, result) => {
      //Crea una entrada   
            const sql =
                  `INSERT INTO entrada (id_producto,cantidad_entrada,costo_producto,
                        origen_producto,id_almacen,fecha_entrada) VALUES
                        (?,?,?,?,?,CURRENT_TIMESTAMP)
                        ` ;
            db.query(
                  sql,
                  [
                        entry.id_producto,
                        entry.cantidad_entrada,
                        entry.costo_producto,
                        entry.origen_producto,
                        entry.id_almacen
                  ],
                  (err, res) => {
                        if (err) {
                              console.log('Model error: ', err); //for debugging
                              result(err, null);
                        } else {
                              result(null, res);
                        }
                  }
            )
      };

module.exports = Entry;