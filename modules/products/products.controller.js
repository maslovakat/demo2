const productService = require('./products.service');
const { Op } = require('sequelize');


class ProductsController {
    async findMany(req, res, next) {

        // console.log(req.query)
        try {
            let {searchBy, sortBy="price", dir="asc", filterBy, page, limit} = req.query;
            sortBy = sortBy === 'age' ? 'birth_date' : sortBy;
            let where = {};
            let offset = {};
            if (searchBy) {
                where = Object.assign({}, where, {breed: {[Op.like]: `%${searchBy}%`}});
            }
            if (filterBy) {
                where = Object.assign({}, where, {species: filterBy});
            }
            if (page && limit){
                offset = page * limit;
            }

            let params = {};
            if (Object.keys(where).length !== 0 && where.constructor === Object){
                params = Object.assign({}, params, {where})
            }
            if (offset && limit){
                params = Object.assign({}, params, {offset}, {limit})
            }

            params = Object.assign({}, params, {order: [[sortBy, dir.toUpperCase()]]});


            const products = await productService.findMany(params);
            res.json(products);
        } catch (e) {
            next(e);
        }
    }
}

const productController = new ProductsController();
module.exports = productController;