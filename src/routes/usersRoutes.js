const { Router } = require("express");
const router = Router();
const userController = require('../controllers/usersController');
const warehouseController = require('../controllers/warehousesController');
const productsController = require('../controllers/productsController');
const entryController = require('../controllers/entryController')
const outputControlller = require('../controllers/outputController')

//routes
router.post('/users/login', userController.login);
router.post('/users/register', userController.register);

router.post('/warehouse/warehouse-create', warehouseController.createwarehouse);
router.put('/warehouse/warehouse-edit', warehouseController.editwarehouse);
router.delete('/warehouse/warehouse-delete', warehouseController.deletewarehouse);

router.post('/products-create', productsController.createProduct);
router.put('/products-edit', productsController.editProduct);
router.delete('/products-delete', productsController.deleteProduct);

router.post('/entry/create-entry', entryController.createEntry);

router.post('/output/output-create', outputControlller.createOutput);

module.exports = router;
