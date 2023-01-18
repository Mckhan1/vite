import { createRouter, createWebHistory } from "vue-router";
import OneScreenPage from "../pages/OneScreenPage.vue";
import ConnectionPage from "../pages/ConnectionPage.vue";
import LogInPage from "../pages/LogInPage.vue";
import Payment from "../pages/Payment.vue";
import Check from "../pages/CheckPage.vue";
import CheckNext from "../pages/CheckNext.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: OneScreenPage,
  },
  {
    path: "/connection",
    name: "connection",
    component: ConnectionPage,
  },
  {
    path: "/login",
    name: "login",
    component: LogInPage,
  },
  {
    path: "/refill",
    name: "refill",
    component: Payment,
  },
  {
    path: "/check",
    name: "check",
    component: Check,
  },
  {
    path: "/checkNext",
    name: "checkNext",
    component: CheckNext,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
