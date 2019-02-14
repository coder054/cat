export function convertKelvinToCelsius(kelvin) {
  if (kelvin < 0) {
    return "below absolute zero (0 K)"
  } else {
    return toFixed(kelvin - 273.15)
  }
}

function toFixed(temp) {
  return Number(temp.toFixed(0))
}
