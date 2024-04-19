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
    console.log(ctx.request.body);
    var userInfo = await strapi
      .query("plugin::users-permissions.user")
      .findOne({
        where: {
          id: id,
        },
        populate: { role: true },
      });

    let global = await strapi.db.query("api::global.global").findOne();
    let payment_gateway = global.selected_payment_gateway;

    var schema;
    if (userInfo.role.name === "Admin") {
      schema = Joi.object().keys({
        user_id: Joi.required(),
        consumer: Joi.object().keys({
          conName: Joi.string(),
          conEmail: Joi.string(),
          conPhone: Joi.string(),
          addressID: Joi.number().required(),
          payment_mode: Joi.string()
            .valid("PREPAID", "COD", "WALLET")
            .required(),
          isResellerOrder: Joi.bool(),
        }),
        products: Joi.array().min(1).required(),
        payment_instrument_type: Joi.optional(),
        payment_instrument_target: Joi.optional(),
      });
    } else {
      schema = Joi.object().keys({
        consumer: Joi.object().keys({
          conName: Joi.string(),
          conEmail: Joi.string(),
          conPhone: Joi.string(),
          addressID: Joi.number().required(),
          payment_mode: Joi.string()
            .valid("PREPAID", "COD", "WALLET")
            .required(),
          isResellerOrder: Joi.bool(),
        }),
        products: Joi.array().min(1).required(),
        payment_instrument_type: Joi.optional(),
        payment_instrument_target: Joi.optional(),
      });
    }
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };

    let result = schema.validate(ctx.request.body, {
      context: { payment_gateway },
    });

    if (result.error) {
      ctx.send({
        message: result.error.message.replaceAll('"', ""),
      });
      // console.log(result.error);
      return (ctx.response.status = 400);
    }
    ctx.request.global_var = global;
    ctx.request.payment_gateway = payment_gateway;
    // return ctx.send("OK", 200);
    await next();
  };
};
