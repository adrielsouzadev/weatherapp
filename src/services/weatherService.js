const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast'

export async function searchCity(name) {
  const params = new URLSearchParams({ name, count: 1, language: 'pt' })
  const response = await fetch(`${GEOCODING_URL}?${params}`)

  if (!response.ok) {
    throw new Error('Não foi possível buscar a cidade.')
  }

  const data = await response.json()

  if (!data.results) {
    throw new Error('Cidade não encontrada.')
  }

  const { name: cityName, country, latitude, longitude } = data.results[0]
  return { name: cityName, country, latitude, longitude }
}

export async function getWeather(latitude, longitude) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    timezone: 'auto',
    forecast_days: 6,
  })
  const response = await fetch(`${FORECAST_URL}?${params}`)

  if (!response.ok) {
    throw new Error('Não foi possível buscar a previsão.')
  }

  const data = await response.json()

  const current = {
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    weatherCode: data.current.weather_code,
  }

  const daily = data.daily.time.slice(1).map((date, index) => ({
    date,
    weatherCode: data.daily.weather_code[index + 1],
    max: data.daily.temperature_2m_max[index + 1],
    min: data.daily.temperature_2m_min[index + 1],
  }))

  return { current, daily }
}