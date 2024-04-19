'use strict';

/**
 * global-brand service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-brand.global-brand');
