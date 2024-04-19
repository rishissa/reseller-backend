"use strict";

/**
 * `shiprocket-order-validation` middleware
 */

const { order_status } = require("../../../../config/constants");
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In shiprocket-order-validation middleware.");
    const order_ids = ctx.request.body.order_products;
    console.log(order_ids);
    // const address = ctx.request.body.address;

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
      .findMany({
        where: { id: { $in: order_ids } },
        populate: {
          product_variant: { populate: { product: true } },
          order: { populate: { users_permissions_user: true, address: true } },
        },
      });

    // console.log(order_product);

    // let missingId = null;

    const missingId = order_ids.find(
      (id) => !order_product.some((item) => item.id == id)
    );

    if (missingId !== undefined) {
      // console.log(`ID ${missingId} doesn't have any order product.`);
      return ctx.send(
        { message: `ID ${missingId} doesn't have any order product.` },
        400
      );
    }

    // const addressDetails = await strapi.db
    //   .query("api::address.address")
    //   .findOne({ where: { id: address } });

    // if (!addressDetails) {
    //   return ctx.send({ message: `No Address found with the given id` }, 400);
    // }

    for (const it of order_product) {
      if (!it) {
        return ctx.send(
          { message: `No Order Product Found with the given ID` },
          400
        );
      }
      if (it.status === order_status.intransit) {
        return ctx.send({ message: "Order already in Intransit" }, 400);
      }

      if (
        it.status === order_status.accepted ||
        it.status === order_status.processing
      ) {
        // it["address"] = it.order.address.id;
        ctx.request.order_product = order_product;
        ctx.request.global = global;
        return await next();
      }
      return ctx.send(
        {
          message: `Order ${it.id} must be ${order_status.accepted} or in ${order_status.processing} state`,
        },
        400
      );
    }
    //check if order_product is accepted or processing
  };
};
