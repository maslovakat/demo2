const ProductModel = require('./products.model');

class ProductService {
    async findMany(params) {
        return ProductModel.findAll(params);
    }

    async findOneById(id) {
        const product = await ProductModel.findOne({ where: { id } });

        if (!product) {
            throw new NotFound('Product not found');
        }

        return product;
    }

    async updateOne(id, productData) {
        await this.findOneById(id);
        await ProductModel.update(productData, { where: { id } });
        return this.findOneById(id);
    }
}

module.exports = new ProductService();