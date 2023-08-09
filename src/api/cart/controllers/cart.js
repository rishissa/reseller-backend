"use strict";

/**
 * cart controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::cart.cart", ({ strapi }) => ({
  create: async (ctx, next) => {
    try {
      const body = ctx.request.body;
      const { id } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id: id },
          populate: { cart: true },
        });

      if (!user.cart) {
        //no cart create a cart record for the user
        const newCart = await strapi.db
          .query("api::cart.cart")
          .create({ data: body });
        return ctx.send(newCart, 200);
      }
      
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
}));
