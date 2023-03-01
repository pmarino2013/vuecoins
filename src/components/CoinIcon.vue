<template>
    <img :src="url" :alt="symbol" class="img-icon">
</template>
<script setup>
const props = defineProps({
  symbol: String
})

const url=`https://assets.coincap.io/assets/icons/${props.symbol.toLowerCase()}@2x.png`
</script>
<style scope >
    .img-icon{
        width: 30px;
    }
</style>