class CircleWords {

	static validate(words) {
		if (!Array.isArray(words) || words.length <= 1)
			return false;

		// Reference object for results
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

				// If there is no remaining words finish recursion
				if (nextRemainingWords.length === 0) {
					result.isValid = true;
					result.output = nextSequence.join(" ");
					return;
				}

				this.searchNext(nextSequence, nextRemainingWords, result);
			}
		}
	}

}

module.exports = CircleWords;