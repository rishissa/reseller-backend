"use strict";

const { formatDate } = require("../../utils/DateHelper");

/**
 * `check-subscription` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In check-subscription middleware.");
    //check if there is any ongoing subscription of the user

    const subs = ctx.request.userInfo;
    console.log(subs);
    var recentSub;
    // console.log(subs);
    if (subs.subscriptions && subs.subscriptions.length > 0) {
      recentSub = subs.subscriptions.reduce((acc, curr) => {
        return curr.id > acc.id ? curr : acc;
      });
    }

    // console.log(recentSub);
    ctx.request.user_id = subs.id;
    const now = formatDate(new Date());

    // console.log(subs.subscriptions);
    if (subs.subscriptions.length === 0 || subs.subscriptions === null) {
      ctx.request.user = subs;
      ctx.request.subscriptionOver = true;
      return await next();
    }
    if (now > subs.validTo) {
      console.log("Subscription is over");
      ctx.request.user = subs;
      ctx.request.subscriptionOver = true;
      ctx.request.recentSub = recentSub;
      return await next();
    } else {
      // const msg = `Your ${recentSub.name} is valid till ${recentSub.validTo}`;
      console.log("Subscription is not over");
      ctx.request.user = subs;
      ctx.request.recentSub = recentSub;
      ctx.request.subscriptionOver = false;
      return await next();
    }

    //check if the recent sub is over or not
    //if over,
  };
};
