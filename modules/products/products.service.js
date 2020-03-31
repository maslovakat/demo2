const ProductModel = require('./products.model');

class ProductService {
    async findMany(params) {
        return ProductModel.findAll(params);
    }
}

module.exports = new ProductService();