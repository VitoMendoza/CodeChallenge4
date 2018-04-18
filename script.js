const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
	
	// Time Start
	console.time('funchallenge');

	if (err) {
		console.log('Errooooor!!!');
	}

	// Assignment of Values
	var input = data.toString('utf8');

	// Initializing Values
	var counter = 0;
	var index;
	var answerTwo = false;

	// Calculation
	for (var i = 0; i < input.length; i++) {

		counter = input[i] === '(' ? counter++ : counter--;

		// Conditional only for the part two
		if (counter===-1 && !answerTwo) {
			index = i++;
			answerTwo = true;
		}
	}

	// Printing
	// Part One: Solution
	console.log('Floor:', counter);
	// Part Two: Solution
	console.log('Position:', index);

	console.timeEnd('funchallenge');
	// End
})