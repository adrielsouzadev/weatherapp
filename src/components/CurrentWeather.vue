<script setup>
import { computed } from 'vue'
import { getWeatherInfo } from '../services/weatherCodes'

const props = defineProps({
  city: { type: Object, required: true },
  current: { type: Object, required: true },
})

const info = computed(() => getWeatherInfo(props.current.weatherCode))
</script>

<template>
  <section class="current-weather">
    <h2>{{ city.name }}, {{ city.country }}</h2>

    <div class="current-main">
      <i :class="['wi', info.icon]"></i>
      <span class="temperature">{{ Math.round(current.temperature) }}°C</span>
    </div>

    <p class="description">{{ info.description }}</p>

    <ul class="details">
      <li>
        <span>Sensação térmica</span>
        <strong>{{ Math.round(current.feelsLike) }}°C</strong>
      </li>
      <li>
        <span>Umidade</span>
        <strong>{{ current.humidity }}%</strong>
      </li>
      <li>
        <span>Vento</span>
        <strong>{{ Math.round(current.windSpeed) }} km/h</strong>
      </li>
    </ul>
  </section>
</template>