<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import CurrentWeather from './components/CurrentWeather.vue'
import ForecastList from './components/ForecastList.vue'
import { searchCity, getWeather } from './services/weatherService'

const city = ref(null)
const weather = ref(null)
const loading = ref(false)
const error = ref('')

async function handleSearch(name) {
  loading.value = true
  error.value = ''

  try {
    city.value = await searchCity(name)
    weather.value = await getWeather(city.value.latitude, city.value.longitude)
  } catch (err) {
    city.value = null
    weather.value = null
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main>
    <h1>WeatherApp</h1>

    <SearchBar :loading="loading" @search="handleSearch" />

    <p v-if="loading">Carregando...</p>
    <p v-else-if="error">{{ error }}</p>

    <template v-else-if="weather">
      <CurrentWeather :city="city" :current="weather.current" />
      <ForecastList :daily="weather.daily" />
    </template>
  </main>
</template>