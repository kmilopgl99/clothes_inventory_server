const db = require("../config/config");

const Output = {};

Output.createOutput = (output, result) => {
      //Crea una salida   
            const sql =
                  `INSERT INTO salida (id_producto,cantidad_salida,precio_producto,
                        destino_salida,id_almacen,fecha_salida) VALUES
                        (?,?,?,?,?,CURRENT_TIMESTAMP)
                        ` ;
            db.query(
                  sql,
                  [
                        output.id_producto,
                        output.cantidad_salida,
                        output.precio_producto,
                        output.destino_salida,
                        output.id_almacen
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

module.exports = Output;