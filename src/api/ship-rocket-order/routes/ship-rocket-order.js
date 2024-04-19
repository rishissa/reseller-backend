'use strict';

/**
 * ship-rocket-order router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ship-rocket-order.ship-rocket-order', {
  prefix: '',
  only: ["create"],
  except: [],
  config: {
    create: {
      policies: [],
      middlewares: ["api::ship-rocket-order.shiprocket-order-validation"]
    }
  }
});
