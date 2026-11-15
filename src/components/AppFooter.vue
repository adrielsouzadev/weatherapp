<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>© {{ year }} Adriel Souza</p>
		<p>
				<a href="https://github.com/adrielsouzadev" target="_blank" rel="noopener noreferrer">GitHub</a>
				· Dados fornecidos por
				<a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a>
		</p>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 32px;
  text-align: center;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-soft);
}

.footer a {
  color: inherit;
  text-decoration: underline;
}

.footer a:hover {
  color: var(--text);
}
</style>