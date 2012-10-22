$(function(){

	// this is a single line comment

	/* 
	 * this is a multi line commnet
	 */

	// VARIABLES
	var first = prompt('What is your first name?');
	var last = prompt('What is your last name?');
	var full = first + " " + last;

	var age = prompt('what is your age?');
	// TURNS STRING INTO INTEGER
	age = parseInt(age);

	console.log('Your full name is ' + full);
	console.log('Your age is ' + (age + 10));

	

	// BOOLEAN EXPRESSIONS - EVALUATES TO TRUE OR FALSE
	if(age < 18)  // NO SEMI-COLON AFTER AN IF STATEMENT 
	{
		console.log('You are a minor.');
	} // IF ITS MORE THAN ONE LINE YOU NEED THE {}
	else // ELSE IS OPTIONAL IF YOU DON'T CARE ABOUT THE FALSE CASE
	{
		console.log('You are an adult');
	}

	if((first == 'zahra') && (last != 'smith'))
		console.log('You are the winner');



	// LOOPING
	for(var i = 0; i <10; i++) //initialization i = 0; boolean; i++ is the increment operator
	{
		console.log('You are on number : ' + i);
	}

	
	var response = prompt('Enter a color or (q)uit?')

	var colors = []; //to collect the colors you're putting in

	while(response != 'q') 
	{
		colors.push(response);
		console.log('you just typed in:' + response); //THIS IS AN INFINITE LOOP, DO NOT RUN THIS!
		response = prompt('Enter a color or (q)uit?'); //you need this so it doesn't go on infinitly
	}

	console.log(colors); //this is output that variable to your browser and lets you see exactly whats inside of it


});