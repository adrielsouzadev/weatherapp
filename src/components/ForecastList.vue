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
<style scoped>
.forecast {
  padding: 20px;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  backdrop-filter: blur(10px);
}

h3 {
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-soft);
}

.forecast-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}

.forecast-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 4px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 14px;
}

.forecast-day {
  font-size: 0.9rem;
  text-transform: capitalize;
}

.forecast-item .wi {
  font-size: 1.6rem;
}

.forecast-temps {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
}

.forecast-temps span {
  color: var(--text-soft);
}

@media (max-width: 480px) {
  .forecast-list {
    grid-template-columns: 1fr;
  }

  .forecast-item {
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 16px;
  }

  .forecast-temps {
    flex-direction: row;
    gap: 8px;
  }
}
</style>