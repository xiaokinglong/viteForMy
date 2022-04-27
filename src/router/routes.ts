import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: import("/src/pages/home/index.vue"),
  },
];

export default routes;
