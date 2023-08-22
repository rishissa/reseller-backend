'use strict';

/**
 * user-metric service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-metric.user-metric');
