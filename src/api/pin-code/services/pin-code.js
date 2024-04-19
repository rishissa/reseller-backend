'use strict';

/**
 * pin-code service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pin-code.pin-code');
