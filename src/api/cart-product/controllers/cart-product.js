"use strict";

/**
 * cart-product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::cart-product.cart-product",
  ({ strapi }) => ({
    getUserCart: async (ctx, next) => {
      var userCartInfo;

      try {
        if (
          ctx.request &&
          ctx.request.header &&
          ctx.request.header.authorization
        ) {
          const { id, isAdmin = false } = await strapi.plugins[
            "users-permissions"
          ].services.jwt.getToken(ctx);

          userCartInfo = await strapi
            .query("plugin::users-permissions.user")
            .findOne({
              where: {
                id: id,
              },
              populate: {
                cart_products: {
                  populate: {
                    product_variant: true,
                    product: {populate: {thumbnail: true}},
                  },
                },
              },
            });
        }
        return ctx.send({ data: userCartInfo }, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },

    addToUserCart: async (ctx, next) => {
      try {
        var { productID, productVariantID, quantity, resellingPrice } =
          ctx.request.body;

        var userID;
        var variant;
        var product;
        var cartInfo;
        var oldCartList;

        if (
          ctx.request &&
          ctx.request.header &&
          ctx.request.header.authorization
        ) {
          const { id, isAdmin = false } = await strapi.plugins[
            "users-permissions"
          ].services.jwt.getToken(ctx);

          userID = id;
        }

        oldCartList = await strapi
          .query("plugin::users-permissions.user")
          .findOne({
            where: {
              id: id,
            },
            populate: {
              cart_products: {
                populate: {
                  product_variant: true,
                  product: true,
                },
              },
            },
          });

        variant = await strapi
          .query("api::product-variant.product-variant")
          .findOne({ where: { id: parseInt(productVariantID) } });

        product = await strapi
          .query("api::product.product")
          .findOne({ where: { id: parseInt(productID) } });

        //Check If the Product Is Already Added In the Cart

        cartInfo = await strapi.query("api::cart-product.cart-product").create({
          data: {
            product_variant: productVariantID,
            quantity: parseInt(quantity),
            resellingPrice: parseFloat(resellingPrice),
            product: product.id.toString(),
            user: userID,
          },
        });

        return ctx.send({ data: cartInfo }, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
