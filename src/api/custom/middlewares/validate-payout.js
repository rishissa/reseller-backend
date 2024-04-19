"use strict";
const Joi = require("joi");

/**
 * `validate-payout` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In validate-payout middleware.");

    const body = ctx.request.body;
    console.log(body);

    const pay_methods = ["upiId", "accountName", "ifscCode", "accountNumber"];

    if (Object.keys(body).length === 0) {
      return ctx.send(
        { message: "Pass payment method and amount in the body" },
        400
      );
    }

    const schema = Joi.object({
      amount: Joi.number(),
    });
    if (body.amount && Object.keys(body).length === 1) {
      return ctx.send(
        {
          message: `Please pass any of these fields to proceed [${pay_methods}]`,
        },
        400
      );
    }
    var bodySchema;
    if (body.accountNumber) {
      bodySchema = Joi.object({
        accountName: Joi.string().when("accountNumber", {
          is: Joi.exist(),
          then: Joi.string().required(),
          otherwise: Joi.forbidden(),
        }),
        ifscCode: Joi.string().when("accountNumber", {
          is: Joi.exist(),
          then: Joi.string().required(),
          otherwise: Joi.forbidden(),
        }),
      });
      const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
      };
      let body_result = bodySchema.validate(ctx.request.body, options);
      if (body_result.error) {
        ctx.send({
          message: body_result.error.message.replaceAll('"', ""),
        });
        console.log(body_result.error);
        return (ctx.response.status = 400);
      } else {
        return await next();
      }
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
    } else {
      return await next();
    }
  };
};
