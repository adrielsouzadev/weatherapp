<script setup>
import { ref, computed } from 'vue'
import SearchBar from './components/SearchBar.vue'
import CurrentWeather from './components/CurrentWeather.vue'
import ForecastList from './components/ForecastList.vue'
import { searchCity, getWeather } from './services/weatherService'
import { getWeatherTheme } from './services/weatherCodes'

const city = ref(null)
const weather = ref(null)
const loading = ref(false)
const error = ref('')

const theme = computed(() =>
  weather.value ? getWeatherTheme(weather.value.current.weatherCode) : 'default'
)

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
  <div class="app" :class="theme">
    <main>
      <h1>Previsão do Tempo</h1>

      <SearchBar :loading="loading" @search="handleSearch" />

      <p v-if="loading" class="status">Carregando...</p>
      <p v-else-if="error" class="status">{{ error }}</p>

      <template v-else-if="weather">
        <CurrentWeather :city="city" :current="weather.current" />
        <ForecastList :daily="weather.daily" />
      </template>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 32px 16px;
  background: linear-gradient(160deg, #3a7bd5, #00d2ff);
}

.app.clear {
  background: linear-gradient(160deg, #1e90ff, #87ceeb);
}

.app.cloudy {
  background: linear-gradient(160deg, #636e7b, #9aa5b1);
}

.app.fog {
  background: linear-gradient(160deg, #7b8794, #b8c0c8);
}

.app.rain {
  background: linear-gradient(160deg, #2c3e50, #4b6584);
}

.app.snow {
  background: linear-gradient(160deg, #5f7e99, #a6bfd1);
}

.app.storm {
  background: linear-gradient(160deg, #1b1b2f, #3d3d5c);
}

main {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  text-align: center;
  font-size: 1.8rem;
}

.status {
  text-align: center;
  padding: 16px;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
}
</style>