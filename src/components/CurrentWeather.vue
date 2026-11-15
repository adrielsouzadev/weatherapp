<script setup>
import { computed } from 'vue'
import { getWeatherInfo } from '../services/weatherCodes'

const props = defineProps({
  city: { type: Object, required: true },
  current: { type: Object, required: true },
})

const info = computed(() => getWeatherInfo(props.current.weatherCode))
const location = computed(() => {
  const { name, region, country } = props.city
  return [name, region !== name ? region : null, country].filter(Boolean).join(', ')
})
</script>

<template>
  <section class="current-weather">
    <h2>{{ location }}</h2>

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
<style scoped>
.current-weather {
  text-align: center;
  padding: 28px 20px;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  backdrop-filter: blur(10px);
}

.current-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 12px 0 4px;
}

.current-main .wi {
  font-size: 4rem;
}

.temperature {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
}

.description {
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: var(--text-soft);
}

.details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.details li {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 8px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 14px;
}

.details span {
  font-size: 0.8rem;
  color: var(--text-soft);
}

@media (max-width: 480px) {
  .temperature,
  .current-main .wi {
    font-size: 3rem;
  }
}
</style>