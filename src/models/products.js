const db = require("../config/config");

const Products = {};

Products.createProduct = (product, result) => {
  //Revisa si el cliente existe

  const sql = `SELECT COUNT(*) AS total FROM producto WHERE codigo_producto=? OR nombre_producto=?`;
  db.query(
    sql,
    [product.codigo_producto, product.nombre_producto],
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        if (res.total > 0) {
          result(null, { message: "Producto ya registrado" });
        } else {
          //Si no existe, lo registra
          const sql1 = `INSERT INTO producto (
            codigo_producto,
            nombre_producto,
            costo_producto,
            precio_producto
         ) VALUES (?, ?, ?, ?)`;
          db.query(
            sql1,

            [
              product.codigo_producto,
              product.nombre_producto,
              product.costo_producto,
              product.precio_producto
            ],

            (err, res) => {
              if (err) {
                result(err, null);
              } else {
                result(null, {
                  message: "producto registrado " + res.insertId,
                })
              }
            }
          );
        }
      }
    }
  );
};

Products.editProduct = (product, result) => {
  const sql = `UPDATE producto  SET nombre_producto= ?, codigo_producto=? WHERE id_producto=?`;

  db.query(
    sql,
    [product.nombre_producto, product.codigo_producto, product.id_producto],
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Products.deleteProduct = (product, result) => {
  const sql = `DELETE FROM producto
       WHERE id_producto=?`;
  db.query(sql, [product.id_producto], (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Products;
