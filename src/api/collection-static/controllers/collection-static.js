"use strict";

/**
 * collection-static controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::collection-static.collection-static",
  ({ strapi }) => ({
    findOne: async (ctx, next) => {
      try {
        const id = ctx.request.params.id;

        const response = await strapi.db
          .query("api::collection-static.collection-static")
          .findOne({
            where: { id: id },
            populate: {
              products: {
                populate: {
                  category: true,
                  thumbnail: true,
                  product_variants: true,
                },
              },
            },
          });

        if (response) {
          return ctx.send(response, 200);
        }
        return ctx.send({ message: "Something Went Wrong" }, 400);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
