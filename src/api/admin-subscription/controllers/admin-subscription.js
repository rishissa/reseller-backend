"use strict";

/**
 * admin-subscription controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const axios = require("axios");

module.exports = createCoreController(
  "api::admin-subscription.admin-subscription",
  ({ strapi }) => ({
    create: async (ctx, next) => {
      try {
        //check if any existing subscription exists
        //if yes, return
        //then proceed
        const body = ctx.request.body;
        let validTo = new Date();
        validTo.setDate(validTo.getDate() + 30); //UTC TimeZone
        body["validTo"] = validTo;
        const { id } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);
        const personalID = await strapi
          .query("plugin::users-permissions.user")
          .findOne({
            where: {
              id: id,
            },
          });

        const subscriptions = await strapi.db
          .query("api::admin-subscription.admin-subscription")
          .findMany();

        let latest_sub;
        if (subscriptions.length > 0) {
          for (const it of subscriptions) {
            if (new Date(it.validTo) > new Date()) {
              latest_sub = it;
            }
          }
        }

        if (latest_sub) {
          return ctx.send(
            {
              message: `There is an ongoing subscription for Admin Valid Till ${new Date(
                latest_sub.validTo
              ).toUTCString()}`,
            },
            400
          );
        }

        let order_body = {
          totalAmount: 1000,
        };
        let send_razorpay_request;
        try {
          send_razorpay_request = await axios.post(
            `${process.env.RZP_WRAPPER_URL}/client-subscription/razorpay`,
            order_body,
            {
              headers: {
                "X-VERIFY": personalID.personal_id,
              },
            }
          );
        } catch (err) {
          console.log(err);
          return ctx.send(err, 400);
        }

        // console.log(send_razorpay_request.status);
        if (send_razorpay_request.status === 200) {
          console.log(body);
          const create_subscription = await strapi.db
            .query("api::admin-subscription.admin-subscription")
            .create({
              data: {
                validTo: body.validTo,
                validFrom: body.validFrom,
                users_permissions_user: id,
              },
            });
          return ctx.send(send_razorpay_request.data, 200);
        }
        // console.log(subscriptions);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },

    verifySubscription: async (ctx, next) => {
      try {
        var { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          ctx.request.body;
        let verify_callback;

        try {
          verify_callback = await axios.post(
            `${process.env.RZP_WRAPPER_URL}/client-subscription/razorpay/verify`,
            null,
            {
              headers: {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
              },
            }
          );
          return ctx.send(verify_callback.data, 200);
        } catch (err) {
          console.log(err.response);
          return ctx.send(err.response, 400);
        }
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
