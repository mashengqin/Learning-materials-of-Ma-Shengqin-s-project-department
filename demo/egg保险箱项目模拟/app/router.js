'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.scanning.index);
  router.get('/scan', controller.scan.index);
  router.get('/addto', controller.addto.index);
  router.get('/datails',controller.datails.index);
};
