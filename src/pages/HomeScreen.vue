<template>
  <div class="container">
    <div class="row my-5">
      <div class="col text-center">
        <h1>🪙Cripto Currency</h1>
      </div>
    </div>
    <div class="row">
      <div v-if="!coins" class="col text-center">
<Spinner />
      </div>
      <div v-else class="col-12 ">
        <TableCoins :coins="coins" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {getCoins} from '../helpers/coinsFetch'
import TableCoins from '../components/TableCoins.vue';
import Spinner from '../components/Spinner.vue';

const coins=ref(null)

const traerCriptos=async()=>{
const {data}=await getCoins()
coins.value=data

}

onMounted(()=>{
    traerCriptos()
})
</script>

<style>
</style>