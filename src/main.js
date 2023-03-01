import { createApp } from "vue";
import { createPinia } from "pinia";
// import { createRouter, createWebHistory } from "vue-router";
import router from "./routes";

// import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.css";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
app.use(pinia);
app.use(router);
// createApp(App).use(router).use(pinia).mount("#app");
app.mount("#app");
