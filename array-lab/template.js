$(function(){

	var animals = []; //DO NOT MAKE ARRAY NAMES SINGULAR
	var colors = [];
	var people = [];

	var response = prompt('Do you want to create an (a)nimal, (c)olor, (p)erson or (q)uit?');

	while(response != 'q') //while occurs many times and its a loop
	{
		var quantity = prompt('How many?');
		quantity = parseInt(quantity)

		if(response == 'c') //if only happens once and its a question
		{
			for(var i=0; i < quantity; i++) // if you know exactly how many times it will loop cuz you tell it
			{
				var answer = prompt('What color?');
				colors.push(answer);
			}
		}
		if(response == 'a') //else if works as well
		{
			for(var i=0; i < quantity; i++)
			{
				var answer = prompt('What animal?');
				animals.push(answer);
			}
		}
		if(response == 'p')
		{
			for(var i=0; i < quantity; i++)
			{
				var answer = prompt('What the name?');
				people.push(answer);
			}
		}

		response = prompt('Do you want to create an (a)nimal, (c)olor, (p)erson or (q)uit?');
	}

	console.log('These are your animals:' + animals)

	var remove = prompt('Do you want to delete something (y)es or (n)o');

	if(remove != 'n')
	{
		options = prompt('Would you like to delete an (a)nimal, (c)olor, or (p)erson or (q)uit?');
		while(options != 'q')
		{
			if(options == 'a')
			{
				var anim = prompt('These are your animals: ' + animals + '. Which one?');
				var fullAnimal = animals.indexOf(anim);
				animals.splice(fullAnimal, 1);
				anim = alert('These are your animals: ' + animals);
			}

			if(options == 'c')
			{
				var col = prompt('These are your colors: ' + colors + '. Which one?');
				var fullColor = colors.indexOf(col);
				colors.splice(fullColor, 1);
				col = alert('These are your animals: ' + colors);
			}

			if(options == 'p')
			{
				var ppl = prompt('These are your people: ' + people + '. Which one?');
				var fullPpl = people.indexOf(ppl);
				people.splice(fullppl, 1);
				ppl = alert('These are your animals: ' + animals);
			}

			options = prompt('Would you like to delete an (a)nimal, (c)olor, or (p)erson or (q)uit?');
		}

	}

	console.log('These are your animals:' + animals)	

});


// animals = []
// colors = []
// people = []



// do you wanna create an (a)nimal, (c)olor, (p)erson or (q)uit?
// 	if c .. how many? -- 3 (it should loop 3 times since you said 3)
// there's a while loop and a for loop
// 	then go into a loop that says enter your color?
// 	and you add that to the colors array
// 	then you ask again... and it gets added to the
// 	array.

// then it loops back to the top again and what do you wanna create?
// animals? -- goes into an array

// THEN
// ask "do you want to delete something?'
// y --> what?(a) (c) (p)

// c --> show all the colors they typed in
// they type in green you remove green and this keeps going... 

// in the first part you put things in and in the second part you pull things out of it

// THEN
// you say here are your arrays -- the last step is showing the outputs
// show all the colors
// show all the animals
// show all the people

