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
		if (input[i] === '(') {
			counter++;
		}
		else{
			counter--;
		}

		if (counter===-1 && !answerTwo) {
			index = i + 1;
			answerTwo = true;
		}
	}

	// Printing
	console.log('Floor:', counter);
	console.log('Position:', index);
	console.timeEnd('funchallenge');
	// End
})