<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import { searchCity, getWeather } from './services/weatherService'
import { getWeatherInfo } from './services/weatherCodes'

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

    <p v-if="error">{{ error }}</p>

    <section v-if="weather">
      <h2>{{ city.name }}, {{ city.country }}</h2>

      <p>
        <i :class="['wi', getWeatherInfo(weather.current.weatherCode).icon]"></i>
        {{ getWeatherInfo(weather.current.weatherCode).description }}
        — {{ weather.current.temperature }}°C
      </p>
    </section>
  </main>
</template>