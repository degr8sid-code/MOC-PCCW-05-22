'use strict';

/**
 * mytodolist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mytodolist.mytodolist');
