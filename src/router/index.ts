import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "О проекте" },
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("@/views/FormView.vue"),
    meta: { title: "Управление учетными записями" },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
    meta: { title: "О проекте" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFoundView.vue"),
    meta: { title: "Страница не найдена" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Динамическое обновление title страницы
router.beforeEach((to) => {
  document.title = to.meta.title || "Account Manager";
});

export default router;
