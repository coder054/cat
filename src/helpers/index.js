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



export function scrollToMyRef(ref) {
	window.scrollTo(0, ref.offsetTop)
}

export function nextQuestion(index, dataLength, ref, callback) {
	if (index >= dataLength - 1) return
	setTimeout(() => ref.classList.toggle('closed'), 200)
	setTimeout(() => ref.classList.toggle('closed'), 800)
	setTimeout(() => {
		callback()
	}, 800)
}

export function nextQuestionMusicOrLanguage(index, dataLength, ref, callback) {
	if (index >= dataLength - 1) return
	ref.classList.toggle('closed')
	setTimeout(() => ref.classList.toggle('closed'), 800)
	setTimeout(() => {
		callback()
	}, 800)
}