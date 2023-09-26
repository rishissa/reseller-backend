/**
 * wallet controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const {
  activity_status,
  notify_type,
} = require("../../../../config/constants");
const { createActivity } = require("../../utils/Helpers");
const { fcmNotify } = require("../../utils/fcmNotify");

const { tz_reasons, tz_types } = require("../../utils/WalletConstants");

module.exports = createCoreController("api::wallet.wallet", ({ strapi }) => ({
  create: async (ctx, next) => {
    try {
      const data = ctx.request.body.data;
      const amount = data.amount;
      const order = data.order;
      const proof = data.proof;
      const transaction_type = data.transaction_type;
      const reasons = data.reasons;
      const remark = data.remark;

      const users_permissions_user = data.users_permissions_user;
      const reasonsArr = Object.entries(tz_reasons).map(
        ([key, value]) => value
      );
      console.log(reasonsArr);
      if (!reasonsArr.includes(reasons)) {
        return ctx.send(
          {
            message: `Invalid reason '${reasons}'.Choose from [${reasonsArr}]`,
          },
          400
        );
      }

      const add = await strapi.db.query("api::wallet.wallet").create({
        data: {
          amount,
          transaction_type,
          remark,
          reasons,
          users_permissions_user,
          order,
          proof,
        },
      });

      //add balance to the user's wallet
      const userInfo = await strapi.db
        .query("plugin::users-permissions.user")
        .findOne({ where: { id: users_permissions_user } });

      if (transaction_type === tz_types.debit) {
        const updateUser = await strapi
          .query("plugin::users-permissions.user")
          .update({
            data: {
              wallet_balance:
                parseFloat(userInfo.wallet_balance || 0) + parseFloat(amount),
            },
            where: {
              id: users_permissions_user,
            },
          });

        //create activity
        let activity_data = {
          event: activity_status.wallet_debit,
          user: userInfo.id,
          description: `Wallet Amount ${amount} added for the User: ${userInfo.name} ID:${userInfo.id}`,
        };

        const activity = createActivity(activity_data, strapi);
      } else {
        const updateUser = await strapi
          .query("plugin::users-permissions.user")
          .update({
            data: {
              wallet_balance:
                parseFloat(userInfo.wallet_balance || 0) - parseFloat(amount),
            },
            where: {
              id: users_permissions_user,
            },
          });
        //create activity
        let activity_data = {
          event: activity_status.wallet_credit,
          user: userInfo.id,
          description: `Wallet Amount ${amount} credited from the User: ${userInfo.name} ID:${userInfo.id}`,
        };

        const activity = createActivity(activity_data, strapi);
      }

      const fcmData = {
        title: `🪙Wallet ${transaction_type}ED Amount ${amount}`,
        body: `Your Wallet has been ${transaction_type}ED with ₹${amount}`,
        description: `Your Wallet has been ${transaction_type}ED with ₹${amount}`,
        type: notify_type.transaction,
        data: `${add.id}`,
        users_permissions_user: users_permissions_user,
        targetType: "token",
        targetValue: userInfo.fcmToken,
      };
      //create notification entry

      const notification = await strapi.db
        .query("api::notification.notification")
        .create({ data: fcmData });

      const sendNotification = await fcmNotify(
        fcmData,
        userInfo.fcmToken,
        notification.id
      );

      return ctx.send(add, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
  walletDebit: async (ctx, next) => {
    try {
      const amount = ctx.request.body.amount;
      const transaction_type = tz_types.debit;
      const reasons = ctx.request.body.reasons;
      const remark = ctx.request.body.remark;
      const users_permissions_user = ctx.request.params.id;

      const reasonsArr = Object.entries(tz_reasons).map(
        ([key, value]) => value
      );

      if (!reasonsArr.includes(reasons)) {
        return ctx.send(
          {
            message: `Invalid reason '${reasons}'.Choose from [${reasonsArr}]`,
          },
          400
        );
      }

      const add = await strapi.db.query("api::wallet.wallet").create({
        data: {
          amount,
          transaction_type,
          remark,
          reasons,
          users_permissions_user,
        },
      });

      //add balance to the user's wallet
      const userInfo = await strapi.db
        .query("plugin::users-permissions.user")
        .findOne({ where: { id: users_permissions_user } });

      const updateUser = await strapi
        .query("plugin::users-permissions.user")
        .update({
          data: {
            wallet_balance:
              parseFloat(userInfo.wallet_balance || 0) + parseFloat(amount),
          },
          where: {
            id: users_permissions_user,
          },
        });

      return ctx.send(add, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },

  walletCredit: async (ctx, next) => {
    try {
      const amount = ctx.request.body.amount;
      const transaction_type = tz_types.credit;
      const reasons = ctx.request.body.reasons;
      const remark = ctx.request.body.remark;
      const users_permissions_user = ctx.request.params.id;

      const reasonsArr = Object.entries(tz_reasons).map(
        ([key, value]) => value
      );

      if (!reasonsArr.includes(reasons)) {
        return ctx.send(
          {
            message: `Invalid reason '${reasons}'.Choose from [${reasonsArr}]`,
          },
          400
        );
      }

      //check if the given amount is available in user's wallet or not
      //if available, deduct the amount from user's wallet && update
      //else, return

      const userInfo = await strapi.db
        .query("plugin::users-permissions.user")
        .findOne({ where: { id: users_permissions_user } });

      if (userInfo.wallet_balance < amount) {
        return ctx.send({
          message: `Unable to deduct amount as the Wallet Balance is Low! [Wallet Balance: ${userInfo.wallet_balance}]`,
        });
      }

      const credit = await strapi.db.query("api::wallet.wallet").create({
        data: {
          amount,
          transaction_type,
          remark,
          reasons,
          users_permissions_user,
        },
      });

      const deductBalance = await strapi.db
        .query("plugin::users-permissions.user")
        .update({
          data: {
            wallet_balance:
              parseFloat(userInfo.wallet_balance) - parseFloat(amount),
          },
          where: { id: users_permissions_user },
        });

      return ctx.send(credit, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
}));
