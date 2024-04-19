"use strict";
const Joi = require("joi");
/**
 * `body-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log("Into Check SUb middleware");
    const { id, isAdmin = false } = await strapi.plugins[
      "users-permissions"
    ].services.jwt.getToken(ctx);

    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: { id: id },
      populate: {
        role: true,
        subscriptions: {
          populate: {
            plan: true,
          },
        },
      },
    });
    var schema;
    var options;
    if (user.role.type === "admin") {
      schema = Joi.object({
        plan: Joi.string().required(),
        userId: Joi.string().required(),
      });
      options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
      };
    } else {
      schema = Joi.object({
        plan: Joi.string().required(),
      });
      options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
      };
    }

    let result = schema.validate(ctx.request.body.data, options);

    if (result.error) {
      ctx.send({
        message: result.error.message.replaceAll('"', ""),
      });
      console.log(result.error);
      return (ctx.response.status = 400);
    } else {
      ctx.request.userInfo = user;
      await next();
    }
  };
};
