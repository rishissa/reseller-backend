"use strict";

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

        if (order_product) {
          if (
            order_product.order.isPaid === true &&
            order_product.order.paymentID !== null
          ) {
            let shiprocket_order;
            if (order_product.custom_courier === null) {
              shiprocket_order = true;
              order_product["shiprocket_order"] = shiprocket_order;
              let track_data;
              let shipment_id =
                order_product.shiprocket_order_item.ship_rocket_order
                  .shipment_id;

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
                      "sr-status": "42",
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
              delete order_product.custom_courier;
              delete order_product.shiprocket_order_item;
            } else {
              shiprocket_order = false;
              order_product["shiprocket_order"] = shiprocket_order;
              delete order_product.shiprocket_order_item;
              console.log("Custom Courier Order");
            }
          } else {
            return ctx.send({ message: `This Order is Not Paid yet` }, 400);
          }
        } else {
          return ctx.send({ message: "No Order Found" }, 204);
        }
        return ctx.send(order_product, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
