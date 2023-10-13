"use strict";

/**
 * cart controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::cart.cart", ({ strapi }) => ({
  create: async (ctx, next) => {
    try {
      const body = ctx.request.body;
      const product_variant_id = body.product_variant;

      const { id } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id: id },
          populate: { cart: true },
        });

      const product_variant = await strapi.db
        .query("api::product-variant.product-variant")
        .findOne({ where: { id: product_variant_id } });

      if (!product_variant) {
        return ctx.send(
          {
            message: `No Product Variant Found with the given ID:${product_variant_id}`,
          },
          400
        );
      }

      if (!user.cart) {
        body["user"] = id;
        const newCart = await strapi.db
          .query("api::cart.cart")
          .create({ data: body });
        body["cart"] = newCart.id;
        const newCartProducts = await strapi.db
          .query("api::cart-product.cart-product")
          .create({ data: body });
        return ctx.send(newCart, 200);
      } else {
        //check if req.body product_variant is already present in the cart
        //if yes. then increase the qty
        //else create another record in cart_products
        const cart_product_variant = await strapi.db
          .query("api::cart-product.cart-product")
          .findOne({
            where: { product_variant: { id: product_variant_id } },
          });
        if (cart_product_variant) {
          const update_cart_product = await strapi.db
            .query("api::cart-product.cart-product")
            .update({
              where: { product_variant: { id: product_variant_id } },
              data: {
                quantity: parseInt(
                  cart_product_variant.quantity + (body.quantity || 1)
                ),
                resellingPrice: body.resellingPrice || undefined,
              },
            });

          return ctx.send(
            {
              message: `Product Variant ${product_variant_id} quantity updated to ${parseInt(
                cart_product_variant.quantity + (body.quantity || 1)
              )}`,
            },
            201
          );
        }

        body["cart"] = user.cart.id;
        const create_cart_product = await strapi.db
          .query("api::cart-product.cart-product")
          .create({ data: body });
        return ctx.send(create_cart_product, 200);
        // console.log(cart_product_variant);
        //update the cart
        //i.e., add the cart-products
        // body["cart"] = user.cart.id;
        // const updateCart = await strapi.db
        //   .query("api::cart-product.cart-product")
        //   .create({ data: body });
      }
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  update: async (ctx, next) => {
    try {
      const cart = await strapi.db.query("api::cart.cart").findOne({
        where: { id: ctx.request.params.id },
        populate: { user: true },
      });

      const { id } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const body = ctx.request.body;

      if (!cart) {
        return ctx.send(
          {
            message: `No Cart found with the given ID:${ctx.request.params.id}`,
          },
          204
        );
      }

      if (cart.user.id !== id) {
        return ctx.send(
          { message: `Cart ${cart.id} belongs to different user` },
          400
        );
      }
      if (body.product_variant === undefined) {
        return ctx.send({ message: `product_variant is required` }, 400);
      }

      const update_cart_product = await strapi.db
        .query("api::cart-product.cart-product")
        .update({
          where: {
            cart: { id: cart.id },
            product_variant: { id: body.product_variant },
          },
          data: body,
        });
      return ctx.send(update_cart_product, 201);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  findOne: async (ctx, next) => {
    try {
      const cart = await strapi.db.query("api::cart.cart").findOne({
        where: { id: ctx.request.params.id },
        populate: {
          cart_products: {
            populate: {
              product_variant: {
                populate: { product: { populate: { thumbnail: true } } },
              },
            },
          },
        },
      });

      return ctx.send(cart, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  deleteCartProducts: async (ctx, next) => {
    try {
      const cart_id = ctx.request.params.cart_id;
      const product_variant_id = ctx.request.params.variant_id;
      const deleted_cart_product = await strapi.db
        .query("api::cart-product.cart-product")
        .delete({
          where: {
            cart: { id: cart_id },
            product_variant: { id: product_variant_id },
          },
        });
      return ctx.send(deleted_cart_product, 201);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
}));
