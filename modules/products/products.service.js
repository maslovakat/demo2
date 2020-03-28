const { ProductModel } = require('./products.model');

class ProductService {
    async findMany() {
        return ProductModel.findAll();
    }
}

module.exports = new ProductService();