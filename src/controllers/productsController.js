const Products = require('../models/products.js');

module.exports = {
      createProduct(req, res) {
            const product = req.body; //Datos de la compañia desde el front-end
            Products.createProduct(product, (err, data) => {
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
                              message: 'Producto registrado',
                              data: data //Datos desde Model
                        }
                  );
            });
      },

      editProduct(req, res) {
            const product = req.body; //Datos de la compañia desde el front-end
            Products.editProduct(product, (err, data) => {
                  if (err) {
                        return res.status(501).json(
                              {
                                    success: false,
                                    message: 'Error al editar el producto',
                                    error: err
                              }
                        );
                  }
                  //console.log('Compañia registrada: ', data); //for debugging
                  return res.status(201).json(
                        {
                              success: true,
                              message: 'Producto editado',
                              data: data //Datos desde Model
                        }
                  );
            });
      },

      deleteProduct(req, res) {
            const product = req.body; //Datos de la compañia desde el front-end
            Products.deleteProduct(product, (err, data) => {
                  if (err) {l
                        return res.status(501).json(
                              {
                                    success: false,
                                    message: 'Error al eliminar el producto',
                                    error: err                          }
                        );
                  }
                  //console.log('Compañia registrada: ', data); //for debugging
                  return res.status(201).json(
                        {
                              success: true,
                              message: 'Producto eliminado',
                              data: data //Datos desde Model
                        }
                  );
            });
      }
};

