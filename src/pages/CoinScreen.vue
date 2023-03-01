<template lang="">
  <div>
    <h1>Coin Page</h1>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params.id);
</script>
<style lang=""></style>
