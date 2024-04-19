"use strict";
const Joi = require("joi");

/**
 * `order-custom` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log("Into Custom Order Middleware");
    const schema = Joi.object({
      consumer: {
        conName: Joi.string().required(),
        conPhone: Joi.string().required(),
        addressID: Joi.number().required(),
        isResellerOrder: Joi.bool().required(),
      },
      products: Joi.array().items(
        Joi.object({
          product_variant_id: Joi.string().required(),
          sellingPrice: Joi.number().precision(2),
        })
      ),
    });
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };
    let result = schema.validate(ctx.request.body, options);
    if (result.error) {
      ctx.send({
        message: result.error.message.replaceAll('"', ""),
      });
      return (ctx.response.status = 400);
    } else {
      await next();
    }
    // await next();
  };
};
