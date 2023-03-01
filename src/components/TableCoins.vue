<template lang="">
  <table class="table table-hover text-center">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Symbol</th>
        <th class="d-none d-md-block">Name</th>
        <th>Price Usd</th>
        <th>Change 24Hr</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coin in coins" :key="coin.id">
        <td>{{ coin.rank }}</td>
        <td>
          <router-link :to="{ name: 'Coin', params: { id: coin.id } }">
            <CoinIcon :symbol="coin.symbol" />
          </router-link>
        </td>
        <td class="d-none d-md-block p-3">{{ coin.name }}</td>
        <td>{{ numeral(coin.priceUsd).format("$0,0.00") }}</td>
        <td
          :class="coin.changePercent24Hr > 0 ? 'text-success' : 'text-danger'"
        >
          {{ parseFloat(coin.changePercent24Hr).toFixed(2) }}%
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import numeral from "numeral";
import CoinIcon from "./CoinIcon.vue";

const props = defineProps({
  coins: Array,
});
</script>
<style lang=""></style>
