"use strict";

const {
  activity_status,
  lead_status,
} = require("../../../../config/constants");
const { createActivity } = require("../../utils/Helpers");

/**
 * lead controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::lead.lead", ({ strapi }) => ({
  async create(ctx, next) {
    try {
      console.log("Overriding Lead Create");
      ctx.request.body.data.status = ctx.request.status;
      const response = await super.create(ctx);
      const { id, isAdmin = false } = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id: id },
          populate: { role: true },
        });
      //create activity
      let activity_data = {
        event: activity_status.new_lead,
        user: id,
        description: `New Lead Added By User: ${user.name} ID:${user.id} Role: ${user.role.name}`,
      };

      const activity = createActivity(activity_data, strapi);
      return ctx.send(response.data, 200);
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
}));
