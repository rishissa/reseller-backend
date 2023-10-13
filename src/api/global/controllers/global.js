"use strict";

/**
 * global controller
 */

const axios = require("axios");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::global.global", ({ strapi }) => ({
  async addSettingsAdmin(ctx, next) {
    try {
      const globalData = await strapi.db.query("api::global.global").findOne();
      if (globalData === null) {
        await strapi.db
          .query("api::global.global")
          .create({
            data: {
              subscriptionPrice: 499.99,
              codPrepaidAmount: 150,
              shippingPrice: 100,
              razorpayKey: "rzp_test_WQeNCv2phuFqQs",
              razorpaySecret: "DKWiuLogW1LKIQJ1vYiTJv00",
            },
          })
          .then((resp) => {
            ctx.send(resp, 200);
          })
          .catch((err) => {
            console.log(err);
            ctx.send(err, 400);
          });
      } else {
        ctx.send(globalData, 200);
      }
    } catch (err) {
      console.log(err);
      ctx.send(err, 400);
    }
  },

  async find(ctx, next) {
    try {
      const user = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      console.log(user);
      const userInfo = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            id: user.id,
          },
          populate: {
            role: true,
          },
        });
      var data;
      if (userInfo.role.type === "admin") {
        data = await strapi.db.query("api::global.global").findOne();
      } else {
        data = await strapi.db.query("api::global.global").findOne();
        console.log(data);
        // delete data.razorpayKey;
        delete data.razorpaySecret;
      }
      // console.log(userInfo);
      return ctx.send(data, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  async update(ctx, next) {
    try {
      const body = ctx.request.body.data;

      const global = await strapi.db.query("api::global.global").findOne();

      if (body.shiprocket_username || body.shiprocket_password) {
        // if (global.shiprocket_username || global.shiprocket_password) {
        try {
          const generateToken = await axios.post(
            "https://apiv2.shiprocket.in/v1/external/auth/login",
            {
              email: body.shiprocket_username || global.shiprocket_username,
              password: body.shiprocket_password || global.shiprocket_password,
            }
          );
          ctx.request.body.data.token = generateToken.data.token;
        } catch (err) {
          return ctx.send(
            {
              message: `${err.response.data.message}`,
            },
            err.response.data.status_code
          );
        }
      }
      await super.update(ctx);
      return ctx.send({ message: "Settings Updated" }, 201);
    } catch (err) {
      console.log(JSON.stringify(err));
      return ctx.send(err, 400);
    }
  },
}));
