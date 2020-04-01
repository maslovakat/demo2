const Joi = require('joi');

const CreateOrderSchema = Joi.object().keys({
   items: Joi.array().items(Joi.object().keys({
       productId: Joi.number().integer().min(1).required()
   })),
   customer: Joi.object().keys({
       name: Joi.string().min(3).required(),
       email: Joi.string().email().required(),
       phone: Joi.string().min(8).required(),
   })
});

module.exports = { CreateOrderSchema };