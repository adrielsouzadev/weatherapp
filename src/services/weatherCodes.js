const WEATHER_CODES = {
  0: { description: 'Céu limpo', icon: 'wi-day-sunny' },
  1: { description: 'Predominantemente limpo', icon: 'wi-day-sunny-overcast' },
  2: { description: 'Parcialmente nublado', icon: 'wi-day-cloudy' },
  3: { description: 'Nublado', icon: 'wi-cloudy' },
  45: { description: 'Neblina', icon: 'wi-fog' },
  48: { description: 'Neblina com geada', icon: 'wi-fog' },
  51: { description: 'Garoa fraca', icon: 'wi-sprinkle' },
  53: { description: 'Garoa moderada', icon: 'wi-sprinkle' },
  55: { description: 'Garoa intensa', icon: 'wi-sprinkle' },
  56: { description: 'Garoa congelante fraca', icon: 'wi-rain-mix' },
  57: { description: 'Garoa congelante intensa', icon: 'wi-rain-mix' },
  61: { description: 'Chuva fraca', icon: 'wi-rain' },
  63: { description: 'Chuva moderada', icon: 'wi-rain' },
  65: { description: 'Chuva forte', icon: 'wi-rain' },
  66: { description: 'Chuva congelante fraca', icon: 'wi-rain-mix' },
  67: { description: 'Chuva congelante forte', icon: 'wi-rain-mix' },
  71: { description: 'Neve fraca', icon: 'wi-snow' },
  73: { description: 'Neve moderada', icon: 'wi-snow' },
  75: { description: 'Neve forte', icon: 'wi-snow' },
  77: { description: 'Grãos de neve', icon: 'wi-snow' },
  80: { description: 'Pancadas de chuva fracas', icon: 'wi-showers' },
  81: { description: 'Pancadas de chuva moderadas', icon: 'wi-showers' },
  82: { description: 'Pancadas de chuva fortes', icon: 'wi-thunderstorm' },
  85: { description: 'Pancadas de neve fracas', icon: 'wi-snow' },
  86: { description: 'Pancadas de neve fortes', icon: 'wi-snow' },
  95: { description: 'Tempestade', icon: 'wi-thunderstorm' },
  96: { description: 'Tempestade com granizo', icon: 'wi-hail' },
  99: { description: 'Tempestade com granizo forte', icon: 'wi-hail' },
}

const UNKNOWN = { description: 'Condição desconhecida', icon: 'wi-na' }

export function getWeatherInfo(code) {
  return WEATHER_CODES[code] ?? UNKNOWN
}