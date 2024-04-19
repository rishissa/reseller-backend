"use strict";
const Joi = require("joi");

/**
 * `custom-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.

  return async (ctx, next) => {
    console.log("Into the custom-middleware middleware");

    const schema = Joi.object({
      id: Joi.number(),
    });
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };

    let result = schema.validate(ctx.request.params, options);
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
