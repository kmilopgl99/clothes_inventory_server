const User = require('../models/user.js');


module.exports = {
      login(req, res) {
            const user = req.body; //Datos del usuario desde el front-end

            console.log("");

            User.login(user, (err, data) => {
                  if (err) {
                        return res.status(501).json(
                              {
                                    success: false,
                                    message: 'Error al consultar el usuario',
                                    error: err
                              }
                        );
                  }
                  console.log('Controller - encontrados: ', data.length); //for debugging
                  return res.status(201).json(
                        {
                              success: true,
                              message: 'Usuarios encontrados:' + data.length,
                              data: data //Datos desde Model
                        }
                  );
            });
      },

      register(req, res) {
            const user = req.body; //Datos de la compañia desde el front-end
            User.register(user, (err, data) => {
                  if (err) {
                        return res.status(501).json(
                              {
                                    success: false,
                                    message: 'Error al registrar la compañia',
                                    error: err
                              }
                        );
                  }
                  //console.log('Compañia registrada: ', data); //for debugging
                  return res.status(201).json(
                        {
                              success: true,
                              message: 'Compañia registrada',
                              data: data //Datos desde Model
                        }
                  );
            });
      },
};

