"use strict";

/**
 * custom-courier controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const JWT = require("jsonwebtoken");
const { order_status } = require("../../../../config/constants");

module.exports = createCoreController(
  "api::custom-courier.custom-courier",
  ({ strapi }) => ({
    addCourier: async (ctx, next) => {
      try {
        const order_id = ctx.request.body.order_prod_id;
        let totalAmount = 0;
        var products = [];

        const { id, isAdmin } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);

        let userInfo = await strapi
          .query("plugin::users-permissions.user")
          .findOne({
            where: {
              id: id,
            },
          });
        var globalVar = await strapi.entityService.findMany(
          "api::global.global"
        );

        const order = await strapi.db
          .query("api::order-product.order-product")
          .findOne({
            where: { id: order_id },
            populate: {
              order: true,
              populate: {
                product_variant: {
                  populate: { product: { populate: { thumbnail: true } } },
                },
              },
            },
          });
        if (order === null) {
          ctx.send(
            {
              message: "No Order found for the user with the given order_id",
            },
            204
          );
        }

        if (order.status === order_status.intransit) {
          ctx.send({ message: "Order already in transit" }, 400);
        }

        //   console.log(order.dataValues);
        if (order.status === order_status.accepted) {
          // const imageID = await axios.post(baseURL + "/upload", data);
          const custom_courier_info = {
            image: ctx.request.body.imageId,
            trackingId: ctx.request.body.trackingID,
            phone: ctx.request.body.phone,
            courierName: ctx.request.body.courierName,
            courierEmail: ctx.request.body.courierEmail,
            order_product: parseInt(order_id),
            // user
          };

          totalAmount += parseFloat(order.order_price);
          totalAmount += parseFloat(globalVar.shippingPrice);

          const date = new Date(order.createdAt); // Get the current date
          const dateString = date.toDateString();
          // const [dayOfWeek, month, day, year] = dateString.split(" ");
          // const formattedDateString = `${day} ${month}, ${year}`;
          // for (let i = 0; i < order.order_products.length; i++) {
          //   products.push({
          //     name: order[i].product_variant.product.name,
          //     qty: order[i].quantity,
          //     price: order[i].order_price,
          //     image:
          //       domain +
          //       order[i].product_variant.product.thumbnail[0].formats.thumbnail
          //         .url,
          //   });
          // }

          const courier = await strapi.db
            .query("api::custom-courier.custom-courier")
            .create({ data: custom_courier_info });
          await strapi.db.query("api::order-product.order-product").update({
            where: { id: order_id },
            data: { status: order_status.intransit },
          });
          ctx.send({ message: "Order has been shipped" }, 201);
        } else {
          ctx.send(
            { message: "Order must be accepted before custom shipping" },
            400
          );
        }
      } catch (err) {
        console.log(err);
        ctx.send(err, 400);
      }
    },
  })
);
