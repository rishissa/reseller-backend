"use strict";

const { extendDate, formatDate } = require("../../utils/DateHelper");

/**
 * subscription controller
 */
const Razorpay = require("razorpay");
const crypto = require("crypto");
const {
  txn_purpose,
  activity_status,
  notify_type,
} = require("../../../../config/constants");
const { tz_types, tz_reasons } = require("../../utils/WalletConstants");
const { fcmNotify } = require("../../utils/fcmNotify");
const { createActivity } = require("../../utils/Helpers");

const { userMetrics } = require("../../utils/userMetrics");

const { generateTransactionId } = require("../../utils/GenerateTxnId");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::subscription.subscription",
  ({ strapi }) => ({
    async getSingleUserSubscriptions(ctx, next) {
      try {
        const username = ctx.request.query.username;
        var recentSub;
        const userSubscrption = await strapi
          .query("plugin::users-permissions.user")
          .findOne({
            where: {
              username: username,
            },
            populate: {
              subscriptions: {
                where: { paymentId: { $null: false } },
                populate: {
                  plan: true,
                },
              },
            },
          });
        if (userSubscrption.subscriptions.length > 0) {
          recentSub = userSubscrption.subscriptions.reduce((acc, curr) => {
            return curr.id > acc.id ? curr : acc;
          });
        }
        delete userSubscrption.subscriptions;
        recentSub["user"] = userSubscrption;
        return ctx.send(recentSub, 200);
      } catch (err) {
        console.log(err);
        ctx.send(err, 400);
      }
    },

    async create(ctx, next) {
      try {
        const plan_id = ctx.request.body.plan;
        const data = ctx.request.body;
        const user_id = ctx.request.user_id;
        const userId = ctx.request.body.userId;
        const user = ctx.request.user;

        // console.log(user);
        const subscriptionOver = ctx.request.subscriptionOver;
        var globalVar = await strapi.entityService.findMany(
          "api::global.global"
        );

        const plan = await strapi.db
          .query("api::plan.plan")
          .findOne({ where: { id: plan_id } });

        var validTo;
        var validFrom;

        if (subscriptionOver === true) {
          validFrom = new Date();
          validTo = extendDate(new Date(), "days", 28);
          validTo = formatDate(validTo);
          validFrom = formatDate(validFrom);
        } else {
          const recentSub = ctx.request.recentSub;
          validFrom = recentSub.validTo;
          validTo = extendDate(new Date(validFrom), "days", 28);
          validTo = formatDate(validTo);
          validFrom = formatDate(validFrom);
        }

        data["slug"] = `slug_${new Date().getTime()}`;
        data["validTo"] = validTo;
        data["validFrom"] = validFrom;
        data["users_permissions_user"] = user_id;
        if (plan) {
          data["plan"] = plan.id;
          // if (plan.isActive === false) {
          //   return ctx.send({ message: "The Given plan is inactive" }, 400);
          // }

          //make subscritption payment
          var key_id = globalVar.razorpayKey;
          var key_secret = globalVar.razorpaySecret;

          var instance = await new Razorpay({
            key_id: key_id,
            key_secret: key_secret,
          });

          var razorpayInfo = await instance.orders.create({
            amount: plan.price * 100,
            currency: "INR",
          });

          if (razorpayInfo.status === "created") {
            if (user.role.type === "admin") {
              // console.log(userId);
              data["users_permissions_user"] = userId;

              const postSubscription = await strapi.db
                .query("api::subscription.subscription")
                .create({ data: data });
            } else {
              const postSubscription = await strapi.db
                .query("api::subscription.subscription")
                .create({ data: data });
            }

            return ctx.send(razorpayInfo, 200);
          }
        }
        return ctx.send({ message: "Something went wrong" }, 400);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },

    async verifySubPayment(ctx, next) {
      try {
        var { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          ctx.request.body;

        const recentSub = ctx.request.recentSub;
        var plan = await strapi.db.query("api::plan.plan").findOne({
          where: { id: recentSub.plan.id },
          populate: { thumbnail: true },
        });

        const { id, isAdmin = false } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);

        var globalVar = await strapi.entityService.findMany(
          "api::global.global"
        );
        var globalBrand = await strapi.entityService.findMany(
          "api::global-brand.global-brand"
        );

        var secret = globalVar.razorpaySecret;
        var key = globalVar.razorpayKey;

        var generated_signature = crypto
          .createHmac("sha256", secret)
          .update(razorpay_order_id + "|" + razorpay_payment_id)
          .digest("hex");

        if (generated_signature === razorpay_signature) {
          var instance = new Razorpay({
            key_id: key,
            key_secret: secret,
          });

          const rzOrder = await instance.orders.fetch(razorpay_order_id);

          if (rzOrder.amount / 100 != plan.price) {
            return ctx.send(
              { status: false, message: "Something went wrong" },
              400
            );
          }

          const updateSubscription = await strapi.db
            .query("api::subscription.subscription")
            .update({
              data: {
                paymentId: razorpay_payment_id,
                paymentSignature: razorpay_signature,
              },
              where: {
                id: recentSub.id,
              },
            });

          const updatePlan = await strapi.db.query("api::plan.plan").update({
            data: {
              isActive: true,
              quantity: parseInt(recentSub.plan.quantity) - 1,
            },
            where: { id: recentSub.plan.id },
          });

          const txn_id = await generateTransactionId();

          const createTransaction = await strapi.db
            .query("api::transaction.transaction")
            .create({
              data: {
                purpose: txn_purpose.purchase,
                user: id,
                txn_type: tz_types.credit,
                txn_id: txn_id,
                remark: recentSub.id,
                mode: "MONEY",
                amount: plan.price,
              },
            });

          const updateUser = await strapi
            .query("plugin::users-permissions.user")
            .update({
              where: { id: id },
              data: {
                isPremium: true,
              },
            });

          let metricData = {
            id: id,
            field: "subscriptions_count",
          };

          const user_metrics = await userMetrics(strapi, metricData);

          let activity_data = {
            event: activity_status.new_subscription,
            user: id,
            description: `New Subscription Added for the User: ${updateUser.name} ID: ${id}`,
          };

          const activity = createActivity(activity_data, strapi);

          const fcmData = {
            title: "✨Congratulations! You're Subscribed!",
            body: `You're now subscribed to ${globalBrand.name}. Plan: ${plan.name}`,
            image: plan.thumbnail.id,
            description: `You're now subscribed to ${globalBrand.name}. Plan: ${plan.name}`,
            type: notify_type.subscription,
            data: `${recentSub.id}`,
            users_permissions_user: id,
            targetType: "token",
            targetValue: updateUser.fcmToken,
          };
          //create notification entry
          const notification = await strapi.db
            .query("api::notification.notification")
            .create({ data: fcmData });
          const sendNotification = await fcmNotify(
            fcmData,
            updateUser.fcmToken,
            notification.id
          );
          return ctx.send({ message: "Payment Verified Successfully" }, 200);
        }
        return ctx.send({ message: "Payment Not Verified" }, 400);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },

    async adminSubscriptionSettings(ctx, next) {
      try {
        console.log();
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
