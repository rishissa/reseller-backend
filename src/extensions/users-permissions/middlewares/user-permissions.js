"use strict";

/**
 * `user-custom` middleware
 */
  
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In users-custom middleware.");
    await next();
  };
};
