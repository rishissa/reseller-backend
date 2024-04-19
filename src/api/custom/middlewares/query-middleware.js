"use strict";
const Joi = require("joi");

/**
 * `query-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log(ctx.request.query);

    const schema = Joi.object().keys({
      pagination: {
        page: Joi.number().required(),
        size: Joi.number().required(),
      },
      // pagination: {size: Joi.number()}
    });
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };

    let result = schema.validate(ctx.request.query, options);
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
