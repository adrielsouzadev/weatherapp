<script setup>
import { searchCity, getWeather } from './services/weatherService'

async function testar() {
  const city = await searchCity('São Paulo')
  const weather = await getWeather(city.latitude, city.longitude)

  console.log(city)
  console.log(weather)
}

testar()
</script>

<template>
  <main>
    <h1>WeatherApp</h1>
  </main>
</template>