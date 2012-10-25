var alpha_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var number_of_cards = 0;
var final_array = [];
var selected1 = null;
var selected2 = null;


	

$(function(){

	$('input').click(create_board);
	$('#board').on('click', '.box', select_box1);
	// $('#board').on('click', '.box', select_box2);
	// $('#board').on('click', '.select', unselect);


});

function create_board()
{
	var button_clicked = $(this).attr('id');
	$('.box').remove();
	final_array = []; //sets the array back to empty after small medium large
		
		if(button_clicked == 'small')
		{
			number_of_cards = 10;
		} 

		if(button_clicked == 'medium')
		{
			number_of_cards = 20;
		}

		if(button_clicked == 'large')
		{
			number_of_cards = 40;
		}
			for(var i= 0; i < number_of_cards; i++)
			{
			var card = $('<div>');
			card.addClass('box');
			card.attr('id', i);
			$('#board').append(card);
			}

			for(var i = 0;i < (number_of_cards/2); i++)
			{
				final_array.push(alpha_array[i]);
				final_array.push(alpha_array[i]); //you do it twice it gives you ten cards with the first 5 letters
			}
		
			final_array = randomizeArray(final_array);

			for(var i = 0;i < number_of_cards;i++)
			{
				$('#'+ i).text(final_array[i]);
			}
}

function select_box1()
{
	var a;
	var b;

	if (selected1 == null)
	{
		selected1 = $(this);
		$(this).addClass('select');
		a = selected1.attr('id');
	}

	if (selected1 != null)
	{
		selected2 = $(this);
		// $(this).addClass('select');
		b = selected2.attr('id');

		if(final_array[a] == final_array[b])
		{
			selected1.addClass('match');
			selected2.addClass('match');
			selected1.removeClass('select');
		}
	}

		// else
		// {
		// 	$(this).addClass('select');
		// 	selected1.removeClass('select');
		// }
}	

// 	if (selected2 != null)
// 	{
		

// 		else
// 		{
// 			$(this).addClass('select');
// 			a = selected1.attr('id');
// 		}
// 	}
// }

	// selected1 = $(this);
	// var a = selected1.attr('id');
	// // var b = selected2.attr('id');
	
	// if(selected2 != null)
	// {
		
	// 	else
	// 	(select1 != null)
	// 	{
	// 	selected2 = $(this);
	// 	$(this)var b = selected2.attr('id');
		
	// 	}
	// }
// if nothing is selected then you add a class if something is selected
// you have compare their id's, if its a match then add .match to both
// if it doesn;t match remove the first class and add class to second one selected

	// selected1 = $(this).addClass('select');
	
	// else 
	// selected1 = $(this).addClass('select');



	
	
	// if(select1 != null)
	// {
	// selected2 = $(this);
	// $(this)var b = selected2.attr('id');
	
	// }

	

// function unselect()
// {
// 	selected.removeClass('select');
// 	selected = null;	
// }

//Randomize the Cards
function randomizeArray(array){
  var i = array.length;
  if (i == 0) return false;
  while (--i){
     var j = Math.floor(Math.random() * (i + 1));
     var tempi = array[i];
     var tempj = array[j];
     array[i] = tempj;
     array[j] = tempi;
  }
  return array;
}

// create an array and run it through the randomizer 
// then create little boxes on the screen and the boxes will be associated with the letters in the array
// but you cant see them
// when you click on it it shows and if you click on something that matches it. if it doesnt match it goes away and if it matches it stays

// a timer has to start once you start the game.

// compare the text with an if statement and if matches then it 

// rows are id's and colums are classes
// 3 inputs for the small medium and large


// you hover over boxes 

// and when you match the last one it changes the color to show you you've one and it timer stops

// small board - 10 characters
// medium board - 20 characters
// and large board - 40 characters

// the difference is how many letters you have in each board
// the board size differs based on number of letters in the array

// its called memory

// its all logic
// you hover it changes the color and you click and it shows the letter