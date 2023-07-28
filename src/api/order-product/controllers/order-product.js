"use strict";

/**
 * order-product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::order-product.order-product",
  ({ strapi }) => ({
    update: async (ctx, next) => {
      try {
        const body = ctx.request.body;
        const id = ctx.request.params.id;
        const updateOrderProd = await strapi.db
          .query("api::order-product.order-product")
          .update({
            data: body,
            where: { id: id },
          });
        return ctx.send(updateOrderProd, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
