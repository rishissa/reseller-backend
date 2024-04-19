"use strict";

const { formatDate } = require("../../utils/DateHelper");

/**
 * plan controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::plan.plan", ({ strapi }) => ({
  delete: async (ctx, next) => {
    try {
      const plan_id = ctx.request.params.id;
      //check if the subscriptions in the plan have any active subscriptions
      const plan = await strapi.db.query("api::plan.plan").findOne({
        where: { id: plan_id },
        populate: {
          subscriptions: true,
        },
      });

      if (plan === null) {
        return ctx.send({ message: "No Plan found with the given id" }, 400);
      }
      var activePlansCount = 0;
      var now = new Date();
      var formattedNow = formatDate(now);

      if (plan.subscriptions.length === 0) {
        //delete plan
        const deletePlan = await strapi.db
          .query("api::plan.plan")
          .delete({ where: { id: plan_id } });
        return ctx.send(
          { message: `Plan ${plan.name} has been deleted successfully` },
          200
        );
      }

      for (const it of plan.subscriptions) {
        if (it.validTo > formattedNow && it.paymentId !== null) {
          //check if validTo is smaller than today
          //if smaller, dont increment activePlansCount
          //else, increment activePlansCount
          activePlansCount += 1;
        }
      }

      if (activePlansCount === 0) {
        for (const it of plan.subscriptions) {
          const deleteSubscriptions = await strapi.db
            .query("api::subscription.subscription")
            .delete({ where: { id: it.id } });
        }
        const deletePlan = await strapi.db
          .query("api::plan.plan")
          .delete({ where: { id: plan_id } });

        return ctx.send(
          { message: `Plan ${plan.name} has been deleted successfully` },
          200
        );
      }

      return ctx.send(
        {
          message: `Unable to delete ${plan.name} plan. It still have ${activePlansCount} active subscriptions`,
        },
        400
      );
    } catch (err) {
      console.log(err);
      return ctx.send(err, 400);
    }
  },
}));
