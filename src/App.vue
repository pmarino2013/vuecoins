<script setup>
import useLogin from "./stores/login";
// This starter template is using Vue 3 <script setup> SFCs
import MenuApp from "./components/MenuApp.vue";

const loginStore = useLogin();

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    <MenuApp v-if="loginStore.signin" />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
