<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <h1>AboutScreen</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>
          Welcome to Vuecoins, a website dedicated to providing relevant and
          up-to-date information about the world of cryptocurrencies. Our goal
          is to help investors make informed decisions by offering a wide range
          of data and tools to analyze and understand the cryptocurrency market.
        </p>
        <p>
          At Vuecoins, you can find detailed information about major
          cryptocurrencies, including Bitcoin, Ethereum, Litecoin, Ripple, and
          many more. On our website, you will find interactive charts that
          display price, market capitalization, transaction volume, and other
          relevant indicators. Additionally, we offer technical analysis tools
          so you can visualize and compare data from different cryptocurrencies.
        </p>

        <p>
          We also provide a news section where you can find the latest
          happenings in the world of cryptocurrencies. Our team of
          cryptocurrency experts works tirelessly to provide accurate and
          relevant information about the most recent news.
        </p>

        <p>
          At Vuecoins, we believe in transparency and accessibility. Our website
          is easy to navigate and designed to be intuitive and user-friendly. We
          are committed to providing accurate and reliable information so our
          users can make informed decisions about their investments.
        </p>
      </div>
      <div class="col d-none d-md-block">
        <img :src="imagen" alt="about imagen" class="img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import imagen from "../assets/about.jpg";
</script>

<style scope>
.img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
</style>
