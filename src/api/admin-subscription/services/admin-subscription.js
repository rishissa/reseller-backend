'use strict';

/**
 * admin-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::admin-subscription.admin-subscription');
