import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: import("/src/layouts/baseLayout/index.vue"),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: import('/src/pages/home/index.vue'),
      },
      {
        path: '/statistical',
        component: import('/src/pages/home/index.vue'),
      },
      {
        path: '/download',
        component: import('/src/pages/download/index.vue'),
      },
    ]
  },
];

export default routes;
