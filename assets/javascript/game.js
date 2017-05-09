// GLOBAL VARIABLES
// ======================================================
// Arrays and Variables for holding data

	// Variable that holds random number generated between 19-120
	var number = Math.floor((Math.random() * 102) + 19);
	console.log("The random number is " + number);

	// Variable that holds the random values between 1-12 generated for each Stone
	var red = Math.floor((Math.random() * 12) + 1);
		console.log("The value of red stone is " + red);
	var blue = Math.floor((Math.random() * 12) + 1);
		console.log("The value of blue stone is " + blue);
	var yellow = Math.floor((Math.random() * 12) + 1);
		console.log("The value of yellow stone is " + yellow);
	var green = Math.floor((Math.random() * 12) + 1);
		console.log("The value of green stone is " + green);

	// Game counters
	
	var wins = 0;
	var losses = 0;

	//Game Reset
function reset(){
	number = Math.floor((Math.random() * 102) + 19);
}

// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
// ======================================================
	$(".numberDisplay").html(number);


// MAIN PROCESS
// ======================================================

// Initiates code the first time