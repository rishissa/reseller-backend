'use strict';

/**
 * `jwt-custom` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jwt-custom middleware.');
    await next();
  };
};
