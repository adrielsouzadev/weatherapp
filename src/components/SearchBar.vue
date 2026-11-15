<script setup>
import { ref } from 'vue'

defineProps({
  loading: Boolean,
})

const emit = defineEmits(['search'])
const city = ref('')

function submit() {
  const name = city.value.trim()

  if (name) emit('search', name)
}
</script>

<template>
  <form class="search-bar" @submit.prevent="submit">
    <input
      v-model="city"
      type="text"
      placeholder="Cidade ou cidade, estado"
      aria-label="Nome da cidade"
    />

    <button type="submit" :disabled="loading">
      {{ loading ? 'Buscando...' : 'Buscar' }}
    </button>
  </form>
</template>
<style scoped>
.search-bar {
  display: flex;
  gap: 8px;
}

input {
  flex: 1;
  min-width: 0;
  padding: 14px 18px;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #1f2937;
}

input:focus {
  outline: 3px solid rgba(255, 255, 255, 0.6);
}

button {
  padding: 0 22px;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background: #1f2937;
  color: #ffffff;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>