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
      placeholder="Pesquisar cidade..."
      aria-label="Nome da cidade"
    />

    <button type="submit" :disabled="loading">
      {{ loading ? 'Buscando...' : 'Buscar' }}
    </button>
  </form>
</template>