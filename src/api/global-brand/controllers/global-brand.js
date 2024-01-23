"use strict";

/**
 * global-brand controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::global-brand.global-brand",
  ({ strapi }) => ({
    async find(ctx, next) {
      try {
        //fetch admin subs from razorpay wrapper
        const admin_subs = await strapi.db
          .query("api::admin-subscription.admin-subscription")
          .findMany({
            where: { paymentId: { $not: null } },
          });
        let recentSub;
        if (admin_subs.length > 0) {
          recentSub = admin_subs.reduce((acc, curr) => {
            return curr.id > acc.id ? curr : acc;
          });
        }
        ctx.request.query = { "populate[0]": "logo" };
        let response = await super.find(ctx);
        response.data.attributes["subscription"] = recentSub || null;
        response.data.attributes[
          "terms_conditions_url"
        ] = `https://${response.data.attributes.domain}/terms_and_conditions`;
        return ctx.send(response, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
