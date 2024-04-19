'use strict';

/**
 * free-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-plan.free-plan');
