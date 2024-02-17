import { route, boot } from 'quasar/wrappers'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export default route(function () {
  const Router = createRouter({
    routes,
    history: createWebHistory(),
    // eslint-disable-next-line
    scrollBehavior(to, from, savedPosition) {
      return savedPosition || new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 3000);
      });
    }
  });

  return Router;
});