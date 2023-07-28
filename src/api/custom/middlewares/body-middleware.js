"use strict";
const Joi = require("joi");
/**
 * `body-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log("Into body middleware");

    console.log();

    const schema = Joi.object({
      products: Joi.array().min(1).required(),
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
      console.log(result.error);
      return (ctx.response.status = 400);
    } else {
      await next();
    }
  };
};
