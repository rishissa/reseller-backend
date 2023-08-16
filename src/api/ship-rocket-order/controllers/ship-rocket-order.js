"use strict";

const axios = require("axios");
const { genShirocketOrderBody } = require("../../utils/ShiprocketOrderBody");
const { order_status } = require("../../../../config/constants");
/**
 * ship-rocket-order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ship-rocket-order.ship-rocket-order",
  ({ strapi }) => ({
    create: async (ctx, next) => {
      try {
        const order_product = ctx.request.order_product;
        const globalBrand = await strapi.db
          .query("api::global-brand.global-brand")
          .findOne();
        const global = ctx.request.global;
        // console.log(global)
        //ship order_product with shiprocket
        const data = {
          order_product: order_product,
          order: order_product.order,
          product: order_product.product_variant.product,
          user: order_product.order.users_permissions_user,
          global: global,
          globalBrand: globalBrand,
          address: order_product.address,
        };

        const shipRocketOrderBody = genShirocketOrderBody(data);
        let placeShipRocketOrder;
        try {
          placeShipRocketOrder = await axios.post(
            "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc",
            shipRocketOrderBody,
            {
              headers: {
                Authorization: `Bearer ${global.token}`,
              },
            }
          );
        } catch (err) {
          return ctx.send(
            {
              message: `Token Signature could not be verified.`,
            },
            401
          );
        }

        if (placeShipRocketOrder.status == 200) {
          const createItem = await strapi.db
            .query("api::shiprocket-order-item.shiprocket-order-item")
            .create({ data: shipRocketOrderBody.order_items[0] });
          shipRocketOrderBody.order_items = createItem.id;
          shipRocketOrderBody["shiprocket_order_id"] =
            placeShipRocketOrder.data.order_id;
          shipRocketOrderBody["shipment_id"] =
            placeShipRocketOrder.data.shipment_id;

          const createOrder = await strapi.db
            .query("api::ship-rocket-order.ship-rocket-order")
            .create({ data: shipRocketOrderBody });
          const updateOrderProduct = await strapi.db
            .query("api::order-product.order-product")
            .update({
              where: { id: order_product.id },
              data: { status: order_status.intransit },
            });
          if (updateOrderProduct) {
            return ctx.send(placeShipRocketOrder.data, 200);
          }
        }

        return ctx.send({ message: `Something Went Wrong` }, 403);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
