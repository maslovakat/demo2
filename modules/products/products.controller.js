
const productService = require('./products.service');

class ProductsController {
    async findMany(req, res, next) {
        try {
            const products = await productService.findMany();
            res.json(products);
        } catch (e) {
            next(e);
        }
    }
}

const productController = new ProductsController();
module.exports = productController;