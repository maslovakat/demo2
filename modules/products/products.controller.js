const productService = require('./products.service');
const { Op } = require('sequelize');


class ProductsController {
    async findMany(req, res, next) {

        // console.log(req.query)
        try {
            let parameters = {};
            if (req.query.sortBy) {
                switch (req.query.sortBy) {
                    case 'price low':
                        parameters.order = [['price', 'ASC']]
                        break;
                    case 'price high':
                        parameters.order = [['price', 'DESC']]
                        break;
                    case 'age low':
                        parameters.order = [['birth_date', 'DESC']]
                        break;
                    case 'age high':
                        parameters.order = [['birth_date', 'ASC']]
                        break;
                    default:
                        parameters.order = [['price', 'ASC']]
                }
            }
            if (req.query.searchBy) {
                parameters.where = {
                    [Op.or]: [
                        {
                            breed: {
                                [Op.like]: `${req.query.searchBy}%`
                            }
                        },
                        {
                            breed: {
                                [Op.like]: `%${req.query.searchBy}%`
                            }
                        }
                    ]

                };
                
            }

            const products = await productService.findMany(parameters);
            res.json(products);
        } catch (e) {
            next(e);
        }
    }
}

const productController = new ProductsController();
module.exports = productController;