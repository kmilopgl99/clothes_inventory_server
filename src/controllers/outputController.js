const Output = require('../models/output.js');

module.exports = {
      createOutput(req, res) {
            const output = req.body; //Datos de la compañia desde el front-end
            Output.createOutput(output, (err, data) => {
                  if (err) {
                        return res.status(501).json(
                              {
                                    success: false,
                                    message: 'Error al registrar el producto',
                                    error: err
                              }
                        );
                  }
                  //console.log('Compañia registrada: ', data); //for debugging
                  return res.status(201).json(
                        {
                              success: true,
                              message: 'Entrada registrada',
                              data: data //Datos desde Model
                        }
                  );
            });
      },
}     
