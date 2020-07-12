function translate(x) {
	// Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.

	// Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.
	// Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word.
	// Rule 3: If a word begins with two consonant sounds, move it to the end of the word, and then add an "ay" sound to the end of the word.

	const regex = /\b([^aeiou]{0,}qu|[^aeiou]+)([a-z]+)?/gi

	var arr = x.split(" ");

	var news = "";
	arr.forEach(element => {
		var reg = element.split(regex);
		if (reg.length > 1){
			news += `${reg[2]}${reg[1]}ay `;
		} else {
			news += `${reg[0]}ay `
		}
	});
	return news.trim();
}


module.exports = {
	translate
}

