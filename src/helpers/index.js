export function convertKelvinToCelsius(kelvin) {
	if (kelvin < 0) {
		return "below absolute zero (0 K)"
	} else {
		return toFixed(kelvin - 273.15)
	}
}
export function remove_character(str, char_pos) 
 {
  let part1 = str.substring(0, char_pos);
  let part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }


function toFixed(temp) {
	return Number(temp.toFixed(0))
}
