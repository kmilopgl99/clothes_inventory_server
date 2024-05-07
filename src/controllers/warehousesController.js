const Warehouse = require('../models/warehouse.js');

module.exports = {
      createwarehouse(req, res) {
            const user = req.body; //Datos de la compañia desde el front-end
            Warehouse.createwarehouse(user, (err, data) => {
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
                              message: 'Almacen registrado',
                              data: data //Datos desde Model
                        }
                  );
            });
      },

      editwarehouse(req, res) {
            const user = req.body; //Datos de la compañia desde el front-end
            Warehouse.editwarehouse(user, (err, data) => {
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
                              message: 'Almacen registrado',
                              data: data //Datos desde Model
                        }
                  );
            });
      },

      deletewarehouse(req, res) {
            const user = req.body; //Datos de la compañia desde el front-end
            Warehouse.deletewarehouse(user, (err, data) => {
                  if (err) {
                        return res.status(501).json(
                              {
                                    success: false,
                                    message: 'Error al eliminar el almacen',
                                    error: err
                              }
                        );
                  }
                  //console.log('Compañia registrada: ', data); //for debugging
                  return res.status(201).json(
                        {
                              success: true,
                              message: 'Almacen eliminado',
                              data: data //Datos desde Model
                        }
                  );
            });
      }
}


      




