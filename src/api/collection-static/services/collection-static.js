'use strict';

/**
 * collection-static service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::collection-static.collection-static');
