import { createRouter, createWebHashHistory } from "vue-router";

import routes from './routes';
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes,
});

export default router;
