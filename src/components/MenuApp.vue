<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><i class="fa fa-btc" aria-hidden="true"></i> VueCoins</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto text-center d-flex gap-2">
          <li class="nav-item">
            <router-link
              class="nav-link"
              aria-current="page"
              active-class="active"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/about"
              >About</router-link
            >
          </li>
          <li v-if="loginStore.signin" class="nav-item">
            <!-- <span class="nav-link">{{ authStore.name }}</span> -->
            <img class="img-avatar" :src="authStore.avatar" alt="avatar" />
          </li>
          <li>
            <button class="btn btn-outline-light" @click="cerrarSesion">
              <i class="fa fa-sign-out" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import useUsuario from "../stores/auth"; //importo el store
import useLogin from "../stores/login";
import { useRouter } from "vue-router";

const authStore = useUsuario();
const loginStore = useLogin();
const router = useRouter();
const cerrarSesion = () => {
  loginStore.loOut();
  router.push("/login");
};

console.log(authStore.email);
</script>
<style scope>
.active {
  font-weight: bold;
}
.img-avatar {
  width: 30px;
  border-radius: 50%;
  padding: 5px 0px;
}
</style>
