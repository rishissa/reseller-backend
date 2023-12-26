"use strict";

/**
 * return-order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::return-order.return-order",
  ({ strapi }) => ({
    getReturnOrderRequests: async (ctx, next) => {
      try {
        const { id, isAdmin = false } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);

        //get requests
        const requests = await strapi.db
          .query("api::return-order.return-order")
          .findMany({
            where: { user: { id: id } },
            populate: {
              order_product: {
                populate: {
                  product_variant: {
                    select: ["id", "name"],
                    populate: {
                      product: {
                        select: ["id", "name"],
                        populate: {
                          thumbnail: {
                            select: [
                              "id",
                              "url",
                              "width",
                              "height",
                              "size",
                              "mime",
                              "ext",
                            ],
                          },
                        },
                      },
                    },
                  },
                  order: { select: ["id", "slug"] },
                },
              },
            },
          });

        return ctx.send(requests, 200);
      } catch (error) {
        console.log(error);
        return ctx.send(error, 400);
      }
    },

    findOne: async (ctx, next) => {
      try {
        const id = ctx.request.params.id;

        const returnRequest = await strapi.db
          .query("api::return-order.return-order")
          .findOne({
            where: { id: id },
            populate: {
              order_product: {
                populate: {
                  product_variant: {
                    select: ["id"],
                    populate: {
                      product: {
                        select: ["id"],
                        populate: {
                          thumbnail: {
                            select: [
                              "id",
                              "url",
                              "width",
                              "height",
                              "size",
                              "mime",
                              "ext",
                            ],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          });

        if (returnRequest) {
          return ctx.send(returnRequest, 200);
        }
        return ctx.send(
          { message: "No Return Request Found with the given ID" },
          204
        );
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
