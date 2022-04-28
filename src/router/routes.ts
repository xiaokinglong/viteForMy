import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: import("/src/layouts/baseLayout/index.vue"),
  },
];

export default routes;
