"use strict";

const { activity_status } = require("../../../../config/constants");
const { createActivity } = require("../../utils/Helpers");
const axios = require("axios");
/**
 * tutorial controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController(
  "api::tutorial.tutorial",
  ({ strapi }) => ({
    async create(ctx, next) {
      try {
        const response = await super.create(ctx);
        const { id, isAdmin = false } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);
        //create activity
        let activity_data = {
          event: activity_status.new_tutorial,
          user: id,
          description: `New Tutorial ${response.data.attributes.name} Added`,
        };

        const activity = createActivity(activity_data, strapi);
        return ctx.send(response.data, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },

    // async findOne(ctx, next) {
    //   await axios.post("https://7d45-115-245-32-170.ngrok-free.app/send", {
    //     phone: "9832447008",
    //     message: "Hey bro",
    //     name: "Rishi",
    //   });

    //   return ctx.send("OK", 200);
    // },
  })
);
