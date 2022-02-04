'use strict';

/**
 * start-up-picture service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::start-up-picture.start-up-picture');
