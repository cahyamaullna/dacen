import { createRouter, createWebHistory } from "vue-router";
import login from "../views/auth/login.vue";
import canvas from "../views/pages/index.vue";
import dashboard from "../views/pages/dashboard/index.vue";
import monitoring from "../views/pages/monitoring/index.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/app",
    component: canvas,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: dashboard,
      },
    ],
  },
  {
    path: "/app",
    component: canvas,
    children: [
      {
        path: "monitoring",
        name: "monitoring",
        component: monitoring,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
