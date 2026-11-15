<script setup>
import { getWeatherInfo } from '../services/weatherCodes'

defineProps({
  daily: { type: Array, required: true },
})

function formatDay(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('pt-BR', {
    weekday: 'short',
  })
}
</script>

<template>
  <section class="forecast">
    <h3>Próximos 5 dias</h3>

    <ul class="forecast-list">
      <li v-for="day in daily" :key="day.date" class="forecast-item">
        <span class="forecast-day">{{ formatDay(day.date) }}</span>

        <i :class="['wi', getWeatherInfo(day.weatherCode).icon]"></i>

        <span class="forecast-temps">
          <strong>{{ Math.round(day.max) }}°</strong>
          <span>{{ Math.round(day.min) }}°</span>
        </span>
      </li>
    </ul>
  </section>
</template>