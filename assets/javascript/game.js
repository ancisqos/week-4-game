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
	var guessTotal = 0;

// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
// ======================================================
	// Displays number to guess
	$(".numberDisplay").html(number);

	// Displays current guess total
	$(".guessDisplay").html(
)
	// Click events for Stones
	$(".redStone").click(function() {
		update(red);
		console.log(red);
	});

	$(".blueStone").click(function() {
		update(blue);
		console.log(blue);
	});

	$(".yellowStone").click(function() {
		update(yellow);
		console.log(yellow);
	});

	$(".greenStone").click(function() {
		update(green);
		console.log(green);
	});


// MAIN PROCESS
// ======================================================

// Called when game ends
	function reset() {
		// Generates new number to guess
		number=Math.floor((Math.random() * 102) + 19);
		// Displays new number on the page
		$(".numberDisplay").html(number);
		// New values for the crystals
		var red = Math.floor((Math.random() * 12) + 1);
		var blue = Math.floor((Math.random() * 12) + 1);
		var yellow = Math.floor((Math.random() * 12) + 1);
		var green = Math.floor((Math.random() * 12) + 1);
		// Resets guess total to 0
		guessTotal = 0;
		// Displays guess total
		$(".guessDisplay").html(guessTotal);

	};

// Function updates total guess score
	function update(color) {
		
		guessTotal+=color;

		$(".guessDisplay").empty();
		$(".guessDisplay").append(guessTotal);

		if (guessTotal > number){

			alert("You lost! Thanos got the Infinity Stones and is going to conquer the entire universe all because you failed to do simple math! Great job!")
			losses ++;

			$ (".lossesDisplay").html(losses);

			reset();
		}
		else if (guessTotal == number) {

		alert("You won! You protected the Infinity Stones from Thanos! You should be one of the Avengers!")
		wins++;

		$(".winsDisplay").html(wins);

		reset();
	};

};



