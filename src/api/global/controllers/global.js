"use strict";

/**
 * global controller
 */

const axios = require("axios");
const { payment_gateways } = require("../../../../config/constants");
const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 0 });

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
      const global_environment = process.env.ENVIRONMENT;
      var data;
      data = await strapi.db.query("api::global.global").findOne();

      const store_type = await strapi.db
        .query("api::store-setting.store-setting")
        .findOne({ select: ["store_mode"] });


      if (data.selected_payment_gateway === payment_gateways.none) {
        let spay_global_keys = myCache.get("key");

        if (!spay_global_keys || spay_global_keys === undefined) {
          const spay_global = await axios.get(
            `${process.env.RZP_WRAPPER_URL}/global`
          );
          spay_global_keys = spay_global.data.data.attributes;
          let spay_cache = {
            razorpay_test_key: spay_global_keys.razorpay_test_key || null,
            razorpay_test_secret: spay_global_keys.razorpay_test_secret || null,
          };
          myCache.set("key", spay_cache);
        }

        if (global_environment === "DEV") {
          data["razorpay_key"] = spay_global_keys.razorpay_test_key || null;
          data["razorpay_secret"] =
            spay_global_keys.razorpay_test_secret || null;
        } else {
          data["razorpay_key"] = spay_global_keys.razorpay_key || null;
          data["razorpay_secret"] = spay_global_keys.razorpay_secret || null;
        }
                data["selected_payment_gateway"] = payment_gateways.razorpay;

      } else {
        if (global_environment === "DEV") {
          data["razorpay_key"] = data.razorpayTestKey || null;
          data["razorpay_secret"] = data.razorpayTestSecret || null;
        } else {
          data["razorpay_key"] = data.razorpayKey || null;
          data["razorpay_secret"] = data.razorpaySecret || null;
        }
      }
      data["store_type"] = store_type.store_mode;

      return ctx.send(data, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
  async update(ctx, next) {
    try {
      const body = ctx.request.body.data;
      console.log(body)
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
