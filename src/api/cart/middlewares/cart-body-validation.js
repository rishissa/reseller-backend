"use strict";

/**
 * `cart-body-validation` middleware
 */
const Joi = require("joi");

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In cart-body-validation middleware.");

    const schema = Joi.object().keys({
      product_variant: Joi.required(),
      quantity: Joi.required(),
      resellingPrice: Joi.optional(),
    });
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };
    let result = schema.validate(ctx.request.body, options);
    if (result.error) {
      return ctx.send(
        {
          message: result.error.message.replaceAll('"', ""),
        },
        401
      );
    } else {
      await next();
    }
  };
};
