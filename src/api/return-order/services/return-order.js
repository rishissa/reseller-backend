'use strict';

/**
 * return-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::return-order.return-order');
