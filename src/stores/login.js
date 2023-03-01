import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export default defineStore("login", {
  state: () => ({
    signin: false,
  }),
  actions: {
    logIn() {
      this.signin = true;
    },
    loOut() {
      this.signin = false;
    },
  },
});
