import { createRouter, createWebHistory } from "vue-router";
import useLogin from "../stores/login";
// import { cambiarAuth } from "../helpers/Autenticacion";
import Home from "../pages/HomeScreen.vue";
import About from "../pages/AboutScreen.vue";
import Login from "../pages/LoginScreen.vue";
import Error from "../pages/ErrorScreen.vue";
import Coin from "../pages/CoinScreen.vue";

// const auth = true;
const routes = [
  { path: "/", name: "Home", component: Home, meta: { requiresAuth: true } },
  {
    path: "/coin/:id",
    name: "Coin",
    component: Coin,
    meta: { requiresAuth: true },
  },

  {
    path: "/about",
    name: "About",
    component: About,
    meta: { requiresAuth: true },
  },
  { path: "/login", name: "Login", component: Login },
  { path: "/:patMatch(.*)*", name: "Error", component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loginStore = useLogin();
  if (to.meta.requiresAuth && !loginStore.signin) {
    // Si la ruta requiere autenticación y el usuario no está autenticado, redirigir a la página de inicio de sesión.
    next("/login");
  } else {
    // Permitir la navegación.
    next();
  }
});

export default router;
