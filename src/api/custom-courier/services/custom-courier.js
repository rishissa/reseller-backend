'use strict';

/**
 * custom-courier service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-courier.custom-courier');
