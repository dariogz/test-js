class CircleWords {

	static validate(words) {
		if (!Array.isArray(words) || words.length <= 1)
			return;

		// Reference object for 
		let result = {isValid: false, output: false};

		// Get first word and start recursion
		let sequence = words.splice(0,1);
		this.searchNext(sequence, words, result);

		return result.output;
	}

	static searchNext(sequence, remainingWords, result) {
		// Get last letter of last word
		let {[sequence.length - 1] : lastWord} = sequence;
		let lastCharacter = lastWord[lastWord.length - 1];

		// Loop throught remaining words
		for (let i = 0, len = remainingWords.length; i < len; i++) {
			let firstCharacter = remainingWords[i][0];
			if (firstCharacter === lastCharacter) {
				let nextRemainingWords = [...remainingWords];
				let nextSequence = [...sequence,...nextRemainingWords.splice(i,1)];
				this.searchNext(nextSequence, nextRemainingWords, result);
			}
		}

		// !If needed we could validate last character of last word with first character of first world to try closing the circle
		if (remainingWords.length === 0) {
			result.isValid = true;
			result.output = sequence.join(" ");
		}
	}

}

module.exports = CircleWords;