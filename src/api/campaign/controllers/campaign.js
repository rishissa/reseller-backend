"use strict";

const {
  activity_status,
  notify_type,
} = require("../../../../config/constants");
const { createActivity } = require("../../utils/Helpers");
const { fcmNotify } = require("../../utils/fcmNotify");

/**
 * campaign controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::campaign.campaign",
  ({ strapi }) => ({
    async create(ctx, next) {
      try {
        // console.log(ctx.request.body.data);
        const { id, isAdmin = false } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);
        const response = await super.create(ctx);
        let activity_data = {
          event: activity_status.new_campaign,
          user: id,
          description: `New Campaign ${response.data.attributes.notification_title} Added by Admin`,
        };

        const fcmData = {
          title: "New Campaign Created",
          body: `🚩Campaign ${response.data.attributes.notification_title} Successfully Created`,
          image: response.data.attributes.notification_image,
          description: `🚩Campaign ${response.data.attributes.notification_title} Successfully Created`,
          type: notify_type.promotion,
          data: `${response.data.id}`,
          users_permissions_user: id,
          targetType: "topic",
          targetValue: "global",
        };
        //create notification entry
        const notification = await strapi.db
          .query("api::notification.notification")
          .create({ data: fcmData });
        const sendNotification = await fcmNotify(fcmData, id, notification.id);

        const activity = createActivity(activity_data, strapi);
        return ctx.send(response.data, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
