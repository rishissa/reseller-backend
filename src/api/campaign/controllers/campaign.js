"use strict";

const { activity_status } = require("../../../../config/constants");
const { createActivity } = require("../../utils/Helpers");

/**
 * campaign controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::campaign.campaign",
  ({ strapi }) => ({
    async create(ctx, next) {
      try {
        const { id, isAdmin = false } = await strapi.plugins[
          "users-permissions" 
        ].services.jwt.getToken(ctx);
        const response = await super.create(ctx);
        let activity_data = {
          event: activity_status.new_campaign,
          user: id,
          description: `New Campaign ${response.data.attributes.notification_title} Added by Admin`,
        };

        const activity = createActivity(activity_data, strapi);
        return ctx.send(response.data, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
