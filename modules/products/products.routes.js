const { Router } = require('express');
const productController = require('./products.controller');

const router = new Router();

router.get('/', productController.findMany);

module.exports = router;