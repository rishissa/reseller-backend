"use strict";

/**
 * `check-order-body` middleware
 */
const Joi = require("joi");

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In check-order-body middleware.");
    const { id } = await strapi.plugins[
      "users-permissions"
    ].services.jwt.getToken(ctx);

    var userInfo = await strapi
      .query("plugin::users-permissions.user")
      .findOne({
        where: {
          id: id,
        },
      });

    var schema;
    if (userInfo.isAdmin) {
      schema = Joi.object().keys({
        user_id: Joi.required(),
        consumer: Joi.object().keys({
          addressID: Joi.number().required(),
          payment_mode: Joi.string()
            .valid("PREPAID", "COD", "WALLET")
            .required(),
        }),
        products: Joi.array().min(1).required(),
      });
    } else {
      schema = Joi.object().keys({
        consumer: Joi.object().keys({
          addressID: Joi.number().required(),
          payment_mode: Joi.string()
            .valid("PREPAID", "COD", "WALLET")
            .required(),
        }),
        products: Joi.array().min(1).required(),
      });
    }
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
    }
    await next();
  };
};
