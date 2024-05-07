const db = require('../config/config');

const User = {};


User.login = (user, result) => {

      const sql =  `SELECT * FROM usuario WHERE correo_electronico=? AND contrasena=?`
                  
      db.query(
            sql,
            [
                  user.correo_electronico,
                  user.contrasena,
            ],
            (err, res) => {
                  if (err) {
                        console.log('error: ', err);
                        result(err, null);
                  }
                  else {
                        console.log('Id del Usuario: ', res[0].id_usuario);
                        result(null,res)
                  }
            }
      )
};



User.register = (user, result) => {

      //Revisa si el cliente existe

       const sql = `SELECT * FROM usuario WHERE correo_electronico=?`;
       db.query(sql, [user.correo_electronico], (err, res) => {
             if (err) {
                   result(err, null);
             } else {
                   if (res.length > 0) {
                         result(null, { message: 'Cliente ya registrado' });
                   } else {
                         //Si no existe, lo registra
                         const sql = `INSERT INTO usuario (nombre_usuario, tipo_documento, numero_documento, correo_electronico, contrasena)
                                      VALUES (?,?,?,?,?)`;
                   db.query(
                         sql,

                         [user.nombre_usuario,
                         user.tipo_documento,
                         user.numero_documento,
                         user.correo_electronico,
                         user.contrasena],

                         (err, res) => {
                               if (err) {
                                     result(err, null);
                               } else {
                                     result(null, { message: 'ID Cliente registrado: ' + res.insertId });
                               }
                         }
                   );
             }
       } 
 });
};

module.exports = User;



