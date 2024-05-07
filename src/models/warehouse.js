const db = require('../config/config');

const Warehouse = {};

Warehouse.createwarehouse = (user, result) => {

      //Revisa si el cliente existe

       const sql = `SELECT * FROM almacen WHERE nombre_almacen=?`;
       db.query(sql, [user.nombre_almacen], (err, res) => {
             if (err) {
                   result(err, null);
             } else {
                   if (res.length > 0) {
                         result(null, { message: 'Cliente ya registrado' });
                   } else {
                         //Si no existe, lo registra
                         const sql = `INSERT INTO almacen (nombre_almacen)
                                      VALUES (?)`;
                   db.query(
                         sql,

                         [user.nombre_almacen,],

                         (err, res) => {
                               if (err) {
                                     result(err, null);
                               } else {
                                     result(null, { message: 'Almacen ya registrado ' + res.insertId });
                               }
                         }
                   );
             }
       } 
 });
};

Warehouse.editwarehouse = (user, result) => {


       const sql = `UPDATE almacen  SET nombre_almacen=? WHERE id_almacen=?`;
       db.query(sql, [user.nombre_almacen,
                      user.id_almacen], (err, res) => {
             if (err) {
                   result(err, null);
             } else {
                   result(null,res);
                               }
                         }
                   );
             }


Warehouse.deletewarehouse = (user, result) => {


       const sql = `DELETE FROM almacen
       WHERE id_almacen=?`;
       db.query(sql, [user.id_almacen], (err, res) => {
             if (err) {
                   result(err, null);
             } else {
                   result(null,res);
                               }
                         }
                   );
             }


module.exports = Warehouse;