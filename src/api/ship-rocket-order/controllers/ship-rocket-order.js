"use strict";

const axios = require("axios");
const { genShirocketOrderBody } = require("../../utils/ShiprocketOrderBody");
const {
  order_status,
  shiprocket_status,
} = require("../../../../config/constants");
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
        const order_product_ids = ctx.request.body.order_products;
        const globalBrand = await strapi.db
          .query("api::global-brand.global-brand")
          .findOne();
        const global = ctx.request.global;
        // console.log(global)
        //ship order_product with shiprocket
        const data = {
          order_product: order_product,
          order: order_product[0].order,
          // product: order_product.product_variant.product,
          user: order_product[0].order.users_permissions_user,
          global: global,
          globalBrand: globalBrand,
          address: order_product[0].order.address,
        };

        const shipRocketOrderBody = genShirocketOrderBody(data);
        console.log(shipRocketOrderBody.order_items);
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
          // console.log(err.response);
          return ctx.send(
            {
              message: `${err.response.data.message}`,
            },
            err.response.status
          );
        }
        // console.log(shipRocketOrderBody.order_items);
        let values = [];
        let setValues = [];
        for (const it of shipRocketOrderBody.order_items) {
          values.push([it.name, it.sku, it.units, it.selling_price]);
          setValues.push([it.order_item]);
        }

        const valueSets = values
          .map((row) => `('${row.join("','")}')`)
          .join(",");

        let query = `INSERT INTO public."shiprocket_order_items" ("name","sku","units","selling_price")
        VALUES
          ${valueSets}
          RETURNING id;
        `;

        if (placeShipRocketOrder.status == 200) {
          let link_values = [];
          const createItem = await strapi.db.connection.raw(query);
          const shiprocket_orderitem_ids = createItem.rows;
          for (let i = 0; i < shiprocket_orderitem_ids.length; i++) {
            // console.log(i);
            link_values.push([shiprocket_orderitem_ids[i].id, setValues[i]]);
          }
          const valueSetsLinks = link_values
            .map((row) => `('${row.join("','")}')`)
            .join(",");
          let query_order_item_relation = `INSERT INTO public."shiprocket_order_items_order_item_links" (shiprocket_order_item_id,order_product_id) VALUES ${valueSetsLinks} RETURNING id`;
          const createItemLinks = await strapi.db.connection.raw(
            query_order_item_relation
          );

          shipRocketOrderBody.order_items = shiprocket_orderitem_ids;
          shipRocketOrderBody["shiprocket_order_id"] =
            placeShipRocketOrder.data.order_id;
          shipRocketOrderBody["shipment_id"] =
            placeShipRocketOrder.data.shipment_id;
          shipRocketOrderBody["status"] = shiprocket_status.new;

          const createOrder = await strapi.db
            .query("api::ship-rocket-order.ship-rocket-order")
            .create({ data: shipRocketOrderBody });

          const updateOrderProduct = await strapi.db
            .query("api::order-product.order-product")
            .updateMany({
              where: { id: order_product_ids },
              data: { status: order_status.intransit },
            });
          // if (updateOrderProduct) {
          return ctx.send(placeShipRocketOrder.data, 200);
          // }
        }

        return ctx.send({ message: `Something Went Wrong` }, 403);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
    cancelOrder: async (ctx, next) => {
      try {
        const { id } = ctx.request.params;
        const global = await strapi.db.query("api::global.global").findOne();

        const order_product = await strapi.db
          .query("api::order-product.order-product")
          .findOne({
            where: {
              $and: [{ id }, { shiprocket_order_item: { $not: null } }],
            },
            populate: {
              shiprocket_order_item: {
                populate: { ship_rocket_order: true },
              },
            },
          });
        // const ids = [order_product.shiprocket_order_item.ship_rocket_order.shiprocket_order_id]
        // var data = JSON.stringify({
        //   "ids": [order_product.shiprocket_order_item.ship_rocket_order.shiprocket_order_id]
        // });

        if (order_product) {
          const cancelShipRocketOrder = await axios.post(
            "https://apiv2.shiprocket.in/v1/external/orders/cancel",
            {
              ids: [
                order_product.shiprocket_order_item.ship_rocket_order
                  .shiprocket_order_id,
              ],
            },
            {
              headers: {
                Authorization: `Bearer ${global.token}`,
              },
            }
          );
          console.log(cancelShipRocketOrder);
          if (cancelShipRocketOrder.status == 200) {
            const updateOrderProduct = await strapi.db
              .query("api::order-product.order-product")
              .update({
                where: { id },
                data: { status: "CANCELLED" },
              });
            return ctx.send({ message: "Order has been cancelled!" }, 200);
          } else {
            return ctx.send({ error: "Some Error Occured" }, 401);
          }
        } else {
          return ctx.send({ error: "Invalid Order Id" }, 401);
        }
      } catch (error) {
        console.log(error);
        return ctx.send(error, 500);
      }
    },
  })
);
