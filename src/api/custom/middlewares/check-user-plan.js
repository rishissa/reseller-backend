"use strict";

const { formatDate } = require("../../utils/DateHelper");

/**
 * `variant-qty-checker` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In check user's plan middleware.");

    try {
      const user = await strapi.plugins[
        "users-permissions"
      ].services.jwt.getToken(ctx);

      const userInfo = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id: user.id },
          populate: {
            subscriptions: {
              populate: {
                plan: true,
              },
            },
          },
        });
      console.log(userInfo);
      var recentSub;

      if (userInfo.subscriptions.length === 0) {
        if (userInfo.isAdmin === true) {
          ctx.request.plan = null;
          console.log("CP1");
          return await next();
        }
        console.log("Userinfo isAdmin false");
        //free plan
        const freePlan = await strapi.db
          .query("api::free-plan.free-plan")
          .findOne();
        ctx.request.plan = freePlan;
        return await next();
      } else {
        recentSub = userInfo.subscriptions.reduce((acc, curr) => {
          return curr.id > acc.id ? curr : acc;
        });

        const now = formatDate(new Date());

        if (recentSub.validTo > now) {
          //there is still valid plan going on
          //send the plan details
          console.log(recentSub.plan);
          ctx.request.plan = recentSub.plan;
          console.log("CP2");
          return await next();
        }
        //no plan //free plan
        //send free plan details
        const freePlan = await strapi.db
          .query("api::free-plan.free-plan")
          .findOne();
        ctx.request.plan = freePlan;
        console.log("CP3");
        return await next();
      }
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  };
};
