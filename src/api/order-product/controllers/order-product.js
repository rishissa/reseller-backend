"use strict";
const { order_status } = require("../../../../config/constants");

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

    findOne: async (ctx, next) => {
      try {
        const id = ctx.request.params.id;

        const order_product = await strapi.db
          .query("api::order-product.order-product")
          .findOne({
            where: { id: id },
            populate: {
              custom_courier: {
                populate: { image: { select: ["id", "url"] } },
              },
              shiprocket_order_item: { populate: { ship_rocket_order: true } },
              order: { populate: { address: true } },
              product_variant: {
                populate: {
                  product: {
                    populate: { thumbnail: { select: ["id", "url"] } },
                  },
                },
              },
            },
          });

        const global_keys = await strapi.db
          .query("api::global.global")
          .findOne();
        if (order_product) {
          if (order_product.order.isPaid === true) {
            let shiprocket_order;
            if (order_product.status === order_status.delivered) {
              if (global_keys.return_request === true) {
                let now = new Date();
                let deliveredDate = new Date(order_product.updatedAt);
                let return_request_date = new Date(
                  new Date(order_product.updatedAt).setDate(
                    new Date(order_product.updatedAt).getDate() +
                      global_keys.return_request_days
                  )
                );

                if (deliveredDate < return_request_date) {
                  order_product["return_request"] = true;
                } else {
                  order_product["return_request"] = false;
                }
              } else {
                order_product["return_request"] = false;
              }
            }
            if (order_product.custom_courier === null) {
              shiprocket_order = true;
              order_product["shiprocket_order"] = shiprocket_order;
              let track_data;
              let shipment_id = order_product.shiprocket_order_item
                ? order_product.shiprocket_order_item.ship_rocket_order
                    .shipment_id
                : null;

              track_data = {
                tracking_data: {
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
                      sr_status: "42",
                    },
                    {
                      date: "2021-12-23 14:19:37",
                      status: "FMPUR-101",
                      activity: "Manifested - Pickup scheduled",
                      location: "Palwal_NewColony_D (Haryana)",
                      sr_status: "NA",
                    },
                    {
                      date: "2021-12-23 14:19:34",
                      status: "X-UCI",
                      activity: "Manifested - Consignment Manifested",
                      location: "Palwal_NewColony_D (Haryana)",
                      sr_status: "5",
                    },
                  ],
                  track_url: "https://shiprocket.co//tracking/1091188857722",
                  etd: "2021-12-28 10:19:35",
                },
              };
              let shiprocket_courier = track_data;
              order_product["shiprocket_courier"] = shiprocket_courier;
              let msg1 = `*📦Order Tracking*\n 🆔Order ID: *#${order_product.order.slug}*\n 📌 Product Name: *${order_product.product_variant.product.name} ${order_product.product_variant.name}*\n🚚Order Status: ${track_data.tracking_data.shipment_track[0].current_status}\n 🔗Track: ${track_data.tracking_data.track_url}`;
              // const global = await strapi.db
              //   .query("api::global.global")
              //   .findOne();

              // await axios.get(
              //   `https://apiv2.shiprocket.in/v1/external/courier/track/shipment/${shipment_id}`,
              //   {
              //     headers: {
              //       Authorization: `Bearer ${global.token}`,
              //     },
              //   }
              // );

              if (order_product.status !== order_status.delivered) {
                order_product["return_request"] = false;
              } else {
                order_product["return_request"] = global_keys.return_request;
              }
              order_product["msg"] = msg1;
              delete order_product.custom_courier;
              delete order_product.shiprocket_order_item;
            } else {
              let msg2 = `*📦Order Tracking*\n 🆔Order ID: *#${order_product.order.slug}*\n 📌 Product Name: *${order_product.product_variant.product.name} ${order_product.product_variant.name}*\n 🚚Order Status: ${order_product.status}`;
              shiprocket_order = false;
              order_product["shiprocket_order"] = shiprocket_order;
              if (order_product.status !== order_status.delivered) {
                order_product["return_request"] = false;
              } else {
                order_product["return_request"] = global_keys.return_request;
              }
              order_product["msg"] = msg2;
              delete order_product.shiprocket_order_item;
              console.log("Custom Courier Order");
            }
          } else {
            return ctx.send({ message: `This Order is Not Paid yet` }, 400);
          }
        } else {
          return ctx.send({ message: "No Order Found" }, 204);
        }
        order_product["cod_price"] = global_keys.codPrepaidAmount;
        // order_product["return_request_days"] = global_keys.return_request_days;
        return ctx.send(order_product, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
