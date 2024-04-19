"use strict";
const Joi = require("joi");
const { lead_status } = require("../../../../config/constants");

/**
 * `lead-body-validation` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In lead-body-validation middleware.");
    const body = ctx.request.body.data;
    const sources = [
      "WHATSAPP",
      "INSTAGRAM",
      "SOCIAL_SELLER_WEBSITE",
      "YOUTUBE_CHANNEL",
      "APP",
      "WEBSITE",
    ];

    if (!sources.includes(body.source)) {
      return ctx.send(
        { message: `Invalid source. Only [${sources}] are allowed` },
        400
      );
    }
    var status = lead_status.new;
    let assigned_to_user;
    if (body.assigned_to) {
      assigned_to_user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { id: body.assigned_to } });

      if (!assigned_to_user) {
        status = lead_status.new;
        return ctx.send(
          { message: `No User found with the assigned_id ${body.assigned_to}` },
          400
        );
      }
      status = lead_status.assigned;
    }
    const schema = Joi.object().keys({
      // status: Joi.string().required(),
      source: Joi.string().required(),
      assigned_to: Joi.optional(),
      name: Joi.string().when("user", {
        is: Joi.exist(),
        then: Joi.forbidden(),
        otherwise: Joi.required(),
      }),
      phone: Joi.string().when("user", {
        is: Joi.exist(),
        then: Joi.forbidden(),
        otherwise: Joi.required(),
      }),
      country_code: Joi.string().when("user", {
        is: Joi.exist(),
        then: Joi.forbidden(),
        otherwise: Joi.required(),
      }),
      user: Joi.number().when(
        Joi.object({
          name: Joi.string().exist(),
          phone: Joi.string().exist(),
          country_code: Joi.string().exist(),
        }),
        {
          then: Joi.forbidden(),
          otherwise: Joi.required(),
        }
      ),
    });

    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };

    let result = schema.validate(body, options);

    if (result.error) {
      ctx.send({
        message: result.error.message.replaceAll('"', ""),
      });
      console.log(result.error);
      return (ctx.response.status = 400);
    }
    ctx.request.status = status;
    await next();
  };
};
