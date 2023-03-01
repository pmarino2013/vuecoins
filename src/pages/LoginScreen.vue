<template>
  <div class="container">
    <div class="row my-5">
      <div class="col text-center">
        <h3>Sign in to <i class="fa fa-btc" aria-hidden="true"></i>VueCoins</h3>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-4 offset-md-4">
        <form @submit.prevent="handleSubmit">
          <div className="mb-3 d-grid">
            <label>Email</label>
            <input type="email" className="form-control" v-model="email" />
          </div>
          <div className="mb-3 d-grid">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              v-model="password"
            />
          </div>
          <div className="mb-3 d-grid">
            <button className="btn btn-success">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useUsuario from "../stores/auth"; //importo el store
import useLogin from "../stores/login";

const router = useRouter();

const authStore = useUsuario(); // para acceder a los datos del store
const loginStore = useLogin();

const email = ref("");
const password = ref("");

// const user = {
//   email: authStore.email,
//   password: authStore.password,
// };

const handleSubmit = () => {
  if (email.value === authStore.email) {
    if (password.value === authStore.password) {
      loginStore.logIn();
      router.push("/");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  } else {
    alert("Correo o contraseña incorrectos");
  }
};
</script>
<style></style>
