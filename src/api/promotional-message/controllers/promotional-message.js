"use strict";

/**
 * promotional-message controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::promotional-message.promotional-message",
  ({ strapi }) => ({
    delete: async (ctx, next) => {
      try {
        const id = ctx.request.params.id;

        //fetch message
        const message = await strapi.db
          .query("api::promotional-message.promotional-message")
          .findOne({ where: { id: id } });

        if (!message) {
          return ctx.send({ message: "ID not found" }, 204);
        }

        //set active to false
        const update_message = await strapi.db
          .query("api::promotional-message.promotional-message")
          .update({
            where: { id: id },
            data: { active: false },
          });

        return ctx.send({ message: "Message Deleted" }, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
