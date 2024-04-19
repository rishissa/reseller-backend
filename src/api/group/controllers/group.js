"use strict";

const { activity_status } = require("../../../../config/constants");
const { createActivity } = require("../../utils/Helpers");

/**
 * group controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::group.group", ({ strapi }) => ({
  async create(ctx, next) {
    try {
      const response = await super.create(ctx);
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      //create activity
      let activity_data = {
        event: activity_status.new_group,
        user: id,
        description: `New Group ${response.data.attributes.name} Added`,
      };

      const activity = createActivity(activity_data, strapi);
      return ctx.send(response.data, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
}));
