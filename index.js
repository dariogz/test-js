const CircleWords = require('./CircleWords');
const args = process.argv.slice(2);

// Run validation
console.log(CircleWords.validate(args));