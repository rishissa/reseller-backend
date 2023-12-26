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
          dimensions: ctx.request.body,
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
    trackOrder: async (ctx, next) => {
      try {
        const order_id = ctx.request.params.id;

        //find order product
        const order_product = await strapi.db
          .query("api::order-product.order-product")
          .findOne({ where: { id: order_id } });

        if (!order_product) {
          return ctx.send({ message: `Invalid OrderProduct ID passed` }, 204);
        }

        //find shiprocket order item
        //find shipmentID
        const shiprocket_order = await strapi.db
          .query("api::ship-rocket-order.ship-rocket-order")
          .findOne({
            where: { order_items: { order_item: { id: order_id } } },
          });

        //call shiprocket track API
        let track_data;
        const global = await strapi.db.query("api::global.global").findOne();

        try {
          track_data = {
            tracking_data: {
              track_status: 1,
              shipment_status: 42,
              shipment_track: [
                {
                  id: 185584215,
                  awb_code: "1091188857722",
                  courier_company_id: 10,
                  shipment_id: 168347943,
                  order_id: 168807908,
                  pickup_date: null,
                  delivered_date: null,
                  weight: "0.10",
                  packages: 1,
                  current_status: "PICKED UP",
                  delivered_to: "Mumbai",
                  destination: "Mumbai",
                  consignee_name: "Musarrat",
                  origin: "PALWAL",
                  courier_agent_details: null,
                  edd: "2021-12-27 23:23:18",
                },
              ],
              shipment_track_activities: [
                {
                  date: "2021-12-23 14:23:18",
                  status: "X-PPOM",
                  activity: "In Transit - Shipment picked up",
                  location: "Palwal_NewColony_D (Haryana)",
                  "sr-status": "42",
                },
                {
                  date: "2021-12-23 14:19:37",
                  status: "FMPUR-101",
                  activity: "Manifested - Pickup scheduled",
                  location: "Palwal_NewColony_D (Haryana)",
                  "sr-status": "NA",
                },
                {
                  date: "2021-12-23 14:19:34",
                  status: "X-UCI",
                  activity: "Manifested - Consignment Manifested",
                  location: "Palwal_NewColony_D (Haryana)",
                  "sr-status": "5",
                },
              ],
              track_url: "https://shiprocket.co//tracking/1091188857722",
              etd: "2021-12-28 10:19:35",
            },
          };
          // await axios.get(
          //   `https://apiv2.shiprocket.in/v1/external/courier/track/shipment/${shiprocket_order.shipment_id}`,
          //   {
          //     headers: {
          //       Authorization: `Bearer ${global.token}`,
          //     },
          //   }
          // );
        } catch (err) {
          console.log(err);
          return ctx.send(err, 400);
        }
        let track_data_activities =
          track_data.tracking_data.shipment_track_activities;
        // console.log(shiprocket_order);
        return ctx.send(track_data_activities, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
