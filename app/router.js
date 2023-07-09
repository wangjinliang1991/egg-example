'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
export default app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
};
