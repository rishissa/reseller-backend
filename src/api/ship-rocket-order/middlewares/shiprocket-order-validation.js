"use strict";

/**
 * `shiprocket-order-validation` middleware
 */

const { order_status } = require("../../../../config/constants");
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In shiprocket-order-validation middleware.");
    const order_id = ctx.request.body.order_product;
    const address = ctx.request.body.address;

    //check if shiprocket_username and password is provided or not.
    const global = await strapi.db.query("api::global.global").findOne();

    if (
      global.is_shiprocket_enabled == false ||
      !global.is_shiprocket_enabled
    ) {
      return ctx.send(
        {
          message: `Shiprocket is not enabled in your settings. Please enable it to proceed`,
        },
        400
      );
    }
    if (!global.shiprocket_username || !global.shiprocket_password) {
      return ctx.send(
        {
          message: `Shiprocket credentials are not provided! Kindly Save your credentials in the Admin Panel`,
        },
        400
      );
    }

    const order_product = await strapi.db
      .query("api::order-product.order-product")
      .findOne({
        where: { id: order_id },
        populate: {
          product_variant: { populate: { product: true } },
          order: { populate: { users_permissions_user: true } },
        },
      });

    const addressDetails = await strapi.db
      .query("api::address.address")
      .findOne({ where: { id: address } });

    if (!addressDetails) {
      return ctx.send({ message: `No Address found with the given id` }, 400);
    }

    if (order_product.status === order_status.intransit) {
      return ctx.send({ message: "Order already in Intransit" }, 400);
    }
    if (!order_product) {
      return ctx.send(
        { message: `No Order Product Found with the given ID` },
        400
      );
    }
    //check if order_product is accepted or processing
    if (
      order_product.status === order_status.accepted ||
      order_product.status === order_status.processing
    ) {
      order_product["address"] = addressDetails;
      ctx.request.order_product = order_product;
      ctx.request.global = global;
      return await next();
    }

    return ctx.send(
      {
        message: `Order must be ${order_status.accepted} or in ${order_status.processing} state`,
      },
      400
    );
  };
};
