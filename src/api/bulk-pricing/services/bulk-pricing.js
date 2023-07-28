'use strict';

/**
 * bulk-pricing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bulk-pricing.bulk-pricing');
